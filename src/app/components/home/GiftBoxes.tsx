import { motion } from "motion/react";
import { Gift, Sparkles, Heart, Star, ArrowRight, Package } from "lucide-react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

export default function GiftBoxes() {
  const giftBoxes = [
    {
      name: "Himalayan Treasure Box",
      tagline: "For loved ones who deserve the best",
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=700&h=900&fit=crop",
      price: "₹4,999",
      size: "Premium • 12 Items",
      icon: Gift,
      gradient: "from-copper to-saffron",
      features: [
        "Handcrafted wooden gift box",
        "Premium selection of 12 organic items",
        "Personalized message card",
        "Eco-friendly packaging"
      ],
      badge: "Premium Collection",
      featured: true
    },
    {
      name: "Festive Hamper",
      tagline: "Celebrate with organic goodness",
      image: "https://images.unsplash.com/photo-1604405310579-e8be5115e70d?w=600&h=800&fit=crop",
      price: "₹2,999",
      size: "Standard • 8 Items",
      icon: Sparkles,
      gradient: "from-sage to-primary",
      features: [
        "Traditional jute basket",
        "8 festive organic products",
        "Decorative ribbon & card",
        "Ready to gift packaging"
      ],
      badge: "Festival Special"
    },
    {
      name: "Wellness Gift Set",
      tagline: "Gift the power of health",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=800&fit=crop",
      price: "₹3,499",
      size: "Deluxe • 10 Items",
      icon: Heart,
      gradient: "from-primary to-sage",
      features: [
        "Premium gift box with wellness theme",
        "10 curated health products",
        "Wellness guide included",
        "Elegant gift wrapping"
      ],
      badge: "Popular Choice"
    }
  ];

  const occasions = [
    { name: "Diwali Special", icon: Sparkles },
    { name: "Wedding Gifts", icon: Heart },
    { name: "Corporate Gifting", icon: Package },
    { name: "New Year Hampers", icon: Star }
  ];

  return (
    <section className="py-24 bg-muted/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdpZnQtcGF0dGVybiIgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCA0MCA4MCBNIDAgNDAgTCA4MCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMmQ1MDE2IiBzdHJva2Utb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ2lmdC1wYXR0ZXJuKSIvPjwvc3ZnPg==')]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="earth" size="lg" icon={<Gift className="w-4 h-4" />} className="mb-6">
            Premium Gift Collections
          </Badge>
          <h2 className="text-5xl lg:text-7xl mb-6 font-display">
            Gift Pure Joy,
            <br />
            <span className="text-amla-gold">Gift Himalayan Organic</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Beautifully curated gift boxes filled with premium organic products,
            perfect for every celebration and special occasion.
          </p>
        </motion.div>

        {/* Gift Boxes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {giftBoxes.map((box, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`group relative ${box.featured ? 'lg:scale-105 lg:-mt-4' : ''}`}
            >
              <div className="relative bg-card rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                {/* Featured Badge */}
                {box.featured && (
                  <div className="absolute -top-3 -right-3 z-20">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="bg-amla-gold text-forest px-6 py-2 rounded-full text-sm font-semibold shadow-lg"
                    >
                      ⭐ Most Loved
                    </motion.div>
                  </div>
                )}

                {/* Image Section with Gradient Overlay */}
                <div className="relative h-96 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={box.image}
                    alt={box.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${box.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-6 left-6">
                    <Badge variant="glass" size="md" icon={<box.icon className="w-4 h-4" />}>
                      {box.badge}
                    </Badge>
                  </div>

                  {/* Floating Icon */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-6 right-6 p-3 rounded-full"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <box.icon className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <Badge variant="glass" size="lg">
                      {box.size}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-3xl font-heading mb-2">{box.name}</h3>
                  <p className="text-muted-foreground mb-6 font-accent italic">{box.tagline}</p>

                  {/* Features */}
                  <div className="mb-6 space-y-2">
                    {box.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center gap-2 text-sm"
                      >
                        <span className="text-copper text-lg">•</span>
                        <span className="text-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-t border-border pt-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-display text-forest">{box.price}</span>
                      <span className="text-sm text-muted-foreground">Free Delivery</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button
                    variant={box.featured ? "primary" : "secondary"}
                    size="lg"
                    fullWidth
                    rightIcon={<ArrowRight className="w-5 h-5" />}
                  >
                    {box.featured ? "Choose This Gift Box" : "Customize & Order"}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Occasions Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-3xl p-12 shadow-lg"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-serif mb-3">Perfect for Every Occasion</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From festivals to corporate events, we have the perfect organic gift solution
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {occasions.map((occasion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="p-6 rounded-2xl border-2 border-border hover:border-copper transition-all cursor-pointer group"
              >
                <occasion.icon className="w-8 h-8 text-copper mb-3 mx-auto group-hover:scale-110 transition-transform" />
                <p className="text-center font-medium">{occasion.name}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="glass" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
              View All Gift Collections
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
