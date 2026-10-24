import { Link } from 'react-router-dom';
import { ArrowRight, Star, RefreshCcw, ShieldCheck, Gem, Truck } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import ProductCard from '../components/ui/ProductCard';

type Product = { id: number; name: string; price: string; category: string; image: string; sale?: boolean };

const featuredProducts: Product[] = [
  { id: 1, name: "Royal Kundan Set", price: "₹1,45,000", category: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop" },
  { id: 2, name: "Diamond Solitaire Ring", price: "₹85,000", category: "Rings", image: "https://images.unsplash.com/photo-1515562141207-5daf3b67b37d?w=500&h=500&fit=crop" },
  { id: 3, name: "Antique Gold Bangles", price: "₹1,20,000", category: "Bangles", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop" },
  { id: 4, name: "Pearl Drop Earrings", price: "₹25,000", category: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop" },
  { id: 5, name: "Emerald Pendant Necklace", price: "₹65,000", category: "Necklaces", image: "https://images.unsplash.com/photo-1602752250058-96ccda079f77?w=500&h=500&fit=crop", sale: true },
  { id: 6, name: "Bridal Choker Set", price: "₹2,20,000", category: "Necklaces", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop" },
  { id: 7, name: "Gold Hoop Earrings", price: "₹18,000", category: "Earrings", image: "https://images.unsplash.com/photo-1605100804763-ebea4663b632?w=500&h=500&fit=crop" },
  { id: 8, name: "Tennis Bracelet", price: "₹1,80,000", category: "Bangles", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500&h=500&fit=crop", sale: true },
];

const topSellersProducts: Product[] = [
  { id: 11, name: "Solitaire Diamond Ring", price: "₹95,000", category: "Rings", image: "https://images.unsplash.com/photo-1515562141207-5daf3b67b37d?w=500&h=500&fit=crop" },
  { id: 12, name: "Layered Gold Necklace", price: "₹55,000", category: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop", sale: true },
  { id: 13, name: "Polki Bangles Set", price: "₹78,000", category: "Bangles", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop" },
  { id: 14, name: "Jhumka Earrings", price: "₹22,000", category: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop" },
  { id: 15, name: "Ruby Pendant Set", price: "₹1,10,000", category: "Necklaces", image: "https://images.unsplash.com/photo-1602752250058-96ccda079f77?w=500&h=500&fit=crop" },
  { id: 16, name: "Cocktail Ring", price: "₹42,000", category: "Rings", image: "https://images.unsplash.com/photo-1605100804763-ebea4663b632?w=500&h=500&fit=crop", sale: true },
  { id: 17, name: "Sapphire Stud Earrings", price: "₹35,000", category: "Earrings", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop" },
  { id: 18, name: "Kada Bangle", price: "₹88,000", category: "Bangles", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500&h=500&fit=crop" },
];

const premiumProducts: Product[] = [
  { id: 21, name: "22K Gold Necklace Set", price: "₹3,50,000", category: "Necklaces", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500&h=500&fit=crop" },
  { id: 22, name: "Empress Diamond Ring", price: "₹2,10,000", category: "Rings", image: "https://images.unsplash.com/photo-1515562141207-5daf3b67b37d?w=500&h=500&fit=crop", sale: true },
  { id: 23, name: "Meenakari Bangles", price: "₹1,60,000", category: "Bangles", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop" },
  { id: 24, name: "South Sea Pearl Drops", price: "₹85,000", category: "Earrings", image: "https://images.unsplash.com/photo-1602752250058-96ccda079f77?w=500&h=500&fit=crop" },
  { id: 25, name: "Baroque Pearl Necklace", price: "₹1,25,000", category: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop" },
  { id: 26, name: "Rose Gold Ring", price: "₹72,000", category: "Rings", image: "https://images.unsplash.com/photo-1605100804763-ebea4663b632?w=500&h=500&fit=crop", sale: true },
  { id: 27, name: "Statement Chandelier Earrings", price: "₹48,000", category: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop" },
  { id: 28, name: "Diamond Bangle", price: "₹4,20,000", category: "Bangles", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop" },
];

// Auto snap-jump slider — advances one card at a time, no smooth transition (sled effect)
function AutoSlider({ items, intervalMs = 2000, viewAllLink, mobileViewAllColor = 'black', cardNameColor }: {
  items: Product[];
  intervalMs?: number;
  viewAllLink?: string;
  mobileViewAllColor?: string;
  cardNameColor?: string;
}) {
  const VISIBLE = 4;
  const GAP = 24;
  // Append first VISIBLE cards as clones at the end for seamless looping
  const looped = [...items, ...items.slice(0, VISIBLE)];

  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const isResetting = useRef(false);

  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        const W = containerRef.current.offsetWidth;
        setCardWidth((W - GAP * (VISIBLE - 1)) / VISIBLE);
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // Only run slider when section is visible
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const timer = setInterval(() => {
      if (isResetting.current) return;
      setAnimate(true);
      setIndex(prev => prev + 1);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [intervalMs, inView]);

  // When we've scrolled into the cloned zone, silently reset to real start
  useEffect(() => {
    if (index >= items.length) {
      isResetting.current = true;
      // wait for the snap transition (120ms) then instantly jump back
      const t = setTimeout(() => {
        setAnimate(false);
        setIndex(0);
        // re-enable animation after the silent jump
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setAnimate(true);
            isResetting.current = false;
          });
        });
      }, 130);
      return () => clearTimeout(t);
    }
  }, [index, items.length]);

  return (
    <>
      {/* Mobile: manual scroll */}
      <div className="flex overflow-x-auto scrollbar-hide gap-4 -mx-4 px-4 md:hidden">
        {items.slice(0, 6).map((product) => (
          <div key={product.id} className="flex-shrink-0 w-[42vw]">
            <ProductCard {...product} nameColor={cardNameColor} />
          </div>
        ))}
        {viewAllLink && (
          <Link
            to={viewAllLink}
            className="flex-shrink-0 w-[42vw] flex flex-col items-center justify-center gap-2 border-2 border-current rounded-xl font-medium text-sm"
            style={{ color: mobileViewAllColor, borderColor: `${mobileViewAllColor}4d` }}
          >
            View All
            <ArrowRight className="w-5 h-5" />
          </Link>
        )}
      </div>
      {/* Desktop: infinite snap slider */}
      <div ref={containerRef} className="hidden md:block overflow-hidden">
        <div
          className="flex"
          style={{
            gap: `${GAP}px`,
            transform: cardWidth > 0 ? `translateX(-${index * (cardWidth + GAP)}px)` : 'none',
            transition: animate ? 'transform 0.12s ease-in' : 'none',
          }}
        >
          {looped.map((product, i) => (
            <div key={`${product.id}-${i}`} style={{ width: `${cardWidth}px`, flexShrink: 0 }}>
              <ProductCard {...product} nameColor={cardNameColor} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const collections = [
  { id: 1, name: "Rings", slug: "rings", image: "https://images.unsplash.com/photo-1605100804763-ebea4663b632?w=300&h=300&fit=crop" },
  { id: 2, name: "Necklace", slug: "necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop" },
  { id: 3, name: "Bracelets", slug: "bracelets", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop" },
  { id: 4, name: "Earrings", slug: "earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=300&fit=crop" },
  { id: 5, name: "Nose Pins", slug: "nose-pins", image: "https://images.unsplash.com/photo-1602752250058-96ccda079f77?w=300&h=300&fit=crop" },
  { id: 6, name: "Mangalsutra", slug: "mangalsutra", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop" },
];

const heroImages = [
  "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=75&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=70&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&q=70&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&q=70&auto=format&fit=crop"
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-80 md:h-96 lg:h-screen lg:min-h-[600px] flex flex-col mb-0 bg-secondary">
        
        {/* Background Grid - Desktop only */}
        <div className="hidden md:grid absolute inset-0 grid-cols-1 md:grid-cols-4 h-full w-full">
          {/* Column 1 */}
          <div className="relative h-full w-full overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=75&auto=format&fit=crop" 
              alt="Model with Pearls" 
              className="w-full h-full object-cover opacity-80"
              fetchPriority="high"
              decoding="sync"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          {/* Column 2 */}
          <div className="relative h-full w-full overflow-hidden hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=70&auto=format&fit=crop" 
              alt="Necklace Detail" 
              className="w-full h-full object-cover opacity-80"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          {/* Column 3 */}
          <div className="relative h-full w-full overflow-hidden hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&q=70&auto=format&fit=crop" 
              alt="Rings on Hand" 
              className="w-full h-full object-cover opacity-80"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          {/* Column 4 */}
          <div className="relative h-full w-full overflow-hidden hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&q=70&auto=format&fit=crop" 
              alt="Fashion Jewelry" 
              className="w-full h-full object-cover opacity-80"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>

        {/* Background Carousel - Mobile/Tablet only */}
        <div className="md:hidden absolute inset-0 h-full w-full overflow-hidden z-0">
          {heroImages.map((image, i) => (
            <img 
              key={i}
              src={image}
              alt={`Hero slide ${i + 1}`}
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding={i === 0 ? 'sync' : 'async'}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                i === currentImageIndex ? 'opacity-80' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-black/20 z-[1]" />
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 py-6 md:py-12 lg:py-20">
          {/* Middle - Brand New Arrival */}
          <h1 className="font-serif text-3xl md:text-5xl lg:text-8xl text-white leading-none drop-shadow-2xl animate-fade-in-up delay-100 mix-blend-overlay opacity-90">
            Brand <span className="italic font-light">New</span> Arrival
          </h1>
          
          {/* Bottom - Shop Now Button */}
          <Link to="/collection/featured" className="absolute bottom-6 md:bottom-12 lg:bottom-20 left-1/2 -translate-x-1/2 bg-primary text-secondary px-6 md:px-10 py-2 md:py-3 min-w-[140px] md:min-w-[180px] hover:bg-white hover:text-secondary transition-all duration-300 uppercase text-xs tracking-[0.2em] font-bold animate-fade-in-up delay-200">
            Shop Now
          </Link>
        </div>

        {/* Gradient Overlay at bottom for better integration with next section */}
        <div className="absolute bottom-0 left-0 w-full h-16 md:h-24 lg:h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
      </section>

      {/* Premium Category Section */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#C5B396] tracking-[0.3em] uppercase text-xs font-bold block mb-4">Curated Collections</span>
            <h2 className="font-serif text-4xl md:text-5xl text-white">Shop By Category</h2>
          </div>

          <div className="flex overflow-x-auto scrollbar-hide gap-6 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-3 lg:grid-cols-6 md:gap-8">
            {collections.map((item) => (
              <Link to={`/collection/${item.slug}`} key={item.id} className="group flex flex-col items-center flex-shrink-0 md:flex-shrink">
                <div className="relative w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 md:mb-6 border border-[#C5B396]/30 p-2 transition-all duration-500 group-hover:border-[#C5B396] group-hover:shadow-[0_0_20px_rgba(197,179,150,0.2)]">
                   <div className="w-full h-full rounded-full overflow-hidden relative">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                   </div>
                </div>
                <h3 className="font-serif text-sm md:text-lg text-white group-hover:text-[#C5B396] transition-colors tracking-wide whitespace-nowrap">{item.name}</h3>
              </Link>
            ))}
          </div>

          {/* Gold & Silver Selection Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
            {/* Gold Box */}
            <Link to="/collection/gold" className="group relative h-[400px] overflow-hidden rounded-3xl">
               <div className="absolute inset-0 bg-neutral-900 border border-[#C5B396]/30 transition-colors duration-500 group-hover:border-[#C5B396] rounded-3xl" />
               
               <div className="relative h-full flex flex-col items-center justify-center text-center p-8 z-10">
                 <h3 className="font-serif text-4xl text-[#C5B396] mb-4">The Gold Standard</h3>
                 <p className="text-gray-400 mb-8 max-w-xs font-light">Timeless elegance crafted in 22k pure gold. For those who value tradition.</p>
                 <span className="inline-block border border-[#C5B396] text-[#C5B396] px-8 py-3 text-sm uppercase tracking-widest hover:bg-[#C5B396] hover:text-black transition-all duration-300 rounded-full">
                   Explore Gold
                 </span>
               </div>
            </Link>

            {/* Silver Box */}
            <Link to="/collection/silver" className="group relative h-[400px] overflow-hidden rounded-3xl">
               <div className="absolute inset-0 bg-neutral-900 border border-slate-400/30 transition-colors duration-500 group-hover:border-slate-300 rounded-3xl" />
               
               <div className="relative h-full flex flex-col items-center justify-center text-center p-8 z-10">
                 <h3 className="font-serif text-4xl text-slate-300 mb-4">Sterling Silver</h3>
                 <p className="text-gray-400 mb-8 max-w-xs font-light">Modern sophistication in 925 sterling silver. Contemporary designs for every day.</p>
                 <span className="inline-block border border-slate-300 text-slate-300 px-8 py-3 text-sm uppercase tracking-widest hover:bg-slate-300 hover:text-black transition-all duration-300 rounded-full">
                   Explore Silver
                 </span>
               </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Elegant Infinite Scroll Section */}
      <section className="bg-neutral-900 border-y border-white/10 py-12 md:py-16 overflow-hidden relative">
        <style>{`
          @keyframes infiniteScroll {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .infinite-scroll {
            animation: infiniteScroll 60s linear infinite;
          }
        `}</style>
        
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C5B396] to-transparent opacity-50" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C5B396] to-transparent opacity-50" />
        
        <div className="flex infinite-scroll w-max">
          {/* Original Set */}
          <div className="flex shrink-0">
            {[...Array(8)].map((_, i) => (
              <div key={`orig-${i}`} className="flex items-center gap-16 md:gap-24 pr-16 md:pr-24 shrink-0">
                 <span className="text-3xl md:text-5xl font-serif text-[#C5B396] uppercase tracking-[0.1em] font-light whitespace-nowrap">
                   Royal Heritage
                 </span>
                 <span className="text-xl md:text-2xl text-neutral-600">♦</span>
                 <span className="text-3xl md:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-white/20 to-white/40 uppercase tracking-[0.1em] italic whitespace-nowrap">
                   Timeless Artistry
                 </span>
                 <span className="text-xl md:text-2xl text-neutral-600">♦</span>
                 <span className="text-3xl md:text-5xl font-serif text-[#C5B396] uppercase tracking-[0.1em] font-light whitespace-nowrap">
                   Certified Purity
                 </span>
                 <span className="text-xl md:text-2xl text-neutral-600">♦</span>
              </div>
            ))}
          </div>
          {/* Duplicate Set - Exact Clone */}
          <div className="flex shrink-0">
            {[...Array(8)].map((_, i) => (
              <div key={`clone-${i}`} className="flex items-center gap-16 md:gap-24 pr-16 md:pr-24 shrink-0">
                 <span className="text-3xl md:text-5xl font-serif text-[#C5B396] uppercase tracking-[0.1em] font-light whitespace-nowrap">
                   Royal Heritage
                 </span>
                 <span className="text-xl md:text-2xl text-neutral-600">♦</span>
                 <span className="text-3xl md:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-white/20 to-white/40 uppercase tracking-[0.1em] italic whitespace-nowrap">
                   Timeless Artistry
                 </span>
                 <span className="text-xl md:text-2xl text-neutral-600">♦</span>
                 <span className="text-3xl md:text-5xl font-serif text-[#C5B396] uppercase tracking-[0.1em] font-light whitespace-nowrap">
                   Certified Purity
                 </span>
                 <span className="text-xl md:text-2xl text-neutral-600">♦</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-20 md:py-28 bg-[#C5B396]">
        <div className="container mx-auto px-4">
          <div className="relative mb-12">
            <span className="hidden md:block text-white tracking-[0.3em] uppercase text-xs font-bold mb-4">Just Landed</span>
            <h2 className="font-serif text-4xl md:text-5xl text-black">New Arrivals</h2>
          </div>

          <AutoSlider items={featuredProducts} intervalMs={4000} cardNameColor="#1a1a1a" />
        </div>
      </section>

      {/* Shop By Style Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="text-[#C5B396] tracking-[0.3em] uppercase text-xs font-bold block mb-3">Curated For You</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] tracking-wide">SHOP BY STYLE</h2>
            <div className="w-16 h-px bg-[#C5B396] mx-auto mt-6" />
          </div>

          {/* 3x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">

            {/* Card 1 — Gift Under Budget */}
            <Link to="/collection/gifts" className="group relative h-[200px] md:h-[240px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[#5C1A2E]" />
              <img
                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=700&h=500&fit=crop&auto=format"
                alt="Gifts Under Budget"
                className="absolute inset-0 w-full h-full object-cover object-right opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                loading="lazy" decoding="async"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-8">
                <p className="text-white/80 text-[10px] uppercase tracking-[0.25em] font-semibold mb-1">Gifting Edit</p>
                <h3 className="text-white font-bold text-xl md:text-2xl leading-tight">GIFT UNDER<br />₹20K – ₹50K</h3>
              </div>
            </Link>

            {/* Card 2 — Color Stone */}
            <Link to="/collection/gemstones" className="group relative h-[200px] md:h-[240px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[#F5F0EA]" />
              <img
                src="https://images.unsplash.com/photo-1602752250058-96ccda079f77?w=700&h=500&fit=crop&auto=format"
                alt="Color Stone"
                className="absolute inset-0 w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                loading="lazy" decoding="async"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-8">
                <h3 className="text-[#9B2335] font-bold text-2xl md:text-3xl tracking-wider" style={{ fontFamily: 'serif', fontStyle: 'italic' }}>COLOR STONE</h3>
              </div>
            </Link>

            {/* Card 3 — Mangalsutra */}
            <Link to="/collection/mangalsutra" className="group relative h-[200px] md:h-[240px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[#F5E84A]" />
              <img
                src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=700&h=500&fit=crop&auto=format"
                alt="Mangalsutra"
                className="absolute inset-0 w-full h-full object-cover object-right opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                loading="lazy" decoding="async"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-8">
                <h3 className="text-[#7A6000] font-bold text-2xl md:text-3xl tracking-[0.15em]">MANGALSUTRA</h3>
              </div>
            </Link>

            {/* Card 4 — Festival */}
            <Link to="/collection/bridal" className="group relative h-[200px] md:h-[240px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[#E8D5C4]" />
              <img
                src="https://images.unsplash.com/photo-1605100804763-ebea4663b632?w=700&h=500&fit=crop&auto=format"
                alt="Festival"
                className="absolute inset-0 w-full h-full object-cover object-right opacity-75 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
                loading="lazy" decoding="async"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-8">
                <h3 className="text-[#5C3D1E] font-bold text-2xl md:text-3xl tracking-[0.15em]">FESTIVAL</h3>
              </div>
            </Link>

            {/* Card 5 — Infinity / Modern */}
            <Link to="/collection/contemporary" className="group relative h-[200px] md:h-[240px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[#2A7A6F]" />
              <img
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=700&h=500&fit=crop&auto=format"
                alt="Infinity"
                className="absolute inset-0 w-full h-full object-cover object-center opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                loading="lazy" decoding="async"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-8">
                <h3 className="text-white font-bold text-2xl md:text-3xl tracking-[0.15em]">INFINITY</h3>
              </div>
            </Link>

            {/* Card 6 — Solitaire */}
            <Link to="/collection/diamonds" className="group relative h-[200px] md:h-[240px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[#ECECEC]" />
              <img
                src="https://images.unsplash.com/photo-1515562141207-5daf3b67b37d?w=700&h=500&fit=crop&auto=format"
                alt="Solitaire"
                className="absolute inset-0 w-full h-full object-cover object-right opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                loading="lazy" decoding="async"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-8">
                <h3 className="text-[#333333] font-bold text-2xl md:text-3xl tracking-[0.15em]">SOLITAIRE</h3>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Top Sellers Section */}
      <section className="py-20 md:py-28 bg-[#000000]">
        <div className="container mx-auto px-4">
          <div className="relative mb-12">
            <span className="text-[#C5B396] tracking-[0.3em] uppercase text-xs font-bold block mb-4">Best Selling</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#C5B396]">Top Sellers</h2>
          </div>

          <AutoSlider items={topSellersProducts} intervalMs={4000} cardNameColor="#C5B396" />
        </div>
      </section>

      {/* Datj Promise Section */}
      <section className="py-16 md:py-20 bg-[#C5B396]">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black tracking-[0.12em]">DATJ'S PROMISE</h2>
            <div className="w-20 h-px bg-black mx-auto mt-4" />
          </div>

          {/* 4 Promise Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

            {/* Buyback & Exchange */}
            <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-4 bg-[#EDE4D3] rounded-2xl p-5 md:p-6 border border-[#B8A888]/40 hover:border-black/30 hover:shadow-sm transition-all duration-300">
              <div className="shrink-0 w-11 h-11 rounded-full bg-white border border-[#C5B396]/50 flex items-center justify-center">
                <RefreshCcw className="w-5 h-5 text-[#8B6F47]" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-semibold text-black text-sm md:text-base mb-1">Buyback &amp; Exchange</h3>
                <p className="text-[#3a2f20] text-xs md:text-sm leading-relaxed">Exchange old designs, upgrade anytime</p>
              </div>
            </div>

            {/* BIS Hallmark */}
            <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-4 bg-[#EDE4D3] rounded-2xl p-5 md:p-6 border border-[#B8A888]/40 hover:border-black/30 hover:shadow-sm transition-all duration-300">
              <div className="shrink-0 w-11 h-11 rounded-full bg-white border border-[#C5B396]/50 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-[#8B6F47]" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-semibold text-black text-sm md:text-base mb-1">BIS Hallmark</h3>
                <p className="text-[#3a2f20] text-xs md:text-sm leading-relaxed">916 Hallmarked Pure Gold</p>
              </div>
            </div>

            {/* Certified Jewellery */}
            <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-4 bg-[#EDE4D3] rounded-2xl p-5 md:p-6 border border-[#B8A888]/40 hover:border-black/30 hover:shadow-sm transition-all duration-300">
              <div className="shrink-0 w-11 h-11 rounded-full bg-white border border-[#C5B396]/50 flex items-center justify-center">
                <Gem className="w-5 h-5 text-[#8B6F47]" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-semibold text-black text-sm md:text-base mb-1">Certified Jewellery</h3>
                <p className="text-[#3a2f20] text-xs md:text-sm leading-relaxed">100% Lab Certified &amp; Authentic</p>
              </div>
            </div>

            {/* 7 Day Return */}
            <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-4 bg-[#EDE4D3] rounded-2xl p-5 md:p-6 border border-[#B8A888]/40 hover:border-black/30 hover:shadow-sm transition-all duration-300">
              <div className="shrink-0 w-11 h-11 rounded-full bg-white border border-[#C5B396]/50 flex items-center justify-center">
                <Truck className="w-5 h-5 text-[#8B6F47]" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-semibold text-black text-sm md:text-base mb-1">7 Day Return</h3>
                <p className="text-[#3a2f20] text-xs md:text-sm leading-relaxed">Easy Returns Within a Week</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Premium Section */}
      <section className="py-20 md:py-28 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="relative mb-12">
            <span className="text-[#C5B396] tracking-[0.3em] uppercase text-xs font-bold block mb-4">Exclusive Edit</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a]">Premium</h2>
          </div>

          <AutoSlider items={premiumProducts} intervalMs={4000} cardNameColor="#1a1a1a" />
        </div>
      </section>

      {/* Testimonials Bento Grid Section */}
      <section className="py-20 md:py-32 bg-[#050505] text-white overflow-hidden">
        <div className="container mx-auto px-4">
          
          {/* Section Header */}
          <div className="mb-16 md:mb-24 max-w-2xl">
            <span className="text-[#C5B396] tracking-[0.3em] uppercase text-xs font-bold block mb-6">Our Community</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-white">
              Timeless jewelry that brings <span className="italic text-[#C5B396]">everlasting sparkle</span> and royal elegance to your moments.
            </h2>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 h-auto lg:h-[700px]">
            
            {/* Left Column (Stacked) */}
            <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8 h-full">
              
              {/* Top Left Card - Large */}
              <div className="relative h-[400px] lg:h-[55%] w-full rounded-[2.5rem] overflow-hidden group">
                 <img 
                   src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=900&q=70&auto=format&fit=crop" 
                   alt="Elegant Necklace" 
                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   loading="lazy" decoding="async"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                 
                 {/* Floating Testimonial Card */}
                 <div className="absolute bottom-6 left-6 right-6 md:w-80 bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-3xl">
                    <p className="font-serif text-sm md:text-base italic leading-relaxed text-white/90 mb-4">
                      "The detailing on this Kundan set is absolutely mesmerizing. It adds such a regal, sophisticated grace."
                    </p>
                    <div className="flex items-center gap-4">
                       <div className="flex flex-col">
                          <span className="font-bold text-[#C5B396] text-xs tracking-wide">Priya S.</span>
                          <span className="text-white/50 text-[10px] uppercase tracking-wider">Bride</span>
                       </div>
                       <div className="ml-auto flex gap-1">
                          {[1,2,3,4,5].map(i => <Star key={i} className="w-2.5 h-2.5 fill-[#C5B396] text-[#C5B396]" />)}
                       </div>
                    </div>
                 </div>
              </div>

              {/* Bottom Left Card - Wide */}
              <div className="relative h-[300px] lg:h-[45%] w-full rounded-[2.5rem] overflow-hidden group">
                 <img 
                   src="https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?w=900&q=70&auto=format&fit=crop" 
                   alt="Diamond Rings" 
                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   loading="lazy" decoding="async"
                 />
                 <div className="absolute inset-0 bg-black/20" />
                 
                 {/* Floating Testimonial Pill */}
                 <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] md:w-auto bg-white/95 backdrop-blur-md p-4 rounded-xl md:rounded-full flex flex-col md:flex-row items-center gap-3 md:gap-6 shadow-2xl">
                    <div className="flex -space-x-2">
                       {[1,2,3].map(i => (
                         <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                           <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="User" className="w-full h-full object-cover" loading="lazy" />
                         </div>
                       ))}
                    </div>
                    <div className="text-center md:text-left">
                       <p className="font-serif italic text-black/80 text-xs">"I gifted this to my mother, and she was speechless."</p>
                       <span className="text-[10px] font-bold text-[#C5B396] uppercase tracking-widest mt-0.5 block">– Rohan M.</span>
                    </div>
                 </div>
              </div>
            </div>

            {/* Right Column (Tall) */}
            <div className="lg:col-span-5 h-[500px] lg:h-full relative rounded-[2.5rem] overflow-hidden group">
               <img 
                 src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=700&q=70&auto=format&fit=crop" 
                 alt="Model Wearing Jewelry" 
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 loading="lazy" decoding="async"
               />
               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />

               {/* Happy Customers Badge similar to reference */}
               <div className="absolute bottom-8 right-8 bg-[#C5B396] text-black px-6 py-3 rounded-full flex items-center gap-4 shadow-lg cursor-pointer hover:bg-white transition-colors duration-300">
                  <div className="flex -space-x-2">
                     <div className="w-6 h-6 rounded-full bg-black/20" />
                     <div className="w-6 h-6 rounded-full bg-black/20" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold leading-none">5,000+ Happy Customers</span>
                    <span className="text-[10px] opacity-70">Bringing smiles daily</span>
                  </div>
                  <ArrowRight className="w-4 h-4 ml-2" />
               </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
