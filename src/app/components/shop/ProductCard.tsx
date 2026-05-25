import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, ShoppingBag, Star, Check, Loader2 } from "lucide-react";
import { Product, useWishlist } from '../../contexts/WishlistContext';
import { useNavigate } from "react-router";
import { useToast } from "../../contexts/ToastContext";
import WishlistButton from "./WishlistButton";

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export default function ProductCard({ product, onQuickView }: ProductCardProps) {
  const navigate = useNavigate();
  const { showToast } = useToast();
  
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (isAdding || isAdded) return;
    
    setIsAdding(true);
    // Simulate API call for adding to cart
    setTimeout(() => {
      setIsAdding(false);
      setIsAdded(true);
      showToast("Added to cart", "success");
      
      setTimeout(() => {
        setIsAdded(false);
      }, 1500);
    }, 600);
  };
  const categoryColors: Record<string, string> = {
    Pickles: "#ea580c",
    Chutneys: "#16a34a",
    Jams: "#dc2626",
    Juices: "#10b981",
    Candies: "#f59e0b",
    Spices: "#d97706"
  };

  // Infer category from product name or badge
  const category = product.name.includes("Pickle") ? "Pickles"
    : product.name.includes("Chutney") ? "Chutneys"
    : product.name.includes("Jam") ? "Jams"
    : product.name.includes("Juice") ? "Juices"
    : product.name.includes("Candy") || product.name.includes("Candies") ? "Candies"
    : product.name.includes("Powder") || product.name.includes("Turmeric") || product.name.includes("Chili") ? "Spices"
    : product.name.includes("Honey") ? "Natural Sweeteners"
    : "Products";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover="hover"
      className="group flex flex-col h-full overflow-hidden rounded-[30px] bg-[#fcfbf8] border border-[#ece8df] shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[6px] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] relative cursor-pointer"
      onClick={() => navigate(`/product/${product.slug || product.id}`)}
    >
      {/* Image Container */}
      <div className="relative h-[240px] shrink-0 w-full overflow-hidden bg-cream">
        <motion.img
          variants={{
            hover: { scale: 1.04 }
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay on Hover */}
        <motion.div
          variants={{
            hover: { opacity: 1 }
          }}
          initial={{ opacity: 0 }}
          className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"
        />

        {/* Category Tag */}
        <div className="absolute top-4 left-4">
          <div
            className="px-4 py-2 rounded-full text-xs font-semibold text-white shadow-lg"
            style={{ backgroundColor: categoryColors[category] || 'var(--forest)' }}
          >
            {category}
          </div>
        </div>

        {/* Wishlist Heart - Floats in gently on desktop, always visible on mobile */}
        <div className="absolute top-[14px] right-[14px] z-10 opacity-90 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 ease-out">
          <WishlistButton product={product} />
        </div>

        {/* Quick View Overlay */}
        {onQuickView && (
          <motion.div
            variants={{
              hover: { opacity: 1, y: 0 }
            }}
            initial={{ opacity: 0, y: 20 }}
            className="absolute bottom-4 left-4 right-4 z-20"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                onQuickView(product);
              }}
              className="w-full px-6 py-3 rounded-2xl font-semibold text-sm backdrop-blur-xl border-2 transition-all"
              style={{
                backgroundColor: 'rgba(250, 250, 248, 0.95)',
                borderColor: 'rgba(28, 58, 43, 0.2)',
                color: 'var(--forest)'
              }}
            >
              Quick View
            </button>
          </motion.div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-6 flex flex-col flex-1">
        {/* Product Name */}
        <h3 className="text-xl font-heading mb-2 text-forest line-clamp-1">
          {product.name}
        </h3>

        {/* Short Descriptor */}
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2 leading-relaxed font-sans">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? "fill-amla-gold text-amla-gold"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm font-semibold text-forest">{product.rating}</span>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between mt-auto pt-2">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-display text-forest">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{product.originalPrice}
              </span>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            className="px-5 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 transition-all duration-250 ease-out z-20"
            style={{
              background: isAdded ? 'var(--forest)' : 'var(--amla-gold)',
              color: isAdded ? 'var(--cream)' : 'var(--forest)',
              boxShadow: 'var(--shadow-md)',
              touchAction: 'manipulation'
            }}
          >
            <AnimatePresence mode="wait">
              {isAdding ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <Loader2 className="w-4 h-4 animate-spin" />
                </motion.div>
              ) : isAdded ? (
                <motion.div
                  key="added"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center gap-1.5"
                >
                  <Check className="w-4 h-4" />
                  <span>Added</span>
                </motion.div>
              ) : (
                <motion.div
                  key="add"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center gap-1.5"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Badge */}
        {product.badge && (
          <div className="mt-4 pt-4 border-t border-border">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-amla-gold/10 text-earth border border-amla-gold/30">
              {product.badge}
            </span>
          </div>
        )}
      </div>

      {/* Hover Glow Effect */}
      <motion.div
        variants={{
          hover: { opacity: 1 }
        }}
        initial={{ opacity: 0 }}
        className="absolute inset-0 pointer-events-none rounded-3xl"
        style={{ boxShadow: 'var(--shadow-glow)' }}
      />

      {/* Stock Status */}
      {!product.inStock && (
        <div className="absolute inset-0 backdrop-blur-sm flex items-center justify-center z-20 rounded-3xl" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className="px-6 py-3 rounded-full font-bold text-cream bg-forest">
            Out of Stock
          </div>
        </div>
      )}
    </motion.div>
  );
}
