import { useMemo, useState } from 'react';
import { Check, ChevronDown, SlidersHorizontal, X, ShieldCheck } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import JewelleryCard from '../../components/ui/JewelleryCard';
import { products, liveBullionRates } from '../../data/catalog';

const collectionCopy: Record<string, { title: string; eyebrow: string; body: string; image: string; metalHint: string }> = {
  rings: {
    title: 'Fine Rings & Solitaires',
    eyebrow: 'Heirloom Finger adornments',
    body: '22KT hallmarked gold bands, 18KT IGI-certified natural diamond solitaires, and handcrafted 925 sterling silver rings.',
    image: products[1].image,
    metalHint: 'Available in 22K Gold, 18K White & Rose Gold, and 925 Silver',
  },
  necklaces: {
    title: 'Neckpieces & Jadau Chokers',
    eyebrow: 'Majestic Neck adornments',
    body: 'From traditional 22KT Bikaneri Kundan chokers to delicate 18KT emerald pendants and sterling silver collar pieces.',
    image: products[0].image,
    metalHint: 'BIS Hallmarked with laser HUID code on clasp',
  },
  earrings: {
    title: 'Earrings, Studs & Jhumkas',
    eyebrow: 'Artisan ear adornments',
    body: 'Certified solitaire studs with safety screw posts, uncut polki drops, and Rajasthani tribal 925 silver jhumkas.',
    image: products[4].image,
    metalHint: 'Hypoallergenic nickel-free pure gold and 925 silver',
  },
  bangles: {
    title: 'Bangles, Bracelets & Kadas',
    eyebrow: 'Hand-wrought wristwear',
    body: 'Heavy solid 925 sterling silver kadas, 22KT antique nakashi temple bangles, and fluid 18KT diamond tennis bracelets.',
    image: products[3].image,
    metalHint: 'Available in custom wrist sizes 2.4, 2.6, 2.8',
  },
  silver: {
    title: '925 Sterling Silver Atelier',
    eyebrow: 'Pure Silver Craftsmanship',
    body: 'Solid 92.5% sterling silver jewellery, hand-chased kadas, Italian chains, and 999 fine investment bullion bars.',
    image: products[2].image,
    metalHint: 'Guaranteed 925 Assay Hallmark with Anti-Tarnish Coating',
  },
  'bridal-sets': {
    title: 'The Royal Bridal Edit',
    eyebrow: 'Ceremonial Heirlooms',
    body: 'Grand 22KT temple nakashi haars, jadau chokers, and bespoke bridal suites designed for generational celebrations.',
    image: products[8].image,
    metalHint: 'Includes complimentary private atelier styling session',
  },
  gifts: {
    title: 'Coins & Milestone Gifting',
    eyebrow: 'Lasting Precious Gifts',
    body: '999 pure fine silver 50g bars, certified gold coins, and meaningful pendants packaged in signature vault boxes.',
    image: products[7].image,
    metalHint: 'Investment grade 999 purity with NABL assay certificate',
  },
  featured: {
    title: 'Complete Vault & Collections',
    eyebrow: 'Datj Gold & Silver Atelier',
    body: 'Explore every certified piece across 22KT Gold, 18KT Diamond jewellery, and 925 Sterling Silver.',
    image: products[5].image,
    metalHint: 'All pieces 100% BIS Hallmarked & Insured for Delivery',
  },
};

const priceFilters = [
  { label: 'All Prices', value: 'all' },
  { label: 'Under ₹25,000 (Silver & Coins)', value: 'under25' },
  { label: '₹25,000 – ₹75,000 (Rings & Studs)', value: '25to75' },
  { label: '₹75,000 – ₹1,50,000 (Fine Gold)', value: '75to150' },
  { label: 'Above ₹1,50,000 (Bridal & Tennis)', value: 'over150' },
];

const metalOptions = ['All Metals', '22K Gold', '18K Gold', '925 Silver'];

