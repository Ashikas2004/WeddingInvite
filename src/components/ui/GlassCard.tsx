import { GlassCardProps } from '@/types/wedding';

/**
 * GlassCard — glassmorphism card wrapper.
 * Uses the .glass-card / .glass-card-strong CSS classes defined in globals.css
 * so the frosted-glass effect is always visible regardless of background.
 */
export function GlassCard({
  children,
  className = '',
  variant = 'default',
  padding = 'default',
}: GlassCardProps) {
  const variantClass =
    variant === 'strong'
      ? 'glass-card-strong'
      : variant === 'subtle'
        ? 'bg-white/30 backdrop-blur-sm border border-white/40 rounded-2xl'
        : 'glass-card';

  const paddingClass =
    padding === 'none'
      ? ''
      : padding === 'sm'
        ? 'p-4'
        : padding === 'lg'
          ? 'p-8'
          : 'p-6'; // default

  return (
    <div className={`${variantClass} ${paddingClass} ${className}`}>
      {children}
    </div>
  );
}
