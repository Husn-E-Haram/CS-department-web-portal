import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  inverted?: boolean;
}

export const CSDepartmentLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  inverted = false,
}) => {
  const sizeMap = {
    sm: { box: 36, fontTitle: 'text-sm', fontSub: 'text-[10px]' },
    md: { box: 46, fontTitle: 'text-base', fontSub: 'text-xs' },
    lg: { box: 60, fontTitle: 'text-xl', fontSub: 'text-xs' },
  };

  const dim = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Original Computer Science Academic Emblem */}
      <div 
        className="relative flex items-center justify-center shrink-0 transition-transform duration-200 hover:scale-[1.02]"
        style={{ width: dim.box, height: dim.box }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-xs"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Academic Shield / Crest Outline */}
          <path
            d="M50 4 C 74 4, 88 16, 88 40 C 88 68, 62 88, 50 96 C 38 88, 12 68, 12 40 C 12 16, 26 4, 50 4 Z"
            fill={inverted ? '#FFFDF8' : '#EDE2D1'}
            stroke={inverted ? '#B5A18A' : '#8A6748'}
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Inner Decorative Contour */}
          <path
            d="M50 10 C 70 10, 82 20, 82 40 C 82 64, 60 81, 50 88 C 40 81, 18 64, 18 40 C 18 20, 30 10, 50 10 Z"
            fill={inverted ? '#F8F4EC' : '#FFFDF8'}
            stroke={inverted ? '#8A6748' : '#B5A18A'}
            strokeWidth="1.5"
            strokeDasharray="2 1.5"
          />

          {/* Minimalist Computer Monitor & Stand */}
          <rect
            x="29"
            y="26"
            width="42"
            height="28"
            rx="3"
            fill="#332D27"
            stroke="#8A6748"
            strokeWidth="1.5"
          />
          {/* Inner Screen Surface */}
          <rect
            x="32"
            y="29"
            width="36"
            height="22"
            rx="1.5"
            fill="#FFFDF8"
          />
          {/* Monitor Base */}
          <path
            d="M45 54 L55 54 L58 60 L42 60 Z"
            fill="#8A6748"
          />
          <line
            x1="39"
            y1="60"
            x2="61"
            y2="60"
            stroke="#332D27"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* Coding Syntax </> inside the display */}
          <text
            x="50"
            y="44"
            fill="#8A6748"
            fontSize="12"
            fontFamily="monospace"
            fontWeight="bold"
            textAnchor="middle"
            dominantBaseline="central"
          >
            &lt;/&gt;
          </text>

          {/* Subtle Circuit Board Nodes and Traces below monitor */}
          <path
            d="M32 68 H42 L46 72 H54 L58 68 H68"
            stroke="#8A6748"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="32" cy="68" r="2" fill="#85836A" />
          <circle cx="50" cy="72" r="2.2" fill="#8A6748" />
          <circle cx="68" cy="68" r="2" fill="#85836A" />

          {/* Little binary motif at the top header of shield */}
          <text
            x="50"
            y="20"
            fill="#85836A"
            fontSize="7"
            fontFamily="monospace"
            letterSpacing="2"
            textAnchor="middle"
          >
            0101
          </text>
        </svg>
      </div>

      {/* Department & University Typography */}
      {showText && (
        <div className="flex flex-col leading-tight">
          <span
            className={`font-serif font-bold tracking-tight ${dim.fontTitle} ${
              inverted ? 'text-[#FFFDF8]' : 'text-[#332D27]'
            }`}
          >
            Department of Computer Science
          </span>
          <span
            className={`tracking-wide font-medium ${dim.fontSub} ${
              inverted ? 'text-[#EDE2D1]' : 'text-[#8A6748]'
            }`}
          >
            Government College Women University Sialkot
          </span>
        </div>
      )}
    </div>
  );
};
