import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, User, LogOut, Phone, MapPin, Heart, ChevronDown } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { useWishlist } from '../../context/WishlistContext';

const navLinks = [
  {
    label: 'RINGS',
    to: '/collection/rings',
    image: 'https://images.unsplash.com/photo-1605100804763-ebea4663b632?w=300&h=340&fit=crop',
    styles: ['Solitaire Rings', 'Engagement Rings', 'Eternity Bands', 'Cocktail Rings', 'Wedding Bands'],
    occasions: ['Anniversary', 'Engagement', 'Wedding', 'Daily Wear', 'Festive'],
  },
  {
    label: 'NECKLACES',
    to: '/collection/necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=340&fit=crop',
    styles: ['Gold Chains', 'Diamond Pendants', 'Pearl Necklaces', 'Chokers', 'Layered Sets'],
    occasions: ['Wedding', 'Festive', 'Daily Wear', 'Office Wear', 'Party'],
  },
  {
    label: 'EARRINGS',
    to: '/collection/earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=340&fit=crop',
    styles: ['Stud Earrings', 'Jhumkas', 'Drop Earrings', 'Chandelier', 'Hoops'],
    occasions: ['Daily Wear', 'Wedding', 'Festive', 'Office Wear', 'Party'],
  },
  {
    label: 'BANGLES',
    to: '/collection/bangles',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=340&fit=crop',
    styles: ['Gold Bangles', 'Diamond Cut', 'Kadas', 'Bangle Sets', 'Rose Gold'],
    occasions: ['Wedding', 'Festive', 'Daily Wear', 'Anniversary', 'Birthday'],
  },
  {
    label: 'BRIDAL',
    to: '/collection/bridal-sets',
    image: 'https://images.unsplash.com/photo-1515562141207-5daf3b67b37d?w=300&h=340&fit=crop',
    styles: ['Bridal Sets', 'Kundan Sets', 'Polki Sets', 'Meenakari', 'Diamond Bridal'],
    occasions: ['Wedding', 'Engagement', 'Reception', 'Sangeet', 'Mehendi'],
  },
  {
    label: 'GIFTS',
    to: '/collection/gifts',
    image: 'https://images.unsplash.com/photo-1587999482114-19d0e1bc4e6f?w=300&h=340&fit=crop',
    styles: ['Gift Sets', 'Premium Boxes', 'Pendants', 'Deluxe Collections', 'Couple Sets'],
    occasions: ['Anniversary', 'Birthday', 'Wedding', 'Festive', 'Corporate'],
  },
];

const priceRanges = ['Under ₹25,000', '₹25k – ₹50k', '₹50k – ₹1L', '₹1L – ₹2L', 'Above ₹2L'];

