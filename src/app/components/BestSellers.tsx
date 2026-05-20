import { motion } from "motion/react";
import { Heart, ShoppingCart, Star } from "lucide-react";

export default function BestSellers() {
  const products = [
    {
      name: "Organic Honey",
      price: "$12.99",
      image: "https://images.unsplash.com/photo-1587049352846-4a222e784fce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      rating: 4.9,
      reviews: 234,
      tag: "Bestseller"
    },
    {
      name: "Fresh Tomatoes",
      price: "$4.99",
      image: "https://images.unsplash.com/photo-1776183422593-d2f0cd0b6fcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      rating: 4.8,
      reviews: 189,
      tag: "Fresh Today"
    },
    {
      name: "Artisan Bread",
      price: "$8.50",
      image: "https://images.unsplash.com/photo-1767065887268-e0827daae0fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      rating: 5.0,
      reviews: 312,
      tag: "Organic"
    },
    {
      name: "Farm Fresh Eggs",
      price: "$6.99",
      image: "https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      rating: 4.9,
      reviews: 267,
      tag: "Fresh Today"
    },
    {
      name: "Organic Carrots",
      price: "$3.99",
      image: "https://images.unsplash.com/photo-1722810767145-5f8380c009df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      rating: 4.7,
      reviews: 145,
      tag: "Organic"
    },
    {
      name: "Homemade Jam",
      price: "$9.99",
      image: "https://images.unsplash.com/photo-1620061589361-e3684bf06699?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      rating: 4.8,
      reviews: 198,
      tag: "Bestseller"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl lg:text-6xl mb-4">Best Sellers</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our most loved products, trusted by thousands of families
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border"
              style={{ borderColor: 'rgba(139, 125, 107, 0.5)' }}
            >
              <div className="relative overflow-hidden aspect-square">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                    {product.tag}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute top-4 right-4 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                >
                  <Heart className="w-5 h-5 text-gray-700" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute bottom-4 right-4 bg-primary text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                >
                  <ShoppingCart className="w-5 h-5" />
                </motion.button>
              </div>

              <div className="p-6">
                <h3 className="text-xl mb-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">({product.reviews} reviews)</span>
                </div>
                <p className="text-2xl text-primary">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-primary text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all"
          >
            View All Products
          </motion.button>
        </div>
      </div>
    </section>
  );
}
