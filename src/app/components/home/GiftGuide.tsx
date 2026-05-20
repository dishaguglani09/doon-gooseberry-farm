import { motion } from "motion/react";
import { Heart, Sparkles, Gift, Users } from "lucide-react";

export default function GiftGuide() {
  const giftCategories = [
    {
      title: "For the Health Conscious",
      description: "Wellness bundles packed with immune-boosting ingredients",
      image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800&h=600&fit=crop",
      icon: Sparkles,
      color: "linear-gradient(135deg, #10b981, #059669)",
      items: ["Amla Juice", "Turmeric Powder", "Honey Ginger Candies"]
    },
    {
      title: "For the Food Lover",
      description: "Artisanal preserves and condiments to elevate every meal",
      image: "https://images.unsplash.com/photo-1599639957043-f3aa5c986398?w=800&h=600&fit=crop",
      icon: Heart,
      color: "linear-gradient(135deg, #f59e0b, #ea580c)",
      items: ["Mango Pickle", "Mint Chutney", "Berry Jam"]
    },
    {
      title: "For Family Traditions",
      description: "Taste of home for those far from the mountains",
      image: "https://images.unsplash.com/photo-1587486937467-0469fae82d63?w=800&h=600&fit=crop",
      icon: Users,
      color: "linear-gradient(135deg, #dc2626, #be123c)",
      items: ["Garlic Pickle", "Lemon Pickle", "Mixed Chutney"]
    },
    {
      title: "Luxury Gift Hampers",
      description: "Premium selection in handcrafted wooden crates",
      image: "https://images.unsplash.com/photo-1587049352846-4a222e784fce?w=800&h=600&fit=crop",
      icon: Gift,
      color: "linear-gradient(135deg, #7c3aed, #5b21b6)",
      items: ["Wild Honey", "Exotic Preserves", "Artisan Spices"]
    }
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-cream via-snow to-cream overflow-hidden">
      {/* Layered Background */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjA4IiAvPjwvc3ZnPg==')]" />

      {/* Floating Gift Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 text-9xl opacity-10"
      >
        🎁
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6 px-6 py-2 rounded-full border-2 border-amla-gold/30 bg-amla-gold/10">
            <span className="text-sm font-semibold text-earth tracking-wider">CURATED GIFT COLLECTIONS</span>
          </div>

          <h2 className="text-5xl lg:text-7xl mb-6 font-display text-forest">
            Gifts That Tell
            <br />
            <span className="text-amla-gold">A Mountain Story</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-sans">
            Thoughtfully curated gift sets for every occasion—each box a journey to the Himalayas.
          </p>
        </motion.div>

        {/* Gift Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {giftCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              whileHover="hover"
              className="group relative"
            >
              <div className="relative rounded-3xl overflow-hidden bg-snow" style={{ boxShadow: 'var(--shadow-lg)' }}>
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    variants={{
                      hover: { scale: 1.08 }
                    }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Icon Badge */}
                  <motion.div
                    variants={{
                      hover: { scale: 1.1, rotate: 5 }
                    }}
                    transition={{ duration: 0.6 }}
                    className="absolute top-6 right-6 w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-sm"
                    style={{
                      background: category.color,
                      border: '2px solid rgba(255, 255, 255, 0.2)'
                    }}
                  >
                    <category.icon className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <motion.h3
                      variants={{
                        hover: { y: -8 }
                      }}
                      className="text-3xl font-heading text-cream mb-2 leading-tight"
                    >
                      {category.title}
                    </motion.h3>

                    <motion.p
                      variants={{
                        hover: { opacity: 1, y: 0 }
                      }}
                      initial={{ opacity: 0.9 }}
                      className="text-cream/90 font-sans mb-4"
                    >
                      {category.description}
                    </motion.p>

                    {/* Product Pills */}
                    <motion.div
                      variants={{
                        hover: { opacity: 1, y: 0 }
                      }}
                      initial={{ opacity: 0, y: 10 }}
                      className="flex flex-wrap gap-2"
                    >
                      {category.items.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-cream/20 text-cream backdrop-blur-sm border border-cream/30"
                        >
                          {item}
                        </span>
                      ))}
                    </motion.div>
                  </div>

                  {/* Grain Texture */}
                  <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjA4IiAvPjwvc3ZnPg==')]" />
                </div>

                {/* Shop This Collection Button */}
                <motion.div
                  variants={{
                    hover: { y: 0, opacity: 1 }
                  }}
                  initial={{ y: 20, opacity: 0 }}
                  className="absolute bottom-8 left-8 right-8"
                >
                  <button
                    className="w-full px-6 py-3 rounded-xl font-semibold backdrop-blur-xl transition-all"
                    style={{
                      backgroundColor: 'rgba(250, 250, 248, 0.95)',
                      color: 'var(--forest)',
                      boxShadow: 'var(--shadow-md)'
                    }}
                  >
                    Shop This Collection →
                  </button>
                </motion.div>
              </div>

              {/* Hover Glow Effect */}
              <motion.div
                variants={{
                  hover: { opacity: 0.6 }
                }}
                initial={{ opacity: 0 }}
                className="absolute inset-0 pointer-events-none rounded-3xl blur-xl"
                style={{ background: category.color }}
              />
            </motion.div>
          ))}
        </div>

        {/* Gift Packaging CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-amla-gold/10 border-2 border-amla-gold/30">
            <Gift className="w-5 h-5 text-amla-gold" />
            <span className="font-sans font-medium text-forest">
              All gifts beautifully packaged in eco-friendly handcrafted boxes
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
