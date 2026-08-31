import React from 'react';

interface LogoProps {
  variant?: 'full' | 'compact' | 'light';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'full', size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'h-9',
    md: 'h-12',
    lg: 'h-16',
  };

  const textColor = variant === 'light' ? 'text-white' : 'text-[#5C3A21]';
  const scriptColor = variant === 'light' ? 'text-stone-200' : 'text-[#8C5D3B]';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Brand Sacred Emblem Icon */}
      <div className="relative flex items-center justify-center shrink-0">
        <svg
          viewBox="0 0 100 100"
          className={`${sizeClasses[size]} aspect-square overflow-visible`}
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Outer Halo Arch */}
          <ellipse
            cx="50"
            cy="46"
            rx="32"
            ry="38"
            stroke={variant === 'light' ? '#E8DCD0' : '#C47B62'}
            strokeWidth="1.2"
            strokeDasharray="2 2"
            opacity="0.8"
          />

          {/* Cross on top of halo */}
          <path
            d="M50 4 V16 M44 10 H56"
            stroke={variant === 'light' ? '#FFFFFF' : '#5C3A21'}
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Our Lady Praying Line Art */}
          {/* Veil Outline */}
          <path
            d="M32 50 C32 28, 68 28, 68 50 C68 66, 62 76, 62 76 H38 C38 76, 32 66, 32 50 Z"
            stroke={variant === 'light' ? '#FFFFFF' : '#5C3A21'}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Inner Face & Sleeping Eyes */}
          <path
            d="M40 44 C42 40, 58 40, 60 44"
            stroke={variant === 'light' ? '#FFFFFF' : '#5C3A21'}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Eyes (Closed in prayer) */}
          <path d="M42 47 C44 49, 46 49, 47 47" stroke={variant === 'light' ? '#FFFFFF' : '#5C3A21'} strokeWidth="1.2" />
          <path d="M53 47 C54 49, 56 49, 58 47" stroke={variant === 'light' ? '#FFFFFF' : '#5C3A21'} strokeWidth="1.2" />

          {/* Praying Hands */}
          <path
            d="M47 56 L50 51 L53 56 Z"
            stroke={variant === 'light' ? '#FFFFFF' : '#5C3A21'}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill={variant === 'light' ? '#FFFFFF' : '#5C3A21'}
            fillOpacity="0.15"
          />

          {/* Rosary hanging from hands */}
          <path
            d="M50 56 Q50 64 50 68"
            stroke={variant === 'light' ? '#E8DCD0' : '#8B9467'}
            strokeWidth="1.5"
            strokeDasharray="1.5 1.5"
          />
          <circle cx="50" cy="72" r="2.5" stroke={variant === 'light' ? '#FFFFFF' : '#C47B62'} strokeWidth="1.2" fill="currentColor" />
          {/* Small Cross at end of rosary */}
          <path
            d="M50 75 V83 M46 78 H54"
            stroke={variant === 'light' ? '#FFFFFF' : '#5C3A21'}
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* Side Olive Branches (Left) */}
          <path
            d="M26 62 Q20 50 28 38"
            stroke={variant === 'light' ? '#D9A08B' : '#7A8460'}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="21" cy="56" r="2" fill={variant === 'light' ? '#D9A08B' : '#7A8460'} />
          <circle cx="24" cy="46" r="2" fill={variant === 'light' ? '#D9A08B' : '#7A8460'} />
          <circle cx="28" cy="40" r="2" fill={variant === 'light' ? '#D9A08B' : '#7A8460'} />

          {/* Side Olive Branches (Right) */}
          <path
            d="M74 62 Q80 50 72 38"
            stroke={variant === 'light' ? '#D9A08B' : '#7A8460'}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="79" cy="56" r="2" fill={variant === 'light' ? '#D9A08B' : '#7A8460'} />
          <circle cx="76" cy="46" r="2" fill={variant === 'light' ? '#D9A08B' : '#7A8460'} />
          <circle cx="72" cy="40" r="2" fill={variant === 'light' ? '#D9A08B' : '#7A8460'} />
        </svg>
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
