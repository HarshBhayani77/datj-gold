import { useState } from 'react';
import { CheckCircle2, Lock, Minus, Plus, ShieldCheck, Trash2, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../data/catalog';

export default function CartRedesign() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState<string | null>(null);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState('784192');

  // Apply Coupon
  const applyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const code = couponCode.trim().toUpperCase();
    if (code === 'DATJ10' || code === 'RUPRAYS10') {
      const disc = Math.round(cartTotal * 0.05); // 5% discount
      setDiscount(disc);
      setCouponMessage('Coupon DATJ10 applied: 5% bespoke discount deducted!');
    } else if (code === 'SILVER925') {
      const disc = Math.min(1000, Math.round(cartTotal * 0.08));
      setDiscount(disc);
      setCouponMessage('Coupon SILVER925 applied: ₹' + disc + ' artisan discount deducted!');
    } else {
      setCouponMessage('Invalid coupon code. Try "DATJ10" or "SILVER925".');
      setDiscount(0);
    }
  };

  const gstTax = Math.round((cartTotal - discount) * 0.03); // 3% Precious Metal GST
  const finalTotal = Math.max(0, cartTotal - discount + gstTax);

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderId(String(Math.floor(100000 + Math.random() * 900000)));
    setOrderPlaced(true);
    setTimeout(() => {
      clearCart();
    }, 1500);
  };

  return (
    <div className="bg-[#f6f9f7] text-[#0d211a] min-h-[750px]">
      
      {/* Page Header */}
      <section className="bg-[#062319] text-white py-14 px-5 md:px-10 border-b border-white/10">
        <div className="mx-auto max-w-[1500px]">
          <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#8ebfa8] block mb-2">
            Insured Vault Bag
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold">
            Your shopping bag
          </h1>
          <p className="mt-2 text-sm text-white/70">
            Certified 22K Gold, 18K Diamonds & 925 Sterling Silver pieces reserved on this device.
          </p>
        </div>
      </section>

      {/* Cart Content */}
      <section className="px-5 py-12 md:px-10 lg:py-16">
        <div className="mx-auto max-w-[1500px]">
          
          {cartItems.length === 0 && !orderPlaced ? (
            <div className="rounded-3xl bg-white p-12 md:p-16 text-center max-w-xl mx-auto border border-[#144a37]/15 shadow-sm">
              <ShieldCheck className="mx-auto h-12 w-12 text-[#144a37] mb-4" />
              <h2 className="font-serif text-3xl font-bold text-[#0d211a]">
                Your jewellery bag is empty
              </h2>
              <p className="mt-2 text-sm text-[#526a61] leading-relaxed">
                Explore our certified collection of 22K hallmarked gold, natural diamond solitaires, and 925 sterling silver heirlooms.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link to="/collection/featured" className="lux-button">
                  Explore Fine Gold & Silver
                </Link>
                <Link to="/collection/silver" className="lux-button-light">
                  Browse 925 Silver
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-10 lg:gap-14">
              
              {/* Left Column: Cart Items List */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#144a37]/15 pb-4 text-xs">
                  <span className="font-bold uppercase tracking-wider text-[#0d211a]">
                    Items in Bag ({cartItems.length})
                  </span>
                  <button
                    type="button"
                    onClick={clearCart}
                    className="text-red-700 hover:underline font-semibold"
                  >
                    Clear All Pieces
                  </button>
                </div>

                <div className="divide-y divide-[#144a37]/10">
                  {cartItems.map((item, index) => (
                    <div key={`${item.id}-${index}`} className="py-6 flex flex-col sm:flex-row gap-5 items-start">
                      
                      <div className="w-24 h-28 sm:w-28 sm:h-32 rounded-2xl bg-[#eaf1ed] overflow-hidden border border-[#144a37]/15 shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>

                      <div className="flex-1 space-y-1.5">
                        <div className="flex items-start justify-between gap-4">
                          <Link to={`/product/${item.id}`}>
                            <h3 className="font-serif text-xl font-bold text-[#0d211a] hover:text-[#144a37] transition-colors">
                              {item.name}
                            </h3>
                          </Link>
                          <span className="font-sans text-lg font-bold text-[#0d211a]">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                        </div>

                        <p className="text-xs text-[#144a37] font-medium font-mono">
                          {item.variant.material} · Size: {item.variant.size}
                        </p>

                        <p className="text-[11px] text-[#526a61]">
                          Govt. BIS Hallmarked with Laser HUID Certificate
                        </p>

                        <div className="flex items-center justify-between pt-3">
                          <div className="flex items-center rounded-lg border border-[#144a37]/20 bg-white">
                            <button
                              type="button"
                              onClick={() => updateQuantity(index, -1)}
                              className="p-1 px-2.5 text-sm font-bold text-[#526a61] hover:text-[#0d211a]"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="w-8 text-center text-xs font-bold">{item.quantity}</span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(index, 1)}
                              className="p-1 px-2.5 text-sm font-bold text-[#526a61] hover:text-[#0d211a]"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={() => removeFromCart(index)}
                            className="inline-flex items-center gap-1 text-xs text-red-700 hover:text-red-900 font-semibold"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            Remove
                          </button>
                        </div>
                      </div>

                    </div>
                  ))}
                </div>

                {/* Packaging & Vault Guarantee Note */}
                <div className="rounded-2xl bg-[#eaf1ed] p-5 border border-[#144a37]/15 flex items-start gap-3.5 text-xs text-[#0c3325]">
                  <Truck className="w-5 h-5 text-[#144a37] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold uppercase tracking-wider">
                      Complimentary Armored Vault Delivery
                    </p>
                    <p className="text-[#526a61] mt-0.5 leading-relaxed">
                      Every piece is dispatched in tamper-evident security packaging with full insurance coverage until delivered into your hands.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Order Summary & Checkout */}
              <div className="space-y-6">
                
                {/* Coupon Box */}
                <div className="rounded-2xl bg-white p-6 border border-[#144a37]/15 shadow-sm space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#0d211a]">
                    Bespoke Atelier Promo Code
                  </p>
                  <form onSubmit={applyCoupon} className="flex gap-2">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="e.g. DATJ10 or SILVER925"
                      className="flex-1 rounded-xl border border-[#144a37]/20 px-3.5 py-2.5 text-xs uppercase outline-none focus:border-[#144a37]"
                    />
                    <button
                      type="submit"
                      className="rounded-xl bg-[#0c3325] px-4 py-2.5 text-xs font-bold uppercase text-white hover:bg-[#144a37]"
                    >
                      Apply
                    </button>
                  </form>
                  {couponMessage && (
                    <p className={`text-xs font-medium ${discount > 0 ? 'text-[#144a37]' : 'text-red-700'}`}>
                      {couponMessage}
                    </p>
                  )}
                </div>

                {/* Breakdown Summary */}
                <div className="rounded-2xl bg-white p-6 border border-[#144a37]/15 shadow-sm space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-[#0d211a] border-b border-[#144a37]/10 pb-3">
                    Order Valuation
                  </h3>

                  <div className="space-y-2.5 text-xs">
                    <div className="flex justify-between text-[#526a61]">
                      <span>Bullion & Jewellery Value:</span>
                      <span className="font-mono text-[#0d211a] font-semibold">{formatPrice(cartTotal)}</span>
                    </div>

                    {discount > 0 && (
                      <div className="flex justify-between text-[#144a37] font-semibold">
                        <span>Promo Code Discount:</span>
                        <span className="font-mono">-{formatPrice(discount)}</span>
                      </div>
                    )}

                    <div className="flex justify-between text-[#526a61]">
                      <span>Precious Metal GST (3% Govt. Tax):</span>
                      <span className="font-mono text-[#0d211a] font-semibold">{formatPrice(gstTax)}</span>
                    </div>

                    <div className="flex justify-between text-[#526a61]">
                      <span>Insured Transit & Armored Box:</span>
                      <span className="font-mono text-[#144a37] font-bold">FREE (₹0)</span>
                    </div>

                    <div className="border-t border-[#144a37]/15 pt-3 flex justify-between items-baseline text-base font-bold text-[#0d211a]">
                      <span>Total Payable:</span>
                      <span className="font-mono text-2xl font-extrabold text-[#0c3325]">{formatPrice(finalTotal)}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setCheckoutModalOpen(true)}
                    className="lux-button w-full justify-center text-xs py-4 mt-2"
                  >
                    <Lock className="w-4 h-4 mr-1 text-[#8ebfa8]" />
                    Proceed to Vault Checkout
                  </button>

                  <p className="text-[10.5px] text-center text-[#526a61] flex items-center justify-center gap-1.5 pt-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#144a37]" />
                    256-Bit Encrypted Secure Checkout · BIS Hallmarked
                  </p>
                </div>

              </div>

            </div>
          )}

        </div>
      </section>

      {/* Simulated Checkout Modal */}
      {checkoutModalOpen && (
        <div className="fixed inset-0 z-[100] grid place-items-center bg-[#062319]/75 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-lg rounded-3xl bg-[#f6f9f7] p-6 md:p-8 shadow-2xl border border-[#144a37]/20 max-h-[90vh] overflow-y-auto">
            
            {!orderPlaced ? (
              <>
                <div className="flex items-center justify-between border-b border-[#144a37]/15 pb-4 mb-5">
                  <div>
                    <span className="eyebrow">Secure Precious Checkout</span>
                    <h3 className="font-serif text-2xl font-bold text-[#0d211a]">
                      Delivery & Vault Seal Details
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setCheckoutModalOpen(false)}
                    className="p-1.5 rounded-full border border-[#144a37]/20 text-[#0d211a]"
                  >
                    ✕
                  </button>
                </div>

                <form onSubmit={handleCheckoutSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="font-bold text-[#0d211a] block mb-1">Full Legal Name (For Invoice & Hallmark)</label>
                    <input required type="text" placeholder="e.g. Harsh Bhayani" className="form-field text-xs" />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="font-bold text-[#0d211a] block mb-1">Phone (For Courier OTP)</label>
                      <input required type="tel" placeholder="+91 98765 43210" className="form-field text-xs" />
                    </div>
                    <div>
                      <label className="font-bold text-[#0d211a] block mb-1">Delivery Pincode</label>
                      <input required type="text" maxLength={6} placeholder="395004" className="form-field text-xs" />
                    </div>
                  </div>

                  <div>
                    <label className="font-bold text-[#0d211a] block mb-1">Complete Street Address</label>
                    <textarea required rows={2} placeholder="Flat/House No., Building, Street Name" className="form-field text-xs" />
                  </div>

                  <div>
                    <label className="font-bold text-[#0d211a] block mb-1">Select Payment Protocol</label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 p-3 rounded-xl border border-[#144a37]/20 bg-white cursor-pointer">
                        <input type="radio" name="pay" defaultChecked className="accent-[#144a37]" />
                        <span className="font-semibold text-[#0d211a]">Instant UPI / NetBanking / Cards (Zero Surcharge)</span>
                      </label>
                      <label className="flex items-center gap-2 p-3 rounded-xl border border-[#144a37]/20 bg-white cursor-pointer">
                        <input type="radio" name="pay" className="accent-[#144a37]" />
                        <span className="font-semibold text-[#0d211a]">Armored Courier Delivery with OTP Verification</span>
                      </label>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button type="submit" className="lux-button w-full justify-center py-4 text-xs">
                      Confirm & Place Order · {formatPrice(finalTotal)}
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="py-8 text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-[#144a37] mx-auto animate-bounce" />
                <h3 className="font-serif text-3xl font-bold text-[#0d211a]">
                  Precious Order Confirmed!
                </h3>
                <p className="text-xs text-[#526a61] leading-relaxed max-w-sm mx-auto">
                  Your certified order <strong>#RUP-{orderId}</strong> has been registered with our Jaipur vault. Your BIS Hallmark laser certificate and tracking link will be sent via SMS.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => { setCheckoutModalOpen(false); setOrderPlaced(false); }}
                    className="lux-button mx-auto text-xs"
                  >
                    Continue Atelier Browsing
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
