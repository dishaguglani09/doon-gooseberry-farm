import { motion } from "motion/react";

export default function WhyChooseUs() {
  const values = [
    {
      headline: "Handpicked at Peak Ripeness",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&h=800&fit=crop",
      description: "Every fruit, every leaf, every berry is selected by experienced hands at the exact moment nature intended. No compromise, no shortcuts.",
      direction: "left"
    },
    {
      headline: "Small Batch Recipes",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&h=800&fit=crop",
      description: "Traditional copper vessels, wood-fired preparation, recipes perfected over generations. Each batch crafted with the attention it deserves.",
      direction: "right"
    },
    {
      headline: "Sun-Dried Naturally",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&h=800&fit=crop",
      description: "Under the pure Himalayan sun, ingredients dry slowly, preserving nutrients and concentrating flavors the way our ancestors intended.",
      direction: "left"
    },
    {
      headline: "Family Recipes Since 1995",
      image: "https://images.unsplash.com/photo-1509099381441-ea3c0cf98b94?w=1200&h=800&fit=crop",
      description: "Knowledge passed from grandmother to mother to daughter. These aren't just recipes—they're living traditions, protected and honored.",
      direction: "right"
    }
  ];

  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amla-gold/20 to-transparent" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-7xl mb-6 font-display text-forest">
            The Promise of
            <br />
            <span className="text-earth">Authentic Craft</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-sans leading-relaxed">
            In a world of industrial food, we choose the slow path—the human path.
          </p>
        </motion.div>

        {/* Alternating Immersive Layouts */}
        <div className="space-y-32">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                value.direction === "right" ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Side */}
              <motion.div
                initial={{ opacity: 0, x: value.direction === "left" ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`relative ${value.direction === "right" ? "lg:order-2" : ""}`}
              >
                <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: 'var(--shadow-xl)' }}>
                  <img
                    src={value.image}
                    alt={value.headline}
                    className="w-full h-[500px] object-cover"
                  />

                  {/* Warm Natural Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/40 via-transparent to-transparent" />

                  {/* Subtle Texture */}
                  <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjA4IiAvPjwvc3ZnPg==')]" />
                </div>
              </motion.div>

              {/* Text Side */}
              <motion.div
                initial={{ opacity: 0, x: value.direction === "left" ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={value.direction === "right" ? "lg:order-1" : ""}
              >
                <div className="max-w-xl">
                  {/* Small Label */}
                  <div className="text-amla-gold font-sans text-sm tracking-wider mb-4">
                    VALUE {index + 1}
                  </div>

                  {/* Headline */}
                  <h3 className="text-4xl lg:text-5xl font-heading text-forest mb-6 leading-tight">
                    {value.headline}
                  </h3>

                  {/* Description */}
                  <p className="text-lg lg:text-xl text-charcoal/80 leading-relaxed font-sans">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Organic Decoration */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          rotate: [0, 8, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-32 right-32 text-8xl opacity-10"
      >
        🌾
      </motion.div>
    </section>
  );
}
