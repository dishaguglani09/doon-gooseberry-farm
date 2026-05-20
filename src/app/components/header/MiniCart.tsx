import { motion } from "motion/react";
import { X, Plus, Minus, ArrowRight } from "lucide-react";
import { useState } from "react";

interface MiniCartProps {
  onClose: () => void;
  cartCount: number;
}

export default function MiniCart({ onClose, cartCount }: MiniCartProps) {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Organic Apples",
      price: 299,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      name: "Fresh Milk",
      price: 65,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=100&h=100&fit=crop"
    },
    {
      id: 3,
      name: "Whole Wheat Bread",
      price: 45,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=100&h=100&fit=crop"
    }
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + delta) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <motion.div
      initial={{ opacity: 0, x: 300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 300 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
      className="fixed right-0 top-0 h-full w-full max-w-md z-50 shadow-2xl backdrop-blur-xl"
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.98)' }}
    >
      {/* Header */}
      <div className="p-6 border-b" style={{ borderColor: 'rgba(139, 125, 107, 0.15)' }}>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-serif">Shopping Cart</h2>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="p-2 rounded-full hover:bg-muted transition-colors"
          >
            <X className="w-5 h-5" />
          </motion.button>
        </div>
        <p className="text-sm text-muted-foreground mt-1">{cartCount} items</p>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4" style={{ maxHeight: 'calc(100vh - 280px)' }}>
        {cartItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="flex gap-4 p-4 rounded-2xl border"
            style={{
              backgroundColor: 'rgba(245, 241, 237, 0.3)',
              borderColor: 'rgba(139, 125, 107, 0.1)'
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 rounded-xl object-cover"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-1">{item.name}</h3>
              <p className="text-primary font-semibold">₹{item.price}</p>

              <div className="flex items-center gap-3 mt-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => updateQuantity(item.id, -1)}
                  className="p-1.5 rounded-lg border hover:bg-white transition-colors"
                  style={{ borderColor: 'rgba(139, 125, 107, 0.2)' }}
                >
                  <Minus className="w-3.5 h-3.5" />
                </motion.button>

                <span className="w-8 text-center font-medium">{item.quantity}</span>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => updateQuantity(item.id, 1)}
                  className="p-1.5 rounded-lg bg-primary text-white transition-transform"
                >
                  <Plus className="w-3.5 h-3.5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t p-6" style={{ borderColor: 'rgba(139, 125, 107, 0.15)' }}>
        <div className="flex items-center justify-between mb-4">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="text-2xl font-bold text-foreground">₹{subtotal}</span>
        </div>

        <motion.button
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 rounded-2xl text-white font-semibold flex items-center justify-center gap-2 shadow-lg"
          style={{ background: 'linear-gradient(to right, #4a6741, #5a7851)' }}
        >
          Proceed to Checkout
          <ArrowRight className="w-5 h-5" />
        </motion.button>

        <p className="text-xs text-center text-muted-foreground mt-3">
          Free delivery on orders above ₹999
        </p>
      </div>
    </motion.div>
  );
}
