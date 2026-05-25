import { Heart } from 'lucide-react';
import { useWishlist, Product } from '../../contexts/WishlistContext';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

interface WishlistButtonProps {
  product: Product;
  className?: string;
}

export default function WishlistButton({ product, className = "" }: WishlistButtonProps) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const isWishlisted = isInWishlist(product.id);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsClicked(true);
    toggleWishlist(product);
    setTimeout(() => setIsClicked(false), 500);
  };

  return (
    <div 
      className={`relative group z-10 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute -top-[42px] left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1.5 bg-[rgba(20,25,20,0.85)] backdrop-blur-md text-white text-[11px] font-medium rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.15)] pointer-events-none tracking-wide z-20 flex items-center justify-center"
          >
            {isWishlisted ? "Saved" : "Add to Wishlist"}
            {/* Tooltip triangle */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-[4px] border-transparent border-t-[rgba(20,25,20,0.85)]" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ 
          y: -3, 
          scale: 1.06,
          boxShadow: "0 8px 25px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.5)"
        }}
        whileTap={{ scale: 0.92 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        onClick={handleClick}
        className="w-[42px] h-[42px] flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.9)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.25)] shadow-[0_4px_15px_rgba(0,0,0,0.08),_inset_0_1px_0_rgba(255,255,255,0.4)] relative overflow-hidden"
        style={{ touchAction: 'manipulation' }}
        aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
      >
        {/* Subtle background glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Heart Icon Container */}
        <motion.div
          animate={isWishlisted ? { scale: [1, 1.15, 1] } : { scale: 1 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="relative z-10 flex items-center justify-center"
        >
          <Heart
            className={`w-[18px] h-[18px] transition-all duration-300 ${
              isWishlisted 
                ? "fill-[#e34242] text-[#e34242]" 
                : "text-[rgba(28,58,43,0.7)] group-hover:text-[#1c3a2b]"
            }`}
            strokeWidth={isWishlisted ? 2.5 : 2.2}
          />
        </motion.div>

        {/* Click Burst Particles (Simple Ripple/Glow) */}
        <AnimatePresence>
          {isClicked && (
            <motion.div
              initial={{ scale: 0.5, opacity: 0.8 }}
              animate={{ scale: 2.5, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`absolute inset-0 rounded-full z-0 ${isWishlisted ? 'bg-red-400/40' : 'bg-[#1c3a2b]/20'}`}
            />
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