export default function Navbar() {
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
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when route changes
  useEffect(() => { setActiveDropdown(null); }, [location.pathname]);

  const transparent = isHome && !scrolled;

  const textColor = transparent ? 'text-white' : 'text-[#333333]';
  const logoColor = transparent ? 'text-white hover:text-white/80' : 'text-[#333333] hover:text-[#C5B396]';
  const iconColor = transparent ? 'text-white' : 'text-[#333333]';
  const iconHover = transparent ? 'hover:text-white/70' : 'hover:text-[#C5B396]';

  return (
    <>
      <div className="fixed top-0 w-full z-50">

        {/* Announcement Bar — always solid */}
        <div className="bg-[#C5B396] text-black text-xs py-2 px-4">
          <div className="container mx-auto flex items-center justify-between">
            <a href="tel:+917861886462" className="flex items-center gap-1.5 font-medium hover:opacity-70 transition-opacity">
              <Phone className="w-3 h-3" />
              (+91) 78618 86462
            </a>
            <p className="hidden sm:block font-medium tracking-wide text-center">
              ✦ New Arrivals – Handcrafted Luxury Jewellery &nbsp;
              <Link to="/collection/featured" className="underline font-bold hover:opacity-70">Shop Now</Link>
            </p>
            <div className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3 h-3" />
              <span className="hidden sm:inline">Datj Jewellers</span>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav className={`transition-all duration-300 border-b ${transparent ? 'bg-transparent border-white/10' : 'bg-white border-gray-100 shadow-sm'}`}>
          <div className="w-full px-4 md:px-6 xl:px-10">
            <div className="grid grid-cols-[auto_1fr_auto] lg:grid-cols-[200px_1fr_200px] items-center h-16 md:h-[72px]">

              {/* Left: Mobile Hamburger + Logo */}
              <div className="flex items-center gap-3">
                <button onClick={() => setMobileMenuOpen(true)} className="p-1 lg:hidden">
                  <Menu className={`w-6 h-6 ${textColor}`} />
                </button>
                <Link
                  to="/"
                  className={`text-[23px] font-serif font-bold tracking-[0.2em] transition-colors duration-300 ${logoColor}`}
                >
                  DATJ
                </Link>
              </div>

              {/* Center: Desktop Nav Links */}
              <div className="hidden lg:flex items-center justify-center gap-4 xl:gap-6 h-full">
                {navLinks.map((link) => (
                  <div
                    key={link.label}
                    className="relative h-full flex items-center"
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      to={link.to}
                      className={`flex items-center gap-0.5 text-[13px] font-semibold tracking-wider transition-colors duration-300 ${textColor} hover:text-[#C5B396] whitespace-nowrap`}
                    >
                      {link.label}
                      <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                    </Link>

                    {/* Mega Dropdown */}
                    {activeDropdown === link.label && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[680px] bg-white shadow-2xl border border-gray-100 rounded-b-xl z-50 overflow-hidden animate-fade-in-up">
                        <div className="grid grid-cols-[1fr_1fr_1fr_auto] gap-0">
                          {/* Shop by Style */}
                          <div className="p-6 border-r border-gray-100">
                            <h4 className="text-[11px] tracking-[0.25em] font-bold text-[#C5B396] uppercase mb-3 pb-2 border-b border-gray-100">SHOP BY STYLE</h4>
                            <ul className="space-y-2.5">
                              {link.styles.map((s) => (
                                <li key={s}>
                                  <Link to={link.to} className="text-[15px] text-[#575757] hover:text-[#C5B396] transition-colors font-light">{s}</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          {/* Shop For (Price) */}
                          <div className="p-6 border-r border-gray-100">
                            <h4 className="text-[11px] tracking-[0.25em] font-bold text-[#C5B396] uppercase mb-3 pb-2 border-b border-gray-100">SHOP FOR</h4>
                            <ul className="space-y-2.5">
                              {priceRanges.map((p) => (
                                <li key={p}>
                                  <Link to={link.to} className="text-[15px] text-[#575757] hover:text-[#C5B396] transition-colors font-light">{p}</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          {/* Shop by Occasion */}
                          <div className="p-6 border-r border-gray-100">
                            <h4 className="text-[12px] tracking-[0.25em] font-bold text-[#C5B396] uppercase mb-3 pb-2 border-b border-gray-100">SHOP BY OCCASION</h4>
                            <ul className="space-y-2.5">
                              {link.occasions.map((o) => (
                                <li key={o}>
                                  <Link to={link.to} className="text-[15px] text-[#575757] hover:text-[#C5B396] transition-colors font-light">{o}</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          {/* Featured Image */}
                          <div className="w-[180px] relative overflow-hidden">
                            <img src={link.image} alt={link.label} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/20 flex items-end p-3">
                              <Link to={link.to} className="text-white text-xs font-bold tracking-widest uppercase bg-[#C5B396]/80 px-3 py-1.5 hover:bg-[#C5B396] transition-colors">
                                View All
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                <Link to="/collection/featured" className={`text-[14px] font-semibold tracking-wider transition-colors duration-300 ${textColor} hover:text-[#C5B396] whitespace-nowrap`}>
                  MORE COLLECTION
                </Link>

                <Link to="/about" className={`text-[14px] font-semibold tracking-wider transition-colors duration-300 ${textColor} hover:text-[#C5B396] whitespace-nowrap`}>
                  OUR STORY
                </Link>

                <Link to="/contact" className={`text-[14px] font-semibold tracking-wider transition-colors duration-300 ${textColor} hover:text-[#C5B396] whitespace-nowrap`}>
                  CONTACT
                </Link>
              </div>

              {/* Right: Icons */}
              <div className={`flex items-center justify-end gap-5 ${iconColor}`}>
                <Link to="/wishlist" className={`relative hidden lg:flex items-center transition-colors ${iconHover}`}>
                  <Heart className={`w-5 h-5 ${wishlistCount > 0 ? 'fill-red-400 text-red-400' : ''}`} />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 bg-red-400 text-white text-[9px] w-[14px] h-[14px] rounded-full flex items-center justify-center font-bold leading-none">
                      {wishlistCount}
                    </span>
                  )}
                </Link>

                {user ? (
                  <div className="hidden lg:flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-serif text-sm font-bold cursor-default ${transparent ? 'bg-white text-[#C5B396]' : 'bg-[#C5B396] text-white'}`} title={user.name}>
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <button onClick={logout} className="hover:text-red-400 transition-colors" title="Logout">
                      <LogOut className="w-[18px] h-[18px]" />
                    </button>
                  </div>
                ) : (
                  <button onClick={openAuthModal} className={`hidden lg:flex items-center transition-colors ${iconHover}`}>
                    <User className="w-5 h-5" />
                  </button>
                )}

                <Link to="/cart" className={`relative flex items-center transition-colors ${iconHover}`}>
                  <ShoppingBag className="w-5 h-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 bg-[#C5B396] text-white text-[9px] w-[14px] h-[14px] rounded-full flex items-center justify-center font-bold leading-none">
                      {cartCount}
                    </span>
                  )}
                </Link>

                {/* Mobile wishlist icon */}
                <Link to="/wishlist" className={`relative lg:hidden flex items-center transition-colors ${iconHover}`}>
                  <Heart className={`w-5 h-5 ${wishlistCount > 0 ? 'fill-red-400 text-red-400' : ''}`} />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 bg-red-400 text-white text-[9px] w-[14px] h-[14px] rounded-full flex items-center justify-center font-bold leading-none">
                      {wishlistCount}
                    </span>
                  )}
                </Link>
              </div>

            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-[60] transform transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="absolute inset-0 bg-black/40" onClick={() => setMobileMenuOpen(false)} />
        <div className="relative w-72 h-full bg-white flex flex-col shadow-2xl">
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            <span className="font-serif text-xl tracking-widest text-[#333333]">DATJ</span>
            <button onClick={() => setMobileMenuOpen(false)}>
              <X className="w-6 h-6 text-[#333333]" />
            </button>
          </div>

          <div className="flex flex-col py-4 overflow-y-auto flex-1">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="px-6 py-3.5 text-sm font-semibold tracking-widest text-[#333333] hover:bg-[#F9F6F1] hover:text-[#C5B396] transition-colors border-b border-gray-50">HOME</Link>
            {navLinks.map((link) => (
              <Link key={link.label} to={link.to} onClick={() => setMobileMenuOpen(false)} className="px-6 py-3.5 text-sm font-semibold tracking-widest text-[#333333] hover:bg-[#F9F6F1] hover:text-[#C5B396] transition-colors border-b border-gray-50">
                {link.label}
              </Link>
            ))}
            <Link to="/collection/featured" onClick={() => setMobileMenuOpen(false)} className="px-6 py-3.5 text-sm font-semibold tracking-widest text-[#333333] hover:bg-[#F9F6F1] hover:text-[#C5B396] transition-colors border-b border-gray-50">ALL JEWELLERY</Link>
            <Link to="/collection/featured" onClick={() => setMobileMenuOpen(false)} className="px-6 py-3.5 text-sm font-semibold tracking-widest text-[#333333] hover:bg-[#F9F6F1] hover:text-[#C5B396] transition-colors border-b border-gray-50">MORE COLLECTION</Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="px-6 py-3.5 text-sm font-semibold tracking-widest text-[#333333] hover:bg-[#F9F6F1] hover:text-[#C5B396] transition-colors border-b border-gray-50">OUR STORY</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="px-6 py-3.5 text-sm font-semibold tracking-widest text-[#333333] hover:bg-[#F9F6F1] hover:text-[#C5B396] transition-colors border-b border-gray-50">CONTACT</Link>
          </div>

          <div className="px-6 py-5 border-t border-gray-100 space-y-3">
            {user ? (
              <button onClick={logout} className="flex items-center gap-3 text-sm text-red-500 font-medium">
                <LogOut className="w-4 h-4" /> Logout
              </button>
            ) : (
              <button onClick={() => { openAuthModal(); setMobileMenuOpen(false); }} className="flex items-center gap-3 text-sm font-semibold tracking-widest text-[#333333]">
                <User className="w-4 h-4 text-[#C5B396]" /> LOGIN / REGISTER
              </button>
            )}
            <p className="text-xs text-gray-400">© 2026 Datj Jewellery</p>
          </div>
        </div>
      </div>
    </>
  );
}