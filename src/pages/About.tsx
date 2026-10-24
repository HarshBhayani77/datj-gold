import { Award, Users, Smile } from 'lucide-react';

export default function About() {
  return (
    <div>
        {/* Hero */}
        <div className="bg-[#F9F7F2] py-20 md:py-32 text-center px-4">
             <h1 className="font-serif text-5xl md:text-6xl text-[#333333] mb-6">Our Heritage</h1>
             <p className="max-w-2xl mx-auto text-[#575757] text-lg font-light leading-relaxed">
                 Three decades of trust, purity, and craftsmanship. This is the story of Datj.
             </p>
        </div>

        {/* Content */}
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-16">
                     <div className="w-full md:w-1/2 min-h-[400px] bg-[#EAE0D5] relative flex items-center justify-center rounded-lg overflow-hidden shadow-lg">
                         <img src="https://images.unsplash.com/photo-1587999482114-19d0e1bc4e6f?w=600&h=600&fit=crop" alt="Heritage Jewellery" className="w-full h-full object-cover" />
                     </div>
                     <div className="w-full md:w-1/2">
                         <h2 className="font-serif text-3xl md:text-4xl text-[#333333] mb-6">Crafting Memories Since 1995</h2>
                         <div className="space-y-6 text-[#575757] font-light leading-relaxed">
                             <p>
                                 At Datj, jewellery is not just an accessory; it is an emotion, a legacy passed down through generations. Our journey began three decades ago with a simple vision: to bring the finest artistry to those who appreciate true elegance.
                             </p>
                             <p>
                                 Born in the royal city of Jaipur, our designs are deeply rooted in Indian tradition while embracing contemporary aesthetics. Every piece is a labor of love, crafted by master artisans who have inherited their skills from their ancestors.
                             </p>
                             <p>
                                 We promise purity. Every diamond is handpicked, every gold piece is hallmarked, and every transaction is transparent. This integrity is what has made us a family jeweller to thousands of households.
                             </p>
                         </div>
                     </div>
                </div>
            </div>
        </section>

        {/* Stats */}
        <section className="bg-[#333333] text-white py-20">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div className="flex flex-col items-center">
                    <Award className="w-12 h-12 text-[#BFA76A] mb-4" />
                    <span className="text-4xl font-serif text-[#D8C9AE] mb-2">25+</span>
                    <span className="uppercase tracking-[0.2em] text-sm opacity-60">Years of Excellence</span>
                </div>
                 <div className="flex flex-col items-center">
                    <Users className="w-12 h-12 text-[#BFA76A] mb-4" />
                    <span className="text-4xl font-serif text-[#D8C9AE] mb-2">50+</span>
                    <span className="uppercase tracking-[0.2em] text-sm opacity-60">Master Artisans</span>
                </div>
                 <div className="flex flex-col items-center">
                    <Smile className="w-12 h-12 text-[#BFA76A] mb-4" />
                    <span className="text-4xl font-serif text-[#D8C9AE] mb-2">10k+</span>
                    <span className="uppercase tracking-[0.2em] text-sm opacity-60">Happy Families</span>
                </div>
            </div>
        </section>
    </div>
  );
}
