import { motion } from "motion/react";
import { Clock, Hand, Flame, Sun } from "lucide-react";

export default function ProcessTransparency() {
  const steps = [
    {
      icon: Hand,
      title: "Handpicked at Dawn",
      description: "Our artisans wake before sunrise to select each ingredient at its peak. Only the finest make it to the next step.",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=400&fit=crop",
      time: "5:00 AM"
    },
    {
      icon: Sun,
      title: "Sun-Dried Naturally",
      description: "Spread on traditional bamboo mats, ingredients dry under the pure Himalayan sun for 3-7 days. No artificial heat, no shortcuts.",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop",
      time: "3-7 Days"
    },
    {
      icon: Flame,
      title: "Small-Batch Cooking",
      description: "In copper vessels over wood fire, recipes passed through generations come to life. Each batch receives undivided attention.",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&h=400&fit=crop",
      time: "4-6 Hours"
    },
    {
      icon: Clock,
      title: "Aged with Patience",
      description: "Pickles rest for weeks, allowing flavors to deepen and marry. Good things take time—we never rush the process.",
      image: "https://images.unsplash.com/photo-1628418876641-3564530e2c8a?w=600&h=400&fit=crop",
      time: "2-4 Weeks"
    }
  ];

  return (
    <section className="relative py-32 bg-snow overflow-hidden">
      {/* Subtle Paper Texture */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjA4IiAvPjwvc3ZnPg==')]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-7xl mb-6 font-display text-forest">
            How It's Made
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-sans">
            Transparency is at the heart of everything we do. Here's exactly how your food goes from mountain to jar.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amla-gold/30 to-transparent -translate-y-1/2" />

          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.7 }}
                className="relative"
              >
                {/* Step Number Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                  className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center font-display text-xl border-4 border-snow"
                  style={{
                    background: 'linear-gradient(135deg, var(--amla-gold), var(--earth))',
                    color: 'var(--cream)',
                    boxShadow: '0 10px 30px rgba(212, 165, 51, 0.3)'
                  }}
                >
                  {index + 1}
                </motion.div>

                <div className="bg-cream rounded-3xl overflow-hidden" style={{ boxShadow: 'var(--shadow-md)' }}>
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Time Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-semibold bg-cream/90 text-forest backdrop-blur-sm">
                      {step.time}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Icon */}
                    <div className="inline-flex p-3 rounded-2xl mb-4" style={{ backgroundColor: 'rgba(212, 165, 51, 0.1)' }}>
                      <step.icon className="w-6 h-6 text-amla-gold" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-heading text-forest mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-charcoal/70 leading-relaxed font-sans">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Arrow Connector (Desktop Only) */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.5 }}
                    className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-10"
                  >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M4 16H28M28 16L20 8M28 16L20 24" stroke="var(--amla-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
                    </svg>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="inline-block px-8 py-4 rounded-2xl border-2 border-amla-gold/20 bg-amla-gold/5">
            <p className="text-lg font-sans text-forest">
              <span className="font-semibold">100% Transparency.</span> Visit our farm anytime. We have nothing to hide.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-20 text-8xl opacity-5"
      >
        🥘
      </motion.div>
    </section>
  );
}
