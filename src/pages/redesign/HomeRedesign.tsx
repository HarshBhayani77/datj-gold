import { useState } from 'react';
import { ArrowRight, CheckCircle2, Gem, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import JewelleryCard from '../../components/ui/JewelleryCard';
import { categoryTiles, products, liveBullionRates } from '../../data/catalog';

const standardCards = [
  {
    num: '01',
    category: 'Government Authentication',
    title: 'BIS 916 Hallmark & 6-Digit Laser HUID',
    body: 'Every gold piece is laser-inscribed with a unique govt. HUID code at an authorized assaying centre, verifiable in seconds on the official BIS Care mobile application.',
    badge: 'Verifiable on Govt. BIS Care App',
    bg: 'bg-[#0c3325]',
  },
  {
    num: '02',
    category: 'Silver Metallurgy',
    title: 'Solid 925 Sterling Silver & 999 Bullion',
    body: 'Solid 92.5% sterling silver jewellery and 999 fine bullion bars, assay-tested and shielded with an advanced electrolytic rhodium barrier to prevent tarnish.',
    badge: 'Guaranteed 92.5% Pure Silver Assay',
    bg: 'bg-[#144a37]',
  },
  {
    num: '03',
    category: 'Gemmological Rigour',
    title: 'Natural Certified Diamonds (IGI / GIA)',
    body: 'Every solitaire and accent diamond is tested under Raman spectroscopic laser detectors to ensure 100% natural origin, independently graded by IGI or SGL.',
    badge: '100% Natural Diamonds · Zero Lab Mix',
    bg: 'bg-[#062319]',
  },
  {
    num: '04',
    category: 'Permanent Liquidity',
    title: '100% Lifetime Buyback at Spot Rates',
    body: 'We guarantee 100% value of the net gold or silver weight at prevailing live market rates upon redemption, anytime with your invoice without deductions.',
    badge: 'Instant Liquidity at Live Bullion Rate',
    bg: 'bg-[#0c3325]',
  },
  {
    num: '05',
    category: 'Transit Security',
    title: 'Tamper-Proof Armored Vault Shipping',
    body: 'Dispatched in a tamper-evident security vault box with full transit insurance and GPS courier tracking. Completely covered until delivered into your hands.',
    badge: '100% Armored Transit Insurance across India',
    bg: 'bg-[#144a37]',
  },
  {
    num: '06',
    category: 'Transparent Accounting',
    title: 'Live Bullion Pricing & Net Metal Weights',
    body: 'Zero hidden margins. Every invoice clearly separates net precious metal weight, prevailing bullion rate, stone valuation, making charges, and 3% GST.',
    badge: 'Zero Hidden Margins · Net Weight Invoiced',
    bg: 'bg-[#062319]',
  },
];

export default function HomeRedesign() {
  const [activeMetalTab, setActiveMetalTab] = useState<'All' | 'Gold' | 'Silver'>('All');

  const filteredFeatured = products.filter((p) => {
    if (activeMetalTab === 'All') return true;
    return p.metalType === activeMetalTab;
  }).slice(0, 6);

  return (
    <div className="bg-[#f6f9f7] text-[#0d211a]">
      
      {/* Recreated Luxury Editorial Hero Section - Clean Solid Emerald Architecture */}
      <section className="relative overflow-hidden bg-[#062319] text-white pt-28 pb-16 md:pt-36 md:pb-24 border-b border-[#144a37]/30">
        <div className="relative mx-auto max-w-[1500px] px-5 md:px-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-16 items-center">
            
            {/* Left Column: Regal Copy & Actions (Below image on mobile, Left on desktop) */}
            <div className="order-2 lg:order-1 space-y-6 lg:space-y-7">
              
              <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.28em] text-[#8ebfa8]">
                <span className="w-6 h-px bg-[#8ebfa8]/50" />
                <span>Jaipur Gold & Silver Atelier · Est. 1984</span>
              </div>

              <h1 className="font-serif text-[clamp(2.7rem,6vw,6.5rem)] leading-[0.92] lg:leading-[0.88] tracking-[-0.03em] font-bold">
                Purity carved in
                <span className="block italic text-[#8ebfa8] font-normal mt-1">real gold & silver.</span>
              </h1>

              <p className="max-w-xl text-base leading-7 text-white/80 font-light md:text-lg">
                Generational 22KT temple jewellery, IGI-certified natural diamond solitaires, and solid 925 sterling silver. Every creation stamped with govt. laser HUID and priced transparently from live bullion rates.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <Link
                  to="/collection/bridal-sets"
                  className="inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#062319] transition hover:bg-[#eef4f1] shadow-lg"
                >
                  Explore 22K Gold
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/collection/silver"
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/40 bg-white/10 px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white hover:text-[#062319] backdrop-blur-sm"
                >
                  925 Sterling Silver
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-4 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/80 transition hover:text-white"
                >
                  Book Atelier Viewing →
                </Link>
              </div>

              {/* Live Bullion Benchmark in Hero - Quiet Editorial Data */}
              <div className="pt-5 border-t border-white/15 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/90 font-light">
                <span className="text-[10.5px] uppercase tracking-[0.22em] text-[#8ebfa8] font-medium">Daily Benchmark:</span>
                <span>22K Gold <strong className="font-semibold text-white font-mono ml-1">₹{liveBullionRates.gold22k.toLocaleString('en-IN')}/g</strong></span>
                <span className="text-white/20 hidden sm:inline">·</span>
                <span>925 Silver <strong className="font-semibold text-white font-mono ml-1">₹{liveBullionRates.silver925.toLocaleString('en-IN')}/g</strong></span>
                <span className="text-[10px] text-white/50 hidden md:inline font-mono">(MCX Spot)</span>
              </div>

            </div>

            {/* Right Column: Arched Fine Jewelry Display (Above text on mobile with reduced height, Right on desktop) */}
            <div className="order-1 lg:order-2 relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative h-[220px] sm:h-[300px] lg:h-auto lg:aspect-[4/5] rounded-2xl lg:rounded-[2.5rem] overflow-hidden bg-[#0c3325] border border-white/20 shadow-2xl">
                <img
                  src="/images/jewelry/choker_kundan_front.jpg"
                  alt="Royal 22K Kundan Choker Necklace"
                  className="h-full w-full object-cover object-center"
                  fetchPriority="high"
                />
                
                {/* Subtle Hallmark & Assurance Caption */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between text-[11px] font-mono text-white bg-[#062319]/85 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/15 shadow-xl">
                  <span className="font-semibold text-[#8ebfa8]">BIS 916 HUID Laser Verified</span>
                  <span className="text-white/30">|</span>
                  <span className="text-white/90 font-medium">100% Lifetime Buyback</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Live Bullion Market Reference Band */}
      <section className="border-b border-[#144a37]/15 bg-[#eaf1ed] px-5 py-4 md:px-10">
        <div className="mx-auto flex max-w-[1500px] flex-wrap items-center justify-between gap-y-3 gap-x-6 text-xs text-[#0c3325]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#144a37] rotate-45 shrink-0" />
            <span className="font-bold uppercase tracking-wider text-[11px]">Today's Live Bullion Reference (MCX):</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-8 font-mono text-xs">
            <span>24KT Pure: <strong>₹{liveBullionRates.gold24k.toLocaleString('en-IN')}/g</strong></span>
            <span>22KT BIS 916: <strong>₹{liveBullionRates.gold22k.toLocaleString('en-IN')}/g</strong></span>
            <span>18KT Diamond Gold: <strong>₹{liveBullionRates.gold18k.toLocaleString('en-IN')}/g</strong></span>
            <span>925 Sterling Silver: <strong>₹{liveBullionRates.silver925.toLocaleString('en-IN')}/g</strong></span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] text-[#526a61] hidden lg:inline">Updated {liveBullionRates.lastUpdated}</span>
            <Link to="/about" className="font-semibold text-[#144a37] underline underline-offset-4 text-[11px] uppercase tracking-wider">
              Transparency Guarantee
            </Link>
          </div>
        </div>
      </section>

      {/* Shop by Category (Arched Luxury Frames) */}
      <section className="px-5 py-20 md:px-10 lg:py-24">
        <div className="mx-auto max-w-[1500px]">
          
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Handcrafted Heirlooms</p>
              <h2 className="display-title">Curated by category</h2>
            </div>
            <Link
              to="/collection/featured"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#144a37] hover:underline"
            >
              Browse Complete Vault ({products.length} Pieces) <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="product-scroll grid grid-flow-col auto-cols-[68%] gap-5 overflow-x-auto pb-4 sm:auto-cols-[38%] md:grid-flow-row md:auto-cols-auto md:grid-cols-3 lg:grid-cols-7">
            {categoryTiles.map((item) => (
              <Link
                key={item.slug}
                to={`/collection/${item.slug}`}
                className="group flex flex-col items-center text-center"
              >
                <div className="aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-[#eaf1ed] border border-[#144a37]/15 relative shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-md">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  </div>
                <div className="mt-3.5">
                  <h3 className="font-serif text-lg font-semibold text-[#0d211a] group-hover:text-[#144a37] transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-[11px] text-[#526a61] uppercase tracking-[0.16em] mt-0.5 font-medium">
                    {item.count}
                  </p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* Featured Masterpieces with Real Metal Selector */}
      <section className="px-5 pb-20 md:px-10 lg:pb-28">
        <div className="mx-auto max-w-[1500px]">
          
          <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-5 border-b border-[#144a37]/15 pb-6">
            <div>
              <p className="eyebrow">Real Gold & Silver Collections</p>
              <h2 className="display-title">Signature creations</h2>
              <p className="text-sm text-[#526a61] mt-2 max-w-xl">
                Every piece includes gross and net weights, BIS hallmark laser HUID, stone grades, and live bullion price breakdown.
              </p>
            </div>

            {/* Metal Filter Pills */}
            <div className="inline-flex rounded-xl bg-[#eaf1ed] p-1 border border-[#144a37]/15 self-start md:self-end">
              {(['All', 'Gold', 'Silver'] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveMetalTab(tab)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                    activeMetalTab === tab
                      ? 'bg-[#0c3325] text-white shadow-sm'
                      : 'text-[#0d211a] hover:text-[#144a37]'
                  }`}
                >
                  {tab === 'All' ? 'All Heirlooms' : tab === 'Gold' ? '22K & 18K Gold' : '925 Sterling Silver'}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredFeatured.map((product) => (
              <JewelleryCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/collection/featured"
              className="lux-button"
            >
              Explore Complete Collection in All Metals
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 925 Sterling Silver Atelier Feature */}
      <section className="bg-[#062319] text-white py-20 px-5 md:px-10 lg:py-28 overflow-hidden relative">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full bg-[#8ebfa8] blur-3xl -translate-y-1/2 translate-x-1/2" />
        </div>

        <div className="mx-auto max-w-[1500px] grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-6 h-px bg-[#8ebfa8]/60" />
              <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#8ebfa8]">
                Pure Silver Mastery
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl leading-[0.92] tracking-tight">
              The 925 Sterling
              <span className="block italic text-[#8ebfa8] font-normal">Silver Collection.</span>
            </h2>
            <p className="text-base text-white/80 leading-7 font-light">
              Crafted for discerning collectors, our silver atelier revives centuries-old Rajasthani nakashi and filigree techniques in solid 92.5% sterling silver. Treated with an advanced electrolytic rhodium shield to prevent oxidation and ensure an enduring mirror lustre.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/15">
              <div>
                <p className="font-serif text-3xl font-bold text-[#8ebfa8]">92.5%</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/90 mt-1">Guaranteed Pure Silver</p>
                <p className="text-[11px] text-white/60 mt-0.5">Assay laboratory tested and hallmarked</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-[#8ebfa8]">Anti-Tarnish</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/90 mt-1">Rhodium Protective Seal</p>
                <p className="text-[11px] text-white/60 mt-0.5">Prevents darkening and preserves shine</p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link to="/collection/silver" className="lux-button bg-white text-[#062319] hover:bg-[#eef4f1] border-white">
                Shop 925 Silver Kadas & Jewellery
              </Link>
              <Link to="/collection/gifts" className="lux-button-silver">
                999 Pure Silver Bullion Bars
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-white/5 border border-white/15">
              <img
                src="/images/jewelry/kada_silver_front.jpg"
                alt="Solid 925 silver kada"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-white/5 border border-white/15 mt-8">
              <img
                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=700&h=900&fit=crop&auto=format&q=85"
                alt="Oxidised silver earrings"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </section>

      {/* REAL VALUE & INTEGRITY - PARALLEL CARDS COME WITH SCROLL */}
      <section className="px-5 py-24 md:px-10 lg:py-32 bg-[#f6f9f7]">
        <div className="mx-auto max-w-[1500px]">
          
          <div className="grid lg:grid-cols-[1fr_1.35fr] gap-12 lg:gap-16 items-start">
            
            {/* Sticky Left Anchor Panel */}
            <div className="lg:sticky lg:top-36 space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-6 h-px bg-[#144a37]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#144a37]">
                  Real Value & Integrity
                </span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#0d211a] leading-[0.95]">
                The Datj
                <span className="block italic text-[#144a37] font-normal">Standard.</span>
              </h2>

              <p className="text-sm text-[#526a61] leading-relaxed max-w-md font-light">
                Every creation is an investment in pure precious metal. We guarantee measurable integrity through government laser hallmarking, independent gemmological laboratories, and a permanent buyback commitment.
              </p>

              {/* Trust Pills */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0c3325]">
                  <CheckCircle2 className="w-4 h-4 text-[#144a37]" />
                  <span>100% BIS Hallmarked with Laser HUID</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0c3325]">
                  <CheckCircle2 className="w-4 h-4 text-[#144a37]" />
                  <span>92.5% Solid Sterling Silver Assayed</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0c3325]">
                  <CheckCircle2 className="w-4 h-4 text-[#144a37]" />
                  <span>Zero Hidden Deductions on Metal Weight</span>
                </div>
              </div>

              <div className="pt-3">
                <Link
                  to="/about"
                  className="lux-button text-xs"
                >
                  Read Our Full Metallurgy Guide →
                </Link>
              </div>
            </div>

            {/* Right Stacking Cards: Parallel Cards Coming in on Scroll */}
            <div className="space-y-8 pb-12">
              {standardCards.map((card, idx) => (
                <div
                  key={card.num}
                  style={{
                    top: `calc(7rem + ${idx * 1.5}rem)`,
                  }}
                  className={`sticky rounded-[2rem] p-8 md:p-12 text-white border border-white/20 shadow-[0_20px_50px_rgba(6,35,25,0.25)] transition-all duration-300 ${card.bg}`}
                >
                  <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-6">
                    <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#8ebfa8] font-bold">
                      {card.category}
                    </span>
                    <span className="font-serif text-3xl font-bold text-white/50">
                      {card.num}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3.5 leading-snug">
                    {card.title}
                  </h3>

                  <p className="text-sm text-white/80 leading-relaxed font-light mb-6">
                    {card.body}
                  </p>

                  <div className="pt-4 border-t border-white/15 flex items-center gap-2.5 text-xs font-mono text-[#8ebfa8]">
                    <span className="w-1.5 h-1.5 bg-[#8ebfa8] rotate-45 shrink-0" />
                    <span className="tracking-wider uppercase text-[11px]">{card.badge}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Bespoke Atelier & Private Consultation Banner */}
      <section className="px-5 pb-20 md:px-10 lg:pb-28">
        <div className="mx-auto max-w-[1500px] rounded-[2.5rem] bg-[#0c3325] text-white p-8 md:p-14 lg:p-16 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-15 pointer-events-none">
            <Gem className="w-96 h-96 -mr-16 -mb-16 text-[#8ebfa8]" />
          </div>

          <div className="relative z-10 max-w-2xl space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-6 h-px bg-[#8ebfa8]/60" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8ebfa8]">
                Bespoke Jewellery Service
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight">
              Create a custom heirloom in gold, diamonds, or silver.
            </h2>
            <p className="text-base text-white/80 leading-7">
              Whether resetting a family diamond, commissioning a ceremonial bridal haar, or creating custom sterling silver gifts, our senior designers work directly with you from sketch to 3D CAD to hallmarked masterwork.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link to="/contact" className="lux-button bg-white text-[#062319] hover:bg-[#eef4f1] border-white">
                Book a Private Consultation
              </Link>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="lux-button-silver"
              >
                Chat on WhatsApp (+91 98765 43210)
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
