import { useState } from 'react';
import { X, Star, ChevronDown, ChevronUp, Plus, Minus, Truck, ShieldCheck } from 'lucide-react';
import { useQuickView } from '../../context/QuickViewContext';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function QuickViewModal() {
  const { isOpen, selectedProduct, closeQuickView } = useQuickView();
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState('22K Yellow Gold');
  const [activeTab, setActiveTab] = useState<'desc' | 'care' | 'shipping'>('desc');

  if (!isOpen || !selectedProduct) return null;

  const toggleTab = (tab: 'desc' | 'care' | 'shipping') => {
    setActiveTab(activeTab === tab ? 'desc' : tab);
  };

  const numericPrice = typeof selectedProduct.price === 'string'
    ? parseInt(selectedProduct.price.replace(/[^0-9]/g, ''), 10) || 50000
    : selectedProduct.price;

  const handleAddToCart = () => {
    addToCart({
      id: selectedProduct.id,
      name: selectedProduct.name,
      price: numericPrice,
      image: selectedProduct.image ?? '',
      variant: {
        color: selectedVariant,
        material: selectedVariant,
        size: 'Standard',
      },
      quantity: qty,
    });
    closeQuickView();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#062319]/70 backdrop-blur-sm transition-opacity" 
        onClick={closeQuickView}
      />

      {/* Modal Container */}
      <div className="relative bg-[#f6f9f7] w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row animate-fade-in-up border border-[#144a37]/15 rounded-[1.5rem]">
        
        {/* Close Button */}
        <button 
          onClick={closeQuickView} 
          className="absolute right-4 top-4 z-20 p-2 text-[#0d211a] hover:text-[#144a37] transition-colors rounded-md bg-white/80 backdrop-blur border border-[#144a37]/10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Image */}
        <div className="w-full md:w-1/2 bg-[#eaf1ed] relative min-h-[300px] md:min-h-full flex items-center justify-center overflow-hidden">
           <img 
             src={selectedProduct.image} 
             alt={selectedProduct.name} 
             className="w-full h-full object-cover object-center max-h-[500px]"
           />
           <div className="absolute bottom-4 left-4 flex gap-2">
              <span className="bg-[#0c3325] text-white text-[10px] uppercase tracking-widest font-semibold px-3 py-1.5 rounded-md shadow">
                BIS Hallmarked
              </span>
           </div>
        </div>

        {/* Right Column: Key Details & Buying Flow */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col bg-white overflow-y-auto custom-scrollbar">
           <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                  <span className="bg-[#144a37]/10 text-[#144a37] text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-md">
                      {selectedProduct.category}
                  </span>
                  <span className="text-[#526a61] text-[10px] uppercase tracking-widest">In Stock · Ready to Dispatch</span>
              </div>

              <Link to={`/product/${selectedProduct.id}`} onClick={closeQuickView} className="block group">
                  <h2 className="font-serif text-2xl md:text-3xl text-[#0d211a] mb-2 leading-tight group-hover:text-[#144a37] transition-colors">
                      {selectedProduct.name}
                  </h2>
              </Link>

              <div className="flex items-end gap-3 mb-4">
                  <span className="font-sans text-2xl text-[#0d211a] font-semibold">{selectedProduct.price}</span>
                  <span className="text-xs text-[#526a61] mb-1 ml-auto">Includes 3% Precious Metal GST</span>
              </div>

              <div className="flex items-center gap-2 text-[#144a37] text-sm mb-6">
                   <div className="flex">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current text-[#144a37]" />)}
                   </div>
                   <span className="text-[#526a61] ml-1 text-xs">Certified Genuine Jewellery</span>
              </div>
           </div>

           {/* Variants & Actions */}
           <div className="space-y-6 pb-6 border-b border-[#144a37]/10">
               <div className="space-y-2">
                   <label className="text-xs uppercase tracking-widest text-[#526a61] font-bold">Select Metal / Karat</label>
                   <div className="relative">
                       <select 
                          value={selectedVariant} 
                          onChange={(e) => setSelectedVariant(e.target.value)}
                          className="w-full appearance-none border border-[#144a37]/20 bg-transparent px-4 py-3 text-sm text-[#0d211a] focus:border-[#144a37] focus:outline-none transition-colors cursor-pointer rounded-xl"
                       >
                           <option>22K Yellow Gold (916 BIS)</option>
                           <option>18K Rose Gold (750 BIS)</option>
                           <option>18K White Gold (750 BIS)</option>
                           <option>925 Sterling Silver (Rhodium Plated)</option>
                       </select>
                       <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#526a61] pointer-events-none" />
                   </div>
               </div>

               {/* Quantity & Add to Cart */}
               <div className="space-y-4">
                  <label className="text-xs uppercase tracking-widest text-[#526a61] font-bold">Quantity</label>
                  <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex items-center border border-[#144a37]/20 rounded-xl overflow-hidden w-fit">
                          <button className="p-3 hover:bg-[#eaf1ed] transition-colors" onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Decrease quantity"><Minus className="w-4 h-4 text-[#526a61]" /></button>
                          <span className="w-12 text-center text-[#0d211a] font-medium">{qty}</span>
                          <button className="p-3 hover:bg-[#eaf1ed] transition-colors" onClick={() => setQty(qty + 1)} aria-label="Increase quantity"><Plus className="w-4 h-4 text-[#526a61]" /></button>
                      </div>
                      <button onClick={handleAddToCart} className="flex-1 lux-button-light justify-center">
                          Add to Bag
                      </button>
                  </div>
                  <button onClick={handleAddToCart} className="w-full lux-button justify-center">
                      Express Checkout
                  </button>
               </div>
           </div>

           {/* Accordions */}
           <div className="mt-6 space-y-2">
               <div className="border-b border-[#144a37]/10">
                   <button onClick={() => toggleTab('desc')} className="w-full flex justify-between items-center py-3 text-left group">
                       <span className="font-serif text-base text-[#0d211a] group-hover:text-[#144a37] transition-colors">Craftsmanship & Purity</span>
                       {activeTab === 'desc' ? <ChevronUp className="w-4 h-4 text-[#526a61]" /> : <ChevronDown className="w-4 h-4 text-[#526a61]" />}
                   </button>
                   <div className={`overflow-hidden transition-all duration-300 ${activeTab === 'desc' ? 'max-h-[300px] opacity-100 pb-3' : 'max-h-0 opacity-0'}`}>
                       <p className="text-[#526a61] text-xs leading-relaxed">
                           Handcrafted by certified Jaipur artisans using pure bullion metals. Comes stamped with govt. approved BIS hallmarking, laser HUID code, and independent gemmological certificates.
                       </p>
                   </div>
               </div>

               <div className="border-b border-[#144a37]/10">
                   <button onClick={() => toggleTab('shipping')} className="w-full flex justify-between items-center py-3 text-left group">
                       <span className="font-serif text-base text-[#0d211a] group-hover:text-[#144a37] transition-colors">Insured Delivery & Buyback</span>
                       {activeTab === 'shipping' ? <ChevronUp className="w-4 h-4 text-[#526a61]" /> : <ChevronDown className="w-4 h-4 text-[#526a61]" />}
                   </button>
                   <div className={`overflow-hidden transition-all duration-300 ${activeTab === 'shipping' ? 'max-h-[200px] opacity-100 pb-3' : 'max-h-0 opacity-0'}`}>
                       <div className="flex flex-col gap-2.5 pt-1">
                           <div className="flex items-center gap-2.5 text-xs text-[#526a61]">
                               <Truck className="w-4 h-4 text-[#144a37]" />
                               <span>Free Insured Transit across India in tamper-proof seal box.</span>
                           </div>
                           <div className="flex items-center gap-2.5 text-xs text-[#526a61]">
                               <ShieldCheck className="w-4 h-4 text-[#144a37]" />
                               <span>100% Lifetime Buyback at prevailing bullion rates.</span>
                           </div>
                       </div>
                   </div>
               </div>
           </div>

           <Link to={`/product/${selectedProduct.id}`} onClick={closeQuickView} className="mt-6 text-center text-xs font-semibold uppercase tracking-widest text-[#144a37] hover:underline">
                View Full Specifications & Certificate →
           </Link>
        </div>
      </div>
    </div>
  );
}
