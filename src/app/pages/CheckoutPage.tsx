import { useState } from 'react';
import { useNavigate } from 'react-router';
import { CreditCard, Truck, MapPin, Phone, Mail, Lock, Apple, Droplet, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { MagneticButton } from '../components/effects/MagneticButton';
import { GlowEffect } from '../components/effects/GlowEffect';
import { RippleButton } from '../components/effects/RippleButton';
import { ScrollReveal } from '../components/animations/ScrollReveal';

import { useCart } from '../contexts/CartContext';

export function CheckoutPage() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi' | 'cod'>('card');
  const { cartItems, clearCart } = useCart();

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal >= 999 || subtotal === 0 ? 0 : 50;
  const total = subtotal + shipping;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    navigate('/order-success');
  };

  return (
    <div className="min-h-screen bg-[#fafaf8] py-12">
      <div className="container mx-auto px-4">
        <h1 className="font-serif text-4xl text-[#2a2a2a] mb-8">Checkout</h1>

        <form onSubmit={handlePlaceOrder}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Information */}
              <ScrollReveal>
                <div className="glass-card rounded-2xl p-8 shadow-lg">
                  <h2 className="font-semibold text-xl text-[#2a2a2a] mb-6 flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Contact Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#2a2a2a] mb-2">Email</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-[rgba(139,125,107,0.2)] focus-glow transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#2a2a2a] mb-2">Phone</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-[rgba(139,125,107,0.2)] focus-glow transition-all"
                      />
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Shipping Address */}
              <ScrollReveal delay={0.1}>
                <div className="glass-card rounded-2xl p-8 shadow-lg">
                  <h2 className="font-semibold text-xl text-[#2a2a2a] mb-6 flex items-center gap-2">
                    <Truck className="w-5 h-5" />
                    Shipping Address
                  </h2>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-[#2a2a2a] mb-2">First Name</label>
                        <input
                          type="text"
                          required
                          placeholder="John"
                          className="w-full px-4 py-3 rounded-xl border border-[rgba(139,125,107,0.2)] focus-glow transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#2a2a2a] mb-2">Last Name</label>
                        <input
                          type="text"
                          required
                          placeholder="Doe"
                          className="w-full px-4 py-3 rounded-xl border border-[rgba(139,125,107,0.2)] focus-glow transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#2a2a2a] mb-2">Address Line 1</label>
                      <input
                        type="text"
                        required
                        placeholder="123 Main Street"
                        className="w-full px-4 py-3 rounded-xl border border-[rgba(139,125,107,0.2)] focus-glow transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#2a2a2a] mb-2">Address Line 2 (Optional)</label>
                      <input
                        type="text"
                        placeholder="Apartment, suite, etc."
                        className="w-full px-4 py-3 rounded-xl border border-[rgba(139,125,107,0.2)] focus-glow transition-all"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-[#2a2a2a] mb-2">City</label>
                        <input
                          type="text"
                          required
                          placeholder="Mumbai"
                          className="w-full px-4 py-3 rounded-xl border border-[rgba(139,125,107,0.2)] focus-glow transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#2a2a2a] mb-2">State</label>
                        <input
                          type="text"
                          required
                          placeholder="Maharashtra"
                          className="w-full px-4 py-3 rounded-xl border border-[rgba(139,125,107,0.2)] focus-glow transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#2a2a2a] mb-2">PIN Code</label>
                        <input
                          type="text"
                          required
                          placeholder="400001"
                          className="w-full px-4 py-3 rounded-xl border border-[rgba(139,125,107,0.2)] focus-glow transition-all"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Payment Method */}
              <ScrollReveal delay={0.2}>
                <div className="glass-card rounded-2xl p-8 shadow-lg">
                  <h2 className="font-semibold text-xl text-[#2a2a2a] mb-6 flex items-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    Payment Method
                  </h2>
                <div className="space-y-4 mb-6">
                  <label className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    paymentMethod === 'card' ? 'border-[#1c3a2b] bg-[#f5f0e8]' : 'border-[rgba(139,125,107,0.2)]'
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={(e) => setPaymentMethod(e.target.value as any)}
                      className="w-5 h-5"
                    />
                    <CreditCard className="w-5 h-5" />
                    <span className="font-semibold">Credit / Debit Card</span>
                  </label>
                  <label className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    paymentMethod === 'upi' ? 'border-[#1c3a2b] bg-[#f5f0e8]' : 'border-[rgba(139,125,107,0.2)]'
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      value="upi"
                      checked={paymentMethod === 'upi'}
                      onChange={(e) => setPaymentMethod(e.target.value as any)}
                      className="w-5 h-5"
                    />
                    <Phone className="w-5 h-5" />
                    <span className="font-semibold">UPI / Net Banking</span>
                  </label>
                  <label className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    paymentMethod === 'cod' ? 'border-[#1c3a2b] bg-[#f5f0e8]' : 'border-[rgba(139,125,107,0.2)]'
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={paymentMethod === 'cod'}
                      onChange={(e) => setPaymentMethod(e.target.value as any)}
                      className="w-5 h-5"
                    />
                    <Truck className="w-5 h-5" />
                    <span className="font-semibold">Cash on Delivery</span>
                  </label>
                </div>

                {paymentMethod === 'card' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#2a2a2a] mb-2">Card Number</label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-3 rounded-xl border border-[rgba(139,125,107,0.2)] focus-glow transition-all"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-[#2a2a2a] mb-2">Expiry Date</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full px-4 py-3 rounded-xl border border-[rgba(139,125,107,0.2)] focus-glow transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#2a2a2a] mb-2">CVV</label>
                        <input
                          type="text"
                          placeholder="123"
                          className="w-full px-4 py-3 rounded-xl border border-[rgba(139,125,107,0.2)] focus-glow transition-all"
                        />
                      </div>
                    </div>
                  </div>
                )}
                </div>
              </ScrollReveal>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <ScrollReveal delay={0.3}>
                <div className="glass-card rounded-2xl p-6 sticky top-24 shadow-lg">
                  <h2 className="font-semibold text-xl text-[#2a2a2a] mb-6">Order Summary</h2>
                <div className="space-y-2 mb-6">
                  {cartItems.map(item => (
                    <div key={item.id} className="group flex items-center gap-4 p-2 -mx-2 rounded-2xl transition-all duration-300 hover:bg-[rgba(0,0,0,0.02)]">
                      <div className="w-[70px] h-[70px] rounded-[16px] overflow-hidden shrink-0 shadow-[0_4px_12px_rgba(0,0,0,0.08)] bg-white border border-[rgba(139,125,107,0.1)]">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col justify-center">
                        <p className="font-semibold text-[15px] text-[#2a2a2a] truncate leading-tight mb-1">{item.name}</p>
                        <p className="text-[13px] text-[#8a8580]">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-bold text-[#1c3a2b] pl-2 text-[15px]">₹{item.price * item.quantity}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-3 mb-6 pb-6 border-b border-[rgba(139,125,107,0.1)]">
                  <div className="flex justify-between">
                    <span className="text-[#6b6560]">Subtotal</span>
                    <span className="font-semibold text-[#2a2a2a]">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6b6560]">Shipping</span>
                    <span className="font-semibold text-green-600">FREE</span>
                  </div>
                </div>
                <div className="flex justify-between mb-6">
                  <span className="font-semibold text-lg text-[#2a2a2a]">Total</span>
                  <span className="font-bold text-2xl text-[#1c3a2b]">₹{total}</span>
                </div>
                <MagneticButton strength={0.25}>
                  <GlowEffect glowColor="#1c3a2b" intensity={35}>
                    <RippleButton className="w-full px-8 py-4 bg-[#1c3a2b] hover:bg-[#2a4a3b] text-white rounded-full font-semibold transition-colors flex items-center justify-center gap-2 mb-4 shadow-lg hover:shadow-xl">
                      <Lock className="w-5 h-5" />
                      Place Order
                    </RippleButton>
                  </GlowEffect>
                </MagneticButton>
                <p className="text-xs text-center text-[#6b6560]">
                  Your payment information is secure and encrypted
                </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
