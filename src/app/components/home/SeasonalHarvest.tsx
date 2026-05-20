import { motion } from "motion/react";
import { Leaf, Calendar, Sparkles, ArrowRight } from "lucide-react";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";

export default function SeasonalHarvest() {
  const seasonalProducts = [
    {
      name: "Himalayan Apples",
      subtitle: "Fresh from mountain orchards",
      price: "₹299",
      unit: "/kg",
      image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600&h=600&fit=crop",
      season: "Autumn Harvest",
      freshness: "Picked Today",
      benefits: ["Rich in antioxidants", "Mountain fresh", "Naturally sweet"]
    },
    {
      name: "Organic Walnuts",
      subtitle: "Kashmir valley premium",
      price: "₹899",
      unit: "/500g",
      image: "https://images.unsplash.com/photo-1589927986089-35812b8fa9b7?w=600&h=600&fit=crop",
      season: "Winter Special",
      freshness: "New Batch",
      benefits: ["Omega-3 rich", "Brain health", "Hand-shelled"]
    },
    {
      name: "Wild Honey",
      subtitle: "High altitude collection",
      price: "₹1,299",
      unit: "/750ml",
      image: "https://images.unsplash.com/photo-1587049352846-4a222e784fce?w=600&h=600&fit=crop",
      season: "Limited Edition",
      freshness: "Just Harvested",
      benefits: ["Pure & unprocessed", "Medicinal properties", "Raw honey"]
    },
    {
      name: "Heritage Tomatoes",
      subtitle: "Himalayan heirloom variety",
      price: "₹149",
      unit: "/kg",
      image: "https://images.unsplash.com/photo-1546470427-dc0f5e6edd4e?w=600&h=600&fit=crop",
      season: "Spring Harvest",
      freshness: "Farm Fresh",
      benefits: ["Non-GMO", "Rich flavor", "Organic certified"]
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-96 h-96 bg-saffron rounded-full blur-3xl" style={{ opacity: 0.1 }} />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-sage rounded-full blur-3xl" style={{ opacity: 0.1 }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="amla-gold" size="lg" icon={<Leaf className="w-4 h-4" />} className="mb-6">
            Seasonal Collection
          </Badge>
          <h2 className="text-5xl lg:text-7xl mb-6 font-display">
            Himalayan Harvest
            <br />
            <span className="text-earth">This Season</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the freshest seasonal produce from the pristine Himalayan valleys,
            handpicked at peak ripeness for maximum flavor and nutrition.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {seasonalProducts.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card
                variant="elevated"
                padding="none"
                rounded="2xl"
                hoverEffect="lift"
                className="group overflow-hidden h-full"
              >
                {/* Image Section */}
                <div className="relative overflow-hidden aspect-square">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <Badge variant="glass" size="sm" dot animate>
                      {product.freshness}
                    </Badge>
                    <Badge variant="saffron" size="sm" icon={<Calendar className="w-3 h-3" />}>
                      {product.season}
                    </Badge>
                  </div>

                  {/* Quick View Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute bottom-4 left-4 right-4 py-3 rounded-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      color: 'var(--primary)'
                    }}
                  >
                    Add to Cart
                  </motion.button>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-2xl font-serif mb-1">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.subtitle}</p>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {product.benefits.map((benefit, idx) => (
                      <Badge key={idx} variant="outline" size="sm">
                        {benefit}
                      </Badge>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-display text-forest">{product.price}</span>
                    <span className="text-sm text-muted-foreground">{product.unit}</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-semibold text-lg shadow-xl group"
            style={{
              background: 'linear-gradient(135deg, var(--forest), var(--earth))',
              color: 'var(--snow)'
            }}
          >
            Explore Full Seasonal Collection
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
