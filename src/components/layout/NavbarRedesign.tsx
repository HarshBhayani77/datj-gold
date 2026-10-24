import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Heart, User, LogOut, Phone, MapPin, ChevronDown, Sparkles, ShieldCheck } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { useWishlist } from '../../context/WishlistContext';
import { liveBullionRates } from '../../data/catalog';

const navCategories = [
  {
    label: 'RINGS',
    to: '/collection/rings',
    image: '/images/jewelry/ring_elara_front.jpg',
    styles: ['Solitaire Diamond Rings', '22K Gold Bands', 'Eternity Pavé Rings', 'Cocktail Statement Rings', '925 Silver Bands'],
    purities: ['22KT (916 BIS)', '18KT (750 BIS)', '925 Sterling Silver'],
    occasions: ['Engagement', 'Daily Luxury', 'Anniversary', 'Wedding'],
  },
  {
    label: 'NECKLACES',
    to: '/collection/necklaces',
    image: '/images/jewelry/choker_kundan_front.jpg',
    styles: ['Royal Jadau Chokers', 'Natural Emerald Pendants', 'Solid 22K Gold Chains', 'Diamond Solitaire Pendants', 'Basra Pearl Malas'],
    purities: ['22KT Hallmarked Gold', '18KT Diamond Fine Gold', 'Basra Seed Pearls'],
    occasions: ['Bridal Ceremonies', 'Cocktail Evenings', 'Milestone Gifting'],
  },
  {
    label: 'EARRINGS',
    to: '/collection/earrings',
    image: '/images/jewelry/earrings_studs_front.jpg',
    styles: ['Diamond Solitaire Studs', 'Tribal 925 Silver Jhumkas', 'Uncut Polki Drops', 'Classic Gold Hoops', 'Chandelier Ear Hangings'],
    purities: ['18KT White Gold', '22KT Yellow Gold', '925 Oxidised Silver'],
    occasions: ['Everyday Wear', 'Sangeet & Festive', 'Office Sophistication'],
  },
  {
    label: 'BANGLES',
    to: '/collection/bangles',
    image: '/images/jewelry/kada_silver_front.jpg',
    styles: ['Antique Nakashi Kadas', 'Solid 925 Silver Kadas', 'Diamond Tennis Bracelets', 'Bridal Chooda Sets', 'Flexible Gold Bangles'],
    purities: ['22KT Solid Gold', '18KT Diamond Setting', '925 Heavy Silver'],
    occasions: ['Traditional Wedding', 'Daily Stacking', 'Festivals'],
  },
  {
    label: '925 SILVER',
    to: '/collection/silver',
    image: '/images/jewelry/kada_silver_front.jpg',
    styles: ['Hand-Chased Silver Kadas', 'Oxidised Filigree Jhumkas', 'Italian Rhodium Chains', '999 Fine Silver Coins', 'Temple Silver Neckpieces'],
    purities: ['925 Sterling (92.5%)', '999 Pure Silver (99.9%)', 'Anti-Tarnish Rhodium'],
    occasions: ['Pooja & Bullion', 'Artisan Daily Wear', 'Festive Silverware'],
  },
  {
    label: 'BRIDAL',
    to: '/collection/bridal-sets',
    image: 'https://images.unsplash.com/photo-1627293509201-cd0c780043e6?w=500&h=600&fit=crop&auto=format&q=85',
    styles: ['Imperial Kundan Haars', 'Temple Nakashi Ensembles', 'Diamond Bridal Chokers', 'Heritage Mathapattis', 'Bespoke Bridal Sets'],
    purities: ['22KT Royal Gold (916)', 'Certified IGI Diamonds', 'Basra Pearls'],
    occasions: ['The Grand Wedding', 'Reception Ceremony', 'Sangeet Night'],
  },
  {
    label: 'COINS & GIFTS',
    to: '/collection/gifts',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=500&h=600&fit=crop&auto=format&q=85',
    styles: ['999 Fine Silver 50g Bars', '24K Pure Gold Coins', 'Laxmi-Ganesh Medallions', 'Birthstone Fine Pendants', 'Baby Silver Gifts'],
    purities: ['999 Pure Fine Silver', '24KT 999 Pure Gold', 'Assay Certified'],
    occasions: ['Diwali Pooja', 'Wedding Favours', 'Corporate Milestone'],
  },
];

