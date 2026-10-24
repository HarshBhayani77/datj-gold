import { ArrowUpRight, Heart, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { JewelleryProduct } from '../../data/catalog';
import { formatPrice } from '../../data/catalog';
import { useWishlist } from '../../context/WishlistContext';

export default function JewelleryCard({ product, dark = false }: { product: JewelleryProduct; dark?: boolean }) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const saved = isInWishlist(product.id);

  return (
    <article className="group min-w-0 flex flex-col h-full">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#eaf1ed] border border-[#144a37]/10">
        <Link to={`/product/${product.id}`} aria-label={`View ${product.name}`} className="block h-full">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.045]"
            loading="lazy"
            decoding="async"
          />
        </Link>

        {/* Hallmark / Metal Badge */}
        <div className="absolute left-3.5 top-3.5 flex flex-col gap-1">
          {product.badge && (
            <span className="inline-flex items-center gap-1 rounded-full bg-[#0c3325]/90 text-white px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider backdrop-blur shadow-sm">
              <ShieldCheck className="w-2.5 h-2.5 text-[#8ebfa8]" />
              {product.badge}
            </span>
          )}
          {product.metalType === 'Silver' && (
            <span className="rounded-full bg-white/95 text-[#0c3325] px-2.5 py-0.5 text-[9px] font-bold tracking-wider backdrop-blur shadow-sm">
              925 Silver
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          type="button"
          aria-label={saved ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
          onClick={() =>
            toggleWishlist({
              id: product.id,
              name: product.name,
              price: formatPrice(product.price),
              category: product.category,
              image: product.image,
              sale: Boolean(product.originalPrice),
            })
          }
          className={`absolute right-3.5 top-3.5 grid h-9 w-9 place-items-center rounded-full border transition shadow-sm ${
            saved
              ? 'border-[#0c3325] bg-[#0c3325] text-white'
              : 'border-white/70 bg-white/90 text-[#0d211a] hover:bg-white hover:text-[#144a37]'
          }`}
        >
          <Heart className={`h-4 w-4 ${saved ? 'fill-current text-[#8ebfa8]' : ''}`} />
        </button>

        {/* Quick View Link */}
        <Link
          to={`/product/${product.id}`}
          className="absolute bottom-3 left-3 right-3 flex translate-y-2 items-center justify-between rounded-full bg-[#062319]/95 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white opacity-0 backdrop-blur transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 shadow-lg"
        >
          <span>Examine Specifications</span>
          <ArrowUpRight className="h-3.5 w-3.5 text-[#8ebfa8]" />
        </Link>
      </div>

      <div className="pt-4 flex flex-col flex-1">
        <div className="mb-1.5 flex items-center justify-between gap-2 text-[10px] uppercase tracking-[0.16em]">
          <span className={`font-semibold ${dark ? 'text-[#8ebfa8]' : 'text-[#144a37]'}`}>
            {product.purity} · {product.grossWeight}g
          </span>
          <span className={dark ? 'text-white/60' : 'text-[#526a61]'}>
            ★ {product.rating}
          </span>
        </div>

        <Link to={`/product/${product.id}`} className="block">
          <h3 className={`font-serif text-lg leading-snug transition line-clamp-1 ${
            dark ? 'text-white group-hover:text-[#8ebfa8]' : 'text-[#0d211a] group-hover:text-[#144a37]'
          }`}>
            {product.name}
          </h3>
        </Link>

        <p className="text-[11px] text-[#526a61] mt-0.5 line-clamp-1">
          {product.certificate}
        </p>

        <div className="mt-2.5 flex items-center gap-2 pt-1 border-t border-[#144a37]/10">
          <span className={`text-base font-bold font-sans ${dark ? 'text-white' : 'text-[#0d211a]'}`}>
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className={`text-xs line-through ${dark ? 'text-white/40' : 'text-[#526a61]/60'}`}>
              {formatPrice(product.originalPrice)}
            </span>
          )}
          <span className="ml-auto text-[9px] uppercase tracking-wider text-[#144a37] font-semibold bg-[#eaf1ed] px-2 py-0.5 rounded">
            Free Insured Ship
          </span>
        </div>
      </div>
    </article>
  );
}
