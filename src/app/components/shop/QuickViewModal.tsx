import { motion, AnimatePresence } from "motion/react";
import { X, Minus, Plus, ShoppingCart, Heart, Star, Truck, Leaf, Clock, CheckCircle, Sparkles } from "lucide-react";
import { useState } from "react";

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

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickViewModal({ product, isOpen, onClose }: QuickViewModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("250g");
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!product) return null;

  const productImages = [product.image, product.image, product.image];
  const sizes = ["250g", "500g", "1kg"];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 backdrop-blur-md z-50"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden relative"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-6 right-6 z-20 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-all shadow-xl"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
              >
                <X className="w-6 h-6" />
              </motion.button>

              {/* Content */}
              <div className="grid md:grid-cols-2 gap-8 p-8 overflow-y-auto max-h-[90vh]">
                {/* Left: Image Gallery */}
                <div className="space-y-4">
                  {/* Main Image */}
                  <motion.div
                    className="relative aspect-square bg-gradient-to-br from-muted/20 to-muted/5 rounded-3xl overflow-hidden"
                    layoutId={`product-image-${product.id}`}
                  >
                    <motion.img
                      key={selectedImage}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      src={productImages[selectedImage]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    {product.badge && (
                      <div className="absolute top-4 left-4">
                        <div className="bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                          <Sparkles className="w-4 h-4" />
                          {product.badge}
                        </div>
                      </div>
                    )}
                  </motion.div>

                  {/* Thumbnail Gallery */}
                  <div className="flex gap-3">
                    {productImages.map((img, idx) => (
                      <motion.button
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedImage(idx)}
                        className={`flex-1 aspect-square rounded-2xl overflow-hidden border-2 transition-all ${
                          selectedImage === idx ? "border-primary shadow-lg shadow-primary/20" : "border-border hover:border-primary/50"
                        }`}
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Right: Product Details */}
                <div className="flex flex-col space-y-6">
                  {/* Product Name & Description */}
                  <div>
                    <motion.h2
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-4xl font-serif mb-3"
                    >
                      {product.name}
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-muted-foreground text-lg"
                    >
                      {product.description}
                    </motion.p>
                  </div>

                  {/* Rating */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(product.rating)
                              ? "fill-amber-400 text-amber-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-semibold text-lg">{product.rating}</span>
                    <span className="text-muted-foreground">({product.reviews} reviews)</span>
                  </motion.div>

                  {/* Pricing */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-baseline gap-4"
                  >
                    <span className="text-5xl font-bold text-primary">₹{product.price}</span>
                    {product.originalPrice && (
                      <>
                        <span className="text-2xl text-muted-foreground line-through">
                          ₹{product.originalPrice}
                        </span>
                        <span className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                          Save ₹{product.originalPrice - product.price}
                        </span>
                      </>
                    )}
                  </motion.div>

                  {/* Features */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                      <div className="bg-white p-2 rounded-full">
                        <Leaf className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-green-800">100% Organic & Certified</p>
                        <p className="text-xs text-green-600">Sustainably sourced</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-200">
                      <div className="bg-white p-2 rounded-full">
                        <Truck className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-blue-800">Fast Delivery</p>
                        <p className="text-xs text-blue-600">Arrives in {product.deliveryDays || 2} days</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200">
                      <div className="bg-white p-2 rounded-full">
                        <Clock className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-amber-800">Freshly Harvested</p>
                        <p className="text-xs text-amber-600">Picked today morning</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Nutrition Highlights */}
                  {product.nutritionHighlights && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <h4 className="text-lg font-serif mb-3 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        Nutrition Highlights
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {product.nutritionHighlights.map((highlight, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 + idx * 0.05 }}
                            className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20"
                          >
                            {highlight}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Actions */}
                  <div className="mt-auto space-y-4">
                    {/* Size Options */}
                    <div>
                      <span className="text-sm font-semibold mb-3 block">Size:</span>
                      <div className="flex gap-2">
                        {sizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                              selectedSize === size
                                ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg'
                                : 'bg-muted text-foreground hover:bg-muted/70'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-semibold">Quantity:</span>
                      <div className="flex items-center gap-2 bg-muted rounded-2xl p-1.5">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="p-2 hover:bg-white rounded-xl transition-all"
                        >
                          <Minus className="w-4 h-4" />
                        </motion.button>
                        <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setQuantity(quantity + 1)}
                          className="p-2 hover:bg-white rounded-xl transition-all"
                        >
                          <Plus className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>

                    {/* Add to Cart & Wishlist */}
                    <div className="flex gap-3">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 bg-gradient-to-r from-primary to-accent text-white px-6 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all"
                      >
                        <ShoppingCart className="w-6 h-6" />
                        Add to Cart
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsWishlisted(!isWishlisted)}
                        className="p-4 border-2 border-border rounded-2xl hover:border-primary hover:bg-primary/5 transition-all"
                      >
                        <Heart
                          className={`w-7 h-7 ${
                            isWishlisted ? "fill-red-500 text-red-500" : "text-gray-700"
                          }`}
                        />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
