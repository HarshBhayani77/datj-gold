export type ProductAngle = {
  id: string;
  name: string;
  shortLabel: string;
  description: string;
  url: string;
};

export type JewelleryProduct = {
  id: number;
  name: string;
  category: 'Rings' | 'Necklaces' | 'Earrings' | 'Bangles' | 'Bridal' | 'Silver' | 'Gifts';
  slug: string;
  price: number;
  originalPrice?: number;
  metalType: 'Gold' | 'Silver';
  metal: '22K Yellow Gold' | '18K White Gold' | '18K Rose Gold' | '925 Sterling Silver' | 'Oxidised 925 Silver';
  purity: '22KT (916 BIS)' | '18KT (750 BIS)' | '14KT (585 BIS)' | '925 Sterling (92.5%)' | '999 Fine Silver (99.9%)';
  grossWeight: number; // in grams
  netWeight: number; // in grams
  stoneWeight?: string;
  stoneDetails?: string;
  makingChargePct: number;
  hallmarkHUID: string;
  certificate: string;
  image: string;
  angles: ProductAngle[];
  gallery: string[];
  badge?: string;
  rating: number;
  reviews: number;
  description: string;
  details: string[];
  priceBreakdown: {
    metalRate: number;
    metalTotal: number;
    stoneTotal: number;
    makingCharges: number;
    gstAmount: number;
  };
};

export const liveBullionRates = {
  gold24k: 13420, // ₹ per gram (999 pure)
  gold22k: 12300, // ₹ per gram (916 BIS Hallmark)
  gold18k: 10065, // ₹ per gram (750 purity)
  gold14k: 7830,  // ₹ per gram
  silver925: 112, // ₹ per gram (925 sterling)
  silverFine: 124, // ₹ per gram (999 fine silver)
  lastUpdated: 'Today, 10:00 AM IST (MCX Reference)',
};

const imgUrl = (id: string, width = 1000, height = 1000, extra = '') =>
  `https://images.unsplash.com/${id}?w=${width}&h=${height}&fit=crop&auto=format&q=85${extra}`;

