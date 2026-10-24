import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Star, Truck, ShieldCheck, ChevronRight, Minus, Plus, Heart, 
  Share2, MessageCircle, Check, ChevronDown, ChevronUp, ArrowRight, Info, Award, MapPin
} from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const QUESTIONS = [
  { q: "Is this real gold/silver?", a: "Yes, all our jewellery is hallmarked and comes with a certificate of authenticity." },
  { q: "Do you offer customization?", a: "Absolutely! You can choose metal color, purity, and stone type. Contact us on WhatsApp for bespoke designs." },
  { q: "What is the return policy?", a: "We offer a 30-day no-questions-asked return policy for all standard orders." },
];

const COMPARISON = [
    { feature: "Brilliance (RI)", moissanite: "2.65 - 2.69", diamond: "2.42" },
    { feature: "Fire (Dispersion)", moissanite: "0.104", diamond: "0.044" },
    { feature: "Hardness (Mohs)", moissanite: "9.25", diamond: "10" },
    { feature: "Durability", moissanite: "Excellent", diamond: "Excellent" },
    { feature: "Price", moissanite: "1/10th of Diamond", diamond: "Expensive" },
];

const REVIEWS = [
    { name: "Ananya S.", rating: 5, text: "Absolutely stunning! Looks exactly like a real diamond. The shine is incredible.", date: "2 days ago" },
    { name: "Priya M.", rating: 5, text: "Best purchase ever. The customer service was so helpful with sizing.", date: "1 week ago" },
    { name: "Rahul K.", rating: 4, text: "Beautiful ring, but delivery took 2 days longer than expected.", date: "2 weeks ago" },
];

