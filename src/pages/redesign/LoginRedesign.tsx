import { useState } from 'react';
import { ArrowRight, Lock, Mail, ShieldCheck, User, Package, Heart, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useWishlist } from '../../context/WishlistContext';

export default function LoginRedesign() {
  const { user, login, logout } = useAuth();
  const { wishlistCount } = useWishlist();
  const [registering, setRegistering] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, registering ? name : undefined);
  };

  return (
    <div className="bg-[#f6f9f7] text-[#0d211a] min-h-[750px]">
      
      {/* Header */}
      <section className="bg-[#062319] text-white py-14 px-5 md:px-10 border-b border-white/10">
        <div className="mx-auto max-w-[1500px]">
          <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#8ebfa8] block mb-2">
            Client Vault Portal
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold">
            {user ? `Welcome back, ${user.name}` : 'Atelier client access'}
          </h1>
          <p className="mt-2 text-sm text-white/70">
            Access your hallmarked orders, valuation certificates, and saved heirlooms.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <section className="px-5 py-14 md:px-10 lg:py-20">
        <div className="mx-auto max-w-4xl">
          
          {user ? (
            <div className="space-y-8">
              
              {/* Account Overview Card */}
              <div className="rounded-3xl bg-white p-8 border border-[#144a37]/15 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-md bg-[#0c3325] text-white font-serif text-2xl font-bold flex items-center justify-center shadow-md">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-[#0d211a]">{user.name}</h2>
                    <p className="text-xs text-[#526a61] font-mono">{user.email}</p>
                    <span className="inline-block mt-1 text-[10px] uppercase font-bold tracking-wider text-[#144a37] bg-[#eaf1ed] px-2.5 py-0.5 rounded-md">
                      Verified Datj Patron
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={logout}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-700 hover:text-red-900 border border-red-200 px-4 py-2 rounded-xl"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  Sign Out
                </button>
              </div>

              {/* Client Shortcuts */}
              <div className="grid sm:grid-cols-3 gap-5">
                <Link
                  to="/wishlist"
                  className="rounded-2xl bg-white p-6 border border-[#144a37]/15 shadow-sm hover:border-[#144a37] transition-all flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#526a61]">Wishlist</span>
                    <Heart className="w-5 h-5 text-[#144a37]" />
                  </div>
                  <p className="font-serif text-3xl font-bold text-[#0d211a] mt-4">{wishlistCount} Saved</p>
                  <span className="text-xs text-[#144a37] font-semibold mt-2">View Favourites →</span>
                </Link>

                <div className="rounded-2xl bg-white p-6 border border-[#144a37]/15 shadow-sm flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#526a61]">Vault Orders</span>
                    <Package className="w-5 h-5 text-[#144a37]" />
                  </div>
                  <p className="font-serif text-3xl font-bold text-[#0d211a] mt-4">1 Active</p>
                  <span className="text-xs text-[#144a37] font-semibold mt-2">In Transit · Armored Seal</span>
                </div>

                <div className="rounded-2xl bg-white p-6 border border-[#144a37]/15 shadow-sm flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#526a61]">BIS Certificates</span>
                    <ShieldCheck className="w-5 h-5 text-[#144a37]" />
                  </div>
                  <p className="font-serif text-3xl font-bold text-[#0d211a] mt-4">HUID Cards</p>
                  <span className="text-xs text-[#144a37] font-semibold mt-2">Verified BIS Care</span>
                </div>
              </div>

              {/* Simulated Order History */}
              <div className="rounded-3xl bg-white p-8 border border-[#144a37]/15 shadow-sm space-y-4">
                <h3 className="font-serif text-2xl font-bold text-[#0d211a] border-b border-[#144a37]/10 pb-3">
                  Recent Vault Order
                </h3>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-2">
                  <div>
                    <p className="text-xs font-bold text-[#0d211a]">Order #RUP-782419</p>
                    <p className="text-xs text-[#526a61] mt-0.5">Rajputana Solid 925 Silver Kada (48.5g) · HUID: SLV925-88</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold font-sans text-[#0d211a]">₹14,200</p>
                    <span className="inline-block text-[10px] font-bold text-[#144a37] bg-[#eaf1ed] px-2.5 py-0.5 rounded-md">
                      Dispatched · Trackable
                    </span>
                  </div>
                </div>
              </div>

            </div>
          ) : (
            <div className="rounded-3xl bg-white p-8 md:p-12 border border-[#144a37]/15 shadow-sm max-w-lg mx-auto">
              
              <div className="text-center mb-8">
                <span className="eyebrow">Patron Authentication</span>
                <h2 className="font-serif text-3xl font-bold text-[#0d211a]">
                  {registering ? 'Create patron vault account' : 'Sign in to your client vault'}
                </h2>
                <p className="text-xs text-[#526a61] mt-1.5">
                  Save hallmarked heirlooms, track live bullion valuations, and manage orders.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                {registering && (
                  <div>
                    <label className="font-bold text-[#0d211a] block mb-1">Full Legal Name</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#526a61] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        required
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Harsh Bhayani"
                        className="form-field pl-10 text-xs"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="font-bold text-[#0d211a] block mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#526a61] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="client@datj.com"
                      className="form-field pl-10 text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-[#0d211a] block mb-1">Password</label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-[#526a61] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      required
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="form-field pl-10 text-xs"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button type="submit" className="lux-button w-full justify-center py-4 text-xs">
                    {registering ? 'Create Patron Account' : 'Sign In to Vault'}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </form>

              <div className="mt-6 pt-5 border-t border-[#144a37]/10 text-center text-xs text-[#526a61]">
                {registering ? 'Already registered as a patron?' : 'New to Datj Atelier?'}
                <button
                  type="button"
                  onClick={() => setRegistering(!registering)}
                  className="font-bold text-[#144a37] underline ml-2"
                >
                  {registering ? 'Sign In Instead' : 'Register for Complimentary Account'}
                </button>
              </div>

            </div>
          )}

        </div>
      </section>

    </div>
  );
}
