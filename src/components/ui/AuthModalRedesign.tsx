import { ArrowRight, Lock, Mail, User, X } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function AuthModalRedesign() {
  const { isAuthModalOpen, closeAuthModal, login } = useAuth();
  const [registering, setRegistering] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isAuthModalOpen) return null;

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    login(email, registering ? name : undefined);
  };

  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center bg-[#062319]/75 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={registering ? 'Create patron vault account' : 'Sign in to vault'}
    >
      <div className="relative w-full max-w-md overflow-hidden rounded-[2rem] bg-[#f6f9f7] p-7 shadow-2xl border border-[#144a37]/20 md:p-9 animate-fade-in-up">
        
        <button
          type="button"
          onClick={closeAuthModal}
          aria-label="Close authentication modal"
          className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full border border-[#144a37]/20 text-[#0d211a] hover:bg-[#eaf1ed] transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        <span className="eyebrow">Client Vault Access</span>
        <h2 className="font-serif text-3xl font-bold text-[#0d211a]">
          {registering ? 'Join Datj Atelier' : 'Welcome back to Datj'}
        </h2>
        <p className="mt-1.5 text-xs text-[#526a61]">
          {registering
            ? 'Register to save hallmarked favourites and track your certified heirlooms.'
            : 'Sign in to access your saved jewellery bag and certified orders.'}
        </p>

        <form onSubmit={submit} className="mt-6 space-y-3.5 text-xs">
          {registering && (
            <label className="relative block">
              <span className="sr-only">Full name</span>
              <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#526a61]" />
              <input
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="form-field pl-10 text-xs"
                placeholder="Full Legal Name"
              />
            </label>
          )}

          <label className="relative block">
            <span className="sr-only">Email address</span>
            <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#526a61]" />
            <input
              required
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="form-field pl-10 text-xs"
              placeholder="Email address"
            />
          </label>

          <label className="relative block">
            <span className="sr-only">Password</span>
            <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#526a61]" />
            <input
              required
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="form-field pl-10 text-xs"
              placeholder="Password"
            />
          </label>

          <button type="submit" className="lux-button w-full justify-center text-xs py-3.5 mt-2">
            {registering ? 'Create Patron Account' : 'Sign In to Vault'}
            <ArrowRight className="h-4 w-4 ml-1" />
          </button>
        </form>

        <div className="mt-6 pt-4 border-t border-[#144a37]/10 flex items-center justify-between text-xs text-[#526a61]">
          <span>{registering ? 'Already registered?' : 'New to Datj?'}</span>
          <button
            type="button"
            onClick={() => setRegistering(!registering)}
            className="font-bold text-[#144a37] underline"
          >
            {registering ? 'Sign In' : 'Create an Account'}
          </button>
        </div>

      </div>
    </div>
  );
}
