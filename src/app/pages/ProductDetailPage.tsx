import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router';
import { Star, Minus, Plus, Heart, Share2, Check, Truck, Shield, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ScrollReveal } from '../components/animations/ScrollReveal';
import { StaggerChildren, StaggerItem } from '../components/animations/StaggerChildren';
import { TiltCard } from '../components/effects/TiltCard';
import { GlowEffect } from '../components/effects/GlowEffect';
import { RippleButton } from '../components/effects/RippleButton';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useWishlist } from '../contexts/WishlistContext';
import { useToast } from '../contexts/ToastContext';

export function ProductDetailPage() {
  const { productSlug } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { showToast } = useToast();

  // Load product from database based on slug
  const product = getProductBySlug(productSlug || '');

  // If product not found, redirect to products page
  if (!product) {
    navigate('/products');
    return null;
  }

  // Get related products (excluding current product)
  const relatedProducts = getRelatedProducts(product.id, 3);

  const reviews = [
    {
      name: 'Priya Sharma',
      rating: 5,
      date: 'March 15, 2024',
      text: 'Absolutely delicious! Reminds me of my grandmother\'s homemade pickle. The quality is outstanding.',
    },
    {
      name: 'Rajesh Kumar',
      rating: 5,
      date: 'March 10, 2024',
      text: 'Best mango pickle I\'ve ever had. The perfect balance of spice and tanginess. Highly recommended!',
    },
    {
      name: 'Anjali Mehta',
      rating: 4,
      date: 'March 5, 2024',
      text: 'Very good quality and taste. A bit spicy for my liking but overall excellent product.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafaf8] py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-[#6b6560] mb-8">
          <Link to="/" className="hover:text-[#1c3a2b]">
            Home
          </Link>
          <span>/</span>
          <Link to="/products" className="hover:text-[#1c3a2b]">
            Products
          </Link>
          <span>/</span>
          <Link to={`/category/${product.category}`} className="hover:text-[#1c3a2b] capitalize">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-[#2a2a2a]">{product.name}</span>
        </div>

        {/* Product Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div>
            <div className="rounded-2xl overflow-hidden aspect-square shadow-2xl border border-[rgba(0,0,0,0.06)] relative group">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </div>

          {/* Details */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              {product.inStock ? (
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                  In Stock
                </span>
              ) : (
                <span className="px-3 py-1 bg-red-100 text-red-700 text-sm font-semibold rounded-full">
                  Out of Stock
                </span>
              )}
              {product.badge && (
                <span className="px-3 py-1 bg-[#d4a533] text-white text-sm font-semibold rounded-full">{product.badge}</span>
              )}
            </div>
            <h1 className="font-serif text-4xl text-[#2a2a2a] mb-4">{product.name}</h1>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating) ? 'fill-[#FFB900] text-[#FFB900]' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-[#2a2a2a] font-semibold">{product.rating}</span>
              <span className="text-[#6b6560]">({product.reviews} reviews)</span>
            </div>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-4xl font-bold text-[#1c3a2b]">₹{product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-[#6b6560] line-through">₹{product.originalPrice}</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                    Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </span>
                </>
              )}
            </div>
            <p className="text-[#6b6560] leading-relaxed mb-8">{product.description}</p>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-[#2a2a2a] mb-3">Quantity</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center bg-white border border-[rgba(139,125,107,0.2)] rounded-full shadow-sm p-1">
                  <motion.button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#f5f0e8] text-[#2a2a2a] transition-colors"
                    whileTap={{ scale: 0.95 }}
                  >
                    <Minus className="w-4 h-4" />
                  </motion.button>
                  <motion.span
                    key={quantity}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-12 text-center font-semibold text-[#2a2a2a]"
                  >
                    {quantity}
                  </motion.span>
                  <motion.button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#f5f0e8] text-[#2a2a2a] transition-colors"
                    whileTap={{ scale: 0.95 }}
                  >
                    <Plus className="w-4 h-4" />
                  </motion.button>
                </div>
                
                <motion.button 
                  className="flex-1 px-8 h-[52px] bg-gradient-to-r from-[#1c3a2b] to-[#2a4a3b] text-white rounded-full font-semibold text-[15px] shadow-[0_4px_20px_rgba(28,58,43,0.2)] transition-all duration-400 ease-out hover:-translate-y-[2px] hover:shadow-[0_8px_30px_rgba(28,58,43,0.3)] hover:brightness-105 active:scale-[0.98]"
                  onClick={() => showToast('Added to cart successfully!', 'success')}
                >
                  Add to Cart
                </motion.button>

                <motion.button
                  onClick={() => {
                    toggleWishlist(product);
                  }}
                  className={`w-[52px] h-[52px] flex items-center justify-center rounded-full shadow-sm border transition-all duration-400 ease-out hover:-translate-y-[2px] hover:shadow-md active:scale-[0.95] ${
                    isInWishlist(product.id) 
                      ? 'bg-red-50 border-red-100 text-red-500' 
                      : 'bg-white border-[rgba(139,125,107,0.2)] text-[#6b6560] hover:text-[#2a2a2a]'
                  }`}
                >
                  <motion.div
                    animate={isInWishlist(product.id) ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    <Heart className="w-5 h-5" fill={isInWishlist(product.id) ? "currentColor" : "none"} />
                  </motion.div>
                </motion.button>

                <motion.button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    showToast('Link copied to clipboard!', 'info');
                  }}
                  className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-white border border-[rgba(139,125,107,0.2)] text-[#6b6560] hover:text-[#2a2a2a] shadow-sm transition-all duration-400 ease-out hover:-translate-y-[2px] hover:shadow-md active:scale-[0.95]"
                >
                  <Share2 className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-white rounded-2xl mb-8">
              <div className="text-center">
                <Truck className="w-6 h-6 mx-auto mb-2 text-[#4a6741]" />
                <p className="text-xs text-[#6b6560]">Free Delivery on ₹999+</p>
              </div>
              <div className="text-center">
                <Shield className="w-6 h-6 mx-auto mb-2 text-[#4a6741]" />
                <p className="text-xs text-[#6b6560]">100% Organic Certified</p>
              </div>
              <div className="text-center">
                <RefreshCw className="w-6 h-6 mx-auto mb-2 text-[#4a6741]" />
                <p className="text-xs text-[#6b6560]">Easy Returns</p>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-[#f5f0e8] rounded-2xl p-6">
              <h3 className="font-semibold text-lg text-[#2a2a2a] mb-4">Health Benefits</h3>
              <ul className="space-y-2">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#4a6741] shrink-0 mt-0.5" />
                    <span className="text-[#6b6560]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl overflow-hidden">
            <div className="border-b border-[rgba(139,125,107,0.1)] p-8">
              <h2 className="font-serif text-3xl text-[#2a2a2a]">Product Information</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              <div>
                <h3 className="font-semibold text-xl text-[#2a2a2a] mb-4">Ingredients</h3>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ingredient, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-[#f5f0e8] text-[#2a2a2a] rounded-full text-sm"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-[#2a2a2a] mb-4">Nutrition Facts</h3>
                <div className="space-y-2">
                  {product.nutritionFacts.map((fact, index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-[rgba(139,125,107,0.1)]">
                      <span className="text-[#6b6560]">{fact.label}</span>
                      <span className="font-semibold text-[#2a2a2a]">{fact.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl p-8">
            <h2 className="font-serif text-3xl text-[#2a2a2a] mb-8">Customer Reviews</h2>
            <div className="space-y-6">
              {reviews.map((review, index) => (
                <div key={index} className="pb-6 border-b border-[rgba(139,125,107,0.1)] last:border-0">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-semibold text-[#2a2a2a]">{review.name}</p>
                      <p className="text-sm text-[#6b6560]">{review.date}</p>
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating ? 'fill-[#FFB900] text-[#FFB900]' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-[#6b6560] leading-relaxed">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <ScrollReveal>
          <div>
            <h2 className="font-serif text-3xl text-[#2a2a2a] mb-8">You May Also Like</h2>
            <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <StaggerItem key={relatedProduct.id}>
                  <TiltCard tiltIntensity={10} scaleIntensity={1.03} shadowIntensity={0.25}>
                    <Link to={`/product/${relatedProduct.slug}`} className="group block">
                      <motion.div
                        className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[rgba(0,0,0,0.06)] hover:shadow-xl transition-all duration-500"
                        whileHover={{ y: -6 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                      >
                        <div className="aspect-[4/3] overflow-hidden relative">
                          <ImageWithFallback
                            src={relatedProduct.image}
                            alt={relatedProduct.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          {relatedProduct.badge && (
                            <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#1c3a2b] text-white text-xs font-semibold rounded-full">
                              {relatedProduct.badge}
                            </div>
                          )}
                        </div>
                        <div className="p-5">
                          <h3 className="font-semibold text-[#1c2a1f] mb-3">{relatedProduct.name}</h3>
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="font-bold text-[#1c3a2b]" style={{ fontSize: '1.1rem' }}>₹{relatedProduct.price}</span>
                              {relatedProduct.originalPrice && (
                                <span className="text-xs text-[#9b9590] line-through ml-1.5">₹{relatedProduct.originalPrice}</span>
                              )}
                            </div>
                            <RippleButton
                              className="px-4 py-2 bg-[#1c3a2b] hover:bg-[#2a4a3b] text-white rounded-full text-xs font-semibold transition-colors"
                              onClick={(e: React.MouseEvent) => {
                                e.preventDefault();
                                e.stopPropagation();
                              }}
                            >
                              Add to Cart
                            </RippleButton>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  </TiltCard>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
