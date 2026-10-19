import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, MapPin, ArrowUpRight } from 'lucide-react';
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
const PHONE_DISPLAY = '0935 205 6384';
const ADDRESS =
  'Unit 202 Vicars 1 Building, 31 Visayas Ave, corner Road 1, Vasra, Quezon City, Metro Manila';
const GOOGLE_MAPS_LINK =
  'https://www.google.com/maps/search/?api=1&query=The+Gluta+Lounge+%26+Aesthetic+Center+QC+Quezon+City';

/** Stagger delay (ms) for the i-th drawer row when opening. 0 when closing. */
const stagger = (open: boolean, i: number) => ({
  transitionDelay: open ? `${170 + i * 55}ms` : '0ms',
});

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const closeBtnRef = useRef<HTMLButtonElement>(null);

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
    closeBtnRef.current?.focus();
    return () => window.removeEventListener('keydown', onKey);
  }, [isMobileMenuOpen]);

  const handleNav = (e: React.MouseEvent<HTMLElement>, href: string) => {
    setIsMobileMenuOpen(false);
    scrollToSection(e, href);
  };

  return (
    <>
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
      </header>

      {/* Mobile drawer — sibling of <header> so the header's backdrop-filter
          cannot create a containing block for this fixed panel (that bug
          collapsed the old menu to 0px height). */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        aria-hidden={!isMobileMenuOpen}
        className={`fixed inset-0 z-[90] overflow-hidden transition-[visibility] duration-[450ms] lg:hidden ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Scrim */}
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className={`absolute inset-0 bg-charcoal/60 backdrop-blur-sm transition-opacity duration-[450ms] ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
        />

        {/* Panel */}
        <aside
          className={`absolute right-0 top-0 flex h-full w-[88%] max-w-[26rem] flex-col border-l border-gold/40 bg-ivory shadow-[-24px_0_60px_-30px_rgba(33,29,26,0.6)] transition-transform duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Panel header */}
          <div className="flex shrink-0 items-center justify-between border-b border-champagne/60 px-6 py-4">
            <a
              href="#home"
              onClick={(e) => handleNav(e, '#home')}
              className="flex shrink-0 items-center gap-2.5"
              aria-label="The Gluta Lounge & Aesthetic Center – QC, back to home"
            >
              <img
                src={logoBadge}
                alt=""
                aria-hidden="true"
                width={36}
                height={36}
                className="h-9 w-9 rounded-[6px] shadow-sm"
              />
              <span className="flex flex-col leading-none">
                <span className="font-heading text-[17px] font-semibold text-charcoal">
                  The Gluta Lounge
                </span>
                <span className="mt-[3px] font-body text-[7.5px] font-semibold uppercase tracking-[0.24em] text-muted">
                  Aesthetic Center · QC
                </span>
              </span>
            </a>
            <button
              ref={closeBtnRef}
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
              className="-mr-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-charcoal transition-colors hover:text-gold"
            >
              <X size={22} />
            </button>
          </div>

          {/* Scrollable body */}
          <nav
            className="container-lux flex flex-1 flex-col overflow-y-auto py-5"
            aria-label="Mobile"
          >
            {navLinks.map((link, i) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  aria-current={isActive ? 'page' : undefined}
                  style={stagger(isMobileMenuOpen, i)}
                  className={`group flex min-h-[52px] items-center gap-3 border-b border-champagne/50 font-heading text-[27px] font-medium leading-tight transition-[opacity,transform,color] duration-500 ${
                    isActive ? 'text-gold' : 'text-charcoal hover:text-gold'
                  } ${
                    isMobileMenuOpen
                      ? 'translate-x-0 opacity-100'
                      : 'translate-x-4 opacity-0'
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`h-px shrink-0 bg-gold transition-all duration-500 ${
                      isActive ? 'w-7 opacity-100' : 'w-0 opacity-0'
                    }`}
                  />
                  {link.label}
                </a>
              );
            })}

            <div style={stagger(isMobileMenuOpen, navLinks.length)}>
              <a
                href="#contact"
                onClick={(e) => handleNav(e, '#contact')}
                className={`btn btn-primary mt-7 w-full transition-[opacity,transform] duration-500 ${
                  isMobileMenuOpen
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-4 opacity-0'
                }`}
              >
                Book an Appointment
              </a>
            </div>

            <div
              style={stagger(isMobileMenuOpen, navLinks.length + 1)}
              className={`mt-6 space-y-4 border-t border-champagne/60 pt-5 transition-[opacity,transform] duration-500 ${
                isMobileMenuOpen
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-4 opacity-0'
              }`}
            >
              <a
                href={PHONE_HREF}
                className="flex min-h-[48px] items-center gap-3 font-body text-[15px] font-semibold text-charcoal transition-colors hover:text-gold"
              >
                <Phone size={16} strokeWidth={1.5} className="shrink-0 text-gold" aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={16} strokeWidth={1.5} className="mt-1 shrink-0 text-gold" aria-hidden="true" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.14em] text-muted">Address</p>
                  <p className="mt-1 max-w-[20rem] break-words text-[13px] leading-relaxed text-charcoal/70">
                    {ADDRESS}
                  </p>
                  <a
                    href={GOOGLE_MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-gold transition-colors hover:text-charcoal"
                  >
                    Get Directions
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </aside>
      </div>
    </>
  );
}