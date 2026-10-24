import { ArrowUpRight, Instagram, Mail, MapPin, Phone, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const collectionLinks = [
  ['22K & 18K Rings', '/collection/rings'],
  ['Kundan & Gold Necklaces', '/collection/necklaces'],
  ['Solitaire & Diamond Earrings', '/collection/earrings'],
  ['Nakashi & Temple Bangles', '/collection/bangles'],
  ['925 Sterling Silver Atelier', '/collection/silver'],
  ['The Royal Bridal Edit', '/collection/bridal-sets'],
  ['999 Pure Silver & Gold Coins', '/collection/gifts'],
];

const clientLinks = [
  ['Atelier Heritage (Since 1984)', '/about'],
  ['Book Private Atelier Viewing', '/contact'],
  ['Client Wishlist', '/wishlist'],
  ['Client Account & Orders', '/login'],
  ['BIS 916 & HUID Verification', '/about'],
];

export default function FooterRedesign() {
  return (
    <footer className="overflow-hidden bg-[#062319] text-white border-t border-white/10">
      
      {/* Newsletter / Circle Banner */}
      <div className="border-b border-white/10 px-5 py-16 md:px-10 lg:py-20">
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-[#8ebfa8]" />
              <p className="text-[10.5px] font-bold uppercase tracking-[0.28em] text-[#8ebfa8]">
                The Datj Patron Circle
              </p>
            </div>
            <h2 className="max-w-3xl font-serif text-4xl sm:text-5xl md:text-6xl leading-[.95]">
              Real precious heirlooms,
              <span className="block italic text-[#8ebfa8] font-normal">delivered with certified pride.</span>
            </h2>
          </div>

          <div className="lg:pl-12">
            <p className="mb-6 max-w-md text-sm leading-relaxed text-white/75 font-light">
              Receive private bullion rate intelligence, new 22K gold & 925 sterling silver launches, and private salon viewing invitations.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for joining the Datj Circle.'); }} className="flex border-b border-white/25 pb-3">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                required
                placeholder="Enter your email address"
                className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/40"
              />
              <button
                type="submit"
                aria-label="Join the Datj Circle"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/30 transition hover:border-[#8ebfa8] hover:text-[#8ebfa8]"
              >
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Links Columns */}
      <div className="px-5 py-16 md:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_.8fr_.8fr_1.1fr]">
          
          {/* Brand Story Column */}
          <div className="space-y-5">
            <Link to="/" className="group inline-flex flex-col">
              <span className="font-serif text-3xl font-bold tracking-[0.24em] text-white group-hover:text-[#8ebfa8] transition-colors">
                DATJ
              </span>
              <span className="text-[9px] tracking-[0.32em] uppercase text-[#8ebfa8] font-medium">
                Gold & Silver Atelier · Est. 1984
              </span>
            </Link>
            
            <p className="max-w-sm text-xs leading-6 text-white/70 font-light">
              Master craftsmen in certified 22KT gold, natural certified diamonds, and solid 925 sterling silver. Every creation stamped with govt. approved BIS laser HUID and backed by our 100% lifetime buyback assurance.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/20 transition hover:border-[#8ebfa8] hover:text-[#8ebfa8]"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="mailto:harshbhayani77@gmail.com"
                aria-label="Email Datj"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/20 transition hover:border-[#8ebfa8] hover:text-[#8ebfa8]"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="tel:+917861886462"
                aria-label="Phone"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/20 transition hover:border-[#8ebfa8] hover:text-[#8ebfa8]"
              >
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Collections Column */}
          <div>
            <h3 className="mb-5 text-[11px] font-bold uppercase tracking-[0.24em] text-[#8ebfa8]">
              Precious Vaults
            </h3>
            <ul className="space-y-3 text-xs text-white/75">
              {collectionLinks.map(([label, to]) => (
                <li key={label}>
                  <Link to={to} className="transition hover:text-white hover:underline underline-offset-4">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Client Concierge Column */}
          <div>
            <h3 className="mb-5 text-[11px] font-bold uppercase tracking-[0.24em] text-[#8ebfa8]">
              Client Services
            </h3>
            <ul className="space-y-3 text-xs text-white/75">
              {clientLinks.map(([label, to]) => (
                <li key={label}>
                  <Link to={to} className="transition hover:text-white hover:underline underline-offset-4">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ateliers & Help Column */}
          <div>
            <h3 className="mb-5 text-[11px] font-bold uppercase tracking-[0.24em] text-[#8ebfa8]">
              Atelier Inquiries
            </h3>
            <div className="space-y-4 text-xs leading-relaxed text-white/75">
              <a href="tel:+917861886462" className="flex items-start gap-2.5 transition hover:text-white">
                <Phone className="mt-0.5 h-4 w-4 text-[#8ebfa8] shrink-0" />
                <span>+91 78618 86462 (Direct Desk & WhatsApp)</span>
              </a>
              <a href="mailto:harshbhayani77@gmail.com" className="flex items-start gap-2.5 transition hover:text-white">
                <Mail className="mt-0.5 h-4 w-4 text-[#8ebfa8] shrink-0" />
                <span>harshbhayani77@gmail.com</span>
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 text-[#8ebfa8] shrink-0" />
                <span>Datj Heritage Atelier, Ghod Dod Road, Surat, Gujarat 395007</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 text-[#8ebfa8] shrink-0" />
                <span>Surat Diamond Bourse (SDB) Salon, DREAM City, Surat 395007</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Legal & Regulatory Bottom Bar */}
      <div className="border-t border-white/10 px-5 py-6 text-[10.5px] uppercase tracking-[0.16em] text-white/50 md:px-10">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Datj Fine Jewellers & Silversmiths Private Limited.</p>
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1 text-[#8ebfa8]">
              <ShieldCheck className="w-3.5 h-3.5" /> BIS 916 Stamped
            </span>
            <span>925 Silver Assayed</span>
            <span>Natural Certified Diamonds</span>
            <span>100% Insured Transit</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