export const products: JewelleryProduct[] = [
  // 1. 22K Kundan Choker
  {
    id: 1,
    name: 'Aaranya 22K Royal Kundan Choker',
    category: 'Necklaces',
    slug: 'necklaces',
    price: 148500,
    originalPrice: 165000,
    metalType: 'Gold',
    metal: '22K Yellow Gold',
    purity: '22KT (916 BIS)',
    grossWeight: 26.8,
    netWeight: 22.4,
    stoneWeight: '4.40 g (Kundan & Pearls)',
    stoneDetails: 'Handcrafted Bikaneri Jadau Kundan with Fresh Water Seed Pearls',
    makingChargePct: 12,
    hallmarkHUID: 'HUID: 9X4B72',
    certificate: 'Govt. Approved BIS 916 Hallmark with Laser HUID',
    image: '/images/jewelry/choker_kundan_front.jpg',
    angles: [
      {
        id: 'front',
        name: 'Angle 01 · Studio Front Showcase',
        shortLabel: 'Front Showcase',
        description: 'Direct frontal studio perspective on pure alabaster marble',
        url: '/images/jewelry/choker_kundan_front.jpg',
      },
      {
        id: 'macro',
        name: 'Angle 02 · 24K Jadau Polki Macro',
        shortLabel: 'Jadau Macro',
        description: '24K gold foil bezel setting with uncut polki gemstones & pearls',
        url: '/images/jewelry/choker_kundan_macro.jpg',
      },
      {
        id: 'reverse',
        name: 'Angle 03 · Meenakari Enamel Reverse',
        shortLabel: 'Enamel Reverse',
        description: 'Reverse side artisan view with hand-painted royal floral motifs',
        url: '/images/jewelry/choker_kundan_reverse.jpg',
      },
      {
        id: 'box',
        name: 'Angle 04 · Atelier Velvet Case & BIS Card',
        shortLabel: 'Packaging & Box',
        description: 'Emerald green velvet vault presentation box with BIS certificate',
        url: '/images/jewelry/ring_elara_box.jpg',
      },
    ],
    gallery: [
      '/images/jewelry/choker_kundan_front.jpg',
      '/images/jewelry/choker_kundan_macro.jpg',
      '/images/jewelry/choker_kundan_reverse.jpg',
      '/images/jewelry/ring_elara_box.jpg',
    ],
    badge: 'BIS 916 Gold',
    rating: 4.9,
    reviews: 84,
    description: 'A regal royal choker handcrafted in authentic 22KT yellow gold. Features traditional open-back setting kundan stones, green enamel meenakari reverse work, and an adjustable silk cord.',
    details: [
      '22KT BIS Hallmarked Solid Gold (91.6% Purity)',
      'Gross Weight: 26.80g | Net Gold: 22.40g',
      'Unique 6-digit Laser HUID on reverse clasp',
      'Certificate of Purity & 100% Lifetime Buyback Guarantee',
      'Insured Delivery in Tamper-Proof Vault Box',
    ],
    priceBreakdown: {
      metalRate: 12300,
      metalTotal: 124200,
      stoneTotal: 8500,
      makingCharges: 11500,
      gstAmount: 4300,
    },
  },

  // 2. 18K Solitaire Ring
  {
    id: 2,
    name: 'Elara 18K Solitaire Diamond Ring',
    category: 'Rings',
    slug: 'rings',
    price: 88500,
    originalPrice: 96000,
    metalType: 'Gold',
    metal: '18K White Gold',
    purity: '18KT (750 BIS)',
    grossWeight: 4.2,
    netWeight: 4.05,
    stoneWeight: '0.75 ct Total',
    stoneDetails: '0.50 ct Round Brilliant Solitaire + 0.25 ct Pavé Halo (VVS1-VS1, F-G Colour)',
    makingChargePct: 10,
    hallmarkHUID: 'HUID: 7L82K1',
    certificate: 'BIS 18K (750) Hallmark & International IGI Diamond Certificate',
    image: '/images/jewelry/ring_elara_front.jpg',
    angles: [
      {
        id: 'front',
        name: 'Angle 01 · Studio Front Showcase',
        shortLabel: 'Front Showcase',
        description: 'Direct frontal studio perspective on smooth ivory cream silk',
        url: '/images/jewelry/ring_elara_front.jpg',
      },
      {
        id: 'macro',
        name: 'Angle 02 · Crown & Prongs Macro',
        shortLabel: 'Prongs & Fire',
        description: 'Extreme close-up of the diamond crown, six-prong setting & scintillation',
        url: '/images/jewelry/ring_elara_macro.jpg',
      },
      {
        id: 'profile',
        name: 'Angle 03 · Arched Bridge Side Profile',
        shortLabel: 'Side Profile',
        description: 'Side profile showing elevation, cathedral shoulders & inner shank hallmark',
        url: '/images/jewelry/ring_elara_profile.jpg',
      },
      {
        id: 'box',
        name: 'Angle 04 · Atelier Velvet Case & IGI Dossier',
        shortLabel: 'Packaging & IGI',
        description: 'Open deep emerald velvet presentation box with official IGI certificate',
        url: '/images/jewelry/ring_elara_box.jpg',
      },
    ],
    gallery: [
      '/images/jewelry/ring_elara_front.jpg',
      '/images/jewelry/ring_elara_macro.jpg',
      '/images/jewelry/ring_elara_profile.jpg',
      '/images/jewelry/ring_elara_box.jpg',
    ],
    badge: 'IGI Certified',
    rating: 4.9,
    reviews: 132,
    description: 'A classic 18KT white gold solitaire ring showcasing an IGI-certified natural diamond centre framed by a micro-pavé halo. Polished to a mirror sheen with rhodium plating for lasting brightness.',
    details: [
      '18KT BIS Hallmarked White Gold (75.0% Purity)',
      'Gross Weight: 4.20g | Net Gold: 4.05g',
      'IGI Certificate Included with Individual QR Verification',
      'Laser Inscribed Girdle & Lifetime Free Resizing',
      '15-Day Exchange & 100% Diamond Buyback Value',
    ],
    priceBreakdown: {
      metalRate: 10065,
      metalTotal: 40763,
      stoneTotal: 39500,
      makingCharges: 5660,
      gstAmount: 2577,
    },
  },

  // 3. 925 Sterling Silver Handcrafted Kada
  {
    id: 3,
    name: 'Rajputana Solid 925 Silver Kada',
    category: 'Silver',
    slug: 'silver',
    price: 14200,
    originalPrice: 16500,
    metalType: 'Silver',
    metal: '925 Sterling Silver',
    purity: '925 Sterling (92.5%)',
    grossWeight: 48.5,
    netWeight: 48.5,
    makingChargePct: 14,
    hallmarkHUID: 'ASSAY: SLV925-88',
    certificate: 'Govt. Recognized 925 Silver Assay Hallmark Stamp',
    image: '/images/jewelry/kada_silver_front.jpg',
    angles: [
      {
        id: 'front',
        name: 'Angle 01 · Upright Solid Kada Showcase',
        shortLabel: 'Front Showcase',
        description: 'Hand-carved Rajasthani royal elephant filigree on slate stone pedestal',
        url: '/images/jewelry/kada_silver_front.jpg',
      },
      {
        id: 'macro',
        name: 'Angle 02 · Chased Relief & 925 Assay',
        shortLabel: 'Carving Macro',
        description: 'Micro-beaded rim detailing and laser 925 government assay stamp',
        url: '/images/jewelry/kada_silver_macro.jpg',
      },
      {
        id: 'hinge',
        name: 'Angle 03 · Concealed Screw Lock Hinge',
        shortLabel: 'Hinge Detail',
        description: 'Concealed mechanical screw-lock hinge and smooth inner wrist contour',
        url: '/images/jewelry/kada_silver_hinge.jpg',
      },
      {
        id: 'box',
        name: 'Angle 04 · Presentation Case & Cloth',
        shortLabel: 'Packaging & Box',
        description: 'Emerald presentation vault with anti-tarnish polishing cloth',
        url: '/images/jewelry/ring_elara_box.jpg',
      },
    ],
    gallery: [
      '/images/jewelry/kada_silver_front.jpg',
      '/images/jewelry/kada_silver_macro.jpg',
      '/images/jewelry/kada_silver_hinge.jpg',
      '/images/jewelry/ring_elara_box.jpg',
    ],
    badge: '925 Silver',
    rating: 4.9,
    reviews: 95,
    description: 'A heavy, solid 925 Sterling Silver Kada forged by master silversmiths. Features hand-chased geometric elephant filigree motifs and an anti-tarnish rhodium barrier that preserves pure silver lustre.',
    details: [
      'Genuine 925 Sterling Silver (92.5% Fine Silver)',
      'Solid Weight: 48.50 grams',
      'Hallmarked 925 Stamp & Authenticity Certificate',
      'Anti-Tarnish Protective Shield Treatment',
      'Screw-lock hinge mechanism for secure wrist fit',
    ],
    priceBreakdown: {
      metalRate: 112,
      metalTotal: 5432,
      stoneTotal: 0,
      makingCharges: 8354,
      gstAmount: 414,
    },
  },

  // 4. 22K Antique Gold Bangles (Pair)
  {
    id: 4,
    name: 'Mehr 22K Antique Gold Bangles (Pair)',
    category: 'Bangles',
    slug: 'bangles',
    price: 198000,
    originalPrice: 215000,
    metalType: 'Gold',
    metal: '22K Yellow Gold',
    purity: '22KT (916 BIS)',
    grossWeight: 32.5,
    netWeight: 32.5,
    makingChargePct: 11,
    hallmarkHUID: 'HUID: 6W19P3',
    certificate: 'BIS 916 Hallmark with 6-Digit HUID Laser Inscription',
    image: imgUrl('photo-1608042314453-ae338d80c427'),
    angles: [
      {
        id: 'front',
        name: 'Angle 01 · Pair Front Showcase',
        shortLabel: 'Front Showcase',
        description: 'Solid 22KT gold antique pair with traditional rawa granulation',
        url: imgUrl('photo-1608042314453-ae338d80c427'),
      },
      {
        id: 'macro',
        name: 'Angle 02 · Nakashi Carving Macro',
        shortLabel: 'Nakashi Macro',
        description: 'Artisan hand-chased repoussé relief and warm antique patina finish',
        url: imgUrl('photo-1608042314453-ae338d80c427', 1000, 1000, '&crop=focalpoint&fp-z=2.4&fp-x=0.5&fp-y=0.5'),
      },
      {
        id: 'stacked',
        name: 'Angle 03 · Stacked Silhouette',
        shortLabel: 'Stacked Profile',
        description: 'Profile angle showing solid gold thickness and inner hallmark stamping',
        url: imgUrl('photo-1608042314453-ae338d80c427', 1000, 1000, '&crop=focalpoint&fp-z=1.6&fp-x=0.4&fp-y=0.6'),
      },
      {
        id: 'box',
        name: 'Angle 04 · Heritage Heirloom Case',
        shortLabel: 'Packaging & Box',
        description: 'Datj presentation box with BIS 916 laser HUID certificate card',
        url: '/images/jewelry/ring_elara_box.jpg',
      },
    ],
    gallery: [
      imgUrl('photo-1608042314453-ae338d80c427'),
      imgUrl('photo-1608042314453-ae338d80c427', 1000, 1000, '&crop=focalpoint&fp-z=2.4&fp-x=0.5&fp-y=0.5'),
      imgUrl('photo-1608042314453-ae338d80c427', 1000, 1000, '&crop=focalpoint&fp-z=1.6&fp-x=0.4&fp-y=0.6'),
      '/images/jewelry/ring_elara_box.jpg',
    ],
    badge: 'BIS 916 Gold',
    rating: 4.9,
    reviews: 46,
    description: 'A magnificent pair of 22KT gold bangles crafted with traditional rawa (granulation) and nakashi techniques. Solid gold build with a warm antique patina suitable for bridal and festive ensembles.',
    details: [
      '22KT BIS Hallmarked Solid Gold (91.6% Pure)',
      'Gross Weight: 32.50g (16.25g each) | Net Gold: 32.50g',
      'Hallmark HUID stamped on inner curve of both bangles',
      'Available in standard sizes 2.4, 2.6, and 2.8',
      '100% Lifetime Buyback at prevailing gold bullion rate',
    ],
    priceBreakdown: {
      metalRate: 12300,
      metalTotal: 172000,
      stoneTotal: 0,
      makingCharges: 20235,
      gstAmount: 5765,
    },
  },

  // 5. 925 Oxidised Silver Filigree Jhumkas
  {
    id: 5,
    name: 'Chandrika 925 Oxidised Silver Jhumkas',
    category: 'Silver',
    slug: 'silver',
    price: 7800,
    originalPrice: 9200,
    metalType: 'Silver',
    metal: 'Oxidised 925 Silver',
    purity: '925 Sterling (92.5%)',
    grossWeight: 24.2,
    netWeight: 22.8,
    stoneWeight: '1.40 g (Ghungroo Pearls)',
    stoneDetails: 'Natural Freshwater Micro-pearls & Black Onyx droplet',
    makingChargePct: 15,
    hallmarkHUID: 'ASSAY: SLV925-54',
    certificate: 'Govt. 925 Sterling Silver Assay Certificate',
    image: imgUrl('photo-1535632066927-ab7c9ab60908'),
    angles: [
      {
        id: 'front',
        name: 'Angle 01 · Tribal Filigree Showcase',
        shortLabel: 'Front Showcase',
        description: 'Pair of handcrafted 925 silver oxidised filigree jhumkas upright',
        url: imgUrl('photo-1535632066927-ab7c9ab60908'),
      },
      {
        id: 'macro',
        name: 'Angle 02 · Ghungroo Droplet Macro',
        shortLabel: 'Ghungroo Macro',
        description: 'Acoustic silver bells and micro-pearl fringe with shadow patina',
        url: imgUrl('photo-1535632066927-ab7c9ab60908', 1000, 1000, '&crop=focalpoint&fp-z=2.5&fp-x=0.5&fp-y=0.5'),
      },
      {
        id: 'profile',
        name: 'Angle 03 · Bell Suspension & Clasp',
        shortLabel: 'Side Profile',
        description: 'Hypoallergenic silver post and balanced bell curvature silhouette',
        url: imgUrl('photo-1535632066927-ab7c9ab60908', 1000, 1000, '&crop=focalpoint&fp-z=1.6&fp-x=0.5&fp-y=0.3'),
      },
      {
        id: 'box',
        name: 'Angle 04 · Presentation Box & Silver Cloth',
        shortLabel: 'Packaging & Box',
        description: 'Datj signature velvet box with silver care cleaning cloth',
        url: '/images/jewelry/ring_elara_box.jpg',
      },
    ],
    gallery: [
      imgUrl('photo-1535632066927-ab7c9ab60908'),
      imgUrl('photo-1535632066927-ab7c9ab60908', 1000, 1000, '&crop=focalpoint&fp-z=2.5&fp-x=0.5&fp-y=0.5'),
      imgUrl('photo-1535632066927-ab7c9ab60908', 1000, 1000, '&crop=focalpoint&fp-z=1.6&fp-x=0.5&fp-y=0.3'),
      '/images/jewelry/ring_elara_box.jpg',
    ],
    badge: '925 Silver',
    rating: 4.8,
    reviews: 67,
    description: 'Intricate tribal filigree jhumkas handcrafted in solid 925 Sterling Silver. Hand-oxidised to achieve an antique silver shadow effect with acoustic ghungroo droplets.',
    details: [
      '925 Hallmarked Sterling Silver',
      'Weight: 24.20 grams | Earring Length: 5.5 cm',
      'Comfort-fit post with silicone-cushioned silver pushers',
      'Skin-friendly hypoallergenic nickel-free alloy',
      'Datj Velvet Presentation Box & Silver Cloth',
    ],
    priceBreakdown: {
      metalRate: 112,
      metalTotal: 2553,
      stoneTotal: 1200,
      makingCharges: 3820,
      gstAmount: 227,
    },
  },

  // 6. 18K Emerald & Diamond Pendant
  {
    id: 6,
    name: 'Anaisha 18K Zambian Emerald & Diamond Pendant',
    category: 'Necklaces',
    slug: 'necklaces',
    price: 72000,
    originalPrice: 81000,
    metalType: 'Gold',
    metal: '18K White Gold',
    purity: '18KT (750 BIS)',
    grossWeight: 5.8,
    netWeight: 5.2,
    stoneWeight: '1.20 ct (Emerald) + 0.35 ct (Diamonds)',
    stoneDetails: 'Certified Natural Zambian Emerald Octagon Cut + 28 Round Brilliant Diamonds',
    makingChargePct: 10,
    hallmarkHUID: 'HUID: 5Z31Q9',
    certificate: 'BIS 750 Hallmark & Gemmological Lab Certificate',
    image: '/images/jewelry/pendant_emerald_front.jpg',
    angles: [
      {
        id: 'front',
        name: 'Angle 01 · Zambian Emerald Showcase',
        shortLabel: 'Front Showcase',
        description: 'Vivid deep forest green octagonal cut emerald encircled by diamonds',
        url: '/images/jewelry/pendant_emerald_front.jpg',
      },
      {
        id: 'macro',
        name: 'Angle 02 · Emerald Gemstone Facets',
        shortLabel: 'Gem Facets',
        description: 'Macro detail showing clarity, step-cut geometry and diamond halo prongs',
        url: '/images/jewelry/pendant_emerald_front.jpg',
      },
      {
        id: 'chain',
        name: 'Angle 03 · 18K Chain & Gallery Detail',
        shortLabel: 'Chain & Bail',
        description: '18KT white gold adjustable cable chain and openwork light pavilion',
        url: '/images/jewelry/pendant_emerald_front.jpg',
      },
      {
        id: 'box',
        name: 'Angle 04 · Gem Certificate & Presentation',
        shortLabel: 'Certificate & Box',
        description: 'Presentation case with certified laboratory gemstone dossier',
        url: '/images/jewelry/ring_elara_box.jpg',
      },
    ],
    gallery: [
      '/images/jewelry/pendant_emerald_front.jpg',
      '/images/jewelry/pendant_emerald_front.jpg',
      '/images/jewelry/pendant_emerald_front.jpg',
      '/images/jewelry/ring_elara_box.jpg',
    ],
    badge: 'Natural Gemstone',
    rating: 4.8,
    reviews: 58,
    description: 'A deep forest-green Zambian emerald encircled by micro-prong set natural diamonds in solid 18KT white gold. Includes a complimentary 18-inch 18K adjustable chain.',
    details: [
      '18KT BIS Hallmarked White Gold (75.0% Purity)',
      'Gross Weight: 5.80g | Natural Emerald: 1.20 Carat',
      'Natural Diamonds: 0.35ct (VVS-VS Clarity, E-F Colour)',
      'Includes 18KT White Gold 18-inch Cable Chain',
      'Insured transit with tamper-proof seal packaging',
    ],
    priceBreakdown: {
      metalRate: 10065,
      metalTotal: 52338,
      stoneTotal: 12500,
      makingCharges: 5064,
      gstAmount: 2098,
    },
  },

  // 7. 18K Tennis Bracelet
  {
    id: 7,
    name: 'Tara 18K Diamond Tennis Bracelet',
    category: 'Bangles',
    slug: 'bangles',
    price: 185000,
    originalPrice: 205000,
    metalType: 'Gold',
    metal: '18K White Gold',
    purity: '18KT (750 BIS)',
    grossWeight: 12.4,
    netWeight: 11.8,
    stoneWeight: '3.00 ct Total Diamonds',
    stoneDetails: '52 Matched Round Brilliant Cut Diamonds (VS2 Clarity, G-H Colour)',
    makingChargePct: 10,
    hallmarkHUID: 'HUID: 3T92L4',
    certificate: 'BIS 18K Hallmark & SGL/IGI Diamond Certification',
    image: imgUrl('photo-1611591437281-460bfbe1220a'),
    angles: [
      {
        id: 'front',
        name: 'Angle 01 · Diamond Line Showcase',
        shortLabel: 'Front Showcase',
        description: 'Continuous four-prong natural diamond tennis bracelet gracefully curved',
        url: imgUrl('photo-1611591437281-460bfbe1220a'),
      },
      {
        id: 'macro',
        name: 'Angle 02 · Collet Prong Macro',
        shortLabel: 'Diamond Collets',
        description: 'Individual four-prong articulated links showing matched diamond brilliance',
        url: imgUrl('photo-1611591437281-460bfbe1220a', 1000, 1000, '&crop=focalpoint&fp-z=2.5&fp-x=0.5&fp-y=0.5'),
      },
      {
        id: 'clasp',
        name: 'Angle 03 · Double Safety Clasp',
        shortLabel: 'Safety Clasp',
        description: 'Precision concealed locking tongue with dual side security clips',
        url: imgUrl('photo-1611591437281-460bfbe1220a', 1000, 1000, '&crop=focalpoint&fp-z=1.7&fp-x=0.6&fp-y=0.4'),
      },
      {
        id: 'box',
        name: 'Angle 04 · Presentation Case & IGI Dossier',
        shortLabel: 'Packaging & IGI',
        description: 'Longline emerald jewelry case with certified diamond grading report',
        url: '/images/jewelry/ring_elara_box.jpg',
      },
    ],
    gallery: [
      imgUrl('photo-1611591437281-460bfbe1220a'),
      imgUrl('photo-1611591437281-460bfbe1220a', 1000, 1000, '&crop=focalpoint&fp-z=2.5&fp-x=0.5&fp-y=0.5'),
      imgUrl('photo-1611591437281-460bfbe1220a', 1000, 1000, '&crop=focalpoint&fp-z=1.7&fp-x=0.6&fp-y=0.4'),
      '/images/jewelry/ring_elara_box.jpg',
    ],
    badge: 'Bestseller',
    rating: 4.9,
    reviews: 91,
    description: 'A continuous line of 52 precision-matched natural diamonds individually set in four-prong 18KT white gold collets. Fitted with a double-safety hidden tongue clasp.',
    details: [
      '18KT BIS Hallmarked White Gold',
      'Total Diamond Weight: 3.00 Carats (52 Diamonds)',
      'Double safety clip lock for active security',
      '7.0 Inch standard length (custom sizing on request)',
      'Lifetime diamond upgrade policy & free annual cleaning',
    ],
    priceBreakdown: {
      metalRate: 10065,
      metalTotal: 78500,
      stoneTotal: 88000,
      makingCharges: 13110,
      gstAmount: 5390,
    },
  },

  // 8. 999 Pure Silver 50g Bullion Bar
  {
    id: 8,
    name: 'Devam 999 Fine Silver 50g Bullion Bar',
    category: 'Gifts',
    slug: 'gifts',
    price: 6850,
    originalPrice: 7500,
    metalType: 'Silver',
    metal: '925 Sterling Silver',
    purity: '999 Fine Silver (99.9%)',
    grossWeight: 50.0,
    netWeight: 50.0,
    makingChargePct: 8,
    hallmarkHUID: 'NABL-999-50G',
    certificate: 'NABL Accredited Assay Certificate with 999 Purity Guarantee',
    image: imgUrl('photo-1602173574767-37ac01994b2a'),
    angles: [
      {
        id: 'front',
        name: 'Angle 01 · Minted 999 Silver Bar',
        shortLabel: 'Front Showcase',
        description: 'Investment grade 50 gram fine silver bar embossed with sacred deities',
        url: imgUrl('photo-1602173574767-37ac01994b2a'),
      },
      {
        id: 'macro',
        name: 'Angle 02 · Assay Inscription & Seal',
        shortLabel: 'Purity Stamp',
        description: 'Close-up of 999.0 purity hallmark, weight guarantee & serial number',
        url: imgUrl('photo-1602173574767-37ac01994b2a', 1000, 1000, '&crop=focalpoint&fp-z=2.4&fp-x=0.5&fp-y=0.5'),
      },
      {
        id: 'blister',
        name: 'Angle 03 · Tamper-Evident Packaging',
        shortLabel: 'Blister Seal',
        description: 'Hermetically sealed certicard with tamper-evident holographic film',
        url: imgUrl('photo-1602173574767-37ac01994b2a', 1000, 1000, '&crop=focalpoint&fp-z=1.6&fp-x=0.5&fp-y=0.3'),
      },
      {
        id: 'box',
        name: 'Angle 04 · NABL Guarantee Card',
        shortLabel: 'Assay Certificate',
        description: 'Official accredited laboratory assay certificate with barcode',
        url: '/images/jewelry/ring_elara_box.jpg',
      },
    ],
    gallery: [
      imgUrl('photo-1602173574767-37ac01994b2a'),
      imgUrl('photo-1602173574767-37ac01994b2a', 1000, 1000, '&crop=focalpoint&fp-z=2.4&fp-x=0.5&fp-y=0.5'),
      imgUrl('photo-1602173574767-37ac01994b2a', 1000, 1000, '&crop=focalpoint&fp-z=1.6&fp-x=0.5&fp-y=0.3'),
      '/images/jewelry/ring_elara_box.jpg',
    ],
    badge: '999 Fine Silver',
    rating: 5.0,
    reviews: 142,
    description: 'Investment-grade 999 pure fine silver bar embossed with sacred Lakshmi and Ganesh iconography. Hermetically sealed in tamper-evident blister packaging with assay cert-card.',
    details: [
      '999 Pure Fine Silver (99.9% Purity Certified)',
      'Exact Weight: 50.00 grams guaranteed',
      'Tamper-Proof Blister Packing with Serial Number',
      'Ideal for Diwali pooja, weddings, and bullion savings',
      '100% Guaranteed Buyback at Spot Silver Rate',
    ],
    priceBreakdown: {
      metalRate: 124,
      metalTotal: 6200,
      stoneTotal: 0,
      makingCharges: 450,
      gstAmount: 200,
    },
  },

  // 9. 22K Saanvi Temple Bridal Haar
  {
    id: 9,
    name: 'Saanvi 22K Heritage Temple Bridal Haar',
    category: 'Bridal',
    slug: 'bridal-sets',
    price: 345000,
    originalPrice: 380000,
    metalType: 'Gold',
    metal: '22K Yellow Gold',
    purity: '22KT (916 BIS)',
    grossWeight: 56.4,
    netWeight: 52.8,
    stoneWeight: '3.60 g (Kempu Rubies & Emerald Beads)',
    stoneDetails: 'Handcrafted South Indian Kempu Stones with Hanging Basra Pearl Clusters',
    makingChargePct: 13,
    hallmarkHUID: 'HUID: 2B88M6',
    certificate: 'BIS 916 Hallmark with HUID & Govt. Registered Jewellers Guarantee',
    image: imgUrl('photo-1627293509201-cd0c780043e6'),
    angles: [
      {
        id: 'front',
        name: 'Angle 01 · Grand Temple Haar Showcase',
        shortLabel: 'Front Showcase',
        description: 'Architectural temple masterpiece in solid 22KT gold featuring Goddess Lakshmi',
        url: imgUrl('photo-1627293509201-cd0c780043e6'),
      },
      {
        id: 'macro',
        name: 'Angle 02 · Lakshmi Sculpture Macro',
        shortLabel: 'Lakshmi Macro',
        description: 'Exquisite hand-chased nakashi repoussé artisan craftsmanship on solid gold',
        url: imgUrl('photo-1627293509201-cd0c780043e6', 1000, 1000, '&crop=focalpoint&fp-z=2.5&fp-x=0.5&fp-y=0.6'),
      },
      {
        id: 'fringe',
        name: 'Angle 03 · Kempu Stones & Pearls',
        shortLabel: 'Kempu Fringe',
        description: 'Deep red kempu cabochons and natural freshwater pearl cluster droplets',
        url: imgUrl('photo-1627293509201-cd0c780043e6', 1000, 1000, '&crop=focalpoint&fp-z=1.8&fp-x=0.5&fp-y=0.8'),
      },
      {
        id: 'box',
        name: 'Angle 04 · Royal Bridal Heirloom Vault',
        shortLabel: 'Bridal Vault',
        description: 'Deluxe satin-lined heirloom presentation chest with BIS 916 HUID certificate',
        url: '/images/jewelry/ring_elara_box.jpg',
      },
    ],
    gallery: [
      imgUrl('photo-1627293509201-cd0c780043e6'),
      imgUrl('photo-1627293509201-cd0c780043e6', 1000, 1000, '&crop=focalpoint&fp-z=2.5&fp-x=0.5&fp-y=0.6'),
      imgUrl('photo-1627293509201-cd0c780043e6', 1000, 1000, '&crop=focalpoint&fp-z=1.8&fp-x=0.5&fp-y=0.8'),
      '/images/jewelry/ring_elara_box.jpg',
    ],
    badge: 'Bridal Heirloom',
    rating: 5.0,
    reviews: 31,
    description: 'An architectural temple jewellery masterpiece in solid 22KT gold. Features Goddess Lakshmi seated upon a lotus, flanked by dancing peacocks, set with deep red kempu cabochons and natural pearls.',
    details: [
      '22KT BIS Hallmarked Solid Gold (91.6% Purity)',
      'Gross Weight: 56.40g | Pure Gold Content: 52.80g',
      'Hand-chased nakashi repoussé artisan craftsmanship',
      'Includes complimentary Private Bridal Atelier Consultation',
      'Armored transit delivery with 100% full value insurance',
    ],
    priceBreakdown: {
      metalRate: 12300,
      metalTotal: 295000,
      stoneTotal: 12000,
      makingCharges: 27950,
      gstAmount: 10050,
    },
  },

  // 10. 925 Sterling Silver Italian Link Chain
  {
    id: 10,
    name: 'Aethel 925 Sterling Silver Figaro Chain',
    category: 'Silver',
    slug: 'silver',
    price: 6400,
    originalPrice: 7600,
    metalType: 'Silver',
    metal: '925 Sterling Silver',
    purity: '925 Sterling (92.5%)',
    grossWeight: 28.0,
    netWeight: 28.0,
    makingChargePct: 12,
    hallmarkHUID: 'ASSAY: SLV925-91',
    certificate: 'Italian Silver Assay Certified 925 Stamp',
    image: imgUrl('photo-1588880331179-bc9b93a8cb5e'),
    angles: [
      {
        id: 'front',
        name: 'Angle 01 · Figaro Link Showcase',
        shortLabel: 'Front Showcase',
        description: 'Substantial 22-inch Italian Figaro chain crafted in 925 Sterling Silver',
        url: imgUrl('photo-1588880331179-bc9b93a8cb5e'),
      },
      {
        id: 'macro',
        name: 'Angle 02 · Diamond-Cut Bevel Links',
        shortLabel: 'Links Macro',
        description: 'Bevelled diamond-cut links designed to catch light with rhodium shielding',
        url: imgUrl('photo-1588880331179-bc9b93a8cb5e', 1000, 1000, '&crop=focalpoint&fp-z=2.4&fp-x=0.5&fp-y=0.5'),
      },
      {
        id: 'clasp',
        name: 'Angle 03 · 925 Stamped Lobster Lock',
        shortLabel: 'Clasp Detail',
        description: 'Heavy-duty Italian lobster clasp with authentic 925 assay stamping',
        url: imgUrl('photo-1588880331179-bc9b93a8cb5e', 1000, 1000, '&crop=focalpoint&fp-z=1.8&fp-x=0.4&fp-y=0.3'),
      },
      {
        id: 'box',
        name: 'Angle 04 · Presentation Box & Guarantee',
        shortLabel: 'Packaging & Box',
        description: 'Datj presentation box with metal purity certificate card',
        url: '/images/jewelry/ring_elara_box.jpg',
      },
    ],
    gallery: [
      imgUrl('photo-1588880331179-bc9b93a8cb5e'),
      imgUrl('photo-1588880331179-bc9b93a8cb5e', 1000, 1000, '&crop=focalpoint&fp-z=2.4&fp-x=0.5&fp-y=0.5'),
      imgUrl('photo-1588880331179-bc9b93a8cb5e', 1000, 1000, '&crop=focalpoint&fp-z=1.8&fp-x=0.4&fp-y=0.3'),
      '/images/jewelry/ring_elara_box.jpg',
    ],
    badge: '925 Silver',
    rating: 4.9,
    reviews: 88,
    description: 'A substantial 22-inch Italian Figaro chain crafted in pure 925 Sterling Silver. Diamond-cut bevelled links catch light brilliantly with everyday anti-tarnish rhodium shielding.',
    details: [
      'Genuine 925 Sterling Silver',
      'Weight: 28.00 grams | Chain Length: 22 Inches (4.5mm width)',
      'Heavy-duty Italian lobster clasp with 925 stamp',
      'Electrolytic rhodium coating prevents darkening',
      'Lifetime metal authenticity certificate included',
    ],
    priceBreakdown: {
      metalRate: 112,
      metalTotal: 3136,
      stoneTotal: 0,
      makingCharges: 3078,
      gstAmount: 186,
    },
  },

  // 11. 18K Rose Gold Eternity Band
  {
    id: 11,
    name: 'Ira 18K Rose Gold Diamond Band',
    category: 'Rings',
    slug: 'rings',
    price: 76000,
    originalPrice: 84000,
    metalType: 'Gold',
    metal: '18K Rose Gold',
    purity: '18KT (750 BIS)',
    grossWeight: 4.6,
    netWeight: 4.35,
    stoneWeight: '0.42 ct Diamonds',
    stoneDetails: '18 Brilliant Cut Channel Set Diamonds (VS1 Clarity, G Colour)',
    makingChargePct: 10,
    hallmarkHUID: 'HUID: 8K11F5',
    certificate: 'BIS 18K (750) Hallmark & IGI Certificate',
    image: imgUrl('photo-1603561591411-07134e71a2a9'),
    angles: [
      {
        id: 'front',
        name: 'Angle 01 · Diamond Band Showcase',
        shortLabel: 'Front Showcase',
        description: 'Contoured 18KT rose gold wedding band with 18 channel-set natural diamonds',
        url: imgUrl('photo-1603561591411-07134e71a2a9'),
      },
      {
        id: 'macro',
        name: 'Angle 02 · Channel Setting Macro',
        shortLabel: 'Channel Macro',
        description: 'Flush channel walls and brilliant cut diamonds set without protruding prongs',
        url: imgUrl('photo-1603561591411-07134e71a2a9', 1000, 1000, '&crop=focalpoint&fp-z=2.5&fp-x=0.5&fp-y=0.5'),
      },
      {
        id: 'profile',
        name: 'Angle 03 · Comfort-Fit Inner Shank',
        shortLabel: 'Inner Shank',
        description: 'Comfort-fit curved interior profile designed to stack beside engagement rings',
        url: imgUrl('photo-1603561591411-07134e71a2a9', 1000, 1000, '&crop=focalpoint&fp-z=1.6&fp-x=0.4&fp-y=0.6'),
      },
      {
        id: 'box',
        name: 'Angle 04 · Engraving Case & IGI Card',
        shortLabel: 'Packaging & Box',
        description: 'Presentation case with complimentary custom laser engraving service',
        url: '/images/jewelry/ring_elara_box.jpg',
      },
    ],
    gallery: [
      imgUrl('photo-1603561591411-07134e71a2a9'),
      imgUrl('photo-1603561591411-07134e71a2a9', 1000, 1000, '&crop=focalpoint&fp-z=2.5&fp-x=0.5&fp-y=0.5'),
      imgUrl('photo-1603561591411-07134e71a2a9', 1000, 1000, '&crop=focalpoint&fp-z=1.6&fp-x=0.4&fp-y=0.6'),
      '/images/jewelry/ring_elara_box.jpg',
    ],
    badge: '18K Gold',
    rating: 4.8,
    reviews: 74,
    description: 'A softly contoured wedding band in 18KT rose gold featuring 18 channel-set natural diamonds. Designed with comfort-fit curved edges to stack seamlessly beside your engagement ring.',
    details: [
      '18KT BIS Hallmarked Rose Gold (75.0% Purity)',
      'Gross Weight: 4.60g | Diamond Weight: 0.42ct',
      'Comfort-fit domed interior profile',
      'Complimentary custom name/date laser engraving',
      'Lifetime exchange and cleaning service',
    ],
    priceBreakdown: {
      metalRate: 10065,
      metalTotal: 43782,
      stoneTotal: 24500,
      makingCharges: 5504,
      gstAmount: 2214,
    },
  },

  // 12. 18K Diamond Solitaire Studs
  {
    id: 12,
    name: 'Abeer 18K Diamond Solitaire Studs',
    category: 'Earrings',
    slug: 'earrings',
    price: 64000,
    originalPrice: 72000,
    metalType: 'Gold',
    metal: '18K White Gold',
    purity: '18KT (750 BIS)',
    grossWeight: 3.2,
    netWeight: 3.06,
    stoneWeight: '0.70 ct Pair (0.35 ct Each)',
    stoneDetails: '2 Matching Round Brilliant Diamonds (VVS2 Clarity, E-F Colour)',
    makingChargePct: 9,
    hallmarkHUID: 'HUID: 4D73T8',
    certificate: 'BIS 18K Hallmark & Twin IGI Certification Cards',
    image: '/images/jewelry/earrings_studs_front.jpg',
    angles: [
      {
        id: 'front',
        name: 'Angle 01 · Solitaire Studs Upright',
        shortLabel: 'Front Showcase',
        description: 'Pair of timeless 18KT white gold round brilliant solitaire diamond studs',
        url: '/images/jewelry/earrings_studs_front.jpg',
      },
      {
        id: 'macro',
        name: 'Angle 02 · Four-Prong Facet Dispersion',
        shortLabel: 'Prongs & Fire',
        description: 'Macro view showing diamond clarity, fire and four-prong elevation',
        url: '/images/jewelry/earrings_studs_front.jpg',
      },
      {
        id: 'post',
        name: 'Angle 03 · Threaded Safety Screw Post',
        shortLabel: 'Screw Post',
        description: 'Precision threaded safety screw back posts for daily security',
        url: '/images/jewelry/earrings_studs_front.jpg',
      },
      {
        id: 'box',
        name: 'Angle 04 · Twin IGI Dossier & Velvet Box',
        shortLabel: 'Packaging & IGI',
        description: 'Signature presentation box with independent twin IGI certificates',
        url: '/images/jewelry/ring_elara_box.jpg',
      },
    ],
    gallery: [
      '/images/jewelry/earrings_studs_front.jpg',
      '/images/jewelry/earrings_studs_front.jpg',
      '/images/jewelry/earrings_studs_front.jpg',
      '/images/jewelry/ring_elara_box.jpg',
    ],
    badge: 'Everyday Classic',
    rating: 4.9,
    reviews: 108,
    description: 'Timeless diamond solitaire studs set in four-prong 18KT white gold with threaded safety screw posts. Each stone is individually inspected and laser-inscribed by IGI.',
    details: [
      '18KT BIS Hallmarked White Gold',
      'Total Diamond Weight: 0.70 Carats (Pair)',
      'Threaded screw backs ensure 100% daily wear safety',
      'Independent IGI Diamond Dossier for each ear stud',
      '100% Lifetime Diamond Buyback Guarantee',
    ],
    priceBreakdown: {
      metalRate: 10065,
      metalTotal: 30798,
      stoneTotal: 27500,
      makingCharges: 3839,
      gstAmount: 1863,
    },
  },
];

export const categoryTiles = [
  { label: 'Rings', slug: 'rings', image: products[1].image, count: '48 Designs' },
  { label: 'Necklaces', slug: 'necklaces', image: products[0].image, count: '36 Designs' },
  { label: 'Earrings', slug: 'earrings', image: products[11].image, count: '42 Designs' },
  { label: 'Bangles & Kadas', slug: 'bangles', image: products[2].image, count: '29 Designs' },
  { label: '925 Sterling Silver', slug: 'silver', image: products[2].image, count: '34 Designs' },
  { label: 'The Bridal Edit', slug: 'bridal-sets', image: products[8].image, count: '18 Heirlooms' },
  { label: 'Coins & Gifts', slug: 'gifts', image: products[7].image, count: '25 Coins' },
];

export const formatPrice = (value: number) => `₹${value.toLocaleString('en-IN')}`;

export const findProduct = (id?: string) =>
  products.find((product) => String(product.id) === id) ?? products[0];
