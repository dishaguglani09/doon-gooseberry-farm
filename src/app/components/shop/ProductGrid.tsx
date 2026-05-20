import { motion } from "motion/react";
import ProductCard from "./ProductCard";
import { Loader2, Leaf, Sparkles } from "lucide-react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  badge?: string;
  inStock: boolean;
  nutritionHighlights?: string[];
  deliveryDays?: number;
}

interface ProductGridProps {
  products: Product[];
  onQuickView: (product: Product) => void;
  wishlist?: Set<number>;
  onToggleWishlist?: (productId: number) => void;
  isLoading?: boolean;
  onLoadMore?: () => void;
  hasMore?: boolean;
}

function SkeletonCard() {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-md border animate-pulse" style={{ borderColor: 'rgba(139, 125, 107, 0.5)' }}>
      {/* Image Skeleton */}
      <div className="aspect-square bg-gradient-to-br from-muted/40 to-muted/20" />

      {/* Content Skeleton */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <div className="h-6 bg-muted/60 rounded-lg w-3/4" />
        {/* Description */}
        <div className="space-y-2">
          <div className="h-4 bg-muted/40 rounded w-full" />
          <div className="h-4 bg-muted/40 rounded w-2/3" />
        </div>
        {/* Rating */}
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-4 h-4 bg-muted/40 rounded" />
          ))}
        </div>
        {/* Price */}
        <div className="flex items-center justify-between pt-2">
          <div className="h-8 bg-primary/20 rounded-lg w-24" />
          <div className="h-6 bg-green-100 rounded-full w-20" />
        </div>
      </div>
    </div>
  );
}

export default function ProductGrid({ products, onQuickView, wishlist, onToggleWishlist, isLoading, onLoadMore, hasMore }: ProductGridProps) {
  // Empty State
  if (products.length === 0 && !isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-20"
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full">
            <Leaf className="w-16 h-16 text-primary" />
          </div>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-serif mb-3"
        >
          No fresh matches found
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground text-lg mb-8 max-w-md mx-auto"
        >
          Try adjusting your filters to discover more delicious organic products
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all inline-flex items-center gap-2"
        >
          <Sparkles className="w-5 h-5" />
          Clear All Filters
        </motion.button>

        {/* Suggested Categories */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <p className="text-sm text-muted-foreground mb-4">Or explore these categories:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {["Pickles", "Chutneys", "Jams", "Juices", "Candies", "Spices"].map((cat, idx) => (
              <motion.button
                key={cat}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + idx * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-6 py-3 bg-white border-2 border-border rounded-full hover:border-primary hover:bg-primary/5 transition-all font-medium"
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div>
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Actual Products */}
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.05,
              duration: 0.4,
              ease: "easeOut"
            }}
          >
            <ProductCard
              product={product}
              onQuickView={onQuickView}
              isWishlisted={wishlist?.has(product.id)}
              onToggleWishlist={() => onToggleWishlist?.(product.id)}
            />
          </motion.div>
        ))}

        {/* Loading Skeletons */}
        {isLoading && (
          <>
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={`skeleton-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <SkeletonCard />
              </motion.div>
            ))}
          </>
        )}
      </div>

      {/* Loading Indicator */}
      {isLoading && products.length > 0 && (
        <div className="flex justify-center py-12">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <Loader2 className="w-10 h-10 text-primary" />
          </motion.div>
        </div>
      )}

      {/* Load More Button */}
      {hasMore && !isLoading && products.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(74, 103, 65, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            onClick={onLoadMore}
            className="bg-gradient-to-r from-primary to-accent text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all inline-flex items-center gap-3 group"
          >
            <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Load More Products
            <motion.span
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-2xl"
            >
              ↓
            </motion.span>
          </motion.button>

          <p className="text-sm text-muted-foreground mt-4">
            Showing {products.length} of many fresh products
          </p>
        </motion.div>
      )}
    </div>
  );
}
