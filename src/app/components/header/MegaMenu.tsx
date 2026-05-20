import { motion } from "motion/react";
import { Apple, Salad, Milk, Cookie, Coffee, Sparkles, TrendingUp } from "lucide-react";

interface MegaMenuProps {
  onClose: () => void;
  onNavigate: (page: "shop") => void;
}

export default function MegaMenu({ onClose, onNavigate }: MegaMenuProps) {
  const categories = [
    {
      name: "Fruits",
      icon: Apple,
      items: ["Organic Apples", "Fresh Berries", "Citrus Fruits", "Seasonal Fruits"],
      image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&h=300&fit=crop"
    },
    {
      name: "Vegetables",
      icon: Salad,
      items: ["Leafy Greens", "Root Vegetables", "Fresh Herbs", "Seasonal Veggies"],
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop"
    },
    {
      name: "Dairy",
      icon: Milk,
      items: ["Fresh Milk", "Artisan Cheese", "Yogurt", "Farm Butter"],
      image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400&h=300&fit=crop"
    },
    {
      name: "Homemade Goods",
      icon: Cookie,
      items: ["Fresh Bread", "Jams & Preserves", "Cookies", "Homemade Sauces"],
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop"
    },
    {
      name: "Beverages",
      icon: Coffee,
      items: ["Fresh Juices", "Herbal Teas", "Cold-Pressed", "Smoothies"],
      image: "https://images.unsplash.com/photo-1544145945-b0047a88b3fd?w=400&h=300&fit=crop"
    }
  ];

  const featured = [
    { label: "New Arrivals", icon: Sparkles, badge: "12 items" },
    { label: "Best Sellers", icon: TrendingUp, badge: "Top picks" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 right-0 z-40"
      onMouseLeave={onClose}
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
        className="container mx-auto px-6 py-8"
      >
        <div
          className="rounded-3xl shadow-2xl border overflow-hidden backdrop-blur-xl"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            borderColor: 'rgba(139, 125, 107, 0.15)'
          }}
        >
          <div className="p-8">
            <div className="grid grid-cols-5 gap-6 mb-6">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  onClick={() => {
                    onNavigate("shop");
                    onClose();
                  }}
                  className="group cursor-pointer"
                >
                  <div className="relative rounded-2xl overflow-hidden mb-3">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-32 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent)' }}
                    />
                    <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                      <div className="p-2 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
                        <category.icon className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                  </div>

                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>

                  <ul className="space-y-1.5">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-muted-foreground group-hover:text-foreground transition-colors"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="border-t pt-6" style={{ borderColor: 'rgba(139, 125, 107, 0.1)' }}>
              <div className="flex gap-4">
                {featured.map((item, index) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    onClick={() => {
                      onNavigate("shop");
                      onClose();
                    }}
                    className="flex-1 p-4 rounded-2xl border transition-all"
                    style={{
                      backgroundColor: 'rgba(74, 103, 65, 0.05)',
                      borderColor: 'rgba(74, 103, 65, 0.15)'
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-left flex-1">
                        <div className="font-semibold text-foreground">{item.label}</div>
                        <div className="text-sm text-muted-foreground">{item.badge}</div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
