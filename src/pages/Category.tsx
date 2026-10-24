import { useState, useMemo, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Filter, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';

const categories = [
  { id: 1, name: "Rings", slug: "rings", image: "https://images.unsplash.com/photo-1605100804763-ebea4663b632?w=300&h=300&fit=crop" },
  { id: 2, name: "Necklace", slug: "necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop" },
  { id: 3, name: "Bracelets", slug: "bangles", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop" },
  { id: 4, name: "Earrings", slug: "earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=300&fit=crop" },
  { id: 5, name: "Bridal", slug: "bridal-sets", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop" },
  { id: 6, name: "Gifts", slug: "gifts", image: "https://images.unsplash.com/photo-1587999482114-19d0e1bc4e6f?w=300&h=300&fit=crop" },
];

// Product database with categories and prices
const allProducts = [
  // Bridal Sets (Prices: ₹1,50,000 - ₹2,50,000)
  { id: 1, name: "Royal Bridal Set with Earrings", category: "bridal-sets", price: 150000, originalPrice: 165000, metal: "Yellow Gold", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop", sale: true },
  { id: 2, name: "Diamond Bridal Collection", category: "bridal-sets", price: 200000, originalPrice: 220000, metal: "White Gold", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop", sale: true },
  { id: 3, name: "Premium Bridal Ensemble", category: "bridal-sets", price: 250000, originalPrice: 275000, metal: "Rose Gold", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop", sale: false },
  { id: 4, name: "Classic Bridal Set", category: "bridal-sets", price: 175000, originalPrice: 190000, metal: "Yellow Gold", image: "https://images.unsplash.com/photo-1515562141207-5daf3b67b37d?w=500&h=500&fit=crop", sale: false },

  // Necklaces (Prices: ₹45,000 - ₹1,50,000)
  { id: 5, name: "Gold Wedding Necklace", category: "necklaces", price: 145000, originalPrice: 160000, metal: "Yellow Gold", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop", sale: true },
  { id: 6, name: "Pearl Diamond Necklace", category: "necklaces", price: 95000, originalPrice: 110000, metal: "White Gold", image: "https://images.unsplash.com/photo-1587999482114-19d0e1bc4e6f?w=500&h=500&fit=crop", sale: true },
  { id: 7, name: "Elegant Gold Chain", category: "necklaces", price: 55000, originalPrice: 65000, metal: "Yellow Gold", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop", sale: false },
  { id: 8, name: "Delicate Diamond Pendant", category: "necklaces", price: 125000, originalPrice: 140000, metal: "Platinum", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop", sale: false },

  // Rings (Prices: ₹35,000 - ₹1,20,000)
  { id: 9, name: "Diamond Solitaire Ring", category: "rings", price: 85000, originalPrice: 95000, metal: "White Gold", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop", sale: true },
  { id: 10, name: "Engagement Ring Gold", category: "rings", price: 120000, originalPrice: 135000, metal: "Yellow Gold", image: "https://images.unsplash.com/photo-1515562141207-5daf3b67b37d?w=500&h=500&fit=crop", sale: false },
  { id: 11, name: "Three Stone Ring", category: "rings", price: 105000, originalPrice: 120000, metal: "White Gold", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop", sale: true },
  { id: 12, name: "Rose Gold Ring", category: "rings", price: 65000, originalPrice: 75000, metal: "Rose Gold", image: "https://images.unsplash.com/photo-1587999482114-19d0e1bc4e6f?w=500&h=500&fit=crop", sale: false },

  // Earrings (Prices: ₹25,000 - ₹85,000)
  { id: 13, name: "Diamond Stud Earrings", category: "earrings", price: 75000, originalPrice: 85000, metal: "White Gold", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop", sale: true },
  { id: 14, name: "Pearl Drop Earrings", category: "earrings", price: 45000, originalPrice: 55000, metal: "Yellow Gold", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop", sale: true },
  { id: 15, name: "Gold Jhumka Earrings", category: "earrings", price: 35000, originalPrice: 42000, metal: "Yellow Gold", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop", sale: false },
  { id: 16, name: "Chandelier Earrings", category: "earrings", price: 85000, originalPrice: 95000, metal: "Platinum", image: "https://images.unsplash.com/photo-1515562141207-5daf3b67b37d?w=500&h=500&fit=crop", sale: false },

  // Bangles (Prices: ₹30,000 - ₹1,00,000)
  { id: 17, name: "Gold Bangle Set", category: "bangles", price: 95000, originalPrice: 110000, metal: "Yellow Gold", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop", sale: true },
  { id: 18, name: "Diamond Cut Bangle", category: "bangles", price: 75000, originalPrice: 85000, metal: "White Gold", image: "https://images.unsplash.com/photo-1587999482114-19d0e1bc4e6f?w=500&h=500&fit=crop", sale: true },
  { id: 19, name: "Classic Gold Bangle", category: "bangles", price: 45000, originalPrice: 52000, metal: "Yellow Gold", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop", sale: false },
  { id: 20, name: "Rose Gold Bangle", category: "bangles", price: 55000, originalPrice: 65000, metal: "Rose Gold", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop", sale: false },

  // Gifts (Mixed items, Prices: ₹15,000 - ₹80,000)
  { id: 21, name: "Gift Box Set", category: "gifts", price: 35000, originalPrice: 40000, metal: "Yellow Gold", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop", sale: true },
  { id: 22, name: "Premium Gift Jewelry", category: "gifts", price: 65000, originalPrice: 75000, metal: "White Gold", image: "https://images.unsplash.com/photo-1515562141207-5daf3b67b37d?w=500&h=500&fit=crop", sale: true },
  { id: 23, name: "Deluxe Gift Collection", category: "gifts", price: 80000, originalPrice: 90000, metal: "Platinum", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop", sale: false },
  { id: 24, name: "Elegant Gift Piece", category: "gifts", price: 50000, originalPrice: 58000, metal: "Rose Gold", image: "https://images.unsplash.com/photo-1587999482114-19d0e1bc4e6f?w=500&h=500&fit=crop", sale: false },

  // Featured (Mix of all, for /category/featured)
  { id: 25, name: "Latest Gold Necklace", category: "necklaces", price: 115000, originalPrice: 130000, metal: "Yellow Gold", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop", sale: true },
  { id: 26, name: "New Diamond Ring", category: "rings", price: 110000, originalPrice: 125000, metal: "White Gold", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop", sale: true },
  { id: 27, name: "Trending Earrings", category: "earrings", price: 55000, originalPrice: 65000, metal: "Yellow Gold", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop", sale: false },
  { id: 28, name: "New Bangle Collection", category: "bangles", price: 85000, originalPrice: 95000, metal: "White Gold", image: "https://images.unsplash.com/photo-1515562141207-5daf3b67b37d?w=500&h=500&fit=crop", sale: false },
];

const filters = {
  categories: ["All", "Necklaces", "Rings", "Earrings", "Bangles", "Sets"],
  price: ["Under ₹50k", "₹50k - ₹1L", "₹1L - ₹2L", "Above ₹2L"],
  metal: ["Yellow Gold", "White Gold", "Rose Gold", "Platinum"]
};

export default function Category() {
  const { slug } = useParams();
  const [showFilters, setShowFilters] = useState(false);
  const [activeSort, setActiveSort] = useState("Recommended");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [selectedMetal, setSelectedMetal] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const title = slug ? slug.replace('-', ' ').replace(/^\w/, c => c.toUpperCase()) : 'All Products';

  // Hide dropdown on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (showSortDropdown) {
        setShowSortDropdown(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showSortDropdown]);

  // Get products based on collection slug
  const baseProducts = useMemo(() => {
    if (slug === 'featured') return allProducts;
    if (slug === 'bridal-sets') return allProducts.filter(p => p.category === 'bridal-sets');
    if (slug === 'necklaces') return allProducts.filter(p => p.category === 'necklaces');
    if (slug === 'rings') return allProducts.filter(p => p.category === 'rings');
    if (slug === 'earrings') return allProducts.filter(p => p.category === 'earrings');
    if (slug === 'bangles') return allProducts.filter(p => p.category === 'bangles');
    if (slug === 'gifts') return allProducts.filter(p => p.category === 'gifts');
    return allProducts;
  }, [slug]);

  // Apply filters
  const filteredProducts = useMemo(() => {
    let result = [...baseProducts];

    // Category filter (only if not viewing a specific collection)
    if (selectedCategory !== "All" && slug !== 'bridal-sets' && slug !== 'necklaces' && slug !== 'rings' && slug !== 'earrings' && slug !== 'bangles' && slug !== 'gifts') {
      result = result.filter(p => {
        const categories: Record<string, string> = {
          'Sets': 'bridal-sets',
          'Necklaces': 'necklaces',
          'Rings': 'rings',
          'Earrings': 'earrings',
          'Bangles': 'bangles',
        };
        return p.category === categories[selectedCategory];
      });
    }

    // Price filter
    if (selectedPrice !== "All") {
      result = result.filter(p => {
        if (selectedPrice === "Under ₹50k") return p.price < 50000;
        if (selectedPrice === "₹50k - ₹1L") return p.price >= 50000 && p.price <= 100000;
        if (selectedPrice === "₹1L - ₹2L") return p.price > 100000 && p.price <= 200000;
        if (selectedPrice === "Above ₹2L") return p.price > 200000;
        return true;
      });
    }

    // Metal filter
    if (selectedMetal !== "All") {
      result = result.filter(p => p.metal === selectedMetal);
    }

    return result;
  }, [baseProducts, selectedCategory, selectedPrice, selectedMetal, slug]);

  // Apply sorting
  const sortedProducts = useMemo(() => {
    let result = [...filteredProducts];

    if (activeSort === "Price: Low to High") {
      result.sort((a, b) => a.price - b.price);
    } else if (activeSort === "Price: High to Low") {
      result.sort((a, b) => b.price - a.price);
    } else if (activeSort === "Newest") {
      result.reverse();
    }

    return result;
  }, [filteredProducts, activeSort]);

  // Pagination logic
  const ITEMS_PER_PAGE = 21;
  const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIdx = startIdx + ITEMS_PER_PAGE;
  const currentProducts = sortedProducts.slice(startIdx, endIdx);

  // Reset to page 1 when filters/sort change
  useEffect(() => {
    setCurrentPage(1);
  }, [slug, selectedCategory, selectedPrice, selectedMetal, activeSort]);

  return (
    <div>
      {/* Header Banner — truly full width, flush to top behind navbar */}
      <div
        className="w-full h-[280px] md:h-[380px] bg-cover bg-center flex items-center justify-center relative pt-[90px] lg:pt-[100px]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1200&h=400&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-[#D8C9AE] mb-2 block font-bold">Collections</span>
          <h1 className="font-serif text-5xl md:text-6xl capitalize text-white">{title}</h1>
        </div>
      </div>

      {/* Category Circles — mobile only, full width strip */}
      <div className="md:hidden overflow-x-auto scrollbar-hide bg-white px-4 py-5">
        <div className="flex gap-6 min-w-max">
          {categories.map((item) => (
            <Link
              to={`/collection/${item.slug}`}
              key={item.id}
              className="group flex flex-col items-center flex-shrink-0"
            >
              <div className={`relative w-20 h-20 rounded-full overflow-hidden mb-2 border-2 p-1 transition-all duration-300 ${
                slug === item.slug
                  ? 'border-[#C5B396]'
                  : 'border-[#C5B396]/30 group-hover:border-[#C5B396]'
              }`}>
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </div>
              <span className={`text-xs font-medium transition-colors whitespace-nowrap ${
                slug === item.slug ? 'text-[#C5B396]' : 'text-[#333333] group-hover:text-[#C5B396]'
              }`}>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Main content in container */}
      <div className="container mx-auto px-4 pb-20">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b-[3px] border-b-[#d8c9ae] pb-4 bg-white pt-6">
         <button onClick={() => setShowFilters(!showFilters)} className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest text-[#575757] hover:text-[#333333] transition-colors">
            <Filter className="w-4 h-4" /> Filters
         </button>
         
         <div className="flex items-center gap-4 mt-4 md:mt-0">
             <span className="text-xs text-[#575757]/60">{sortedProducts.length} Products</span>
             <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={() => setShowSortDropdown(!showSortDropdown)}
                  className="flex items-center gap-2 text-sm text-[#575757] hover:text-[#BFA76A] hover:bg-[#F9F7F2] px-3 py-2 rounded transition-all duration-200 border border-transparent hover:border-[#BFA76A]/30"
                >
                    {activeSort} <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showSortDropdown ? 'rotate-180' : ''}`} />
                </button>
                {showSortDropdown && (
                  <div className="absolute right-0 top-full mt-2 w-40 bg-white shadow-md border border-[#BFA76A]/30 py-1 z-50 rounded-md overflow-hidden">
                      {["Recommended", "Price: Low to High", "Price: High to Low", "Newest"].map((opt) => (
                          <button 
                            key={opt} 
                            onClick={() => {
                              setActiveSort(opt);
                              setShowSortDropdown(false);
                            }} 
                            className={`block w-full text-left px-4 py-2 text-sm transition-all duration-150 ${activeSort === opt ? 'text-[#BFA76A] bg-[#F9F7F2] border-l-4 border-l-[#BFA76A]' : 'text-[#575757] hover:bg-[#F9F7F2] hover:text-[#333333]'}`}
                          >
                               {opt}
                          </button>
                      ))}
                  </div>
                )}
             </div>
         </div>
      </div>

      <div className="flex gap-12 relative">
         {/* Filter Sidebar */}
         <aside className={`fixed inset-y-0 left-0 z-40 w-80 bg-white shadow-lg p-8 transform transition-transform duration-200 md:relative md:transform-none md:w-64 md:shadow-none md:p-0 md:bg-transparent md:block ${showFilters ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} ${!showFilters && 'hidden md:block'}`}>
             <div className="flex justify-between items-center md:hidden mb-8">
                <h3 className="font-serif text-xl">Filters</h3>
                <button onClick={() => setShowFilters(false)} className="p-2"> &times; </button>
             </div>

             <div className="space-y-8">
                 <div>
                     <h4 className="font-serif text-lg mb-4 text-[#333333]">Category</h4>
                     <div className="space-y-2">
                        {filters.categories.map(c => (
                            <label key={c} className="flex items-center gap-3 cursor-pointer group">
                                <input
                                  type="checkbox"
                                  checked={selectedCategory === c}
                                  onChange={() => setSelectedCategory(c)}
                                  className="w-4 h-4 accent-[#BFA76A] cursor-pointer"
                                />
                                <span className={`text-sm font-light ${selectedCategory === c ? 'text-[#BFA76A]' : 'text-[#575757]'} group-hover:text-[#BFA76A]`}>{c}</span>
                            </label>
                        ))}
                     </div>
                 </div>

                 <div>
                     <h4 className="font-serif text-lg mb-4 text-[#333333]">Price</h4>
                     <div className="space-y-2">
                        {filters.price.map(p => (
                             <label key={p} className="flex items-center gap-3 cursor-pointer group">
                                <input
                                  type="checkbox"
                                  checked={selectedPrice === p}
                                  onChange={() => setSelectedPrice(selectedPrice === p ? "All" : p)}
                                  className="w-4 h-4 accent-[#BFA76A] cursor-pointer"
                                />
                                <span className={`text-sm font-light ${selectedPrice === p ? 'text-[#BFA76A]' : 'text-[#575757]'} group-hover:text-[#BFA76A]`}>{p}</span>
                            </label>
                        ))}
                     </div>
                 </div>
                 
                 <div>
                     <h4 className="font-serif text-lg mb-4 text-[#333333]">Metal</h4>
                     <div className="space-y-2">
                        {filters.metal.map(m => (
                             <label key={m} className="flex items-center gap-3 cursor-pointer group">
                                <input
                                  type="checkbox"
                                  checked={selectedMetal === m}
                                  onChange={() => setSelectedMetal(selectedMetal === m ? "All" : m)}
                                  className="w-4 h-4 accent-[#BFA76A] cursor-pointer"
                                />
                                <span className={`text-sm font-light ${selectedMetal === m ? 'text-[#BFA76A]' : 'text-[#575757]'} group-hover:text-[#BFA76A]`}>{m}</span>
                            </label>
                        ))}
                     </div>
                 </div>
             </div>
         </aside>

         {/* Grid */}
         <div className="flex-1">
             {sortedProducts.length > 0 ? (
               <>
                 <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-8">
                     {currentProducts.map((p) => (
                         <ProductCard 
                           key={p.id} 
                           id={p.id}
                           name={p.name}
                           price={`₹${p.price.toLocaleString('en-IN')}`}
                           category={p.category}
                           sale={p.sale}
                           image={p.image}
                         />
                     ))}
                 </div>
                 
                 {/* Pagination */}
                 {totalPages > 1 && (
                   <div className="mt-16 flex justify-center gap-2 flex-wrap">
                       {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
                           <button 
                             key={n} 
                             onClick={() => {
                               setCurrentPage(n);
                               window.scrollTo({ top: 0, behavior: 'smooth' });
                             }}
                             className={`w-10 h-10 flex items-center justify-center border rounded transition-all duration-200 font-medium ${currentPage === n ? 'border-[#333333] bg-[#333333] text-white' : 'border-[#575757]/20 text-[#575757] hover:border-[#BFA76A] hover:text-[#BFA76A]'}`}
                           >
                               {n}
                           </button>
                       ))}
                   </div>
                 )}
               </>
             ) : (
               <div className="text-center py-12">
                 <p className="text-[#575757] text-lg">No products found matching your filters.</p>
               </div>
             )}
         </div>
      </div>
      </div>
    </div>
  );
}
