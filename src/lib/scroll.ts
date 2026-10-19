/**
 * Smooth-scrolls to a section by hash and keeps the URL hash in sync.
 * Shared by Navbar, Hero, About, Footer, and the promotional banner.
 */
export function scrollToSection(e: React.MouseEvent<HTMLElement>, href: string) {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    target.scrollIntoView({
      behavior: prefersReduced ? 'auto' : 'smooth',
      block: 'start',
    });
    window.history.replaceState(null, '', href);
  }
}