import { Link, useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useState } from 'react';
import { useWishlist } from '../../context/WishlistContext';

interface ProductCardProps {
  id: string | number;
  name: string;
  price: string;
  category: string;
  image?: string;
  sale?: boolean;
  nameColor?: string;
}

// Second image mapping for hover effect
const secondImages: Record<string, string> = {
  "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop": "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop": "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop": "https://images.unsplash.com/photo-1515562141207-5daf3b67b37d?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1515562141207-5daf3b67b37d?w=500&h=500&fit=crop": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop": "https://images.unsplash.com/photo-1587999482114-19d0e1bc4e6f?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1587999482114-19d0e1bc4e6f?w=500&h=500&fit=crop": "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop",
};

export default function ProductCard({ id, name, price, category, image, sale, nameColor = '#1a1a1a' }: ProductCardProps) {
  const navigate = useNavigate();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const wishlisted = isInWishlist(id);
  const secondImage = image ? secondImages[image] || image : undefined;
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className="group flex flex-col">
      <div className="relative aspect-[3/4] bg-[#F5F2ED] overflow-hidden mb-4 rounded-3xl">
        {/* Skeleton shimmer */}
        {!imgLoaded && (
          <div className="absolute inset-0 z-30 bg-[#EDE8E0] overflow-hidden">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          </div>
        )}
         {/* Badge */}
        {sale && <span className="absolute top-2 left-2 bg-[#BFA76A] text-white text-[10px] uppercase font-bold px-2 py-1 tracking-widest z-20">Sale</span>}
        
        {/* Wishlist */}
        <button
          onClick={() => toggleWishlist({ id, name, price, category, image, sale })}
          className={`absolute top-2 right-2 p-2 rounded-full transition-all z-20 translate-y-2 group-hover:translate-y-0 duration-300 ${
            wishlisted
              ? 'bg-red-50 text-red-500 opacity-100'
              : 'bg-white/80 text-[#575757] hover:text-red-500 hover:bg-white opacity-0 group-hover:opacity-100'
          }`}
        >
          <Heart className={`w-4 h-4 ${wishlisted ? 'fill-red-500' : ''}`} />
        </button>

        {/* Primary Image */}
        <div className="absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
          <Link to={`/product/${id}`} className="block w-full h-full">
              {image ? (
                  <img src={image} alt={name} className="w-full h-full object-cover" loading="lazy" decoding="async" onLoad={() => setImgLoaded(true)} />
              ) : (
                  <div className="w-full h-full flex items-center justify-center text-[#575757]/10 font-serif text-5xl bg-[#EAE0D5]/20">
                      Product
                  </div>
              )}
          </Link>
        </div>

        {/* Secondary Image on Hover */}
        {secondImage && (
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link to={`/product/${id}`} className="block w-full h-full">
              <img src={secondImage} alt={`${name} alternate`} className="w-full h-full object-cover" loading="lazy" />
            </Link>
          </div>
        )}
        
        {/* Quick View Button */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-200 z-10">
             <button 
                onClick={() => navigate(`/product/${id}`)}
                className="w-full bg-white text-[#333333] uppercase text-xs tracking-widest py-3 border border-[#575757]/20 hover:bg-[#BFA76A] hover:text-white hover:border-[#BFA76A] transition-all duration-300 font-semibold"
             >
                Quick View
             </button>
        </div>
      </div>

      <div className="text-center">
        <p className="text-[10px] text-[#575757]/60 uppercase tracking-widest mb-1">{category}</p>
        <Link to={`/product/${id}`} className="block">
            <h3 className="font-serif text-lg mb-1 line-clamp-1" style={{ color: nameColor }}>{name}</h3>
        </Link>
        <p className="font-medium" style={{ color: nameColor === '#C5B396' ? '#C5B396' : '#575757' }}>{price}</p>
      </div>
    </div>
  );
}
