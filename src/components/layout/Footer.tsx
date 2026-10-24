import { Instagram, Facebook, Twitter, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Newsletter Section - Spacious Top */}
      <div className="pt-24 pb-20 border-b border-white/5 mx-auto max-w-[90%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
          {/* Left - Large Heading */}
          <div>
            <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl text-white mb-8 leading-[0.9]">
              Crafting <br/>
              <span className="italic font-light text-[#C5B396]">Eternity.</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-md font-light tracking-wide">
              Be the first to know about our exclusive jewelry launches, private viewing events, and artisanal stories from our master craftsmen.
            </p>
          </div>
          
          {/* Right - Newsletter Form */}
          <div className="lg:pl-12 lg:pb-4">
            <h3 className="text-[#C5B396] text-xs tracking-[0.3em] uppercase font-bold mb-8">JOIN OUR VALUED CIRCLE</h3>
            <div className="flex flex-col gap-4">
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white placeholder-white/40 focus:outline-none focus:border-[#C5B396] transition-colors font-serif" 
                />
                <button className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/50 group-focus-within:text-[#C5B396] hover:text-white transition-colors">
                  <ArrowRight className="w-6 h-6 transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links - Middle Section */}
      <div className="py-24 mx-auto max-w-[90%] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-4 lg:col-span-3 space-y-8">
            <h3 className="font-serif text-3xl tracking-widest text-[#C5B396]">DATJ</h3>
            <div className="space-y-4 text-white/50 text-sm font-light leading-loose">
              <p>The Grand Atelier,<br/>Heritage District,<br/>Mumbai, India - 400001</p>
              <p className="pt-4 hover:text-[#C5B396] transition-colors cursor-pointer">+91 (22) 4567 8900</p>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-8 lg:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-12">
            
            {/* Shop */}
            <div className="space-y-8">
              <h4 className="text-xs tracking-[0.25em] uppercase font-bold text-white/40">COLLECTIONS</h4>
              <ul className="space-y-5 text-white/70 font-light tracking-wide">
                <li><Link to="/collection/bridal" className="hover:text-[#C5B396] hover:translate-x-1 inline-block transition-all duration-300">Royal Bridal</Link></li>
                <li><Link to="/collection/contemporary" className="hover:text-[#C5B396] hover:translate-x-1 inline-block transition-all duration-300">Bespoke Gold</Link></li>
                <li><Link to="/collection/diamonds" className="hover:text-[#C5B396] hover:translate-x-1 inline-block transition-all duration-300">Solitaire Diamonds</Link></li>
                <li><Link to="/collection/gemstones" className="hover:text-[#C5B396] hover:translate-x-1 inline-block transition-all duration-300">Precious Gems</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-8">
              <h4 className="text-xs tracking-[0.25em] uppercase font-bold text-white/40">ATELIER</h4>
              <ul className="space-y-5 text-white/70 font-light tracking-wide">
                <li><Link to="/our-legacy" className="hover:text-[#C5B396] hover:translate-x-1 inline-block transition-all duration-300">Our Legacy</Link></li>
                <li><Link to="/craftsmanship" className="hover:text-[#C5B396] hover:translate-x-1 inline-block transition-all duration-300">Craftsmanship</Link></li>
                <li><Link to="/boutiques" className="hover:text-[#C5B396] hover:translate-x-1 inline-block transition-all duration-300">Find a Boutique</Link></li>
                <li><Link to="/careers" className="hover:text-[#C5B396] hover:translate-x-1 inline-block transition-all duration-300">Careers</Link></li>
              </ul>
            </div>

            {/* Social */}
            <div className="space-y-8">
              <h4 className="text-xs tracking-[0.25em] uppercase font-bold text-white/40">CONNECT</h4>
              <ul className="space-y-5 text-white/70 font-light tracking-wide">
                <li>
                  <a href="#" className="group flex items-center gap-3 hover:text-[#C5B396] transition-colors">
                    <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#C5B396] transition-colors">
                        <Instagram className="w-3.5 h-3.5" />
                    </span>
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-center gap-3 hover:text-[#C5B396] transition-colors">
                    <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#C5B396] transition-colors">
                        <Facebook className="w-3.5 h-3.5" />
                    </span>
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-center gap-3 hover:text-[#C5B396] transition-colors">
                    <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#C5B396] transition-colors">
                        <Twitter className="w-3.5 h-3.5" />
                    </span>
                    Twitter
                  </a>
                </li>
                 <li>
                  <a href="#" className="group flex items-center gap-3 hover:text-[#C5B396] transition-colors">
                    <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#C5B396] transition-colors">
                        <Mail className="w-3.5 h-3.5" />
                    </span>
                    Concierge
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Massive Background Text Effect */}
      <div className="w-full flex justify-center items-end overflow-hidden select-none pointer-events-none opacity-[0.15] absolute bottom-[-3vw] left-0 right-0">
         <h1 className="text-[15vw] leading-none font-serif tracking-[0.2em] text-white whitespace-nowrap">
            DATJ
         </h1>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-white/10 py-8 relative z-10 bg-transparent mx-auto max-w-[90%]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] md:text-xs text-white/30 font-medium tracking-[0.2em] uppercase">
          <p>&copy; 2026 DATJ JEWELLERY. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white/60 transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-white/60 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
