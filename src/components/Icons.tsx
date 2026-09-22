type IconProps = { size?: number };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  'aria-hidden': true,
  focusable: false,
});

export function DownloadIcon({ size = 18 }: IconProps) {
  return (
    <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4v11" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 20h14" />
    </svg>
  );
}

export function MailIcon({ size = 18 }: IconProps) {
  return (
    <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function LinkedInIcon({ size = 18 }: IconProps) {
  return (
    <svg {...base(size)} fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.8v1.5h.06c.53-1 1.83-1.75 3.64-1.75 3.9 0 4.5 2.4 4.5 5.5v5.75h-4v-5.1c0-1.3-.03-2.9-1.9-2.9-1.9 0-2.2 1.35-2.2 2.8v5.2h-3.9v-11Z" />
    </svg>
  );
}

export function GitHubIcon({ size = 18 }: IconProps) {
  return (
    <svg {...base(size)} fill="currentColor">
      <path d="M12 2.25a9.75 9.75 0 0 0-3.08 19c.49.09.67-.21.67-.47v-1.66c-2.72.59-3.29-1.31-3.29-1.31-.44-1.13-1.08-1.43-1.08-1.43-.89-.61.07-.6.07-.6.98.07 1.5 1.01 1.5 1.01.87 1.5 2.29 1.07 2.85.82.09-.63.34-1.07.62-1.31-2.17-.25-4.46-1.09-4.46-4.83 0-1.07.38-1.94 1.01-2.62-.1-.25-.44-1.24.1-2.59 0 0 .82-.26 2.68 1a9.3 9.3 0 0 1 4.88 0c1.86-1.26 2.68-1 2.68-1 .54 1.35.2 2.34.1 2.59.63.68 1.01 1.55 1.01 2.62 0 3.75-2.29 4.58-4.47 4.82.35.3.66.9.66 1.81v2.69c0 .26.18.57.68.47A9.75 9.75 0 0 0 12 2.25Z" />
    </svg>
  );
}

// First-angle projection symbol (ISO 128 / BS 8888), the mark in the corner of a UK engineering drawing.
export function ProjectionSymbol({ size = 40 }: IconProps) {
  return (
    <svg width={size} height={size * 0.6} viewBox="0 0 40 24" aria-hidden focusable={false} fill="none" stroke="currentColor" strokeWidth={1.4}>
      <path d="M3 8 L17 4 L17 20 L3 16 Z" />
      <circle cx="29" cy="12" r="8" />
      <circle cx="29" cy="12" r="4" />
      <path d="M1 12h18M20 12h18M29 2v20" strokeWidth={0.6} strokeDasharray="3 1.5 0.8 1.5" />
    </svg>
  );
}
