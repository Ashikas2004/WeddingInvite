'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { NavLink } from '@/types/wedding';
import { useScrollY } from '@/hooks/useScrollY';

interface NavBarProps {
  links: NavLink[];
}

export function NavBar({ links }: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const scrollY = useScrollY();

  const scrolled = scrollY > 60;

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(255, 250, 242, 0.95)'
          : 'rgba(255, 250, 242, 0.7)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid rgba(216, 200, 242, 0.4)' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(155, 127, 166, 0.12)' : 'none',
      }}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <span
          className="text-2xl md:text-3xl select-none"
          style={{ fontFamily: 'var(--font-script)', color: '#9b7fa6' }}
        >
          A &amp; J
        </span>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#f6d37a] rounded px-1 py-0.5"
              style={{
                fontFamily: 'var(--font-body)',
                color: '#9b7fa6',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#7c4f7c')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#9b7fa6')}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f6d37a]"
          style={{ color: '#9b7fa6' }}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              background: 'rgba(255, 250, 242, 0.98)',
              borderTop: '1px solid rgba(216, 200, 242, 0.4)',
            }}
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left py-3 px-2 text-base rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#f6d37a]"
                  style={{ fontFamily: 'var(--font-body)', color: '#9b7fa6' }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(216, 200, 242, 0.2)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
