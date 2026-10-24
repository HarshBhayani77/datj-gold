import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div>
       <div className="bg-[#F9F7F2] py-20 text-center px-4 relative overflow-hidden">
             {/* Background image */}
             <div className="absolute inset-0 opacity-10">
               <img src="https://images.unsplash.com/photo-1515562141207-5daf3b67b37d?w=1200&h=400&fit=crop" alt="Jewellery backdrop" className="w-full h-full object-cover" />
             </div>
             <div className="relative z-10">
               <h1 className="font-serif text-5xl md:text-6xl text-[#333333] mb-6">Contact Us</h1>
               <p className="max-w-2xl mx-auto text-[#575757] text-lg font-light leading-relaxed">
                   We'd love to hear from you. Visit our showroom or get in touch below.
               </p>
             </div>
        </div>

        <section className="py-20 bg-white">
             <div className="container mx-auto px-4">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                     {/* Info */}
                     <div className="space-y-10">
                        <div>
                             <h2 className="font-serif text-3xl text-[#333333] mb-6">Visit Our Showroom</h2>
                             <p className="text-[#575757] font-light mb-8">
                                 Experience the sparkle in person. Our experts are here to guide you through our exclusive collections.
                             </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="p-3 bg-[#F9F7F2] rounded-full text-[#333333]">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-serif text-lg text-[#333333] mb-1">Address</h4>
                                    <p className="text-[#575757] text-sm leading-relaxed">
                                        12, Gold Souk Road, <br />
                                        Ghod Dod Road, Surat, Gujarat, <br />
                                        Rajasthan - 302001
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex gap-4">
                                <div className="p-3 bg-[#F9F7F2] rounded-full text-[#333333]">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-serif text-lg text-[#333333] mb-1">Phone</h4>
                                    <p className="text-[#575757] text-sm">+91 78618 86462</p>
                                </div>
                            </div>
                             <div className="flex gap-4">
                                <div className="p-3 bg-[#F9F7F2] rounded-full text-[#333333]">
                                     <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-serif text-lg text-[#333333] mb-1">Email</h4>
                                    <p className="text-[#575757] text-sm">harshbhayani77@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="p-3 bg-[#F9F7F2] rounded-full text-[#333333]">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-serif text-lg text-[#333333] mb-1">Opening Hours</h4>
                                    <p className="text-[#575757] text-sm">Mon - Sat: 11:00 AM - 8:00 PM</p>
                                    <p className="text-[#575757] text-sm">Sunday: By Appointment</p>
                                </div>
                            </div>
                        </div>
                     </div>

                     {/* Form */}
                     <div className="bg-[#F9F7F2] p-8 md:p-12">
                         <h3 className="font-serif text-2xl text-[#333333] mb-6">Send a Message</h3>
                         <form className="grid grid-cols-1 gap-6">
                            <input type="text" placeholder="Your Name" className="w-full bg-white border border-transparent px-4 py-3 focus:border-[#BFA76A] focus:outline-none transition-colors" />
                            <input type="email" placeholder="Your Email" className="w-full bg-white border border-transparent px-4 py-3 focus:border-[#BFA76A] focus:outline-none transition-colors" />
                            <input type="tel" placeholder="Your Phone" className="w-full bg-white border border-transparent px-4 py-3 focus:border-[#BFA76A] focus:outline-none transition-colors" />
                            <textarea placeholder="Message" rows={4} className="w-full bg-white border border-transparent px-4 py-3 focus:border-[#BFA76A] focus:outline-none transition-colors"></textarea>
                            <button className="bg-[#333333] text-white py-4 uppercase text-sm tracking-widest hover:bg-[#BFA76A] transition-colors">
                                Send Message
                            </button>
                         </form>
                     </div>
                 </div>
             </div>
        </section>

         {/* Map Placeholder */}
        <div className="w-full h-[400px] bg-[#EAE0D5] flex items-center justify-center">
             <span className="text-[#575757]/30 font-serif text-4xl">Google Map API</span>
        </div>
    </div>
  );
}
