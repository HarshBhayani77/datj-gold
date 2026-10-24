import { useState } from 'react';
import { CheckCircle2, Mail, MapPin, Phone } from 'lucide-react';

export default function ContactRedesign() {
  const [submitted, setSubmitted] = useState(false);
  const [service, setService] = useState('Bespoke 22K Gold Bridal');
  const [mode, setMode] = useState('Surat Flagship Atelier');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#f6f9f7] text-[#0d211a] min-h-[750px]">
      
      {/* Header */}
      <section className="bg-[#062319] text-white py-20 px-5 md:px-10 border-b border-white/10">
        <div className="mx-auto max-w-[1500px]">
          <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#8ebfa8] block mb-2">
            Private Jewellery Concierge
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold">
            Atelier consultation & bespoke requests
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-6 text-white/80 font-light">
            Whether designing a one-of-a-kind 22K bridal suite, commissioning an engraved 925 silver kada, or scheduling a private viewing at our Surat atelier.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-5 py-14 md:px-10 lg:py-20">
        <div className="mx-auto max-w-[1500px] grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16">
          
          {/* Left Column: Booking Form */}
          <div className="rounded-3xl bg-white p-8 md:p-12 border border-[#144a37]/15 shadow-sm space-y-6">
            {!submitted ? (
              <>
                <div>
                  <span className="eyebrow">Direct Appointment Protocol</span>
                  <h2 className="font-serif text-3xl font-bold text-[#0d211a]">
                    Reserve your private consultation
                  </h2>
                  <p className="text-xs text-[#526a61] mt-1.5">
                    Consultations are complimentary. Dedicated senior gemmologist and jewellery designer provided.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="font-bold text-[#0d211a] block mb-1">Select Consultation Subject</label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="form-field text-xs cursor-pointer font-medium"
                    >
                      <option>Bespoke 22K Gold Bridal & Jadau Haar</option>
                      <option>Natural Diamond Engagement Ring & Solitaire</option>
                      <option>Solid 925 Sterling Silver Custom Adornments</option>
                      <option>999 Pure Silver Bullion & Festive Coins</option>
                      <option>Heirloom Remodelling & Gemstone Resetting</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-bold text-[#0d211a] block mb-1">Your Full Name</label>
                      <input
                        required
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Priyanshi Mehta"
                        className="form-field text-xs"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-[#0d211a] block mb-1">Phone Number (WhatsApp for confirmation)</label>
                      <input
                        required
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 78618 86462"
                        className="form-field text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-bold text-[#0d211a] block mb-1">Preferred Atelier / Mode</label>
                      <select
                        value={mode}
                        onChange={(e) => setMode(e.target.value)}
                        className="form-field text-xs cursor-pointer font-medium"
                      >
                        <option>Surat Flagship Atelier (Ghod Dod Road)</option>
                        <option>Surat Diamond Bourse Salon (Khajod)</option>
                        <option>Private Video Call (Zoom / WhatsApp HD)</option>
                      </select>
                    </div>
                    <div>
                      <label className="font-bold text-[#0d211a] block mb-1">Preferred Date</label>
                      <input
                        required
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="form-field text-xs cursor-pointer"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-bold text-[#0d211a] block mb-1">Specific Design Preferences or Budget (Optional)</label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Looking for a 22K kundan choker necklace with emerald drops, or custom 925 silver kada in size 2.6..."
                      className="form-field text-xs"
                    />
                  </div>

                  <div className="pt-2">
                    <button type="submit" className="lux-button w-full justify-center text-xs py-4">
                      Confirm Appointment Request
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-[#144a37] mx-auto animate-bounce" />
                <h2 className="font-serif text-3xl font-bold text-[#0d211a]">
                  Appointment Request Confirmed
                </h2>
                <p className="text-xs text-[#526a61] leading-relaxed max-w-md mx-auto">
                  Thank you, <strong>{name}</strong>. Our Senior Jewellery Concierge will contact you on <strong>{phone}</strong> within 2 hours to confirm your private session for <strong>{service}</strong> at <strong>{mode}</strong>.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="lux-button text-xs mx-auto"
                  >
                    Schedule Another Session
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Contact Details & Ateliers */}
          <div className="space-y-6">
            
            {/* Quick Contact Card */}
            <div className="rounded-3xl bg-white p-8 border border-[#144a37]/15 shadow-sm space-y-5">
              <h3 className="font-serif text-2xl font-bold text-[#0d211a] border-b border-[#144a37]/10 pb-3">
                Direct Atelier Lines
              </h3>

              <div className="space-y-4 text-xs text-[#0d211a]">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#eaf1ed] text-[#144a37] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold">Telephone Helpline & IVR</p>
                    <a href="tel:+917861886462" className="text-[#144a37] hover:underline text-sm font-semibold">
                      +91 78618 86462
                    </a>
                    <p className="text-[11px] text-[#526a61]">Monday to Sunday, 9:30 AM – 9:00 PM IST</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#eaf1ed] text-[#144a37] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold">Email Concierge</p>
                    <a href="mailto:harshbhayani77@gmail.com" className="text-[#144a37] hover:underline text-sm font-semibold">
                      harshbhayani77@gmail.com
                    </a>
                    <p className="text-[11px] text-[#526a61]">Verified responses within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#eaf1ed] text-[#144a37] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold">Surat Flagship Atelier</p>
                    <p className="text-[#526a61]">Ghod Dod Road, Surat, Gujarat 395007</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#eaf1ed] text-[#144a37] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold">Surat Diamond Bourse Salon</p>
                    <p className="text-[#526a61]">DREAM City, Khajod, Surat, Gujarat 395007</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="rounded-3xl bg-[#0c3325] text-white p-7 space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#8ebfa8] block">
                Instant Video Assistance
              </span>
              <h4 className="font-serif text-2xl font-bold">
                Connect on WhatsApp Concierge
              </h4>
              <p className="text-xs text-white/80 leading-relaxed font-light">
                Inspect hallmark codes, live jewellery pieces on video call, or discuss bullion rates directly with a senior advisor.
              </p>
              <a
                href="https://wa.me/917861886462"
                target="_blank"
                rel="noreferrer"
                className="lux-button bg-white text-[#062319] hover:bg-[#eef4f1] border-white text-xs mt-2"
              >
                Open WhatsApp (+91 78618 86462)
              </a>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
