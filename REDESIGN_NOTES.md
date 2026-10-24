# Ruprays Real Gold & 925 Sterling Silver Website Redesign

## Core Direction & Palette
- **Palette**: Deep Imperial Emerald (`#062319`, `#0c3325`), Royal Heritage Green (`#144a37`, `#246d53`), Sterling Silver & Platinum Frost (`#8ebfa8`, `#eaf1ed`, `#ffffff`), with Alabaster surfaces (`#f6f9f7`).
- **No gold color palette**: Distinctively avoids faux-gold / yellow brass themes in favour of a majestic deep emerald and 925 silver luxury aesthetic (inspired by heritage high jewellery salons like Cartier, Boucheron, and royal Jaipur ateliers).
- **Zero AI Vibe**: Grounded in authentic jewellery house metallurgy, genuine BIS hallmarking terminology, verifiable laser HUID standards, transparent bullion rate calculations, and editorial typography (Cormorant Garamond & Inter).

## Real Gold & Silver Technical Specifications
1. **Live Bullion Reference Ticker**:
   - 24KT Pure Gold (999 Purity)
   - 22KT Standard Gold (916 BIS Hallmark)
   - 18KT Diamond Fine Gold (750 Purity)
   - 925 Sterling Silver (92.5% Pure with Rhodium Anti-Tarnish Shielding)
   - 999 Fine Silver (Bullion Bars & Pooja Coins)
2. **Transparent Price & Weight Breakdown on Every Piece**:
   - Gross Weight (g) vs Net Metal Weight (g)
   - Stone Carat Weight & Gemmological Grade
   - Actual Bullion Value + Stone Cost + Transparent Making Charges + 3% Precious Metal GST
3. **Govt. BIS 916 & 925 Silver Assay Verification**:
   - 6-digit laser HUID code stamped on every gold creation, verifiable via the official BIS Care portal.
   - Guaranteed 92.5% silver assay stamp with electrolytic anti-tarnish protective sealing.
   - IGI / SGL diamond certification dossiers.
   - 100% Lifetime Buyback at prevailing market bullion rates.

## Complete Redesigned Pages & Architecture
- **Navbar Redesign (`NavbarRedesign.tsx`)**:
  - Live MCX bullion ticker bar + toll-free concierge helpline.
  - Transparent-to-frosted alabaster scroll transition with brand wordmark.
  - Rich mega-menu across Rings, Necklaces, Earrings, Bangles, 925 Silver, Bridal, and Coins.
  - Interactive Wishlist counter, User account status, and Shopping Bag count.
  - Full mobile drawer with bullion rates, categories, and direct contact.
- **Home Page (`HomeRedesign.tsx`)**:
  - Imperial emerald editorial hero with hallmark trust badges.
  - Live Bullion reference band with daily rate transparency.
  - "Curated by Metal" filter toggle (All, 22K/18K Gold, 925 Silver).
  - Arched category frames with responsive horizontal scroll.
  - Bestsellers and signature heirlooms grid.
  - Dedicated 925 Sterling Silver Atelier showcase.
  - 6 Pillars of Ruprays Trust (BIS Hallmark, 925 Silver, IGI Diamonds, 100% Buyback, Armored Shipping, Transparent Formula).
  - Bespoke Atelier consultation booking banner.
- **Collection / Category Listing (`CategoryRedesign.tsx`)**:
  - Hero header with collection copy and bullion reference.
  - Filter sidebar by Metal Karatage (All, 22K Gold, 18K Gold, 925 Silver) and Price Tier.
  - Responsive mobile filter modal drawer.
  - Sort by Featured, Price Low-High, Price High-Low, Weight Heavy-Light, Top Rated.
- **Product Detail (`ProductRedesign.tsx`)**:
  - Multi-angle high-res image gallery with hallmark zoom badge.
  - Metal Karat selector (22K Gold, 18K White Gold, 18K Rose Gold, 925 Silver).
  - Ring/Bangle Size selector + Interactive Size Measurement Guide modal.
  - Complimentary laser engraving input with live inner-band preview.
  - Pincode delivery estimator with delivery date feedback.
  - Transparent Price & Weight breakdown accordion.
  - BIS Hallmark & Diamond Dossier verification tabs.
  - Sticky mobile Add to Bag bar.
- **Shopping Bag & Checkout (`CartRedesign.tsx`)**:
  - Itemized pieces with purity, metal weight, size, and engraving notes.
  - Promo code discounts (`RUPRAYS10`, `SILVER925`).
  - 3% Precious Metal GST calculation + Free armored vault shipping.
  - Simulated 256-bit encrypted checkout modal with order confirmation & invoice ID.
- **Wishlist (`WishlistRedesign.tsx`)**:
  - Saved heirlooms with live price and 1-click move to bag.
- **Heritage & Metallurgy Story (`AboutRedesign.tsx`)**:
  - 40-year story from Johari Bazaar, Jaipur (1984).
  - Metallurgical breakdown of 22K, 18K, 925 Silver, and 999 Fine Bullion.
  - Educational guide on BIS Laser HUID verification.
  - Flagship Jaipur & Mumbai boutique locations.
- **Concierge & Atelier Consultation (`ContactRedesign.tsx`)**:
  - Bespoke consultation booking form with service selector, preferred date, and atelier choice.
  - Direct telephone, email, and WhatsApp links.
- **Patron Portal & Auth Modal (`LoginRedesign.tsx`, `AuthModalRedesign.tsx`)**:
  - Client vault authentication, order tracking, and saved favourites.
- **Footer (`FooterRedesign.tsx`)**:
  - Deep emerald background with silver accents, bullion disclosures, newsletter subscription, and regulatory credentials.

## Build Validation
- Passes production TypeScript compiler (`tsc -b`) and Vite production bundle build with zero errors.
