'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { ExtendedWeddingData } from '@/data/wedding';
import { AnimationWrapper } from '@/components/animations/AnimationWrapper';
import { fadeUpVariants, staggerContainerVariants } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface GallerySectionProps {
  data: ExtendedWeddingData;
}

/**
 * GallerySection component with image grid and lightbox
 */
export function GallerySection({ data }: GallerySectionProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedAlt, setSelectedAlt] = useState<string>('');
  const { prefersReduced } = useReducedMotion();

  const handleImageClick = (src: string, alt: string) => {
    setSelectedImage(src);
    setSelectedAlt(alt);
  };

  const handleClose = () => {
    setSelectedImage(null);
    setSelectedAlt('');
  };

  return (
    <section id="gallery" className="section-spacing bg-ivory/30">
      <div className="container mx-auto px-4">
        <AnimationWrapper variants={fadeUpVariants} className="text-center mb-12">
          <h2 className="font-script text-4xl md:text-5xl text-lavender mb-4">
            Our Gallery
          </h2>
          <p className="font-body text-base md:text-lg text-lavender/70">
            Moments captured, memories cherished
          </p>
        </AnimationWrapper>

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {data.gallery.map((image, index) => (
            <motion.div
              key={image.src}
              variants={fadeUpVariants}
              custom={index}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-glass hover:shadow-xl transition-shadow duration-300"
              onClick={() => handleImageClick(image.src, image.alt)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lavender/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="font-body text-sm text-white">{image.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReduced ? 0 : 0.3 }}
            className="fixed inset-0 z-[90] bg-black/90 flex items-center justify-center p-4"
            onClick={handleClose}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-white hover:text-blush transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded-full p-2"
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: prefersReduced ? 0 : 0.3 }}
              className="relative max-w-5xl max-h-[90vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
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
