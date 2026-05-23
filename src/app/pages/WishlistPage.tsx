import { Link, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Heart, ShoppingBag, ArrowRight } from 'lucide-react';
import { useWishlist } from '../contexts/WishlistContext';
import ProductCard from '../components/shop/ProductCard';

export function WishlistPage() {
  const { wishlistItems } = useWishlist();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fafaf8] py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-[#2a2a2a] mb-4">Your Wishlist</h1>
          <p className="text-[#6b6560] text-lg">
            {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved for later
          </p>
        </div>

        {wishlistItems.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl shadow-sm border border-[rgba(0,0,0,0.04)]"
          >
            <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-10 h-10 text-red-300" strokeWidth={1.5} />
            </div>
            <h2 className="font-serif text-2xl text-[#2a2a2a] mb-3">Your wishlist is empty</h2>
            <p className="text-[#6b6560] mb-8 max-w-md text-center">
              Looks like you haven't saved any organic goodies yet. Discover our fresh collection and find your favorites!
            </p>
            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#1c3a2b] text-white rounded-full font-semibold flex items-center gap-2 shadow-lg transition-all"
              >
                Browse Products
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistItems.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <ProductCard
                  product={product}
                  onQuickView={(p) => navigate(`/product/${p.slug || p.id}`)}
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
