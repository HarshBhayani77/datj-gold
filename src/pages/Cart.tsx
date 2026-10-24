import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, Lock, ShieldCheck, Truck, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();
  const { isAuthenticated, openAuthModal } = useAuth();
  
  const handleCheckout = () => {
    if (!isAuthenticated) {
      openAuthModal();
    } else {
      // Proceed to checkout (mock)
      console.log('Proceeding to checkout...');
      // navigate('/checkout'); 
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-4">
        <div className="w-24 h-24 bg-[#F5F2ED] rounded-full flex items-center justify-center mb-6 text-[#BFA76A]">
           <ShoppingBagIcon className="w-10 h-10" />
        </div>
        <h2 className="font-serif text-3xl text-[#333333] mb-4">Your Cart is Empty</h2>
        <p className="text-[#575757] mb-8">Looks like you haven't found the perfect piece yet.</p>
        <Link to="/collection/featured" className="bg-[#333333] text-white px-8 py-3 uppercase text-xs tracking-widest hover:bg-[#BFA76A] transition-colors">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#FAFAFA] min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="font-serif text-3xl md:text-4xl text-[#333333] mb-8 text-center md:text-left">Shopping Cart</h1>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12">
          {/* Cart Items List */}
          <div className="w-full lg:w-2/3 bg-white shadow-sm border border-[#575757]/10 rounded-sm overflow-hidden">
             <div className="p-6 space-y-8">
                 {cartItems.map((item, idx) => (
                   <div key={`${item.id}-${idx}`} className="flex flex-col sm:flex-row gap-6 border-b border-[#575757]/10 pb-6 last:border-0 last:pb-0">
                      {/* Image */}
                      <Link to={`/product/${item.id}`} className="w-full sm:w-32 aspect-square bg-[#F5F2ED] flex-shrink-0 relative group overflow-hidden">
                          {item.image ? (
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          ) : (
                             <div className="w-full h-full flex items-center justify-center text-[#575757]/20 text-xs uppercase font-bold">No Image</div>
                          )}
                      </Link>

                      {/* Details */}
                      <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                              <Link to={`/product/${item.id}`} className="font-serif text-lg text-[#333333] hover:text-[#BFA76A] transition-colors">
                                {item.name}
                              </Link>
                              <span className="font-medium text-[#333333]">₹{(item.price * item.quantity).toLocaleString()}</span>
                          </div>
                          
                          <div className="space-y-1 mb-4">
                             <p className="text-xs text-[#575757] uppercase tracking-wider">
                               Material: <span className="text-[#333333]">{item.variant.material}</span>
                             </p>
                             <p className="text-xs text-[#575757] uppercase tracking-wider">
                               Color: <span className="text-[#333333]">{item.variant.color}</span>
                             </p>
                             <p className="text-xs text-[#575757] uppercase tracking-wider">
                               Size: <span className="text-[#333333]">{item.variant.size}</span>
                             </p>
                          </div>

                          <div className="flex items-center justify-between">
                             {/* Qty Control */}
                             <div className="flex items-center border border-[#575757]/20">
                                <button 
                                  className="p-2 hover:bg-[#F9F7F2] text-[#575757]"
                                  onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                                >
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span className="w-8 text-center text-sm text-[#333333]">{item.quantity}</span>
                                <button 
                                  className="p-2 hover:bg-[#F9F7F2] text-[#575757]"
                                  onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                                >
                                  <Plus className="w-3 h-3" />
                                </button>
                             </div>

                             <button 
                               onClick={() => removeFromCart(item.id, item.variant)}
                               className="text-xs text-[#575757] hover:text-red-600 underline decoration-dotted flex items-center gap-1"
                             >
                               <Trash2 className="w-3 h-3" /> Remove
                             </button>
                          </div>
                      </div>
                   </div>
                 ))}
             </div>
             
             {/* Cart Footer / Info */}
             <div className="bg-[#F9F7F2] p-4 flex flex-col sm:flex-row gap-4 justify-between items-center text-xs text-[#575757]">
                 <span className="flex items-center gap-2"><Truck className="w-4 h-4 text-[#BFA76A]" /> Free Insured Shipping</span>
                 <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#BFA76A]" /> 30-Day Return Policy</span>
             </div>
          </div>

          {/* Checkout Summary */}
          <div className="w-full lg:w-1/3">
              <div className="bg-white p-6 shadow-sm border border-[#575757]/10 rounded-sm sticky top-24">
                  <h3 className="font-serif text-xl text-[#333333] mb-6 border-b border-[#575757]/10 pb-4">Order Summary</h3>
                  
                  <div className="space-y-4 mb-6 text-sm text-[#575757]">
                      <div className="flex justify-between">
                          <span>Subtotal</span>
                          <span className="text-[#333333]">₹{cartTotal.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                          <span>Shipping</span>
                          <span className="text-[#25D366]">Free</span>
                      </div>
                      <div className="flex justify-between">
                          <span>Tax (GST)</span>
                          <span className="text-xs italic">Calculated at checkout</span>
                      </div>
                  </div>

                  <div className="flex justify-between items-center py-4 border-t border-b border-[#333333]/10 mb-6 font-medium text-lg text-[#333333]">
                      <span>Total</span>
                      <span>₹{cartTotal.toLocaleString()}</span>
                  </div>

                  {/* Checkout Button */}
                  <button 
                      onClick={handleCheckout}
                      className="w-full bg-[#333333] text-white py-4 uppercase text-xs tracking-[0.15em] font-bold hover:bg-[#BFA76A] hover:border-[#BFA76A] border border-[#333333] transition-all shadow-lg flex items-center justify-center gap-2 mb-4"
                  >
                      Proceed to Checkout <Lock className="w-3 h-3" />
                  </button>
                  
                  <div className="text-center">
                    <Link to="/collection/featured" className="text-xs text-[#575757] hover:text-[#BFA76A] underline decoration-dotted flex items-center justify-center gap-1">
                        <ArrowLeft className="w-3 h-3" /> Continue Shopping
                    </Link>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#575757]/10">
                      <p className="text-[10px] text-[#575757] text-center mb-3">Guaranteed Safe Checkout</p>
                      <div className="flex justify-center gap-2 grayscale opacity-60">
                          {/* Payment Icons Placeholder */}
                          <div className="h-6 w-10 bg-gray-200 rounded"></div>
                          <div className="h-6 w-10 bg-gray-200 rounded"></div>
                          <div className="h-6 w-10 bg-gray-200 rounded"></div>
                          <div className="h-6 w-10 bg-gray-200 rounded"></div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShoppingBagIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
    )
}
