import { Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';

export default function WishlistRedesign() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleMoveToBag = (item: { id: string | number; name: string; price: string; image?: string; category: string }) => {
    const numericPrice = parseInt(item.price.replace(/[^0-9]/g, ''), 10) || 50000;

    addToCart({
      id: item.id,
      name: item.name,
      price: numericPrice,
      image: item.image ?? '',
      variant: {
        color: '22K Gold / 925 Silver',
        material: 'Certified Hallmark',
        size: 'Standard Fit',
      },
      quantity: 1,
    });
    removeFromWishlist(item.id);
  };

  return (
    <div className="min-h-[750px] bg-[#f6f9f7] text-[#0d211a]">
      
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-[#062319] px-5 pb-16 pt-36 text-white md:px-10 md:pb-20 border-b border-white/10">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#144a37]/30 blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-[1500px]">
          <span className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8ebfa8] block">
            Saved Heirlooms & Curations
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold">
            Your private wishlist
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-6 text-white/75 font-light">
            Keep track of pieces that caught your eye. Saved securely on this device with live valuation updates.
          </p>
        </div>
      </section>

      {/* Main Wishlist Grid */}
      <section className="px-5 py-14 md:px-10 lg:py-20">
        <div className="mx-auto max-w-[1500px]">
          
          {wishlist.length === 0 ? (
            <div className="rounded-3xl bg-white px-6 py-20 text-center max-w-xl mx-auto border border-[#144a37]/15 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-[#eaf1ed] flex items-center justify-center mx-auto mb-5 text-[#144a37]">
                <Heart className="h-8 w-8" strokeWidth={1.5} />
              </div>
              <h2 className="font-serif text-3xl font-bold text-[#0d211a]">
                Your wishlist is waiting
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm text-[#526a61] leading-relaxed">
                Click the heart on any 22K gold, diamond, or 925 sterling silver piece to save it here for private viewing.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link to="/collection/featured" className="lux-button text-xs">
                  Browse All Jewellery
                </Link>
                <Link to="/collection/silver" className="lux-button-light text-xs">
                  Discover 925 Silver
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-8 flex items-center justify-between border-b border-[#144a37]/15 pb-4 text-xs">
                <p className="text-[#526a61]">
                  You have <strong className="text-[#0d211a] font-bold">{wishlist.length}</strong> saved {wishlist.length === 1 ? 'piece' : 'pieces'}
                </p>
                <Link
                  to="/collection/featured"
                  className="font-bold text-[#144a37] uppercase tracking-wider hover:underline"
                >
                  Continue Browsing Vault →
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                {wishlist.map((item) => (
                  <article key={item.id} className="group flex flex-col rounded-2xl bg-white p-3.5 border border-[#144a37]/15 shadow-sm hover:shadow-md transition-shadow">
                    
                    <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-[#eaf1ed]">
                      <Link to={`/product/${item.id}`} className="block h-full">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        />
                      </Link>

                      <button
                        type="button"
                        onClick={() => removeFromWishlist(item.id)}
                        aria-label={`Remove ${item.name} from wishlist`}
                        className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-red-700 shadow-sm hover:bg-white transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>

                      <span className="absolute left-3 top-3 rounded-md bg-[#0c3325]/90 text-white px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider backdrop-blur">
                        BIS Hallmarked
                      </span>
                    </div>

                    <div className="pt-4 flex flex-col flex-1 justify-between">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#144a37]">
                          {item.category}
                        </p>
                        <Link to={`/product/${item.id}`}>
                          <h2 className="mt-1 font-serif text-lg font-bold text-[#0d211a] hover:text-[#144a37] transition-colors line-clamp-1">
                            {item.name}
                          </h2>
                        </Link>
                        <p className="mt-1.5 text-base font-bold text-[#0d211a]">
                          {item.price}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-[#144a37]/10 mt-4 flex gap-2">
                        <button
                          type="button"
                          onClick={() => handleMoveToBag(item)}
                          className="flex-1 lux-button justify-center text-[10px] py-2.5 px-3"
                        >
                          <ShoppingBag className="w-3.5 h-3.5 mr-1" />
                          Move to Bag
                        </button>
                        <Link
                          to={`/product/${item.id}`}
                          className="lux-button-light text-[10px] py-2.5 px-3"
                        >
                          Details
                        </Link>
                      </div>
                    </div>

                  </article>
                ))}
              </div>
            </>
          )}

        </div>
      </section>

    </div>
  );
}
