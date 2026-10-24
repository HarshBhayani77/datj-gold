import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';

export default function HeaderHero() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="relative w-full h-screen min-h-[600px] flex flex-col bg-[#F9F7F2] overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/98 shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="lg:hidden" onClick={() => setMobileMenuOpen(true)}>
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-secondary' : 'text-white'}`} />
            </button>
            <a href="#" className={`text-2xl font-serif font-bold tracking-widest ${isScrolled ? 'text-secondary' : 'text-white'}`}>
              DATJ
            </a>
          </div>

          <div className={`hidden lg:flex items-center gap-8 font-sans text-sm tracking-wide font-medium ${isScrolled ? 'text-secondary' : 'text-white'}`}>
            <a href="#collections" className="hover:text-primary transition-colors">CATEGORY</a>
            <a href="#featured" className="hover:text-primary transition-colors">COLLECTION</a>
            <a href="#story" className="hover:text-primary transition-colors">OUR STORY</a>
            <a href="#contact" className="hover:text-primary transition-colors">VISIT US</a>
          </div>

          <div className={`flex items-center gap-6 ${isScrolled ? 'text-secondary' : 'text-white'}`}>
            <Search className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
            <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white/98 flex flex-col items-center justify-center lg:hidden transition-all duration-300">
           <button className="absolute top-6 left-4 p-2" onClick={() => setMobileMenuOpen(false)}>
              <X className="w-8 h-8 text-secondary" />
           </button>
           <div className="flex flex-col items-center gap-8 font-serif text-3xl text-secondary-dark">
            <a href="#collections" className="hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>Category</a>
            <a href="#featured" className="hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>Collection</a>
            <a href="#story" className="hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>Our Story</a>
            <a href="#contact" className="hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>Visit Us</a>
           </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center relative flex-col py-12 md:py-20">
        {/* Background Grid - 4 Columns */}
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-4 h-full w-full pointer-events-none">
            {/* Column 1 */}
            <div className="relative h-full w-full overflow-hidden">
               <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" className="w-full h-full object-cover opacity-80" />
               <div className="absolute inset-0 bg-black/20" />
            </div>
            {/* Column 2 */}
            <div className="relative h-full w-full overflow-hidden hidden md:block">
               <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" className="w-full h-full object-cover opacity-80" />
               <div className="absolute inset-0 bg-black/20" />
            </div>
            {/* Column 3 */}
            <div className="relative h-full w-full overflow-hidden hidden md:block">
               <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80" className="w-full h-full object-cover opacity-80" />
               <div className="absolute inset-0 bg-black/20" />
            </div>
            {/* Column 4 */}
            <div className="relative h-full w-full overflow-hidden hidden md:block">
               <img src="https://images.unsplash.com/photo-1515562141207-5daf3b67b37d?w=800&q=80" className="w-full h-full object-cover opacity-80" />
               <div className="absolute inset-0 bg-black/20" />
            </div>
        </div>
        
        {/* Top - Premium Jewelry */}
        <span className="absolute top-1/4 left-1/2 -translate-x-1/2 text-xs md:text-sm font-sans tracking-[0.3em] text-white uppercase font-bold drop-shadow-md z-10 animate-fade-in-up">
          Premium Jewelry
        </span>

        {/* Middle - Brand New Arrival */}
        <h1 className="container mx-auto px-4 text-center z-10 font-serif text-5xl md:text-7xl lg:text-9xl text-white leading-none drop-shadow-2xl mix-blend-overlay opacity-90 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          Brand <span className="italic font-light">New</span> Arrival
        </h1>
        
        {/* Bottom - Shop Now Button */}
        <a href="#collections" className="absolute bottom-12 md:bottom-20 left-1/2 -translate-x-1/2 bg-primary text-secondary px-10 py-3 min-w-[180px] hover:bg-white hover:text-secondary transition-colors duration-300 uppercase text-xs tracking-[0.2em] font-bold text-center z-10 animate-fade-in-up delay-200">
          Shop Now
        </a>
      </div>
    </header>
  );
}
