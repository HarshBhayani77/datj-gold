import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { liveBullionRates } from '../../data/catalog';

export default function AboutRedesign() {
  return (
    <div className="bg-[#f6f9f7] text-[#0d211a]">
      
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#062319] text-white py-24 px-5 md:px-10 lg:py-32 border-b border-white/10">
        <div className="mx-auto max-w-[1500px] grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.28em] text-[#8ebfa8]">
              <span className="w-6 h-px bg-[#8ebfa8]/50" />
              <span>Heritage Since 1984 · Surat Atelier</span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.92]">
              Honesty in metal,
              <span className="block italic text-[#8ebfa8] font-normal">purity in every grain.</span>
            </h1>
            <p className="text-base text-white/80 leading-7 font-light max-w-xl">
              Founded four decades ago in the diamond and precious metal capital of Surat, Gujarat, Datj was born from a singular conviction: that fine gold and silver jewellery must be grounded in mathematical purity, verifiable hallmarking, and transparent pricing.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link to="/collection/featured" className="lux-button bg-white text-[#062319] hover:bg-[#eef4f1] border-white">
                Explore Current Vault
              </Link>
              <Link to="/contact" className="lux-button-silver">
                Visit Ateliers & Boutiques
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-white/5 border border-white/15 shadow-2xl">
            <img
              src="/images/jewelry/choker_kundan_macro.jpg"
              alt="Artisan jeweler inspecting 24k gold foil hallmark"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#062319]/90 backdrop-blur-md border border-white/20 text-xs shadow-lg">
              <p className="font-bold uppercase tracking-wider text-[#8ebfa8]">The Datj Hallmark Seal</p>
              <p className="text-white/80 text-[11px] mt-0.5">Every piece carries our registered jeweller mark and govt. 6-digit laser HUID.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Karats & Silver Metallurgical Standard */}
      <section className="px-5 py-20 md:px-10 lg:py-28">
        <div className="mx-auto max-w-[1500px]">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow">Metallurgical Authenticity</p>
            <h2 className="display-title mx-auto">Understanding our purities</h2>
            <p className="text-sm text-[#526a61] mt-3">
              We never deal in under-karatage or mystery alloys. Here is the exact chemical composition of every metal that leaves our workshop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 22K Gold */}
            <div className="rounded-3xl bg-white p-7 border border-[#144a37]/15 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-[10px] font-mono font-semibold uppercase tracking-[0.18em] text-[#144a37]">
                <span className="w-1.5 h-1.5 bg-[#144a37] rotate-45 shrink-0" />
                <span>BIS 916 Standard</span>
              </div>
              <h3 className="font-serif text-3xl font-bold text-[#0d211a]">
                22KT Royal Gold
              </h3>
              <p className="text-xs text-[#526a61] leading-relaxed">
                91.6% pure fine gold alloyed with pure copper and silver for optimal structural resilience. Ideal for traditional Kundan, Jadau, Temple jewellery, and bridal haars.
              </p>
              <div className="pt-2 border-t border-[#144a37]/10 text-xs font-mono text-[#0c3325]">
                Today's Rate: ₹{liveBullionRates.gold22k}/gram
              </div>
            </div>

            {/* 18K Gold */}
            <div className="rounded-3xl bg-white p-7 border border-[#144a37]/15 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-[10px] font-mono font-semibold uppercase tracking-[0.18em] text-[#144a37]">
                <span className="w-1.5 h-1.5 bg-[#144a37] rotate-45 shrink-0" />
                <span>BIS 750 Standard</span>
              </div>
              <h3 className="font-serif text-3xl font-bold text-[#0d211a]">
                18KT Diamond Gold
              </h3>
              <p className="text-xs text-[#526a61] leading-relaxed">
                75.0% pure fine gold. The international standard for diamond jewellery. Provides extraordinary prong-setting strength to hold solitaires securely for decades.
              </p>
              <div className="pt-2 border-t border-[#144a37]/10 text-xs font-mono text-[#0c3325]">
                Today's Rate: ₹{liveBullionRates.gold18k}/gram
              </div>
            </div>

            {/* 925 Sterling Silver */}
            <div className="rounded-3xl bg-white p-7 border border-[#144a37]/15 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-[10px] font-mono font-semibold uppercase tracking-[0.18em] text-[#144a37]">
                <span className="w-1.5 h-1.5 bg-[#144a37] rotate-45 shrink-0" />
                <span>925 Assay Assayed</span>
              </div>
              <h3 className="font-serif text-3xl font-bold text-[#0d211a]">
                925 Sterling Silver
              </h3>
              <p className="text-xs text-[#526a61] leading-relaxed">
                92.5% pure silver. Solid, heavy wrist kadas, intricate filigree jhumkas, and diamond-cut chains treated with electrolytic anti-tarnish rhodium shielding.
              </p>
              <div className="pt-2 border-t border-[#144a37]/10 text-xs font-mono text-[#0c3325]">
                Today's Rate: ₹{liveBullionRates.silver925}/gram
              </div>
            </div>

            {/* 999 Fine Silver */}
            <div className="rounded-3xl bg-white p-7 border border-[#144a37]/15 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-[10px] font-mono font-semibold uppercase tracking-[0.18em] text-[#144a37]">
                <span className="w-1.5 h-1.5 bg-[#144a37] rotate-45 shrink-0" />
                <span>999 Fine Bullion</span>
              </div>
              <h3 className="font-serif text-3xl font-bold text-[#0d211a]">
                999 Pure Silver Bars
              </h3>
              <p className="text-xs text-[#526a61] leading-relaxed">
                99.9% pure silver bullion. Sealed in tamper-evident security cert-cards with NABL assay certificates. Ideal for sacred rituals, pooja, and generational gifting.
              </p>
              <div className="pt-2 border-t border-[#144a37]/10 text-xs font-mono text-[#0c3325]">
                Today's Rate: ₹{liveBullionRates.silverFine}/gram
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* How BIS Laser HUID Protects Customers */}
      <section className="bg-[#0c3325] text-white py-20 px-5 md:px-10 lg:py-24">
        <div className="mx-auto max-w-[1500px] grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-5">
            <span className="eyebrow !text-[#8ebfa8]">National Consumer Security</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold">
              What is a 6-digit laser HUID?
            </h2>
            <p className="text-sm text-white/80 leading-7 font-light">
              Hallmark Unique Identification (HUID) is a mandatory government mechanism implemented by the Bureau of Indian Standards (BIS). Each piece of jewellery receives a unique alphanumeric code etched by precision laser at an authorized assaying centre.
            </p>
            
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8ebfa8] shrink-0 mt-0.5" />
                <p className="text-xs text-white/90">
                  <strong>Trackable Purity:</strong> Enter the 6-digit code in the official BIS Care mobile application to verify exact karatage, jeweler registration, and testing lab date.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8ebfa8] shrink-0 mt-0.5" />
                <p className="text-xs text-white/90">
                  <strong>Tamper-Proof Assay:</strong> The mark cannot be altered, duplicated, or transferred between pieces.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8ebfa8] shrink-0 mt-0.5" />
                <p className="text-xs text-white/90">
                  <strong>100% Liquidity Guarantee:</strong> A piece stamped with authentic HUID is universally recognized across all banks and jewel houses worldwide.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white/10 p-8 border border-white/20 backdrop-blur-md font-mono text-xs space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-[#8ebfa8]">
              Specimen BIS Hallmark Stamping Diagram
            </p>
            <div className="rounded-2xl bg-[#062319] p-6 border border-white/15 text-center space-y-3">
              <div className="inline-flex items-center gap-4 text-lg">
                <span className="border border-[#8ebfa8] p-2 rounded">▲ BIS Logo</span>
                <span className="border border-[#8ebfa8] p-2 rounded">916 (22K)</span>
                <span className="border border-[#8ebfa8] p-2 rounded font-bold">HUID: 9X4B72</span>
              </div>
              <p className="text-[11px] text-white/60">
                Official 3-part hallmark stamped on reverse clasp or inner band
              </p>
            </div>
            <p className="text-[11px] text-white/70">
              Download the official "BIS Care" app from Google Play / Apple App Store and verify any Datj piece instantly.
            </p>
          </div>

        </div>
      </section>

      {/* Boutiques & Ateliers */}
      <section className="px-5 py-20 md:px-10 lg:py-28">
        <div className="mx-auto max-w-[1500px]">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="eyebrow">Physical Presence</p>
            <h2 className="display-title mx-auto">Visit our ateliers</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="rounded-3xl bg-white p-8 border border-[#144a37]/15 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.2em] text-[#144a37]">
                <span className="w-1.5 h-1.5 bg-[#144a37] rotate-45 shrink-0" />
                <span>Flagship Atelier</span>
              </div>
              <h3 className="font-serif text-3xl font-bold text-[#0d211a]">
                Surat Flagship Atelier
              </h3>
              <p className="text-xs text-[#526a61] leading-relaxed">
                42, Datj Heritage Enclave, Ghod Dod Road, Surat, Gujarat 395007
              </p>
              <p className="text-xs text-[#0c3325] font-semibold">
                Daily: 10:30 AM – 8:30 PM IST · Appointments Recommended
              </p>
              <Link to="/contact" className="lux-button text-xs">
                Schedule Viewing
              </Link>
            </div>

            <div className="rounded-3xl bg-white p-8 border border-[#144a37]/15 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.2em] text-[#144a37]">
                <span className="w-1.5 h-1.5 bg-[#144a37] rotate-45 shrink-0" />
                <span>Diamond & Silver Atelier</span>
              </div>
              <h3 className="font-serif text-3xl font-bold text-[#0d211a]">
                Surat Diamond Bourse Atelier
              </h3>
              <p className="text-xs text-[#526a61] leading-relaxed">
                Tower 4, Surat Diamond Bourse (SDB), DREAM City, Khajod, Surat, Gujarat 395007
              </p>
              <p className="text-xs text-[#0c3325] font-semibold">
                Mon – Sat: 11:00 AM – 8:00 PM IST · By Prior Invitation
              </p>
              <Link to="/contact" className="lux-button text-xs">
                Schedule Viewing
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
