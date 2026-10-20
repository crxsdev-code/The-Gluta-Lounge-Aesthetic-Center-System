import { Phone, MapPin } from 'lucide-react';
import FacebookIcon from './FacebookIcon';

const FACEBOOK_LINK = 'https://www.facebook.com/theglutaloungeph';

const PHONE_DISPLAY = '0935 205 6384';
const PHONE_HREF = 'tel:09352056384';
const MAPS_LINK =
  'https://www.google.com/maps/search/?api=1&query=The+Gluta+Lounge+%26+Aesthetic+Center+QC+Quezon+City';
const ADDRESS =
  'Unit 202 Vicars 1 Building, 31 Visayas Ave, corner Road 1, Vasra, Quezon City, Metro Manila';

export default function AppointmentCTA() {
  return (
    <section id="contact" className="border-y border-champagne/60 bg-white py-16 lg:py-24 xl:py-28">
      <div className="container-lux">
        <div className="mx-auto max-w-[46rem] text-center">
          <span className="eyebrow justify-center">Contact Us</span>
          <h2 className="heading-xl mt-4 text-charcoal">
            Your Beauty Journey <span className="italic">Starts Here</span>
          </h2>
          <div className="rule-gold mx-auto mt-6" aria-hidden="true" />
          <p className="lead mx-auto mt-6 max-w-[34rem]">
            Contact our clinic to ask about available services and appointment
            arrangements. Our team will be happy to assist you directly by
            phone.
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a href={PHONE_HREF} className="btn btn-primary">
              <Phone size={15} strokeWidth={1.75} aria-hidden="true" />
              Call the Clinic
            </a>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <MapPin size={15} strokeWidth={1.75} aria-hidden="true" />
              Get Directions
            </a>
            <a
              href={FACEBOOK_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <FacebookIcon size={15} />
              Follow Us on Facebook
            </a>
          </div>

          {/* Contact details */}
          <div className="mx-auto mt-12 grid max-w-[38rem] gap-8 border-t border-champagne/70 pt-8 sm:grid-cols-2">
            <div className="text-center sm:text-right">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
                Call Us
              </p>
              <a
                href={PHONE_HREF}
                className="mt-2 block font-heading text-[26px] font-semibold text-charcoal transition-colors hover:text-gold"
              >
                {PHONE_DISPLAY}
              </a>
            </div>
            <div className="text-center sm:border-l sm:border-champagne/70 sm:pl-8 sm:text-left">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
                Visit Us
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-charcoal/80">
                {ADDRESS}
              </p>
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-[30rem] text-[12px] leading-relaxed text-muted/85">
            This website does not process bookings online — please call the
            clinic directly to arrange your visit.
          </p>
        </div>
      </div>
    </section>
  );
}