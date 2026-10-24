import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // For demo purposes, we rely on the name or username input if provided, otherwise fallback to email
      const displayName = !isLogin ? (username || name || email.split('@')[0]) : undefined;
      login(email, displayName);
      navigate('/');
  };

  return (
    <div className="min-h-[calc(100vh-80px)] lg:min-h-[calc(100vh-100px)] flex items-center justify-center bg-[#F9F7F2] py-20 px-4">
      <div className="w-full max-w-md bg-white shadow-xl overflow-hidden relative">
         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D8C9AE] via-[#BFA76A] to-[#D8C9AE]" />
         
         <div className="p-8 md:p-12">
            <div className="text-center mb-10">
                <span className="text-[#BFA76A] text-xs uppercase tracking-[0.2em] font-bold block mb-2">Welcome Back</span>
                <h1 className="font-serif text-3xl text-[#333333]">{isLogin ? 'Sign In' : 'Create Account'}</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {!isLogin && (
                    <>
                    <div className="space-y-1">
                        <label className="text-xs uppercase tracking-widest text-[#575757]/60">Full Name</label>
                        <input 
                            type="text" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full border-b border-[#575757]/20 py-2 focus:outline-none focus:border-[#BFA76A] transition-colors bg-transparent" 
                            placeholder="John Doe" 
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs uppercase tracking-widest text-[#575757]/60">User Name</label>
                        <input 
                            type="text" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full border-b border-[#575757]/20 py-2 focus:outline-none focus:border-[#BFA76A] transition-colors bg-transparent" 
                            placeholder="john_d" 
                        />
                    </div>
                    </>
                )}
                
                <div className="space-y-1">
                    <label className="text-xs uppercase tracking-widest text-[#575757]/60">Email Address</label>
                    <div className="relative">
                        <input 
                            type="email" 
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border-b border-[#575757]/20 py-2 pr-8 focus:outline-none focus:border-[#BFA76A] transition-colors bg-transparent" 
                            placeholder="you@example.com" 
                        />
                        <Mail className="absolute right-0 top-2 w-4 h-4 text-[#575757]/40" />
                    </div>
                </div>

                <div className="space-y-1">
                    <label className="text-xs uppercase tracking-widest text-[#575757]/60">Password</label>
                     <div className="relative">
                        <input 
                            type="password" 
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border-b border-[#575757]/20 py-2 pr-8 focus:outline-none focus:border-[#BFA76A] transition-colors bg-transparent" 
                            placeholder="••••••••" 
                        />
                        <Lock className="absolute right-0 top-2 w-4 h-4 text-[#575757]/40" />
                    </div>
                </div>

                {isLogin && (
                    <div className="flex justify-end">
                        <a href="#" className="text-xs text-[#575757]/60 hover:text-[#BFA76A] transition-colors">Forgot Password?</a>
                    </div>
                )}

                <button type="submit" className="w-full bg-[#333333] text-white py-4 uppercase text-xs tracking-[0.2em] hover:bg-[#BFA76A] transition-colors flex items-center justify-center gap-2 group">
                    {isLogin ? 'Sign In' : 'Register'} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </form>

            <div className="mt-8 text-center">
                <p className="text-[#575757] text-sm font-light">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                    <button onClick={() => setIsLogin(!isLogin)} className="ml-2 font-medium text-[#333333] hover:text-[#BFA76A] transition-colors underline decoration-[#BFA76A]/30 underline-offset-4">
                        {isLogin ? 'Register Now' : 'Sign In'}
                    </button>
                </p>
            </div>
         </div>
         
         <div className="bg-[#F5F2ED] py-4 text-center">
             <Link to="/" className="text-xs uppercase tracking-widest text-[#575757]/60 hover:text-[#333333]">Return to Shop</Link>
         </div>
      </div>
    </div>
  );
}
