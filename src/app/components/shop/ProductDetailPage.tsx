import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, ShoppingBag, Star, ChevronLeft, ChevronDown, Minus, Plus, ShieldCheck, Leaf, Truck } from "lucide-react";
import { Badge } from "../ui/Badge";

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
}

interface ProductDetailPageProps {
  product: Product;
  onBack: () => void;
  relatedProducts?: Product[];
}

export default function ProductDetailPage({ product, onBack, relatedProducts = [] }: ProductDetailPageProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("250g");
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>("how-its-made");
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const addToCartRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (addToCartRef.current) {
        const rect = addToCartRef.current.getBoundingClientRect();
        setShowStickyBar(rect.bottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const images = [
    product.image,
    product.image,
    product.image,
    product.image
  ];

  const sizes = ["250g", "500g", "1kg"];

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Back Button */}
      <div className="container mx-auto px-6 py-6">
        <motion.button
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
          className="inline-flex items-center gap-2 text-forest font-semibold hover:text-earth transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Shop
        </motion.button>
      </div>

      <div className="container mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative aspect-square rounded-3xl overflow-hidden bg-snow"
              style={{ boxShadow: 'var(--shadow-lg)' }}
            >
              <motion.img
                key={selectedImage}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover cursor-zoom-in"
              />

              {/* Wishlist Heart */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="absolute top-4 right-4 p-4 rounded-full backdrop-blur-xl transition-all"
                style={{ backgroundColor: 'rgba(250, 250, 248, 0.95)' }}
              >
                <Heart
                  className={`w-6 h-6 transition-all ${
                    isWishlisted ? "fill-red-500 text-red-500" : "text-forest"
                  }`}
                />
              </motion.button>
            </motion.div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-4">
              {images.map((image, index) => (
                <motion.button
                  key={index}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-2xl overflow-hidden transition-all ${
                    selectedImage === index
                      ? 'ring-4 ring-amla-gold'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                  style={{ boxShadow: selectedImage === index ? 'var(--shadow-md)' : 'none' }}
                >
                  <img src={image} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="space-y-6">
            {/* Product Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h1 className="text-5xl font-display text-forest mb-4 leading-tight">
                {product.name}
              </h1>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="forest" size="sm" icon={<ShieldCheck className="w-3 h-3" />}>
                  Certified Organic
                </Badge>
                <Badge variant="outline" size="sm" icon={<Leaf className="w-3 h-3" />}>
                  100% Natural
                </Badge>
                <Badge variant="outline" size="sm" icon={<Truck className="w-3 h-3" />}>
                  Free Shipping
                </Badge>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-amla-gold text-amla-gold"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-semibold text-forest">{product.rating}</span>
                <span className="text-muted-foreground">({product.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-5xl font-display text-forest">₹{product.price}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-2xl text-muted-foreground line-through">
                      ₹{product.originalPrice}
                    </span>
                    <Badge variant="earth" size="md">
                      Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </Badge>
                  </>
                )}
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-lg text-charcoal/80 leading-relaxed font-sans">
                {product.description}. Handcrafted in small batches using traditional Himalayan recipes passed down through generations. Each jar is a testament to the purity and authenticity of mountain-grown ingredients.
              </p>
            </motion.div>

            {/* Size Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <label className="block text-sm font-semibold text-forest mb-3">
                Size
              </label>
              <div className="flex gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                      selectedSize === size
                        ? 'bg-amla-gold text-forest shadow-md'
                        : 'bg-snow text-charcoal hover:bg-mist'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Quantity Selector */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label className="block text-sm font-semibold text-forest mb-3">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center bg-snow rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-4 hover:bg-mist transition-colors"
                  >
                    <Minus className="w-5 h-5 text-forest" />
                  </button>
                  <span className="px-8 py-4 font-semibold text-lg text-forest border-x border-border">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-4 hover:bg-mist transition-colors"
                  >
                    <Plus className="w-5 h-5 text-forest" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Add to Cart */}
            <motion.button
              ref={addToCartRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 transition-all"
              style={{
                background: 'var(--amla-gold)',
                color: 'var(--forest)',
                boxShadow: 'var(--shadow-xl)'
              }}
            >
              <ShoppingBag className="w-6 h-6" />
              Add to Cart - ₹{product.price * quantity}
            </motion.button>

            {/* Accordions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-4 pt-8 border-t border-border"
            >
              {/* How It's Made */}
              <div className="bg-snow rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleSection("how-its-made")}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-lg text-forest">How It's Made</span>
                  <motion.div
                    animate={{ rotate: expandedSection === "how-its-made" ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-forest" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {expandedSection === "how-its-made" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-charcoal/80 font-sans leading-relaxed">
                        Our {product.name} is crafted using traditional methods that have been passed down through generations. Each batch is carefully prepared by hand, using only the finest organic ingredients sourced from local Himalayan farms. The slow-cooking process ensures maximum flavor and nutrition.
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Ingredients */}
              <div className="bg-snow rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleSection("ingredients")}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-lg text-forest">Ingredients</span>
                  <motion.div
                    animate={{ rotate: expandedSection === "ingredients" ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-forest" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {expandedSection === "ingredients" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-charcoal/80 font-sans leading-relaxed">
                        <ul className="list-disc list-inside space-y-2">
                          <li>Organic mountain-grown produce</li>
                          <li>Cold-pressed mustard oil</li>
                          <li>Himalayan rock salt</li>
                          <li>Traditional spice blend</li>
                          <li>No artificial preservatives or colors</li>
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Shelf Life */}
              <div className="bg-snow rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleSection("shelf-life")}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-lg text-forest">Shelf Life & Storage</span>
                  <motion.div
                    animate={{ rotate: expandedSection === "shelf-life" ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-forest" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {expandedSection === "shelf-life" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-charcoal/80 font-sans leading-relaxed">
                        <p className="mb-2"><strong>Shelf Life:</strong> 12 months from manufacturing date</p>
                        <p><strong>Storage:</strong> Store in a cool, dry place away from direct sunlight. Refrigerate after opening and consume within 30 days for best quality.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="mt-24">
          <h2 className="text-4xl font-display text-forest mb-8">Customer Reviews</h2>

          {/* Star Histogram */}
          <div className="bg-snow rounded-3xl p-8 mb-8" style={{ boxShadow: 'var(--shadow-md)' }}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-6xl font-display text-forest mb-2">{product.rating}</div>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${
                        i < Math.floor(product.rating)
                          ? "fill-amla-gold text-amla-gold"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground">Based on {product.reviews} reviews</p>
              </div>

              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((stars) => {
                  const percentage = stars === 5 ? 75 : stars === 4 ? 20 : stars === 3 ? 3 : stars === 2 ? 1 : 1;
                  return (
                    <div key={stars} className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-forest w-12">{stars} Star</span>
                      <div className="flex-1 bg-mist rounded-full h-3 overflow-hidden">
                        <div
                          className="h-full bg-amla-gold rounded-full transition-all"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground w-12 text-right">{percentage}%</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Individual Reviews */}
          <div className="space-y-6">
            {[
              {
                name: "Priya Sharma",
                rating: 5,
                date: "2 days ago",
                review: "Absolutely love this product! The quality is exceptional and you can really taste the authenticity. Will definitely order again.",
                verified: true
              },
              {
                name: "Rajesh Negi",
                rating: 5,
                date: "1 week ago",
                review: "As someone from Uttarakhand, I can confirm this tastes just like home. The traditional recipe is preserved perfectly.",
                verified: true
              },
              {
                name: "Anita Mehta",
                rating: 4,
                date: "2 weeks ago",
                review: "Great product! My only suggestion would be to offer larger sizes. The 250g jar finishes too quickly in our family.",
                verified: true
              }
            ].map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-snow rounded-2xl p-6"
                style={{ boxShadow: 'var(--shadow-sm)' }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-forest">{review.name}</h4>
                      {review.verified && (
                        <Badge variant="outline" size="sm" icon={<ShieldCheck className="w-3 h-3" />}>
                          Verified Purchase
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating ? "fill-amla-gold text-amla-gold" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-charcoal/80 leading-relaxed font-sans">{review.review}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-24">
            <h2 className="text-4xl font-display text-forest mb-8">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.slice(0, 4).map((relatedProduct) => (
                <div key={relatedProduct.id} className="bg-snow rounded-2xl p-4">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full aspect-square object-cover rounded-xl mb-3"
                  />
                  <h3 className="font-heading text-forest mb-2">{relatedProduct.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-display text-forest">₹{relatedProduct.price}</span>
                    <button className="px-4 py-2 rounded-lg bg-amla-gold text-forest font-semibold text-sm">
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sticky Add to Cart Bar */}
      <AnimatePresence>
        {showStickyBar && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-xl border-t"
            style={{
              backgroundColor: 'rgba(250, 250, 248, 0.95)',
              borderColor: 'rgba(28, 58, 43, 0.1)',
              boxShadow: '0 -10px 40px rgba(0, 0, 0, 0.1)'
            }}
          >
            <div className="container mx-auto px-6 py-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-6">
                  <img src={product.image} alt={product.name} className="w-16 h-16 rounded-xl object-cover" />
                  <div>
                    <h3 className="font-heading text-forest text-lg">{product.name}</h3>
                    <p className="text-2xl font-display text-forest">₹{product.price}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {/* Quantity */}
                  <div className="flex items-center gap-2 bg-snow rounded-xl overflow-hidden">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-mist transition-colors"
                    >
                      <Minus className="w-4 h-4 text-forest" />
                    </button>
                    <span className="px-4 font-semibold text-forest">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-mist transition-colors"
                    >
                      <Plus className="w-4 h-4 text-forest" />
                    </button>
                  </div>

                  {/* Add to Cart */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-3"
                    style={{
                      background: 'var(--amla-gold)',
                      color: 'var(--forest)',
                      boxShadow: 'var(--shadow-lg)'
                    }}
                  >
                    <ShoppingBag className="w-5 h-5" />
                    Add ₹{product.price * quantity}
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
