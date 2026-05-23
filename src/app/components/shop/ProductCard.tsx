import { motion } from "motion/react";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { Product, useWishlist } from '../../contexts/WishlistContext';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export default function ProductCard({ product, onQuickView }: ProductCardProps) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const isWishlisted = isInWishlist(product.id);
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
      className="group bg-snow rounded-3xl overflow-hidden relative cursor-pointer"
      style={{ boxShadow: 'var(--shadow-md)' }}
      onClick={() => onQuickView(product)}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-cream">
        <motion.img
          variants={{
            hover: { scale: 1.08 }
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
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

        {/* Wishlist Heart - Always Visible, Top Right */}
        <motion.button
          variants={{
            hover: { scale: 1.1 }
          }}
          whileTap={{ scale: 0.95 }}
          animate={isWishlisted ? { scale: [1, 1.15, 1] } : {}}
          transition={isWishlisted ? { duration: 0.3, ease: "easeOut" } : {}}
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className="absolute top-4 right-4 p-3 rounded-full backdrop-blur-xl transition-all z-10"
          style={{ backgroundColor: 'rgba(250, 250, 248, 0.95)' }}
        >
          <Heart
            className={`w-5 h-5 transition-colors duration-300 ${
              isWishlisted ? "fill-red-500 text-red-500" : "text-forest"
            }`}
          />
        </motion.button>

        {/* Quick View Overlay */}
        <motion.div
          variants={{
            hover: { opacity: 1, y: 0 }
          }}
          initial={{ opacity: 0, y: 20 }}
          className="absolute bottom-4 left-4 right-4"
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
      </div>

      {/* Product Details */}
      <div className="p-6">
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
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-display text-forest">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{product.originalPrice}
              </span>
            )}
          </div>

          <motion.button
            variants={{
              hover: { scale: 1.05, y: -2 }
            }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              // Add to cart logic
            }}
            className="px-5 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 transition-all"
            style={{
              background: 'var(--amla-gold)',
              color: 'var(--forest)',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Jar
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
