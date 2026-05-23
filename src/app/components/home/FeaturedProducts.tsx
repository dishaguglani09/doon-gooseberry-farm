import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { Badge } from "../ui/Badge";
import { useWishlist, Product } from '../../contexts/WishlistContext';

export default function FeaturedProducts() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Pickles", "Chutneys", "Jams", "Juices", "Candies", "Spices"];

  const categoryColors: Record<string, string> = {
    Pickles: "#ea580c",
    Chutneys: "#16a34a",
    Jams: "#dc2626",
    Juices: "#10b981",
    Candies: "#f59e0b",
    Spices: "#d97706"
  };

  const products = [
    {
      id: 1,
      name: "Himalayan Mango Pickle",
      category: "Pickles",
      price: "₹349",
      image: "https://images.unsplash.com/photo-1599639957043-f3aa5c986398?w=600&h=600&fit=crop",
      rating: 4.9,
      reviews: 234
    },
    {
      id: 2,
      name: "Wild Berry Jam",
      category: "Jams",
      price: "₹299",
      image: "https://images.unsplash.com/photo-1620061589361-e3684bf06699?w=600&h=600&fit=crop",
      rating: 4.8,
      reviews: 189
    },
    {
      id: 3,
      name: "Fresh Amla Juice",
      category: "Juices",
      price: "₹249",
      image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=600&fit=crop",
      rating: 5.0,
      reviews: 312
    },
    {
      id: 4,
      name: "Mint Coriander Chutney",
      category: "Chutneys",
      price: "₹179",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&h=600&fit=crop",
      rating: 4.7,
      reviews: 156
    },
    {
      id: 5,
      name: "Organic Turmeric Powder",
      category: "Spices",
      price: "₹199",
      image: "https://images.unsplash.com/photo-1615485500834-bc10199bc5ed?w=600&h=600&fit=crop",
      rating: 4.9,
      reviews: 421
    },
    {
      id: 6,
      name: "Honey Ginger Candies",
      category: "Candies",
      price: "₹149",
      image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=600&h=600&fit=crop",
      rating: 4.6,
      reviews: 98
    }
  ].map(p => ({ ...p, description: 'Handcrafted delicacy', inStock: true })) as Product[];

  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter(p => p.category === activeCategory);

  const { isInWishlist, toggleWishlist } = useWishlist();

  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-amla-gold rounded-full blur-3xl opacity-5" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-forest rounded-full blur-3xl opacity-5" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-7xl mb-6 font-display text-forest">
            What the Hills Make Best
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-sans">
            Handcrafted delicacies from the pristine Himalayan valleys
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all ${
                activeCategory === category
                  ? 'shadow-lg'
                  : 'shadow-md hover:shadow-lg'
              }`}
              style={{
                backgroundColor: activeCategory === category ? 'var(--amla-gold)' : 'var(--snow)',
                color: activeCategory === category ? 'var(--forest)' : 'var(--charcoal)',
                border: `2px solid ${activeCategory === category ? 'var(--amla-gold)' : 'var(--border)'}`
              }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover="hover"
                className="group bg-snow rounded-3xl overflow-hidden relative"
                style={{ boxShadow: 'var(--shadow-md)' }}
              >
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden">
                  <motion.img
                    variants={{
                      hover: { scale: 1.05 }
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
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                  />

                  {/* Category Tag */}
                  <div className="absolute top-4 left-4">
                    <div
                      className="px-4 py-2 rounded-full text-xs font-semibold text-white"
                      style={{ backgroundColor: categoryColors[product.category] }}
                    >
                      {product.category}
                    </div>
                  </div>

                  {/* Wishlist Button */}
                  <motion.button
                    variants={{
                      hover: { opacity: 1, scale: 1 }
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    animate={isInWishlist(product.id) ? { scale: [1, 1.15, 1] } : {}}
                    transition={isInWishlist(product.id) ? { duration: 0.3, ease: "easeOut" } : {}}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(product);
                    }}
                    className="absolute top-4 right-4 p-3 rounded-full backdrop-blur-xl z-10 cursor-pointer"
                    style={{ backgroundColor: 'rgba(250, 250, 248, 0.9)' }}
                  >
                    <Heart className={`w-5 h-5 transition-colors duration-300 ${
                      isInWishlist(product.id) ? "fill-red-500 text-red-500" : "text-forest"
                    }`} />
                  </motion.button>
                </div>

                {/* Product Details */}
                <div className="p-6">
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amla-gold text-amla-gold"
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-forest">{product.rating}</span>
                    <span className="text-xs text-muted-foreground">({product.reviews})</span>
                  </div>

                  {/* Product Name */}
                  <h3 className="text-2xl font-heading mb-3 text-forest">{product.name}</h3>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-display text-forest">{product.price}</span>

                    <motion.button
                      variants={{
                        hover: { scale: 1.05, y: -2 }
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all"
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
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
