import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';
import logoBadge from '../assets/logo-badge.jpg';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const PHONE_HREF = 'tel:09352056384';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isMobileMenuOpen]);

  const handleNav = (e: React.MouseEvent<HTMLElement>, href: string) => {
    setIsMobileMenuOpen(false);
    scrollToSection(e, href);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_24px_-8px_rgba(33,29,26,0.18)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container-lux">
        <div className="flex h-[72px] items-center justify-between lg:h-[84px]">
          <a
            href="#home"
            onClick={(e) => handleNav(e, '#home')}
            className="flex shrink-0 items-center gap-2.5 lg:gap-3"
            aria-label="The Gluta Lounge & Aesthetic Center – QC, back to home"
          >
            <img
              src={logoBadge}
              alt=""
              aria-hidden="true"
              width={40}
              height={40}
              className="h-10 w-10 rounded-[6px] shadow-sm lg:h-12 lg:w-12"
            />
            <span className="flex flex-col leading-none">
              <span className="font-heading text-[18px] font-semibold tracking-[0.01em] text-charcoal sm:text-[21px] lg:text-[26px]">
                The Gluta Lounge
              </span>
              <span className="mt-[3px] font-body text-[8px] font-semibold uppercase tracking-[0.24em] text-muted sm:text-[9px] lg:text-[10px]">
                Aesthetic Center · QC
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex xl:gap-9" aria-label="Primary">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative py-1 font-body text-[12px] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:after:scale-x-100 xl:text-[13px] ${
                    isActive
                      ? 'text-charcoal after:scale-x-100'
                      : 'text-charcoal/65 hover:text-charcoal'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a href="#contact" onClick={(e) => handleNav(e, '#contact')} className="btn btn-primary ml-1">
              Book an Appointment
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="-mr-2 flex h-11 w-11 items-center justify-center rounded-full text-charcoal transition-colors hover:text-gold lg:hidden"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        id="mobile-menu"
        aria-hidden={!isMobileMenuOpen}
        className={`fixed inset-x-0 bottom-0 top-[72px] z-40 bg-ivory transition-[opacity,transform] duration-500 ease-out lg:hidden ${
          isMobileMenuOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-3 opacity-0'
        }`}
      >
        <nav
          className="container-lux flex h-full flex-col gap-1 overflow-y-auto py-8"
          aria-label="Mobile"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                aria-current={isActive ? 'page' : undefined}
                className={`border-b border-champagne/50 py-4 font-heading text-[26px] font-medium transition-colors duration-300 ${
                  isActive ? 'text-gold' : 'text-charcoal hover:text-gold'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a href="#contact" onClick={(e) => handleNav(e, '#contact')} className="btn btn-primary mt-7 w-full">
            Book an Appointment
          </a>
          <a
            href={PHONE_HREF}
            className="mt-4 flex min-h-[48px] items-center justify-center gap-2 font-body text-[13px] font-semibold uppercase tracking-[0.14em] text-charcoal/70"
          >
            <Phone size={15} /> 0935 205 6384
          </a>
        </nav>
      </div>
    </header>
  );
}