import { Link } from 'react-router';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GlowEffect } from '../components/effects/GlowEffect';
import { RippleButton } from '../components/effects/RippleButton';
import { useCart } from '../contexts/CartContext';

export function CartPage() {
  const { cartItems, updateCartQuantity, removeFromCart } = useCart();

  const updateQuantity = (id: number, newQuantity: number) => {
    updateCartQuantity(id, newQuantity);
  };

  const removeItem = (id: number) => {
    removeFromCart(id);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal >= 999 ? 0 : 50;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-[#fcfbfa] py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif font-semibold text-5xl text-[#2a2a2a] mb-12 tracking-tight"
        >
          Shopping Cart
        </motion.h1>

        {cartItems.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/80 backdrop-blur-md rounded-[32px] p-20 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 max-w-2xl mx-auto"
          >
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-[#f0ebe1] to-[#e6dfd3] rounded-[32px] flex items-center justify-center shadow-inner">
              <ShoppingBag className="w-16 h-16 text-[#8b7d6b]" strokeWidth={1.5} />
            </div>
            <h2 className="font-serif font-semibold text-3xl text-[#2a2a2a] mb-4">Your cart is empty</h2>
            <p className="text-[#6b6560] text-lg mb-10">Discover our collection of organic goodness and fill your cart.</p>
            <GlowEffect glowColor="#1c3a2b" intensity={20}>
              <Link to="/products">
                <RippleButton className="inline-flex items-center gap-3 px-10 py-5 bg-[#1c3a2b] hover:bg-[#2a4a3b] text-white rounded-full font-semibold transition-all duration-400 shadow-[0_8px_30px_rgba(28,58,43,0.2)] hover:shadow-[0_12px_40px_rgba(28,58,43,0.3)]">
                  <ShoppingBag className="w-5 h-5" />
                  Continue Shopping
                </RippleButton>
              </Link>
            </GlowEffect>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Cart Items */}
            <div className="lg:col-span-8 space-y-6">
              <AnimatePresence>
                {cartItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                    className="bg-white/80 backdrop-blur-md rounded-[28px] p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/50 transition-all duration-400"
                  >
                    <div className="w-28 h-28 shrink-0 overflow-hidden relative shadow-sm rounded-[20px] group cursor-pointer bg-[#f5f0e8]">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif font-semibold text-xl text-[#2a2a2a] mb-2 truncate">{item.name}</h3>
                      <p className="text-2xl font-semibold text-[#1c3a2b] mb-4 sm:mb-0 tracking-tight">₹{item.price}</p>
                    </div>

                    <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
                      <div className="flex items-center bg-[#fcfbfa] border border-[#e6dfd3] rounded-full p-1 shadow-inner">
                        <motion.button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-10 h-10 rounded-full flex items-center justify-center bg-white hover:bg-[#f5f0e8] text-[#2a2a2a] shadow-sm transition-colors duration-250 ease-in-out"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Minus className="w-4 h-4" />
                        </motion.button>
                        <motion.span
                          key={item.quantity}
                          initial={{ scale: 1.2, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="w-12 text-center font-medium text-lg text-[#2a2a2a]"
                        >
                          {item.quantity}
                        </motion.span>
                        <motion.button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-10 h-10 rounded-full flex items-center justify-center bg-white hover:bg-[#f5f0e8] text-[#2a2a2a] shadow-sm transition-colors duration-250 ease-in-out"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Plus className="w-4 h-4" />
                        </motion.button>
                      </div>

                      <div className="flex items-center gap-4">
                        <motion.p
                          key={`total-${item.quantity}`}
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          className="font-semibold text-xl text-[#2a2a2a] w-24 text-right hidden sm:block"
                        >
                          ₹{item.price * item.quantity}
                        </motion.p>
                        <motion.button
                          onClick={() => removeItem(item.id)}
                          className="w-10 h-10 flex items-center justify-center rounded-full text-[#a8a19a] hover:text-red-500 hover:bg-red-50 transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-4">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-br from-white/90 to-[#fdfcfb]/80 backdrop-blur-xl rounded-[32px] p-8 sticky top-28 shadow-[0_8px_40px_rgb(0,0,0,0.04)] border border-white/60"
              >
                <h2 className="font-serif font-semibold text-2xl text-[#2a2a2a] mb-8">Order Summary</h2>
                
                <div className="space-y-5 mb-8">
                  <div className="flex justify-between items-center text-[1.05rem]">
                    <span className="text-[#6b6560]">Subtotal</span>
                    <span className="font-medium text-[#2a2a2a]">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between items-center text-[1.05rem]">
                    <span className="text-[#6b6560]">Shipping</span>
                    <span className="font-medium text-[#2a2a2a]">
                      {shipping === 0 ? <span className="text-[#4a6741] font-semibold">FREE</span> : `₹${shipping}`}
                    </span>
                  </div>
                  
                  {subtotal < 999 && subtotal > 0 && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="p-4 bg-gradient-to-r from-[#f5f0e8] to-[#f0ebe1] rounded-[16px] text-sm text-[#5a544f] border border-[#e6dfd3]/50"
                    >
                      <span className="font-medium text-[#4a6741]">Almost there!</span> Add ₹{999 - subtotal} more for free shipping.
                    </motion.div>
                  )}
                  
                  <div className="border-t border-[#e6dfd3] pt-6 flex justify-between items-end mt-2">
                    <span className="font-serif font-semibold text-xl text-[#2a2a2a]">Total</span>
                    <div className="text-right">
                      <span className="text-xs text-[#8b7d6b] block mb-1">Including all taxes</span>
                      <motion.span 
                        key={total}
                        initial={{ scale: 1.1, color: '#4a6741' }}
                        animate={{ scale: 1, color: '#1c3a2b' }}
                        className="font-bold text-4xl tracking-tight"
                      >
                        ₹{total}
                      </motion.span>
                    </div>
                  </div>
                </div>

                <GlowEffect glowColor="#1c3a2b" intensity={25}>
                  <Link to="/checkout" className="block w-full">
                    <motion.div
                      whileHover="hover"
                      className="w-full py-5 bg-[#1c3a2b] hover:bg-[#162e22] text-white rounded-[20px] font-semibold text-lg transition-colors duration-400 flex items-center justify-center gap-3 mb-4 shadow-[0_8px_20px_rgba(28,58,43,0.15)] relative overflow-hidden group"
                    >
                      <span className="relative z-10">Proceed to Checkout</span>
                      <motion.div
                        variants={{
                          hover: { x: 5 }
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="relative z-10"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                    </motion.div>
                  </Link>
                </GlowEffect>
                
                <Link
                  to="/products"
                  className="w-full py-4 text-[#6b6560] hover:text-[#1c3a2b] font-medium transition-colors duration-300 flex items-center justify-center mt-2 group"
                >
                  <span className="border-b border-transparent group-hover:border-[#1c3a2b]/30 pb-0.5 transition-all duration-300">
                    Continue Shopping
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
