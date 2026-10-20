type FacebookIconProps = {
  /** Rendered pixel size of the square icon. Defaults to 20. */
  size?: number;
  className?: string;
};

/**
 * Facebook brand mark (white "f" on the #1877F2 circle).
 *
 * lucide-react ships no brand icons, so this is a hand-rolled SVG that keeps
 * the same API shape as a lucide icon (size + className, aria-hidden).
 */
export default function FacebookIcon({ size = 20, className }: FacebookIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="256" cy="256" r="256" fill="#1877F2" />
      <g transform="translate(163 118) scale(0.586)">
        <path
          fill="#FFFFFF"
          d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
        />
      </g>
    </svg>
  );
}
