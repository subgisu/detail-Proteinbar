import { motion } from 'motion/react';
import type { ReactNode } from 'react';

export function FadeIn({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function ProteinBarIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <g transform="rotate(-15 12 12)">
        <rect x="1" y="7" width="22" height="10" rx="1" />
        <path d="M5 7v10" />
        <path d="M19 7v10" />
        <text
          x="12"
          y="13.5"
          fontSize="3.5"
          fontWeight="bold"
          textAnchor="middle"
          fill="currentColor"
          stroke="none"
          style={{ fontFamily: 'sans-serif', letterSpacing: '0.5px' }}
        >
          PROTEIN
        </text>
      </g>
    </svg>
  );
}
