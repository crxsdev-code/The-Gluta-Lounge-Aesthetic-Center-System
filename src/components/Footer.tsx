import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';
import logoFull from '../assets/logo-full.png';
import FacebookIcon from './FacebookIcon';

const FACEBOOK_LINK = 'https://www.facebook.com/theglutaloungeph';
const EMAIL = 'theglutaloungeph@gmail.com';
const EMAIL_HREF = 'mailto:theglutaloungeph@gmail.com';

const GOOGLE_MAPS_LINK =
  'https://www.google.com/maps/search/?api=1&query=The+Gluta+Lounge+%26+Aesthetic+Center+QC+Quezon+City';
const PHONE_DISPLAY = '0935 205 6384';
const PHONE_HREF = 'tel:09352056384';
const ADDRESS =
  'Unit 202 Vicars 1 Building, 31 Visayas Ave, corner Road 1, Vasra, Quezon City, Metro Manila';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container-lux pb-8 pt-14 lg:pt-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, '#home')}
              className="inline-block"
              aria-label="The Gluta Lounge & Aesthetic Center – QC, back to home"
            >
              <img
                src={logoFull}
                alt="The Gluta Lounge & Aesthetic Center – QC"
                width={640}
                height={640}
                loading="lazy"
                className="h-28 w-auto sm:h-36"
              />
            </a>
            <p className="mt-4 max-w-[24rem] text-[14px] leading-relaxed text-white/60">
              A beauty and wellness destination in Quezon City offering
              personalized aesthetic treatments in a comfortable, welcoming
              environment built around your goals.
            </p>
            {/* <a
              href={FACEBOOK_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="The Gluta Lounge & Aesthetic Center on Facebook"
              className="mt-5 inline-flex items-center justify-center transition-opacity hover:opacity-75"
            >
              <FacebookIcon size={32} />
            </a> */}
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-[14px] text-white/60 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
              Contact
            </h3>
            <ul className="mt-5 space-y-5">
              <li className="flex items-start gap-3">
                <Phone size={16} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.14em] text-white/40">Phone</p>
                  <a href={PHONE_HREF} className="mt-0.5 block text-[15px] text-white/80 transition-colors hover:text-gold">
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.14em] text-white/40">Email</p>
                  <a
                    href={EMAIL_HREF}
                    className="mt-0.5 block break-words text-[15px] text-white/80 transition-colors hover:text-gold"
                  >
                    {EMAIL}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.14em] text-white/40">Address</p>
                  <p className="mt-0.5 max-w-[20rem] break-words text-[14px] leading-relaxed text-white/70">
                    {ADDRESS}
                  </p>
                  <a
                    href={GOOGLE_MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-gold transition-colors hover:text-white"
                  >
                    Get Directions
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-center text-[12px] text-white/45 sm:text-left">
            © {YEAR} The Gluta Lounge &amp; Aesthetic Center – QC. All rights reserved.
          </p>
          <p className="text-center text-[12px] text-white/45 sm:text-right">
            Quezon City, Metro Manila · {PHONE_DISPLAY}
          </p>
        </div>
      </div>
    </footer>
  );
}