// Standalone Filter Component to prevent React 19 re-render errors
function FilterSidebar({
  metal,
  setMetal,
  price,
  setPrice,
}: {
  metal: string;
  setMetal: (val: string) => void;
  price: string;
  setPrice: (val: string) => void;
}) {
  return (
    <div className="space-y-8">
      {/* Metal Filter */}
      <div className="border-b border-[#144a37]/15 pb-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-serif text-xl font-bold text-[#0d211a]">Metal & Karat</h3>
          {metal !== 'All Metals' && (
            <button
              type="button"
              onClick={() => setMetal('All Metals')}
              className="text-[10px] font-bold uppercase tracking-wider text-[#144a37] underline"
            >
              Reset
            </button>
          )}
        </div>
        <div className="space-y-2.5">
          {metalOptions.map((option) => (
            <label
              key={option}
              className="flex cursor-pointer items-center justify-between text-xs font-medium text-[#3d544b] hover:text-[#0d211a]"
            >
              <span>{option}</span>
              <input
                type="radio"
                name="metal"
                value={option}
                checked={metal === option}
                onChange={() => setMetal(option)}
                className="accent-[#144a37] h-4 w-4"
              />
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="border-b border-[#144a37]/15 pb-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-serif text-xl font-bold text-[#0d211a]">Price Range</h3>
          {price !== 'all' && (
            <button
              type="button"
              onClick={() => setPrice('all')}
              className="text-[10px] font-bold uppercase tracking-wider text-[#144a37] underline"
            >
              Reset
            </button>
          )}
        </div>
        <div className="space-y-2.5">
          {priceFilters.map((option) => (
            <label
              key={option.value}
              className="flex cursor-pointer items-center justify-between text-xs font-medium text-[#3d544b] hover:text-[#0d211a]"
            >
              <span>{option.label}</span>
              <input
                type="radio"
                name="price"
                value={option.value}
                checked={price === option.value}
                onChange={() => setPrice(option.value)}
                className="accent-[#144a37] h-4 w-4"
              />
            </label>
          ))}
        </div>
      </div>

      {/* Trust Guarantee Note */}
      <div className="rounded-xl bg-[#eaf1ed] p-4 text-[11px] text-[#0c3325] space-y-2 border border-[#144a37]/10">
        <div className="flex items-center gap-1.5 font-bold">
          <ShieldCheck className="w-4 h-4 text-[#144a37]" />
          <span>Govt. BIS Verified</span>
        </div>
        <p className="text-[#526a61] leading-relaxed">
          Every piece is weighed on digital assay scales and hallmarked with 6-digit laser HUID before dispatch.
        </p>
      </div>
    </div>
  );
}

export default function CategoryRedesign() {
  const { slug = 'featured' } = useParams();
  const [metal, setMetal] = useState('All Metals');
  const [price, setPrice] = useState('all');
  const [sort, setSort] = useState('Featured');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const content = collectionCopy[slug] ?? collectionCopy.featured;

  const visibleProducts = useMemo(() => {
    let result = slug === 'featured'
      ? products
      : slug === 'silver'
      ? products.filter((p) => p.metalType === 'Silver' || p.category === 'Silver')
      : products.filter((product) => product.slug === slug);

    if (!result.length) result = products;

    // Filter by metal
    if (metal === '22K Gold') {
      result = result.filter((p) => p.purity.includes('22KT'));
    } else if (metal === '18K Gold') {
      result = result.filter((p) => p.purity.includes('18KT'));
    } else if (metal === '925 Silver') {
      result = result.filter((p) => p.metalType === 'Silver' || p.purity.includes('925') || p.purity.includes('999'));
    }

    // Filter by price
    if (price === 'under25') result = result.filter((p) => p.price < 25000);
    if (price === '25to75') result = result.filter((p) => p.price >= 25000 && p.price <= 75000);
    if (price === '75to150') result = result.filter((p) => p.price > 75000 && p.price <= 150000);
    if (price === 'over150') result = result.filter((p) => p.price > 150000);

    // Sort
    if (sort === 'Price: Low to High') result = [...result].sort((a, b) => a.price - b.price);
    if (sort === 'Price: High to Low') result = [...result].sort((a, b) => b.price - a.price);
    if (sort === 'Weight: Heavy to Light') result = [...result].sort((a, b) => b.grossWeight - a.grossWeight);
    if (sort === 'Top Rated') result = [...result].sort((a, b) => b.rating - a.rating);

    return result;
  }, [metal, price, slug, sort]);

  const clearAllFilters = () => {
    setMetal('All Metals');
    setPrice('all');
  };

  return (
    <div className="bg-[#f6f9f7] text-[#0d211a]">
      
      {/* Category Hero Banner - Crisp Architectural Luxury, No Muddy Gradient Blends */}
      <section className="relative overflow-hidden bg-[#062319] text-white pt-28 pb-12 md:pt-36 md:pb-16 border-b border-[#144a37]/30">
        <div className="mx-auto max-w-[1500px] px-5 md:px-10">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-12 items-center">
            
            {/* Left: Clear Typography & Metallurgical Metadata */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.28em] text-[#8ebfa8]">
                <span className="w-6 h-px bg-[#8ebfa8]/50" />
                <span>{content.eyebrow}</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.02] tracking-tight">
                {content.title}
              </h1>

              <p className="max-w-xl text-sm leading-relaxed text-white/80 md:text-base font-light">
                {content.body}
              </p>

              <div className="pt-3 border-t border-white/15 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/90 font-light">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#8ebfa8] rotate-45 shrink-0" />
                  <span className="font-mono text-[#8ebfa8]">{content.metalHint}</span>
                </div>
                <span className="text-white/20 hidden sm:inline">·</span>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] uppercase tracking-wider text-white/70">MCX Spot Benchmarked Daily</span>
                </div>
              </div>
            </div>

            {/* Right: Crisp, Framed Product Showcase (No Muddy Gradient Overlays) */}
            <div className="hidden lg:block relative">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#0c3325] border border-white/15 shadow-xl">
                <img
                  src={content.image}
                  alt={content.title}
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute bottom-3 left-3 bg-[#062319]/90 border border-white/15 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.16em] text-white rounded-md">
                  Atelier Showcase Piece
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Breadcrumbs & Bullion Ticker Sub-strip */}
      <div className="border-b border-[#144a37]/15 bg-[#eaf1ed] px-5 py-3 md:px-10">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between text-xs text-[#0c3325]">
          <div className="flex items-center gap-2">
            <Link to="/" className="text-[#526a61] hover:text-[#0d211a]">Home</Link>
            <span className="text-[#526a61]/40">/</span>
            <Link to="/collection/featured" className="text-[#526a61] hover:text-[#0d211a]">Collections</Link>
            <span className="text-[#526a61]/40">/</span>
            <span className="font-semibold text-[#144a37]">{content.title}</span>
          </div>
          <span className="text-[11px] text-[#526a61] hidden sm:inline">
            Today's 22K Gold: ₹{liveBullionRates.gold22k}/g | 925 Silver: ₹{liveBullionRates.silver925}/g
          </span>
        </div>
      </div>

      {/* Main Listing Section */}
      <section className="px-5 py-12 md:px-10 lg:py-16">
        <div className="mx-auto max-w-[1500px]">
          
          {/* Top Control Bar */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-[#144a37]/15 pb-5">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setFiltersOpen(true)}
                className="inline-flex items-center gap-2 rounded-xl border border-[#144a37]/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0d211a] lg:hidden"
              >
                <SlidersHorizontal className="h-3.5 w-3.5 text-[#144a37]" />
                Filter Pieces
              </button>
              <p className="text-xs text-[#526a61]">
                Showing <strong className="text-[#0d211a]">{visibleProducts.length}</strong> authenticated designs
              </p>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#526a61] hidden sm:inline font-medium">Sort by:</span>
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none rounded-xl border border-[#144a37]/20 bg-white py-2 pl-4 pr-9 text-xs font-semibold text-[#0d211a] focus:border-[#144a37] focus:outline-none cursor-pointer"
                >
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Weight: Heavy to Light</option>
                  <option>Top Rated</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#526a61]" />
              </div>
            </div>
          </div>

          {/* Active Filter Tags */}
          {(metal !== 'All Metals' || price !== 'all') && (
            <div className="mb-6 flex flex-wrap items-center gap-2">
              {metal !== 'All Metals' && (
                <button
                  type="button"
                  onClick={() => setMetal('All Metals')}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#eaf1ed] px-3 py-1 text-xs text-[#0c3325] font-semibold border border-[#144a37]/15"
                >
                  {metal} <X className="h-3 w-3" />
                </button>
              )}
              {price !== 'all' && (
                <button
                  type="button"
                  onClick={() => setPrice('all')}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#eaf1ed] px-3 py-1 text-xs text-[#0c3325] font-semibold border border-[#144a37]/15"
                >
                  {priceFilters.find((f) => f.value === price)?.label} <X className="h-3 w-3" />
                </button>
              )}
              <button
                type="button"
                onClick={clearAllFilters}
                className="text-xs font-bold text-[#144a37] underline ml-2"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Grid with Left Sidebar */}
          <div className="grid gap-10 lg:grid-cols-[250px_1fr] xl:gap-14">
            
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block">
              <FilterSidebar
                metal={metal}
                setMetal={setMetal}
                price={price}
                setPrice={setPrice}
              />
            </aside>

            {/* Products Grid */}
            <div>
              {visibleProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {visibleProducts.map((product) => (
                    <JewelleryCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="rounded-3xl bg-white p-12 text-center border border-[#144a37]/15">
                  <Check className="mx-auto mb-4 h-8 w-8 text-[#144a37]" />
                  <h2 className="font-serif text-3xl font-bold text-[#0d211a]">
                    No pieces match your exact criteria.
                  </h2>
                  <p className="mt-2 text-sm text-[#526a61]">
                    Try relaxing the metal karat or price range filter to explore our full precious vault.
                  </p>
                  <button
                    type="button"
                    onClick={clearAllFilters}
                    className="lux-button mt-6"
                  >
                    View All Vault Pieces
                  </button>
                </div>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* Mobile Filters Modal Drawer */}
      {filtersOpen && (
        <div className="fixed inset-0 z-[80] bg-[#062319]/70 backdrop-blur-sm lg:hidden">
          <div className="ml-auto flex h-full w-[min(88vw,380px)] flex-col bg-[#f6f9f7] p-6 shadow-2xl">
            <div className="mb-6 flex items-center justify-between border-b border-[#144a37]/15 pb-4">
              <h2 className="font-serif text-2xl font-bold text-[#0d211a]">Filter Vault</h2>
              <button
                type="button"
                onClick={() => setFiltersOpen(false)}
                className="grid h-9 w-9 place-items-center rounded-full border border-[#144a37]/20 text-[#0d211a]"
                aria-label="Close filters"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto pr-1">
              <FilterSidebar
                metal={metal}
                setMetal={setMetal}
                price={price}
                setPrice={setPrice}
              />
            </div>

            <div className="pt-4 border-t border-[#144a37]/15">
              <button
                type="button"
                onClick={() => setFiltersOpen(false)}
                className="lux-button w-full justify-center"
              >
                Show {visibleProducts.length} Matching Pieces
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