export default function NavbarRedesign() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { cartCount } = useCart();
  const { user, openAuthModal, logout } = useAuth();
  const { wishlistCount } = useWishlist();
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 45);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const transparent = isHome && !scrolled;

  const textColor = transparent ? 'text-white' : 'text-[#0d211a]';
  const logoColor = transparent ? 'text-white' : 'text-[#0c3325]';
  const sublinkColor = transparent ? 'text-white/85 hover:text-white' : 'text-[#3d544b] hover:text-[#144a37]';
  const iconColor = transparent ? 'text-white' : 'text-[#0c3325]';

  const activeCategoryData = navCategories.find((c) => c.label === activeDropdown);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        
        {/* Top Bullion Reference & Concierge Bar */}
        <div className="bg-[#062319] text-[#eef4f1] text-[11px] py-1.5 px-4 border-b border-white/10 tracking-wider">
          <div className="mx-auto max-w-[1500px] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a href="tel:+919876543210" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Phone className="w-3 h-3 text-[#4e8a72]" />
                <span className="font-medium">+91 98765 43210</span>
              </a>
              <span className="hidden md:inline text-white/30">|</span>
              <span className="hidden md:flex items-center gap-1 text-white/70">
                <ShieldCheck className="w-3 h-3 text-[#4e8a72]" />
                100% BIS 916 & 925 Silver Certified
              </span>
            </div>

            {/* Live Bullion Ticker */}
            <div className="flex items-center gap-2 sm:gap-4 text-[10px] sm:text-[11px] overflow-x-auto scrollbar-hide py-0.5">
              <span className="font-semibold text-[#8ebfa8] uppercase tracking-widest hidden lg:inline">Today's Live Bullion:</span>
              <span className="bg-white/10 px-2 py-0.5 rounded text-white font-mono">
                22K Gold: ₹{liveBullionRates.gold22k.toLocaleString('en-IN')}/g
              </span>
              <span className="bg-white/10 px-2 py-0.5 rounded text-white font-mono">
                925 Silver: ₹{liveBullionRates.silver925.toLocaleString('en-IN')}/g
              </span>
              <Link to="/about" className="hidden sm:inline text-[#8ebfa8] hover:text-white underline underline-offset-2">
                Rate Transparency
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-1.5 text-white/80">
              <MapPin className="w-3 h-3 text-[#4e8a72]" />
              <span>Jaipur Atelier & Mumbai Salon</span>
            </div>
          </div>
        </div>

        {/* Main Navbar Bar */}
        <nav
          className={`transition-all duration-300 relative ${
            transparent
              ? 'bg-[#062319]/55 backdrop-blur-md border-b border-white/10 shadow-sm'
              : 'bg-[#f6f9f7]/95 backdrop-blur-md border-b border-[#144a37]/10 shadow-[0_4px_24px_rgba(6,35,25,0.06)]'
          }`}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className="mx-auto max-w-[1500px] px-4 md:px-8 relative">
            <div className="flex items-center justify-between h-18 md:h-20">
              
              {/* Left: Hamburger + Wordmark */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(true)}
                  className={`p-1.5 lg:hidden rounded-lg transition-colors ${textColor}`}
                  aria-label="Open navigation menu"
                >
                  <Menu className="w-6 h-6" />
                </button>
                <Link to="/" className="group flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className={`font-serif text-2xl md:text-3xl font-bold tracking-[0.24em] transition-colors ${logoColor}`}>
                      DATJ
                    </span>
                    <Sparkles className="w-3.5 h-3.5 text-[#246d53] -mt-1 group-hover:rotate-45 transition-transform" />
                  </div>
                  <span className={`text-[9px] tracking-[0.32em] font-medium uppercase -mt-1 ${
                    transparent ? 'text-white/70' : 'text-[#526a61]'
                  }`}>
                    Gold & Silver Atelier
                  </span>
                </Link>
              </div>

              {/* Center: Desktop Nav Categories */}
              <div className="hidden lg:flex items-center gap-5 xl:gap-7 h-full">
                {navCategories.map((category) => (
                  <div
                    key={category.label}
                    className="h-full flex items-center py-2"
                    onMouseEnter={() => setActiveDropdown(category.label)}
                  >
                    <Link
                      to={category.to}
                      className={`flex items-center gap-1 text-[11.5px] font-semibold tracking-[0.18em] transition-colors uppercase whitespace-nowrap py-2 border-b-2 ${
                        activeDropdown === category.label
                          ? 'border-[#144a37] text-[#144a37]'
                          : 'border-transparent ' + sublinkColor
                      }`}
                    >
                      {category.label}
                      <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${
                        activeDropdown === category.label ? 'rotate-180' : ''
                      }`} />
                    </Link>
                  </div>
                ))}

                {/* Direct Links */}
                <Link
                  to="/about"
                  className={`text-[11.5px] font-semibold tracking-[0.18em] transition-colors uppercase whitespace-nowrap ${sublinkColor}`}
                >
                  Heritage
                </Link>
                <Link
                  to="/contact"
                  className={`text-[11.5px] font-semibold tracking-[0.18em] transition-colors uppercase whitespace-nowrap ${sublinkColor}`}
                >
                  Concierge
                </Link>
              </div>

              {/* Right: Actions (Wishlist, Account, Cart) */}
              <div className={`flex items-center gap-4 md:gap-5 ${iconColor}`}>
                
                {/* Wishlist */}
                <Link
                  to="/wishlist"
                  className="relative p-1.5 hover:text-[#144a37] transition-colors"
                  aria-label="View wishlist"
                >
                  <Heart className={`w-5 h-5 ${wishlistCount > 0 ? 'fill-[#144a37] text-[#144a37]' : ''}`} />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-[#144a37] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                      {wishlistCount}
                    </span>
                  )}
                </Link>

                {/* User */}
                {user ? (
                  <div className="flex items-center gap-2">
                    <Link
                      to="/login"
                      className="w-8 h-8 rounded-full bg-[#144a37] text-white flex items-center justify-center font-serif text-sm font-bold shadow-sm"
                      title={user.name}
                    >
                      {user.name.charAt(0).toUpperCase()}
                    </Link>
                    <button
                      type="button"
                      onClick={logout}
                      className="p-1 hover:text-red-600 transition-colors hidden sm:block"
                      title="Sign out"
                      aria-label="Sign out"
                    >
                      <LogOut className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={openAuthModal}
                    className="p-1.5 hover:text-[#144a37] transition-colors flex items-center gap-1.5 text-xs font-semibold tracking-wider"
                    aria-label="Sign in"
                  >
                    <User className="w-5 h-5" />
                    <span className="hidden xl:inline uppercase tracking-widest text-[10px]">Account</span>
                  </button>
                )}

                {/* Bag */}
                <Link
                  to="/cart"
                  className="relative p-1.5 hover:text-[#144a37] transition-colors flex items-center gap-2"
                  aria-label="View shopping bag"
                >
                  <div className="relative">
                    <ShoppingBag className="w-5 h-5" />
                    {cartCount > 0 && (
                      <span className="absolute -top-1 -right-1.5 bg-[#0c3325] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow">
                        {cartCount}
                      </span>
                    )}
                  </div>
                  <span className="hidden md:inline font-semibold text-xs tracking-wider uppercase">
                    Bag
                  </span>
                </Link>

              </div>

            </div>

            {/* Centered Mega Dropdown Panel: Anchored to Container so it NEVER cuts off */}
            {activeCategoryData && (
              <div
                className="absolute top-full left-4 right-4 md:left-8 md:right-8 xl:left-1/2 xl:-translate-x-1/2 xl:w-[940px] max-w-[95vw] bg-white text-[#0d211a] shadow-[0_25px_60px_rgba(6,35,25,0.18)] rounded-2xl border border-[#144a37]/15 p-7 z-50 animate-fade-in-up mt-1"
                onMouseEnter={() => setActiveDropdown(activeCategoryData.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="grid grid-cols-[1.2fr_1fr_1fr_1.2fr] gap-6">
                  
                  {/* Column 1: Featured Styles */}
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.22em] text-[#144a37] uppercase mb-3.5 pb-1 border-b border-[#144a37]/10">
                      Artisan Styles
                    </p>
                    <ul className="space-y-2.5">
                      {activeCategoryData.styles.map((style) => (
                        <li key={style}>
                          <Link
                            to={activeCategoryData.to}
                            onClick={() => setActiveDropdown(null)}
                            className="text-xs text-[#3d544b] hover:text-[#144a37] hover:translate-x-1 transition-all block font-medium"
                          >
                            {style}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 2: Metal & Karat */}
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.22em] text-[#144a37] uppercase mb-3.5 pb-1 border-b border-[#144a37]/10">
                      Karatage & Purity
                    </p>
                    <ul className="space-y-2.5">
                      {activeCategoryData.purities.map((purity) => (
                        <li key={purity}>
                          <Link
                            to={activeCategoryData.to}
                            onClick={() => setActiveDropdown(null)}
                            className="text-xs text-[#3d544b] hover:text-[#144a37] transition-colors block"
                          >
                            {purity}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 3: Occasions */}
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.22em] text-[#144a37] uppercase mb-3.5 pb-1 border-b border-[#144a37]/10">
                      Milestone Occasions
                    </p>
                    <ul className="space-y-2.5">
                      {activeCategoryData.occasions.map((occasion) => (
                        <li key={occasion}>
                          <Link
                            to={activeCategoryData.to}
                            onClick={() => setActiveDropdown(null)}
                            className="text-xs text-[#3d544b] hover:text-[#144a37] transition-colors block"
                          >
                            {occasion}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 4: Curated Visual Card - Crisp Unblended Layout */}
                  <div className="flex flex-col rounded-xl overflow-hidden bg-[#062319] border border-[#144a37]/30 shadow-md">
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0c3325]">
                      <img
                        src={activeCategoryData.image}
                        alt={activeCategoryData.label}
                        className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                      />
                      <span className="absolute top-2.5 left-2.5 text-[9px] tracking-widest uppercase font-bold text-white bg-[#062319]/90 border border-white/20 px-2 py-0.5 rounded-full backdrop-blur-sm">
                        BIS Hallmarked
                      </span>
                    </div>
                    <div className="p-3.5 text-white space-y-2 bg-[#062319]">
                      <p className="font-serif text-sm font-bold text-white">
                        Pure {activeCategoryData.label} Vault
                      </p>
                      <Link
                        to={activeCategoryData.to}
                        onClick={() => setActiveDropdown(null)}
                        className="inline-flex text-[9.5px] font-bold uppercase tracking-widest bg-white text-[#062319] px-3 py-1.5 rounded-full hover:bg-[#eef4f1] transition-colors shadow"
                      >
                        Explore Pieces →
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            )}

          </div>
        </nav>
      </header>

      {/* Mobile Slide-Out Drawer */}
      <div className={`fixed inset-0 z-[70] transition-opacity duration-300 ${
        mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div
          className="absolute inset-0 bg-[#062319]/70 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div className={`relative w-[min(88vw,360px)] h-full bg-[#f6f9f7] text-[#0d211a] flex flex-col shadow-2xl transition-transform duration-300 ease-out ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          
          {/* Drawer Header */}
          <div className="p-5 border-b border-[#144a37]/15 flex items-center justify-between bg-[#062319] text-white">
            <div>
              <p className="font-serif text-2xl font-bold tracking-[0.22em]">DATJ</p>
              <p className="text-[9px] tracking-widest text-[#8ebfa8] uppercase">Gold & Silver Atelier</p>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-white/80 hover:text-white rounded-full border border-white/10"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Bullion Notice */}
          <div className="bg-[#eaf1ed] px-5 py-2.5 text-[10px] flex items-center justify-between text-[#0c3325] border-b border-[#144a37]/10 font-mono">
            <span>22K Gold: ₹{liveBullionRates.gold22k}/g</span>
            <span>925 Silver: ₹{liveBullionRates.silver925}/g</span>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto p-5 space-y-1">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 px-3 rounded-lg text-sm font-semibold tracking-wider uppercase text-[#0d211a] hover:bg-[#eaf1ed]"
            >
              Atelier Home
            </Link>
            
            {navCategories.map((cat) => (
              <Link
                key={cat.label}
                to={cat.to}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3 px-3 rounded-lg text-sm font-semibold tracking-wider uppercase text-[#0d211a] hover:bg-[#eaf1ed]"
              >
                <span>{cat.label}</span>
                <span className="text-[10px] text-[#526a61] font-normal lowercase tracking-normal">explore →</span>
              </Link>
            ))}

            <div className="my-4 border-t border-[#144a37]/10 pt-4 space-y-1">
              <Link
                to="/collection/featured"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-3 rounded-lg text-xs font-semibold tracking-widest uppercase text-[#144a37]"
              >
                All Fine Jewellery
              </Link>
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-3 rounded-lg text-xs font-semibold tracking-widest uppercase text-[#526a61] hover:text-[#0d211a]"
              >
                Our 1984 Heritage & Artisans
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-3 rounded-lg text-xs font-semibold tracking-widest uppercase text-[#526a61] hover:text-[#0d211a]"
              >
                Book Bespoke Consultation
              </Link>
            </div>
          </div>

          {/* Drawer Footer */}
          <div className="p-5 border-t border-[#144a37]/15 bg-white space-y-3">
            {user ? (
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[#0d211a]">{user.name}</p>
                  <p className="text-[10px] text-[#526a61]">{user.email}</p>
                </div>
                <button
                  type="button"
                  onClick={() => { logout(); setMobileMenuOpen(false); }}
                  className="text-xs text-red-600 font-semibold"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => { openAuthModal(); setMobileMenuOpen(false); }}
                className="w-full lux-button justify-center text-xs"
              >
                Sign In / Register
              </button>
            )}
            <p className="text-[10px] text-center text-[#526a61]">
              © 2026 Datj Fine Jewellers. Govt BIS Hallmarked.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
