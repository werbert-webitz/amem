import React from 'react';
import logoIcon from '../assets/images/icone.png';

interface LogoProps {
  variant?: 'full' | 'compact' | 'light';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'full', size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'h-9 w-9',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
  };

  const textColor = variant === 'light' ? 'text-white' : 'text-[#5C3A21]';
  const scriptColor = variant === 'light' ? 'text-stone-200' : 'text-[#8C5D3B]';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Brand Sacred Emblem Icon */}
      <div className="relative flex items-center justify-center shrink-0">
        <img
          src={logoIcon}
          alt="Amém Ícone"
          className={`${sizeClasses[size]} object-contain ${variant === 'light' ? 'brightness-0 invert' : ''}`}
        />
      </div>

      {/* Brand Name Typography */}
      {variant !== 'compact' && (
        <div className="flex flex-col justify-center leading-none">
          <span className={`font-serif-sacred font-bold tracking-tight ${textColor} text-2xl sm:text-3xl`}>
            amém
          </span>
          <span className={`font-script ${scriptColor} text-sm sm:text-base -mt-1 tracking-wider italic font-medium`}>
            fé que se faz à mão
          </span>
        </div>
      )}
    </div>
  );
};