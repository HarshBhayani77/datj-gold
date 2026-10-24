import { useState } from 'react';
import { X, Mail, Lock } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

export default function AuthModal() {
  const { isAuthModalOpen, closeAuthModal, login } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const displayName = !isLogin ? (username || name || email.split('@')[0]) : undefined;
    login(email || "guest@example.com", displayName);
  };

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center px-0 sm:px-4 transition-opacity duration-300 ${isAuthModalOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${isAuthModalOpen ? 'opacity-100' : 'opacity-0'}`} 
        onClick={closeAuthModal}
      />

      {/* Modal Content - Fixed 50:50 Layout */}
      <div className={`relative bg-white w-full sm:max-w-6xl h-screen sm:h-auto max-h-[100vh] sm:max-h-[95vh] shadow-lg overflow-hidden rounded-none sm:rounded-lg transition-transform duration-200 flex flex-col sm:flex-row ${isAuthModalOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}`}>
        
        {/* Close Button */}
        <button 
          onClick={closeAuthModal}
          className="absolute top-4 right-4 z-20 p-2 bg-white rounded-full hover:bg-[#F5F2ED] transition-colors duration-200 shadow-md"
        >
          <X className="w-5 h-5 text-[#333333]" />
        </button>

        {/* Left Column: Luxury Image & Copy (50% - Fixed) */}
        <div className="hidden sm:flex w-1/2 bg-[#062319] text-white relative overflow-hidden flex-col justify-between p-12 border-r border-[#144a37]/30">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#BFA76A] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#BFA76A] rounded-full translate-x-1/2 translate-y-1/2"></div>
          </div>

          {/* Jewellery Hero Image Section */}
          <div className="relative z-10 mb-8">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-xl border-4 border-[#BFA76A]/30 bg-white flex items-center justify-center">
              {/* Mock Gold Jewellery Image - Replace with real image path */}
              <img 
                src="/images/jewelry/ring_elara_front.jpg" 
                alt="Premium Gold Jewellery"
                className="w-full h-full object-cover"
              />
              {/* Overlay badge */}
              <div className="absolute top-4 right-4 bg-[#BFA76A] text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider shadow-lg">
                Premium
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <span className="text-[#8ebfa8] text-[10px] uppercase tracking-[0.3em] font-bold block mb-3">Welcome to Datj</span>
            <h2 className="font-serif text-4xl text-[#333333] mb-4 leading-tight">Exclusive Jewellery<br />Awaits You</h2>
            <p className="text-sm text-[#575757] leading-relaxed font-light">
              Join our community of jewellery enthusiasts. Get access to our curated collections, member-only discounts, and personalized recommendations.
            </p>
          </div>

          {/* Benefits */}
          <div className="relative z-10 space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-[#BFA76A]/20 flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-2 h-2 bg-[#BFA76A] rounded-full"></div>
              </div>
              <span className="text-xs text-[#575757] font-light">Authentic, certified jewellery</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-[#BFA76A]/20 flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-2 h-2 bg-[#BFA76A] rounded-full"></div>
              </div>
              <span className="text-xs text-[#575757] font-light">Lifetime warranty on all pieces</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-[#BFA76A]/20 flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-2 h-2 bg-[#BFA76A] rounded-full"></div>
              </div>
              <span className="text-xs text-[#575757] font-light">Free insured shipping worldwide</span>
            </div>
          </div>
        </div>

        {/* Right Column: Form (50% - Fixed) */}
        <div className="w-full sm:w-1/2 p-6 sm:p-10 flex flex-col justify-center bg-white overflow-y-auto sm:overflow-y-visible max-h-[100vh] sm:max-h-none">
          
          {/* Header */}
          <div className="mb-6">
            <span className="text-[#BFA76A] text-[9px] uppercase tracking-[0.2em] font-bold block mb-2">Authentication</span>
            <h3 className="font-serif text-2xl text-[#333333] mb-2">{isLogin ? 'Welcome Back' : 'Join Us'}</h3>
            <p className="text-xs text-[#575757] leading-snug">
              {isLogin ? "Sign in to your account to continue shopping" : "Create a new account to get started"}
            </p>
          </div>

          {/* Google Login */}
          <button className="w-full flex items-center justify-center gap-2 border border-[#575757]/20 py-2.5 text-xs text-[#333333] hover:bg-[#F9F7F2] transition-colors duration-200 mb-4 rounded-sm font-medium">
            <svg className="w-4 h-4" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
            Google
          </button>

          {/* Divider */}
          <div className="relative flex items-center my-3">
            <div className="flex-grow border-t border-[#575757]/10"></div>
            <span className="flex-shrink-0 mx-2 text-[8px] text-[#575757]/60 uppercase tracking-widest font-bold">Or Email</span>
            <div className="flex-grow border-t border-[#575757]/10"></div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3.5">
            
            {/* Name Fields (Signup Only) */}
            {!isLogin && (
              <>
              <div className="space-y-1">
                <label className="text-[9px] uppercase tracking-[0.15em] text-[#575757] font-bold">Full Name</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border-b border-[#575757]/20 py-2 text-sm text-[#333333] focus:border-[#BFA76A] outline-none bg-transparent placeholder:text-[#575757]/40 transition-colors duration-200"
                  placeholder="John"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[9px] uppercase tracking-[0.15em] text-[#575757] font-bold">Username</label>
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full border-b border-[#575757]/20 py-2 text-sm text-[#333333] focus:border-[#BFA76A] outline-none bg-transparent placeholder:text-[#575757]/40 transition-colors duration-200"
                  placeholder="johndoe123"
                />
              </div>
              </>
            )}

            {/* Email */}
            <div className="space-y-1">
              <label className="text-[9px] uppercase tracking-[0.15em] text-[#575757] font-bold">Email Address</label>
              <div className="relative">
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-b border-[#575757]/20 py-2 pr-8 text-sm text-[#333333] focus:border-[#BFA76A] outline-none bg-transparent placeholder:text-[#575757]/40 transition-colors duration-200"
                  placeholder="you@example.com"
                />
                <Mail className="absolute right-0 bottom-2 w-3.5 h-3.5 text-[#575757]/40 pointer-events-none" />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label className="text-[9px] uppercase tracking-[0.15em] text-[#575757] font-bold">Password</label>
                {isLogin && (
                  <a href="#" className="text-[9px] text-[#BFA76A] hover:text-[#333333] transition-colors duration-200 underline">Forgot?</a>
                )}
              </div>
              <div className="relative">
                <input 
                  type="password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border-b border-[#575757]/20 py-2 pr-8 text-sm text-[#333333] focus:border-[#BFA76A] outline-none bg-transparent placeholder:text-[#575757]/40 transition-colors duration-200"
                  placeholder="••••••••"
                />
                <Lock className="absolute right-0 bottom-2 w-3.5 h-3.5 text-[#575757]/40 pointer-events-none" />
              </div>
            </div>

            {/* Remember Me (Login Only) */}
            {isLogin && (
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="remember" 
                  className="w-4 h-4 accent-[#BFA76A] cursor-pointer"
                />
                <label htmlFor="remember" className="text-xs text-[#575757] cursor-pointer">Remember me</label>
              </div>
            )}

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full bg-[#333333] text-white py-3 uppercase text-[9px] tracking-[0.2em] font-bold hover:bg-[#BFA76A] transition-colors duration-200 mt-4 shadow-lg shadow-[#333333]/10"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          {/* Toggle Link */}
          <div className="mt-4 text-center">
            <p className="text-xs text-[#575757]">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button 
                onClick={() => {
                  setIsLogin(!isLogin);
                  setName('');
                  setUsername('');
                  setEmail('');
                  setPassword('');
                }}
                className="ml-2 font-bold text-[#BFA76A] hover:text-[#333333] transition-colors duration-200 outline-none"
              >
                {isLogin ? 'Register' : 'Login'}
              </button>
            </p>
          </div>

          {/* Footer */}
          <div className="mt-4 pt-4 border-t border-[#575757]/10 text-center">
            <p className="text-[9px] text-[#575757]/60 leading-snug">
              By signing in, you agree to our <Link to="/terms" className="underline hover:text-[#333333]">Terms of Service</Link> and <Link to="/privacy" className="underline hover:text-[#333333]">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
