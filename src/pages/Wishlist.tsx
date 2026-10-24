import { Link, useNavigate } from 'react-router-dom';
import { Heart, Trash2, ShoppingBag } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Header Banner */}
      <div
        className="w-full h-[220px] md:h-[300px] bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1515562141207-5daf3b67b37d?w=1200&h=400&fit=crop')` }}
      >
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-[#D8C9AE] mb-2 block font-bold">Your</span>
          <h1 className="font-serif text-4xl md:text-5xl text-white">Wishlist</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {wishlist.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <Heart className="w-16 h-16 text-[#C5B396]/40 mb-6" strokeWidth={1} />
            <h2 className="font-serif text-3xl text-[#333333] mb-3">Your wishlist is empty</h2>
            <p className="text-[#575757] font-light mb-8 max-w-sm">
              Save your favourite pieces here and come back to them anytime.
            </p>
            <Link
              to="/collection/featured"
              className="bg-[#333333] text-white uppercase text-xs tracking-widest px-10 py-3 hover:bg-[#C5B396] transition-colors duration-300 font-semibold"
            >
              Explore Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-8 border-b border-[#D8C9AE] pb-4">
              <p className="text-sm text-[#575757]">
                <span className="font-semibold text-[#333333]">{wishlist.length}</span> {wishlist.length === 1 ? 'item' : 'items'} saved
              </p>
              <Link to="/collection/featured" className="text-xs uppercase tracking-widest text-[#C5B396] hover:text-[#333333] transition-colors font-semibold">
                Continue Shopping
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {wishlist.map((item) => (
                <div key={item.id} className="group flex flex-col">
                  <div className="relative aspect-[3/4] bg-[#F5F2ED] overflow-hidden mb-4 rounded-2xl">
                    {item.sale && (
                      <span className="absolute top-2 left-2 bg-[#BFA76A] text-white text-[10px] uppercase font-bold px-2 py-1 tracking-widest z-10">
                        Sale
                      </span>
                    )}

                    {/* Remove button */}
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="absolute top-2 right-2 p-2 bg-white/90 rounded-full text-red-400 hover:text-red-600 hover:bg-white transition-all z-10 shadow-sm"
                      title="Remove from wishlist"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>

                    <Link to={`/product/${item.id}`} className="block w-full h-full">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[#575757]/10 font-serif text-5xl">
                          ♦
                        </div>
                      )}
                    </Link>

                    {/* Add to Cart overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-200 z-10">
                      <button
                        onClick={() => navigate(`/product/${item.id}`)}
                        className="w-full bg-white text-[#333333] uppercase text-[10px] tracking-widest py-2.5 border border-[#575757]/20 hover:bg-[#BFA76A] hover:text-white hover:border-[#BFA76A] transition-all duration-300 font-semibold flex items-center justify-center gap-2"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" /> Add to Cart
                      </button>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-[10px] text-[#575757]/60 uppercase tracking-widest mb-1">{item.category}</p>
                    <Link to={`/product/${item.id}`} className="block">
                      <h3 className="font-serif text-base text-[#333333] mb-1 hover:text-[#BFA76A] transition-colors line-clamp-1">{item.name}</h3>
                    </Link>
                    <p className="font-medium text-[#575757] text-sm">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
