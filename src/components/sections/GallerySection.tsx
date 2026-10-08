'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { ExtendedWeddingData } from '@/data/wedding';
import { AnimationWrapper } from '@/components/animations/AnimationWrapper';
import { fadeUpVariants } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface GallerySectionProps {
  data: ExtendedWeddingData;
}

interface ScratchGesture {
  pointerId: number;
  startX: number;
  startY: number;
  lastX: number;
  lastY: number;
  startScrollLeft: number;
  mode: 'undecided' | 'scratch' | 'scroll';
}

interface ScratchCardProps {
  src: string;
  alt: string;
  category: string;
  railRef: React.RefObject<HTMLDivElement | null>;
  onOpen: () => void;
}

function ScratchCard({ src, alt, category, railRef, onOpen }: ScratchCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gestureRef = useRef<ScratchGesture | null>(null);
  const suppressClickUntilRef = useRef(0);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d', { willReadFrequently: true });
    if (!canvas || !context) return;

    const paintCover = () => {
      const bounds = canvas.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return;

      const pixelRatio = window.devicePixelRatio || 1;
      canvas.width = Math.round(bounds.width * pixelRatio);
      canvas.height = Math.round(bounds.height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const cover = context.createLinearGradient(0, 0, bounds.width, bounds.height);
      cover.addColorStop(0, '#dce8d6');
      cover.addColorStop(0.55, '#b8cfb1');
      cover.addColorStop(1, '#e8d5c8');
      context.fillStyle = cover;
      context.fillRect(0, 0, bounds.width, bounds.height);

      context.fillStyle = 'rgba(255, 255, 255, 0.22)';
      for (let i = 0; i < 650; i += 1) {
        const x = (i * 73.17) % bounds.width;
        const y = (i * 37.91) % bounds.height;
        context.fillRect(x, y, 1.2, 1.2);
      }

      context.strokeStyle = 'rgba(255, 255, 255, 0.7)';
      context.lineWidth = 1;
      context.strokeRect(14, 14, bounds.width - 28, bounds.height - 28);
      context.textAlign = 'center';
      context.fillStyle = '#365d43';
      context.font = '600 12px system-ui, sans-serif';
      context.fillText('SCRATCH TO REVEAL', bounds.width / 2, bounds.height / 2 - 10);
      context.font = '24px system-ui, sans-serif';
      context.fillText('♡', bounds.width / 2, bounds.height / 2 + 28);
      canvas.style.opacity = '1';
    };

    paintCover();
    const observer = new ResizeObserver(paintCover);
    observer.observe(canvas);
    return () => observer.disconnect();
  }, []);

  const scratchAt = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d', { willReadFrequently: true });
    const gesture = gestureRef.current;
    if (!canvas || !context || !gesture) return;

    const bounds = canvas.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    context.globalCompositeOperation = 'destination-out';
    context.lineWidth = 42;
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.beginPath();
    context.moveTo(gesture.lastX - bounds.left, gesture.lastY - bounds.top);
    context.lineTo(x, y);
    context.stroke();
    gesture.lastX = event.clientX;
    gesture.lastY = event.clientY;

    if (Math.random() < 0.12) {
      const pixels = context.getImageData(
        0,
        0,
        canvas.width,
        canvas.height,
      ).data;
      let transparent = 0;
      for (let i = 3; i < pixels.length; i += 4) {
        if (pixels[i] === 0) transparent += 1;
      }
      if (transparent / (pixels.length / 4) >= 0.42) {
        setRevealed(true);
      }
    }
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLCanvasElement>) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    gestureRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      lastX: event.clientX,
      lastY: event.clientY,
      startScrollLeft: railRef.current?.scrollLeft ?? 0,
      mode: event.pointerType === 'touch' ? 'undecided' : 'scratch',
    };
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const gesture = gestureRef.current;
    if (!gesture || gesture.pointerId !== event.pointerId) return;

    if (gesture.mode === 'undecided') {
      const deltaX = event.clientX - gesture.startX;
      const deltaY = event.clientY - gesture.startY;
      if (Math.hypot(deltaX, deltaY) < 8) return;
      gesture.mode =
        Math.abs(deltaX) > Math.abs(deltaY) * 1.15 ? 'scroll' : 'scratch';
    }

    if (gesture.mode === 'scroll') {
      const deltaX = event.clientX - gesture.startX;
      if (railRef.current) {
        railRef.current.scrollLeft = gesture.startScrollLeft - deltaX;
      }
      gesture.lastX = event.clientX;
      gesture.lastY = event.clientY;
      return;
    }

    scratchAt(event);
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const gesture = gestureRef.current;
    if (!gesture || gesture.pointerId !== event.pointerId) return;

    if (
      Math.hypot(event.clientX - gesture.startX, event.clientY - gesture.startY) >
      8
    ) {
      suppressClickUntilRef.current = performance.now() + 500;
    }
    gestureRef.current = null;
  };

  const handleCoverClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    event.stopPropagation();
    if (performance.now() < suppressClickUntilRef.current) return;
    setRevealed(true);
  };

  return (
    <motion.div
      variants={fadeUpVariants}
      className="group relative aspect-[4/5] w-[min(78vw,20rem)] shrink-0 snap-center overflow-hidden rounded-3xl bg-sage shadow-glass"
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 78vw, 320px"
      />

      {!revealed ? (
        <canvas
          ref={canvasRef}
          role="button"
          tabIndex={0}
          aria-label={`Scratch or tap to reveal: ${alt}`}
          className="absolute inset-0 z-10 h-full w-full cursor-crosshair touch-none transition-opacity duration-300"
          style={{ opacity: 0 }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onClick={handleCoverClick}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              setRevealed(true);
            }
          }}
        />
      ) : (
        <>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest/75 via-transparent to-transparent" />
          <p className="pointer-events-none absolute bottom-5 left-5 z-10 font-body text-sm font-medium text-white">
            {category}
          </p>
          <button
            type="button"
            className="absolute inset-0 z-20 cursor-zoom-in focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-gold"
            onClick={onOpen}
            aria-label={`Open photo: ${alt}`}
          />
        </>
      )}
    </motion.div>
  );
}