// Mock Data for "You May Also Like"
const RELATED_PRODUCTS = [
  { id: 101, name: "Solitaire Ring", price: "₹24,999", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop", category: "Rings" },
  { id: 102, name: "Eternity Band", price: "₹18,500", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop", category: "Rings" },
  { id: 103, name: "Halo Pendant", price: "₹32,000", image: "https://images.unsplash.com/photo-1587999482114-19d0e1bc4e6f?w=500&h=500&fit=crop", category: "Necklaces" },
  { id: 104, name: "Stud Earrings", price: "₹12,400", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop", category: "Earrings" },
];

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isAuthenticated, openAuthModal } = useAuth();
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [selectedColor, setSelectedColor] = useState('Yellow Gold');
  const [selectedMaterial, setSelectedMaterial] = useState('14KT Gold');
  const [selectedSize, setSelectedSize] = useState('US 6');
  const [pincode, setPincode] = useState('');
  const [deliveryDate, setDeliveryDate] = useState<string | null>(null);

  const checkDelivery = () => {
      if (pincode.length === 6) {
          setDeliveryDate("Delivered by " + new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' }));
      }
  };

  const handleAddToCart = () => {
    addToCart({
        id: id || 101, // fallback
        name: "Princess Cut Moissanite Ring",
        price: 34999,
        image: "https://images.unsplash.com/photo-1515562141207-5daf3b67b37d?w=800&h=800&fit=crop", 
        variant: {
            color: selectedColor,
            material: selectedMaterial,
            size: selectedSize
        },
        quantity: qty
    });
  };

  const handleBuyNow = () => {
      handleAddToCart();
      if (!isAuthenticated) {
        openAuthModal();
      } else {
        navigate('/cart');
      }
  };
  
  // Accordion states
  const [expandedSection, setExpandedSection] = useState<string | null>('description');

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="bg-white">
       {/* Breadcrumbs */}
       <div className="container mx-auto px-4 py-4 md:py-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#575757]/60">
                <Link to="/" className="hover:text-[#333333]">Home</Link> <ChevronRight className="w-3 h-3" />
                <Link to="/collection/rings" className="hover:text-[#333333]">Rings</Link> <ChevronRight className="w-3 h-3" />
                <span className="text-[#333333] font-medium truncate">Solitaire Diamond Ring</span>
            </div>
       </div>

       {/* PRODUCT HERO */}
       <div className="container mx-auto px-4 pb-16">
           <div className="flex flex-col lg:flex-row gap-8 xl:gap-16">
               
               {/* Left: Gallery (Desktop: 2 col sticky, Mobile: stacked) */}
               <div className="w-full lg:w-3/5">
                   <div className="flex flex-col-reverse md:flex-row gap-4 sticky top-24">
                       {/* Thumbnails */}
                       <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible hide-scrollbar">
                           {[
                             "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop",
                             "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=200&h=200&fit=crop",
                             "https://images.unsplash.com/photo-1587999482114-19d0e1bc4e6f?w=200&h=200&fit=crop",
                             "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=200&h=200&fit=crop"
                           ].map((img, i) => (
                               <button 
                                 key={i} 
                                 onClick={() => setActiveImg(i)}
                                 className={`w-16 h-16 md:w-20 md:h-20 flex-shrink-0 bg-[#F5F2ED] border transition-all overflow-hidden ${activeImg === i ? 'border-[#BFA76A]' : 'border-transparent hover:border-[#BFA76A]/30'}`}
                               >
                                   <img src={img} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
                               </button>
                           ))}
                       </div>
                       
                       {/* Main Image */}
                       <div className="flex-1 aspect-square bg-[#F5F2ED] relative group overflow-hidden rounded-lg shadow-lg">
                           <img 
                             src={[
                               "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=800&fit=crop",
                               "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=800&fit=crop",
                               "https://images.unsplash.com/photo-1587999482114-19d0e1bc4e6f?w=800&h=800&fit=crop",
                               "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&h=800&fit=crop"
                             ][activeImg]} 
                             alt="Product" 
                             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                           />
                           <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                               <button className="p-3 bg-white rounded-full shadow-md text-[#575757] hover:text-red-500 transition-colors">
                                   <Heart className="w-5 h-5" />
                               </button>
                               <button className="p-3 bg-white rounded-full shadow-md text-[#575757] hover:text-[#BFA76A] transition-colors">
                                   <Share2 className="w-5 h-5" />
                               </button>
                           </div>
                       </div>
                   </div>
               </div>

               {/* Right: Details & Buying Flow */}
               <div className="w-full lg:w-2/5 flex flex-col">
                   <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                             <span className="bg-[#BFA76A] text-white text-[10px] uppercase font-bold px-2 py-1 tracking-widest">
                                 Best Seller
                             </span>
                             <div className="flex items-center gap-1 text-[#BFA76A] text-xs">
                                 <Star className="w-3 h-3 fill-current" />
                                 <span className="text-[#333333] font-medium">4.9</span>
                                 <span className="text-[#575757] underline decoration-dotted ml-1">(128 Reviews)</span>
                             </div>
                        </div>
                        <h1 className="font-serif text-3xl md:text-4xl text-[#333333] leading-tight mb-3">
                            Princess Cut Moissanite Ring
                        </h1>
                        <div className="flex items-baseline gap-4 mb-2">
                             <span className="text-2xl font-medium text-[#333333]">₹34,999</span>
                             <span className="text-sm text-[#575757]/60 line-through">₹45,000</span>
                             <span className="text-xs font-bold text-red-700 uppercase">Save ₹10,001</span>
                        </div>
                        <p className="text-xs text-[#575757]">Inclusive of all taxes. Free shipping included.</p>
                   </div>

                   {/* Selectors */}
                   <div className="flex flex-col gap-6 py-6 border-t border-b border-[#575757]/10">
                        {/* Metal Color */}
                        <div>
                             <span className="text-xs uppercase tracking-widest text-[#575757] font-bold block mb-3">Metal Color: <span className="text-[#333333]">{selectedColor}</span></span>
                             <div className="flex gap-3">
                                 {['Yellow Gold', 'White Gold', 'Rose Gold'].map(color => (
                                     <button 
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={`px-4 py-2 border text-xs uppercase tracking-wider transition-all ${selectedColor === color ? 'border-[#BFA76A] bg-[#BFA76A]/5 text-[#333333]' : 'border-[#575757]/20 text-[#575757] hover:border-[#333333]'}`}
                                     >
                                        {color}
                                     </button>
                                 ))}
                             </div>
                        </div>

                        {/* Material Purity */}
                        <div>
                             <span className="text-xs uppercase tracking-widest text-[#575757] font-bold block mb-3">Material: <span className="text-[#333333]">{selectedMaterial}</span></span>
                             <select 
                                value={selectedMaterial}
                                onChange={(e) => setSelectedMaterial(e.target.value)}
                                className="w-full p-3 border border-[#575757]/20 bg-transparent text-sm text-[#333333] focus:border-[#BFA76A] outline-none cursor-pointer"
                             >
                                 <option>925 Sterling Silver</option>
                                 <option>10KT Solid Gold</option>
                                 <option>14KT Solid Gold</option>
                                 <option>18KT Solid Gold</option>
                             </select>
                        </div>
                        
                        {/* Ring Size */}
                        <div>
                             <div className="flex justify-between mb-3">
                                <span className="text-xs uppercase tracking-widest text-[#575757] font-bold">Ring Size</span>
                                <button className="text-xs underline text-[#BFA76A] hover:text-[#333333]">Size Guide</button>
                             </div>
                             <select 
                                value={selectedSize}
                                onChange={(e) => setSelectedSize(e.target.value)}
                                className="w-full p-3 border border-[#575757]/20 bg-transparent text-sm text-[#333333] focus:border-[#BFA76A] outline-none cursor-pointer"
                             >
                                 {[4, 5, 6, 7, 8, 9, 10, 11].map(size => (
                                     <option key={size}>US {size}</option>
                                 ))}
                             </select>
                        </div>
                   </div>

                   {/* Actions */}
                   <div className="py-6 space-y-4">
                        <div className="flex gap-4">
                             {/* Qty */}
                             <div className="flex items-center border border-[#575757]/20 w-32">
                                <button className="p-3 hover:bg-[#F9F7F2]" onClick={() => setQty(Math.max(1, qty - 1))}><Minus className="w-4 h-4 text-[#575757]" /></button>
                                <span className="flex-1 text-center text-[#333333]">{qty}</span>
                                <button className="p-3 hover:bg-[#F9F7F2]" onClick={() => setQty(qty + 1)}><Plus className="w-4 h-4 text-[#575757]" /></button>
                            </div>
                            {/* Add to Cart */}
                            <button 
                                onClick={handleAddToCart}
                                className="flex-1 border border-[#333333] text-[#333333] uppercase text-xs tracking-[0.15em] font-bold hover:bg-[#333333] hover:text-white transition-all py-3"
                            >
                                Add to Cart
                            </button>
                        </div>
                        
                        {/* Buy Now */}
                        <button 
                            onClick={handleBuyNow}
                            className="w-full bg-[#333333] text-white uppercase text-xs tracking-[0.15em] font-bold py-4 hover:bg-[#BFA76A] hover:border-[#BFA76A] border border-[#333333] transition-all shadow-lg shadow-[#333333]/10 flex items-center justify-center gap-2"
                        >
                            Buy It Now <ArrowRight className="w-4 h-4" />
                        </button>
                        
                        {/* WhatsApp */}
                        <button className="w-full bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 uppercase text-xs tracking-[0.15em] font-bold py-3 hover:bg-[#25D366] hover:text-white transition-all flex items-center justify-center gap-2">
                            <MessageCircle className="w-4 h-4" /> Customize on WhatsApp
                        </button>

                        {/* Delivery Checker */}
                        <div className="pt-2">
                             <div className="flex border-b border-[#575757]/20 pb-2">
                                 <MapPin className="w-5 h-5 text-[#575757] mr-2" />
                                 <input 
                                    type="text" 
                                    placeholder="Enter Pincode" 
                                    value={pincode}
                                    onChange={(e) => setPincode(e.target.value)}
                                    maxLength={6}
                                    className="flex-1 text-sm outline-none text-[#333333] placeholder:text-[#575757]/50"
                                 />
                                 <button onClick={checkDelivery} className="text-xs font-bold text-[#BFA76A] uppercase hover:text-[#333333]">Check</button>
                             </div>
                             {deliveryDate && (
                                 <p className="text-xs text-[#25D366] mt-2 flex items-center gap-1">
                                     <Truck className="w-3 h-3" /> {deliveryDate} | <span className="text-[#575757]">Free Insured Delivery</span>
                                 </p>
                             )}
                        </div>
                   </div>

                   {/* Offers & Trust */}
                   <div className="grid grid-cols-2 gap-3 mb-8">
                       <div className="p-3 bg-red-50 border border-red-100 rounded-sm">
                           <span className="block text-xs font-bold text-red-800 mb-1">Flat 20% OFF</span>
                           <span className="text-[10px] text-red-600">Use Code: NEW20</span>
                       </div>
                       <div className="p-3 bg-[#F9F7F2] border border-[#BFA76A]/20 rounded-sm">
                           <span className="block text-xs font-bold text-[#BFA76A] mb-1">Lifetime Warranty</span>
                           <span className="text-[10px] text-[#575757]">On Plating & Stones</span>
                       </div>
                   </div>

                   <div className="flex flex-wrap gap-4 text-xs text-[#575757]">
                       <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> BIS Hallmarked</span>
                       <span className="flex items-center gap-1"><Truck className="w-3 h-3" /> Free Insured Shipping</span>
                       <span className="flex items-center gap-1"><Award className="w-3 h-3" /> Certified Stones</span>
                   </div>
               </div>
           </div>
       </div>

       {/* EDUCATIONAL / DETAILS SECTIONS */}
       <div className="bg-[#FAFAFA] border-t border-[#575757]/10">
           <div className="container mx-auto px-4 py-12 md:py-20 lg:w-3/4">
               
               {/* Description Accordion */}
               <div className="mb-4 bg-white border border-[#575757]/10 rounded-sm overflow-hidden">
                   <button onClick={() => toggleSection('description')} className="w-full flex justify-between items-center p-5 text-left hover:bg-[#F9F7F2] transition-colors">
                       <span className="font-serif text-lg text-[#333333]">Product Description</span>
                       {expandedSection === 'description' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                   </button>
                   <div className={`transition-all duration-300 ${expandedSection === 'description' ? 'max-h-[800px] opacity-100 p-6 pt-0' : 'max-h-0 opacity-0 p-0'}`}>
                         <div className="flex flex-col md:flex-row gap-8 items-center border-t border-[#575757]/10 pt-6">
                              <div className="md:w-1/2">
                                  <p className="text-[#575757] leading-loose font-light mb-4">
                                      Experience the brilliance of our Princess Cut Ring. Expertly crafted to maximize light reflection, this piece rivals 
                                      the fire of earth-mined diamonds at a fraction of the cost. 
                                  </p>
                                  <ul className="space-y-2 text-sm text-[#575757]">
                                      <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#BFA76A] mt-0.5" /> <span>GRA Certified Moissanite</span></li>
                                      <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#BFA76A] mt-0.5" /> <span>VVS1 Clarity, D Color</span></li>
                                      <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#BFA76A] mt-0.5" /> <span>Hand-set by master artisans</span></li>
                                  </ul>
                              </div>
                              <div className="md:w-1/2 aspect-video bg-[#F5F2ED] rounded-sm relative overflow-hidden">
                                  {/* Storytelling Image Placeholder */}
                                  <div className="absolute inset-0 flex items-center justify-center text-[#575757]/20 uppercase tracking-widest font-bold">Close-up Shot</div>
                              </div>
                         </div>
                   </div>
               </div>

               {/* Comparison Table */}
               <div className="mb-4 bg-white border border-[#575757]/10 rounded-sm overflow-hidden">
                   <button onClick={() => toggleSection('comparison')} className="w-full flex justify-between items-center p-5 text-left hover:bg-[#F9F7F2] transition-colors">
                       <span className="font-serif text-lg text-[#333333]">Why Choose Moissanite?</span>
                       {expandedSection === 'comparison' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                   </button>
                   <div className={`transition-all duration-300 ${expandedSection === 'comparison' ? 'max-h-[600px] opacity-100 p-6 pt-0 overflow-auto' : 'max-h-0 opacity-0 p-0'}`}>
                        <table className="w-full text-sm text-left border-collapse min-w-[500px]">
                            <thead>
                                <tr className="border-b border-[#575757]/20">
                                    <th className="py-4 font-serif text-[#333333]">Feature</th>
                                    <th className="py-4 font-bold text-[#BFA76A]">Our Moissanite</th>
                                    <th className="py-4 text-[#575757]">Diamond</th>
                                </tr>
                            </thead>
                            <tbody>
                                {COMPARISON.map((row, i) => (
                                    <tr key={i} className="border-b border-[#575757]/10 last:border-0 hover:bg-[#F9F7F2]/50">
                                        <td className="py-4 font-medium text-[#333333]">{row.feature}</td>
                                        <td className="py-4 text-[#BFA76A] font-medium">{row.moissanite}</td>
                                        <td className="py-4 text-[#575757]">{row.diamond}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                   </div>
               </div>

               {/* Shipping FAQ */}
               <div className="mb-4 bg-white border border-[#575757]/10 rounded-sm overflow-hidden">
                   <button onClick={() => toggleSection('faq')} className="w-full flex justify-between items-center p-5 text-left hover:bg-[#F9F7F2] transition-colors">
                       <span className="font-serif text-lg text-[#333333]">Questions & Answers</span>
                       {expandedSection === 'faq' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                   </button>
                   <div className={`transition-all duration-300 ${expandedSection === 'faq' ? 'max-h-[500px] opacity-100 p-6 pt-0' : 'max-h-0 opacity-0 p-0'}`}>
                       <div className="space-y-4">
                           {QUESTIONS.map((item, i) => (
                               <div key={i} className="bg-[#F9F7F2] p-4 rounded-sm">
                                   <p className="font-medium text-[#333333] mb-2 flex items-center gap-2"><Info className="w-4 h-4" /> {item.q}</p>
                                   <p className="text-[#575757] text-sm leading-relaxed ml-6">{item.a}</p>
                               </div>
                           ))}
                       </div>
                   </div>
               </div>

           </div>
       </div>

       {/* REVIEWS SECTION */}
       <div className="container mx-auto px-4 py-16 border-t border-[#575757]/10">
           <div className="text-center mb-12">
               <h2 className="font-serif text-3xl text-[#333333] mb-4">Loved by 5,000+ Women</h2>
               <div className="flex justify-center items-center gap-2 mb-2">
                   <div className="flex text-[#BFA76A]">
                       {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                   </div>
                   <span className="text-xl font-medium text-[#333333]">4.9/5</span>
               </div>
               <p className="text-[#575757] text-sm">Based on 128 verified reviews</p>
           </div>
           
           {/* Reviews Grid */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
               {REVIEWS.map((review, i) => (
                   <div key={i} className="bg-white border border-[#575757]/10 p-6 shadow-sm hover:shadow-md transition-shadow">
                       <div className="flex gap-1 text-[#BFA76A] mb-3">
                           {[...Array(review.rating)].map((_, j) => <Star key={j} className="w-3 h-3 fill-current" />)}
                       </div>
                       <p className="text-[#333333] italic mb-4 leading-relaxed">"{review.text}"</p>
                       <div className="flex justify-between items-end">
                           <div>
                               <p className="font-bold text-xs uppercase tracking-wider text-[#333333]">{review.name}</p>
                               <p className="text-[10px] text-[#575757] mt-1 flex items-center gap-1"><Check className="w-3 h-3" /> Verified Buyer</p>
                           </div>
                           <span className="text-[10px] text-[#575757]/60">{review.date}</span>
                       </div>
                   </div>
               ))}
           </div>

           {/* Insta Grid (Mock) */}
           <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
               {[1,2,3,4].map(i => (
                   <div key={i} className="aspect-square bg-[#F5F2ED] relative group overflow-hidden cursor-pointer">
                       <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                           <span className="text-white font-serif italic text-lg">@datj</span>
                       </div>
                   </div>
               ))}
           </div>
       </div>

       {/* RELATED PRODUCTS */}
       <div className="bg-[#F9F7F2] py-16">
           <div className="container mx-auto px-4">
                <h3 className="font-serif text-3xl text-center text-[#333333] mb-12">You May Also Like</h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    {RELATED_PRODUCTS.map((p) => (
                        <ProductCard 
                            key={p.id}
                            id={p.id} 
                            name={p.name} 
                            price={p.price} 
                            category={p.category}
                            image={p.image}
                        />
                    ))}
                </div>
           </div>
       </div>
    </div>
  );
}
