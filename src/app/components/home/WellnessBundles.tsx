import { motion } from "motion/react";
import { Heart, Sparkles, Zap, Moon, Sun, Salad, ArrowRight } from "lucide-react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

export default function WellnessBundles() {
  const bundles = [
    {
      name: "Immunity Booster Pack",
      description: "Complete nutrition for stronger immunity and vitality",
      image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=800&h=600&fit=crop",
      price: "₹2,499",
      originalPrice: "₹3,200",
      savings: "Save ₹701",
      icon: Sparkles,
      color: "amla-gold" as const,
      includes: [
        "Wild Himalayan Honey (500g)",
        "Organic Turmeric Powder (200g)",
        "Premium Ginger Root (500g)",
        "Tulsi Leaves (100g)",
        "Amla Powder (200g)"
      ],
      badge: "Bestseller"
    },
    {
      name: "Heart Health Bundle",
      description: "Cardiovascular wellness with omega-rich superfoods",
      image: "https://images.unsplash.com/photo-1506784926709-22f1ec395907?w=800&h=600&fit=crop",
      price: "₹3,199",
      originalPrice: "₹4,100",
      savings: "Save ₹901",
      icon: Heart,
      color: "forest" as const,
      includes: [
        "Organic Walnuts (500g)",
        "Flax Seeds (400g)",
        "Chia Seeds (400g)",
        "Cold Pressed Olive Oil (500ml)",
        "Dark Chocolate (200g)"
      ],
      badge: "Premium"
    },
    {
      name: "Energy & Vitality Kit",
      description: "Natural energy boost for active lifestyles",
      image: "https://images.unsplash.com/photo-1502014822147-1aedfb0676e0?w=800&h=600&fit=crop",
      price: "₹2,899",
      originalPrice: "₹3,700",
      savings: "Save ₹801",
      icon: Zap,
      color: "earth" as const,
      includes: [
        "Organic Dates (500g)",
        "Mixed Dry Fruits (400g)",
        "Trail Mix (300g)",
        "Protein-Rich Almonds (400g)",
        "Energy Bars (Pack of 6)"
      ],
      badge: "New"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 right-20 w-64 h-64 border-2 border-saffron rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-40 left-20 w-80 h-80 border-2 border-sage rounded-full"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="forest" size="lg" icon={<Heart className="w-4 h-4" />} className="mb-6">
            Wellness Bundles
          </Badge>
          <h2 className="text-5xl lg:text-7xl mb-6 font-display">
            Curated for Your
            <br />
            <span className="text-earth">Health & Wellness</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Thoughtfully combined bundles of premium organic products,
            designed to support your wellness journey with authentic Himalayan goodness.
          </p>
        </motion.div>

        {/* Bundles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {bundles.map((bundle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-card rounded-3xl overflow-hidden border border-border shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Image Section */}
                <div className="relative h-80 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={bundle.image}
                    alt={bundle.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Icon Badge */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="absolute top-6 left-6 p-4 rounded-2xl backdrop-blur-xl"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      border: '1px solid rgba(255, 255, 255, 0.3)'
                    }}
                  >
                    <bundle.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Top Badge */}
                  <div className="absolute top-6 right-6">
                    <Badge variant="glass" size="md">
                      {bundle.badge}
                    </Badge>
                  </div>

                  {/* Savings Badge */}
                  <div className="absolute bottom-6 left-6">
                    <Badge variant={bundle.color} size="lg" animate>
                      {bundle.savings}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-3xl font-serif mb-3">{bundle.name}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {bundle.description}
                  </p>

                  {/* Includes */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-muted-foreground mb-3">This bundle includes:</p>
                    <ul className="space-y-2">
                      {bundle.includes.map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-start gap-2 text-sm text-foreground"
                        >
                          <span className="text-sage mt-1">✓</span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6 pb-6 border-t border-border pt-6">
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="text-4xl font-display text-forest">{bundle.price}</span>
                      <span className="text-lg text-muted-foreground line-through">{bundle.originalPrice}</span>
                    </div>
                    <p className="text-sm text-forest">Limited time offer • Free shipping included</p>
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant="primary"
                    size="lg"
                    fullWidth
                    rightIcon={<ArrowRight className="w-5 h-5" />}
                  >
                    Add Bundle to Cart
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-12 rounded-3xl relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(122, 155, 118, 0.1), rgba(212, 165, 116, 0.1))',
            border: '1px solid rgba(122, 155, 118, 0.2)'
          }}
        >
          <h3 className="text-3xl font-serif mb-4">Need a Custom Wellness Bundle?</h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our wellness experts can create personalized bundles based on your specific health goals
          </p>
          <Button variant="secondary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
            Talk to Our Wellness Expert
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
