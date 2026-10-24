import { useState, useEffect } from 'react';
import {
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Eye,
  Heart,
  HelpCircle,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  X,
} from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import { findProduct, formatPrice, products } from '../../data/catalog';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import JewelleryCard from '../../components/ui/JewelleryCard';

export default function ProductRedesign() {
  const { id } = useParams();
  const product = findProduct(id);

  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const [activeImage, setActiveImage] = useState(0);
  const [metal, setMetal] = useState(product.metal);
  const [size, setSize] = useState('12 (Standard)');
  const [quantity, setQuantity] = useState(1);
  const [engraving, setEngraving] = useState('');
  const [pincode, setPincode] = useState('');
  const [pincodeStatus, setPincodeStatus] = useState<string | null>(null);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<'breakdown' | 'certificate' | 'shipping' | null>('breakdown');
  const [addedNotice, setAddedNotice] = useState(false);

  // Synchronize state when product changes during navigation
  const [prevId, setPrevId] = useState(product.id);
  if (product.id !== prevId) {
    setPrevId(product.id);
    setActiveImage(0);
    setMetal(product.metal);
    setEngraving('');
    setPincodeStatus(null);
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [product.id]);

  const saved = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      variant: {
        color: metal,
        material: `${product.purity} ${metal}`,
        size: `${size}${engraving ? ` | Engraved: "${engraving}"` : ''}`,
      },
      quantity,
    });
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 4000);
  };

  const checkPincode = (e: React.FormEvent) => {
    e.preventDefault();
    if (pincode.length === 6 && /^\d+$/.test(pincode)) {
      setPincodeStatus(`Available! Insured delivery to ${pincode} within 3-4 business days.`);
    } else {
      setPincodeStatus('Please enter a valid 6-digit Indian delivery pincode.');
    }
  };

  const relatedProducts = products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.metalType === product.metalType))
    .slice(0, 3);

  const angles = product.angles?.length
    ? product.angles
    : (product.gallery ?? [product.image]).map((url, i) => ({
        id: String(i),
        name: `Angle 0${i + 1} · Studio Showcase`,
        shortLabel: `Angle 0${i + 1}`,
        description: 'High-jewelry atelier perspective',
        url,
      }));

  const currentAngle = angles[activeImage] ?? angles[0];

  return (
    <div className="bg-[#f6f9f7] text-[#0d211a]">
      
      {/* Breadcrumb Navigation */}
      <div className="border-b border-[#144a37]/15 bg-[#eaf1ed] px-5 py-3 md:px-10">
        <div className="mx-auto flex max-w-[1500px] items-center gap-2 text-xs text-[#526a61]">
          <Link to="/" className="hover:text-[#0d211a]">Home</Link>
          <span>/</span>
          <Link to={`/collection/${product.slug}`} className="hover:text-[#0d211a] capitalize">
            {product.category}
          </Link>
          <span>/</span>
          <span className="font-semibold text-[#144a37] truncate">{product.name}</span>
        </div>
      </div>

      {/* Main Product Showcase */}
      <section className="px-5 py-10 md:px-10 lg:py-16">
        <div className="mx-auto max-w-[1500px] grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16">
          
          {/* Left Column: Interactive Multi-Angle Gallery */}
          <div className="space-y-4">

            {/* Angle Selector Filter Chips */}
            <div className="flex items-center justify-between pb-1">
              <div className="flex items-center gap-1.5 text-xs text-[#0c3325] font-semibold">
                <Eye className="w-3.5 h-3.5 text-[#144a37]" />
                <span className="text-[11px] font-mono uppercase tracking-wider">Multi-Angle Studio Views:</span>
              </div>
              <span className="text-[11px] font-mono text-[#526a61]">
                Angle {activeImage + 1} of {angles.length}
              </span>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {angles.map((ang, idx) => (
                <button
                  key={ang.id + idx}
                  type="button"
                  onClick={() => setActiveImage(idx)}
                  className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-medium transition-all flex items-center gap-1.5 ${
                    activeImage === idx
                      ? 'bg-[#0c3325] text-white shadow-sm ring-1 ring-[#0c3325]'
                      : 'bg-white text-[#3d544b] border border-[#144a37]/15 hover:bg-[#eaf1ed]'
                  }`}
                >
                  <span className="text-[9px] font-mono opacity-60">0{idx + 1}</span>
                  <span className="font-semibold">{ang.shortLabel}</span>
                </button>
              ))}
            </div>

            {/* Primary High-Res Viewport with Chevrons and Angle Floating Pill */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-white border border-[#144a37]/15 shadow-sm group">
              <img
                src={currentAngle.url}
                alt={`${product.name} - ${currentAngle.name}`}
                className="h-full w-full object-cover object-center transition-all duration-500"
              />

              {/* Prev / Next Chevrons */}
              {angles.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => setActiveImage((prev) => (prev > 0 ? prev - 1 : angles.length - 1))}
                    className="absolute left-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/85 text-[#062319] hover:bg-white shadow-md transition-all opacity-80 group-hover:opacity-100 cursor-pointer"
                    aria-label="Previous angle"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveImage((prev) => (prev < angles.length - 1 ? prev + 1 : 0))}
                    className="absolute right-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/85 text-[#062319] hover:bg-white shadow-md transition-all opacity-80 group-hover:opacity-100 cursor-pointer"
                    aria-label="Next angle"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Badges */}
              <div className="absolute left-4 top-4 flex flex-col gap-1.5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0c3325]/90 text-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md shadow-sm">
                  <ShieldCheck className="w-3 h-3 text-[#8ebfa8]" />
                  {product.purity}
                </span>
                <span className="rounded-full bg-white/95 text-[#0c3325] px-3 py-0.5 text-[10px] font-mono font-bold tracking-wider backdrop-blur shadow-sm">
                  {product.hallmarkHUID}
                </span>
              </div>

              {/* Wishlist Button */}
              <button
                type="button"
                onClick={() =>
                  toggleWishlist({
                    id: product.id,
                    name: product.name,
                    price: formatPrice(product.price),
                    category: product.category,
                    image: product.image,
                  })
                }
                className={`absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border transition-all shadow-md ${
                  saved
                    ? 'border-[#0c3325] bg-[#0c3325] text-white'
                    : 'border-white/80 bg-white/90 text-[#0d211a] hover:bg-white'
                }`}
                aria-label="Wishlist toggle"
              >
                <Heart className={`h-5 w-5 ${saved ? 'fill-current text-[#8ebfa8]' : ''}`} />
              </button>

              {/* Bottom Angle Name Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-[#062319]/90 backdrop-blur-md border border-white/20 px-4 py-2.5 text-white shadow-xl">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#8ebfa8] animate-pulse" />
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#8ebfa8]">
                      {currentAngle.name}
                    </span>
                  </div>
                  <p className="text-[10px] text-white/80 font-light hidden sm:block">
                    {currentAngle.description}
                  </p>
                </div>
                <span className="text-[10px] font-mono text-[#8ebfa8] border border-white/20 rounded-md px-2 py-0.5 bg-white/10 shrink-0">
                  Angle {activeImage + 1}/{angles.length}
                </span>
              </div>
            </div>

            {/* Clearly Labeled Thumbnails Strip */}
            <div className="grid grid-cols-4 gap-3 pt-1">
              {angles.map((ang, idx) => (
                <button
                  key={ang.url + idx}
                  type="button"
                  onClick={() => setActiveImage(idx)}
                  className={`group flex flex-col text-left transition-all ${
                    activeImage === idx ? 'scale-[1.02]' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className={`relative aspect-[4/5] overflow-hidden rounded-xl border-2 bg-white transition-all ${
                    activeImage === idx
                      ? 'border-[#0c3325] shadow-md ring-2 ring-[#0c3325]/20'
                      : 'border-[#144a37]/15'
                  }`}>
                    <img src={ang.url} alt={ang.name} className="h-full w-full object-cover" />
                    <span className="absolute top-1.5 left-1.5 rounded bg-black/60 px-1.5 py-0.5 text-[9px] font-mono font-bold text-white backdrop-blur-sm">
                      0{idx + 1}
                    </span>
                  </div>
                  <div className="mt-1.5 px-0.5">
                    <p className={`text-[10.5px] font-semibold truncate leading-tight ${
                      activeImage === idx ? 'text-[#0c3325] font-bold' : 'text-[#526a61]'
                    }`}>
                      {ang.shortLabel}
                    </p>
                    <p className="text-[9.5px] text-[#718b81] truncate">
                      Angle 0{idx + 1}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Trust Badges Under Gallery */}
            <div className="grid grid-cols-3 gap-3 rounded-2xl bg-white p-4 border border-[#144a37]/15 text-center text-[10.5px] uppercase tracking-wider text-[#0c3325]">
              <div className="flex flex-col items-center gap-1">
                <ShieldCheck className="w-5 h-5 text-[#144a37]" />
                <span className="font-bold">Govt. BIS 916 Stamped</span>
              </div>
              <div className="flex flex-col items-center gap-1 border-x border-[#144a37]/15">
                <Sparkles className="w-5 h-5 text-[#144a37]" />
                <span className="font-bold">100% Certified Stones</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Truck className="w-5 h-5 text-[#144a37]" />
                <span className="font-bold">Vault Insured Transit</span>
              </div>
            </div>
          </div>

          {/* Right Column: Specifications & Purchasing System */}
          <div className="space-y-6">
            
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#144a37]">
                  {product.category} · {product.metalType} Collection
                </span>
                <span className="text-[#526a61]">·</span>
                <span className="flex items-center text-xs text-[#144a37]">
                  <Star className="w-3.5 h-3.5 fill-current mr-1" />
                  <strong>{product.rating}</strong>
                  <span className="text-[#526a61] ml-1">({product.reviews} verified reviews)</span>
                </span>
              </div>

              <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#0d211a] leading-tight">
                {product.name}
              </h1>

              <p className="text-xs text-[#526a61] mt-1.5 font-mono">
                Authenticity: {product.certificate}
              </p>
            </div>

            {/* Price Box */}
            <div className="rounded-2xl bg-white p-6 border border-[#144a37]/15 shadow-sm space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="font-sans text-3xl md:text-4xl font-extrabold text-[#0d211a]">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-base text-[#526a61]/60 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
                <span className="ml-auto rounded-full bg-[#eaf1ed] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0c3325]">
                  Price Transparency Guarantee
                </span>
              </div>
              <p className="text-xs text-[#526a61]">
                Includes metal value at today's bullion rate, gemmological stones, making charges, and 3% Precious Metal GST.
              </p>
            </div>

            {/* Metal & Karat Selection */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold uppercase tracking-widest text-[#0d211a]">
                Select Metal / Karatage
              </label>
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {(['22K Yellow Gold', '18K White Gold', '18K Rose Gold', '925 Sterling Silver'] as const).map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setMetal(m)}
                    className={`rounded-xl border p-2.5 text-center text-xs font-semibold transition-all ${
                      metal === m
                        ? 'border-[#0c3325] bg-[#0c3325] text-white shadow-sm'
                        : 'border-[#144a37]/20 bg-white text-[#3d544b] hover:border-[#144a37]'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selector + Size Guide Modal Trigger */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-widest text-[#0d211a]">
                  Select Size
                </label>
                <button
                  type="button"
                  onClick={() => setSizeGuideOpen(true)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#144a37] underline"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  Measurement & Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {['10 (Small)', '12 (Standard)', '14 (Medium)', '16 (Large)', 'Custom Measurement'].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSize(s)}
                    className={`rounded-xl border px-3.5 py-2 text-xs font-semibold transition-all ${
                      size === s
                        ? 'border-[#0c3325] bg-[#0c3325] text-white'
                        : 'border-[#144a37]/20 bg-white text-[#3d544b] hover:border-[#144a37]'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Engraving Option */}
            <div className="space-y-2 rounded-xl bg-white p-4 border border-[#144a37]/15">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold uppercase tracking-wider text-[#0d211a]">
                  Complimentary Laser Engraving
                </span>
                <span className="text-[#526a61]">Optional (Max 16 chars)</span>
              </div>
              <input
                type="text"
                maxLength={16}
                value={engraving}
                onChange={(e) => setEngraving(e.target.value)}
                placeholder="e.g. Forever & Always / 24.10.2026"
                className="w-full rounded-lg border border-[#144a37]/20 px-3 py-2 text-xs text-[#0d211a] outline-none focus:border-[#144a37]"
              />
              {engraving && (
                <p className="text-[11px] text-[#144a37] font-serif italic">
                  Preview on inner band: "{engraving}"
                </p>
              )}
            </div>

            {/* Add to Bag and Express Purchase Actions */}
            <div className="space-y-3 pt-2">
              <div className="flex gap-3">
                <div className="flex items-center rounded-full border border-[#144a37]/25 bg-white px-3">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-1.5 text-base font-bold text-[#526a61] hover:text-[#0d211a]"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-xs font-bold">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1.5 text-base font-bold text-[#526a61] hover:text-[#0d211a]"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="lux-button flex-1 justify-center text-xs"
                >
                  Add Piece to Bag · {formatPrice(product.price * quantity)}
                </button>
              </div>

              {addedNotice && (
                <div className="rounded-xl bg-[#eaf1ed] p-3 text-center text-xs font-semibold text-[#0c3325] border border-[#144a37]/20 flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#144a37]" />
                  <span>Added {product.name} to your shopping bag!</span>
                  <Link to="/cart" className="underline font-bold ml-2">View Bag →</Link>
                </div>
              )}
            </div>

            {/* Pincode Estimator */}
            <div className="rounded-2xl bg-white p-4 border border-[#144a37]/15 space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-[#0d211a] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#144a37]" />
                Check Insured Delivery to Your City
              </p>
              <form onSubmit={checkPincode} className="flex gap-2">
                <input
                  type="text"
                  maxLength={6}
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  placeholder="Enter 6-digit Pincode"
                  className="w-full rounded-lg border border-[#144a37]/20 px-3 py-2 text-xs outline-none focus:border-[#144a37]"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-[#0c3325] px-4 py-2 text-xs font-bold uppercase text-white hover:bg-[#144a37] whitespace-nowrap"
                >
                  Verify
                </button>
              </form>
              {pincodeStatus && (
                <p className="text-xs text-[#0c3325] font-medium pt-1">
                  {pincodeStatus}
                </p>
              )}
            </div>

            {/* Technical Accordions */}
            <div className="space-y-3 pt-2">
              
              {/* Accordion 1: Transparent Price Breakdown */}
              <div className="rounded-2xl border border-[#144a37]/15 bg-white overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenAccordion(openAccordion === 'breakdown' ? null : 'breakdown')}
                  className="w-full flex items-center justify-between p-4 text-left font-serif text-lg font-bold text-[#0d211a] hover:bg-[#eaf1ed]/50"
                >
                  <span>Transparent Price & Weight Breakdown</span>
                  {openAccordion === 'breakdown' ? <ChevronUp className="w-4 h-4 text-[#144a37]" /> : <ChevronDown className="w-4 h-4 text-[#526a61]" />}
                </button>
                {openAccordion === 'breakdown' && (
                  <div className="p-4 pt-0 border-t border-[#144a37]/10 text-xs space-y-2.5">
                    <div className="grid grid-cols-2 gap-2 py-2 border-b border-[#144a37]/10 font-mono text-[11px]">
                      <div>Gross Weight: <strong>{product.grossWeight} grams</strong></div>
                      <div>Net Metal Weight: <strong>{product.netWeight} grams</strong></div>
                      <div>Purity: <strong>{product.purity}</strong></div>
                      <div>Hallmark: <strong>{product.hallmarkHUID}</strong></div>
                    </div>
                    
                    <div className="space-y-1.5 pt-1">
                      <div className="flex justify-between text-[#526a61]">
                        <span>Metal Cost ({product.netWeight}g @ prevailing rate):</span>
                        <span className="font-mono text-[#0d211a]">{formatPrice(product.priceBreakdown.metalTotal)}</span>
                      </div>
                      <div className="flex justify-between text-[#526a61]">
                        <span>Stone & Gemstone Valuation:</span>
                        <span className="font-mono text-[#0d211a]">{formatPrice(product.priceBreakdown.stoneTotal)}</span>
                      </div>
                      <div className="flex justify-between text-[#526a61]">
                        <span>Artisan Making Charges ({product.makingChargePct}%):</span>
                        <span className="font-mono text-[#0d211a]">{formatPrice(product.priceBreakdown.makingCharges)}</span>
                      </div>
                      <div className="flex justify-between text-[#526a61]">
                        <span>Precious Metal GST (3% Govt. Tax):</span>
                        <span className="font-mono text-[#0d211a]">{formatPrice(product.priceBreakdown.gstAmount)}</span>
                      </div>
                      <div className="flex justify-between font-bold pt-2 border-t border-[#144a37]/15 text-[#0d211a]">
                        <span>Total Transparent Price:</span>
                        <span className="font-mono text-sm">{formatPrice(product.price)}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Accordion 2: Hallmarking & Certificate */}
              <div className="rounded-2xl border border-[#144a37]/15 bg-white overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenAccordion(openAccordion === 'certificate' ? null : 'certificate')}
                  className="w-full flex items-center justify-between p-4 text-left font-serif text-lg font-bold text-[#0d211a] hover:bg-[#eaf1ed]/50"
                >
                  <span>BIS Hallmarking & Diamond Dossier</span>
                  {openAccordion === 'certificate' ? <ChevronUp className="w-4 h-4 text-[#144a37]" /> : <ChevronDown className="w-4 h-4 text-[#526a61]" />}
                </button>
                {openAccordion === 'certificate' && (
                  <div className="p-4 pt-0 border-t border-[#144a37]/10 text-xs text-[#526a61] space-y-2">
                    <p>
                      <strong>Govt. BIS Hallmark:</strong> This piece bears the official triangular Bureau of Indian Standards hallmark stamp, the purity mark (e.g. 916 for 22K or 750 for 18K), and an individual 6-digit laser HUID code that can be verified on the official BIS Care app.
                    </p>
                    <p>
                      <strong>Diamond Dossier:</strong> All natural diamonds are tested on Raman spectroscopic detectors to ensure 100% natural origin, with grading reports issued by independent gemmological laboratories (IGI / SGL).
                    </p>
                  </div>
                )}
              </div>

              {/* Accordion 3: 100% Lifetime Buyback */}
              <div className="rounded-2xl border border-[#144a37]/15 bg-white overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenAccordion(openAccordion === 'shipping' ? null : 'shipping')}
                  className="w-full flex items-center justify-between p-4 text-left font-serif text-lg font-bold text-[#0d211a] hover:bg-[#eaf1ed]/50"
                >
                  <span>Lifetime Buyback, Exchange & Vault Shipping</span>
                  {openAccordion === 'shipping' ? <ChevronUp className="w-4 h-4 text-[#144a37]" /> : <ChevronDown className="w-4 h-4 text-[#526a61]" />}
                </button>
                {openAccordion === 'shipping' && (
                  <div className="p-4 pt-0 border-t border-[#144a37]/10 text-xs text-[#526a61] space-y-2">
                    <p>
                      <strong>100% Lifetime Buyback:</strong> We guarantee 100% value of the net gold or silver weight at prevailing market rates upon redemption, anytime with your invoice.
                    </p>
                    <p>
                      <strong>Insured Shipping:</strong> Shipped in a discreet tamper-evident security vault box with full transit insurance. Video unboxing recommended.
                    </p>
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Related Pieces */}
      <section className="px-5 py-16 md:px-10 border-t border-[#144a37]/15">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-10">
            <p className="eyebrow">Complementary Pieces</p>
            <h2 className="display-title">You may also admire</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {relatedProducts.map((p) => (
              <JewelleryCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Ring / Bangle Size Guide Modal */}
      {sizeGuideOpen && (
        <div className="fixed inset-0 z-[100] grid place-items-center bg-[#062319]/75 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-lg rounded-3xl bg-[#f6f9f7] p-6 md:p-8 shadow-2xl border border-[#144a37]/20">
            <button
              type="button"
              onClick={() => setSizeGuideOpen(false)}
              className="absolute right-5 top-5 p-2 rounded-full border border-[#144a37]/20 hover:bg-[#eaf1ed]"
            >
              <X className="w-4 h-4 text-[#0d211a]" />
            </button>

            <span className="eyebrow">Atelier Measurement Guide</span>
            <h3 className="font-serif text-3xl font-bold text-[#0d211a] mb-3">
              Standard Ring & Bangle Sizing
            </h3>
            <p className="text-xs text-[#526a61] mb-5">
              Indian standard sizes (Circumference & Diameter in millimetres):
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono border-collapse">
                <thead>
                  <tr className="border-b border-[#144a37]/20 bg-[#eaf1ed] text-[#0c3325]">
                    <th className="p-2.5">Indian Size</th>
                    <th className="p-2.5">Inner Diameter (mm)</th>
                    <th className="p-2.5">Circumference (mm)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#144a37]/10">
                  <tr><td className="p-2">10 (Small)</td><td className="p-2">15.9 mm</td><td className="p-2">50.0 mm</td></tr>
                  <tr><td className="p-2">12 (Standard)</td><td className="p-2">16.5 mm</td><td className="p-2">51.8 mm</td></tr>
                  <tr><td className="p-2">14 (Medium)</td><td className="p-2">17.2 mm</td><td className="p-2">54.0 mm</td></tr>
                  <tr><td className="p-2">16 (Large)</td><td className="p-2">17.8 mm</td><td className="p-2">56.0 mm</td></tr>
                  <tr><td className="p-2">18 (Extra Large)</td><td className="p-2">18.5 mm</td><td className="p-2">58.0 mm</td></tr>
                </tbody>
              </table>
            </div>

            <p className="text-[11px] text-[#526a61] mt-5">
              Need a custom fit or half-size? Our master silversmiths and goldsmiths offer complimentary resizing within 30 days of purchase.
            </p>

            <button
              type="button"
              onClick={() => setSizeGuideOpen(false)}
              className="lux-button w-full justify-center mt-6 text-xs"
            >
              Understood
            </button>
          </div>
        </div>
      )}

      {/* Sticky Mobile Add To Bag Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#144a37]/15 p-3.5 px-5 lg:hidden flex items-center justify-between gap-4 shadow-lg">
        <div>
          <p className="font-serif text-lg font-bold text-[#0d211a] leading-none">
            {formatPrice(product.price)}
          </p>
          <p className="text-[10px] text-[#526a61] font-mono mt-0.5">{product.purity}</p>
        </div>
        <button
          type="button"
          onClick={handleAddToCart}
          className="lux-button text-xs py-3 px-6"
        >
          Add to Bag
        </button>
      </div>

    </div>
  );
}
