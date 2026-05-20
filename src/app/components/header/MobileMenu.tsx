import { motion, AnimatePresence } from "motion/react";
import { Home, ShoppingBag, Info, Heart, User, ChevronRight, X } from "lucide-react";

interface MobileMenuProps {
  currentPage: string;
  onNavigate: (page: "home" | "shop" | "about") => void;
  onClose: () => void;
  cartCount: number;
}

export default function MobileMenu({ currentPage, onNavigate, onClose, cartCount }: MobileMenuProps) {
  const menuItems = [
    { label: "Home", page: "home" as const, icon: Home },
    { label: "Shop", page: "shop" as const, icon: ShoppingBag },
    { label: "About", page: "about" as const, icon: Info }
  ];

  const accountItems = [
    { label: "Wishlist", icon: Heart, badge: "5" },
    { label: "My Account", icon: User }
  ];

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-40 lg:hidden"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(4px)' }}
      />

      {/* Menu Drawer */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
        className="fixed right-0 top-0 h-full w-full max-w-sm z-50 shadow-2xl backdrop-blur-xl lg:hidden"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.98)' }}
      >
        {/* Header */}
        <div className="p-6 border-b" style={{ borderColor: 'rgba(139, 125, 107, 0.15)' }}>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-serif">Menu</h2>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="p-2 rounded-full hover:bg-muted transition-colors"
            >
              <X className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        {/* Menu Content */}
        <div className="overflow-y-auto p-6" style={{ maxHeight: 'calc(100vh - 200px)' }}>
          {/* Navigation Links */}
          <div className="space-y-2 mb-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => onNavigate(item.page)}
                className="w-full flex items-center justify-between p-4 rounded-2xl transition-all"
                style={{
                  backgroundColor: currentPage === item.page
                    ? 'rgba(74, 103, 65, 0.1)'
                    : 'transparent'
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="p-2.5 rounded-xl"
                    style={{
                      backgroundColor: currentPage === item.page
                        ? '#4a6741'
                        : 'rgba(74, 103, 65, 0.1)'
                    }}
                  >
                    <item.icon
                      className="w-5 h-5"
                      style={{ color: currentPage === item.page ? 'white' : '#4a6741' }}
                    />
                  </div>
                  <span className="text-lg font-medium text-foreground">{item.label}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </motion.button>
            ))}
          </div>

          {/* Account Section */}
          <div className="border-t pt-6 mb-8" style={{ borderColor: 'rgba(139, 125, 107, 0.1)' }}>
            <h3 className="text-sm font-semibold text-muted-foreground mb-3 px-2">Account</h3>
            <div className="space-y-2">
              {accountItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-muted transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <item.icon className="w-5 h-5 text-muted-foreground" />
                    <span className="text-foreground">{item.label}</span>
                  </div>
                  {item.badge && (
                    <span
                      className="px-2.5 py-1 rounded-full text-xs font-semibold text-white"
                      style={{ backgroundColor: '#4a6741' }}
                    >
                      {item.badge}
                    </span>
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-2xl p-6 text-white"
            style={{ background: 'linear-gradient(135deg, #4a6741, #5a7851)' }}
          >
            <h3 className="text-xl font-serif mb-2">Fresh Daily Deliveries</h3>
            <p className="text-sm mb-4" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Order before 6 PM for next-day delivery
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 rounded-xl font-semibold"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
            >
              Shop Now
            </motion.button>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t" style={{ borderColor: 'rgba(139, 125, 107, 0.15)', backgroundColor: 'rgba(255, 255, 255, 0.98)' }}>
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 py-3 rounded-xl border font-medium transition-colors"
              style={{ borderColor: 'rgba(74, 103, 65, 0.3)' }}
            >
              Login
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 py-3 rounded-xl font-medium text-white"
              style={{ background: 'linear-gradient(to right, #4a6741, #5a7851)' }}
            >
              Register
            </motion.button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
