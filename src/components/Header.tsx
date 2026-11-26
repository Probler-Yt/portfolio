import { useEffect, useState } from 'react';
import { person, primaryCv } from '../content';
import { cvEvent, track } from '../analytics';
import { DownloadIcon } from './Icons';

const nav = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#cvs', label: 'CVs' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="wrap site-header__inner">
        <a className="site-header__name" href="#top">
          {person.name}
        </a>
        <nav className="site-header__nav" aria-label="Sections">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="btn btn--primary btn--small" href={primaryCv} download onClick={() => track(cvEvent(primaryCv), 'CV download: main button (header)')}>
          <DownloadIcon size={16} />
          <span>Download CV</span>
        </a>
      </div>
    </header>
  );
}