export function GallerySection({ data }: GallerySectionProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedAlt, setSelectedAlt] = useState('');
  const railRef = useRef<HTMLDivElement>(null);
  const { prefersReduced } = useReducedMotion();

  const scrollRail = (direction: -1 | 1) => {
    railRef.current?.scrollBy({
      left: direction * (railRef.current.clientWidth * 0.8),
      behavior: prefersReduced ? 'instant' : 'smooth',
    });
  };

  const openImage = (src: string, alt: string) => {
    setSelectedImage(src);
    setSelectedAlt(alt);
  };

  const closeImage = () => {
    setSelectedImage(null);
    setSelectedAlt('');
  };

  return (
    <section id="gallery" className="section-spacing bg-ivory/30">
      <div className="container mx-auto px-4">
        <AnimationWrapper variants={fadeUpVariants} className="text-center mb-8">
          <h2 className="font-script text-4xl md:text-5xl text-plum mb-4">
            Our Gallery
          </h2>
          <p className="font-body text-base md:text-lg text-mauve">
            Swipe to browse · Scratch a card to reveal
          </p>
        </AnimationWrapper>

        <div className="mb-4 flex justify-end gap-2">
          <button
            type="button"
            onClick={() => scrollRail(-1)}
            className="rounded-full border border-sage bg-white/80 p-2 text-forest transition-colors hover:bg-sage focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
            aria-label="Scroll gallery left"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => scrollRail(1)}
            className="rounded-full border border-sage bg-white/80 p-2 text-forest transition-colors hover:bg-sage focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
            aria-label="Scroll gallery right"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <motion.div
          ref={railRef}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="gallery-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pb-6"
          aria-label="Wedding photo gallery"
        >
          {data.gallery.map((image) => (
            <ScratchCard
              key={image.src}
              src={image.src}
              alt={image.alt}
              category={image.category}
              railRef={railRef}
              onOpen={() => openImage(image.src, image.alt)}
            />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReduced ? 0 : 0.3 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/90 p-4"
            onClick={closeImage}
          >
            <button
              onClick={closeImage}
              className="absolute right-4 top-4 rounded-full p-2 text-white hover:text-blush focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: prefersReduced ? 0 : 0.3 }}
              className="relative h-full max-h-[90vh] w-full max-w-5xl"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt={selectedAlt}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
