import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export default function Values() {
  const values = [
    {
      title: "Mountain-Grown Purity",
      description: "Every ingredient comes from the pristine Himalayan valleys, where clean air, mineral-rich soil, and natural springs create the perfect environment for organic cultivation. No chemicals, no shortcuts—just nature at its finest.",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&h=800&fit=crop"
    },
    {
      title: "Traditional Recipes Preserved",
      description: "Passed down through three generations, our recipes honor the culinary wisdom of Uttarakhand. We use the same copper vessels, the same slow-cooking methods, and the same unwavering commitment to authenticity that our ancestors did.",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&h=800&fit=crop"
    },
    {
      title: "Small Batch Craftsmanship",
      description: "We refuse to scale up at the cost of quality. Each batch is handcrafted in limited quantities, allowing us to maintain the attention to detail that mass production simply cannot achieve. Your jar is made with care, not machinery.",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&h=800&fit=crop"
    },
    {
      title: "Direct from Farmers",
      description: "We work directly with local Himalayan farmers, ensuring fair prices and sustainable livelihoods. When you choose our products, you're supporting real families who tend the land with respect and dedication.",
      image: "https://images.unsplash.com/photo-1509099381441-ea3c0cf98b94?w=1200&h=800&fit=crop"
    }
  ];

  return (
    <section className="relative py-32 bg-cream overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjA4IiAvPjwvc3ZnPg==')]" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl lg:text-7xl mb-6 font-display text-forest">What We Stand For</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-sans">
            Our values guide every decision—from how we source ingredients to how we craft each jar.
          </p>
        </motion.div>

        <div className="space-y-32">
          {values.map((value, index) => (
            <ValueRow key={index} value={value} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueRow({ value, index }: { value: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8 }}
      className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
    >
      {/* Image Side */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -40 : 40 }}
        transition={{ duration: 0.8 }}
        className={`relative ${!isEven ? 'lg:order-2' : ''}`}
      >
        <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: 'var(--shadow-xl)' }}>
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8 }}
            src={value.image}
            alt={value.title}
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
        initial={{ opacity: 0, x: isEven ? 40 : -40 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 40 : -40 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={!isEven ? 'lg:order-1' : ''}
      >
        <div className="max-w-xl">
          {/* Small Label */}
          <div className="text-amla-gold font-sans text-sm tracking-wider mb-4">
            VALUE {index + 1}
          </div>

          {/* Title */}
          <h3 className="text-4xl lg:text-5xl font-heading text-forest mb-6 leading-tight">
            {value.title}
          </h3>

          {/* Description */}
          <p className="text-lg lg:text-xl text-charcoal/80 leading-relaxed font-sans mb-8">
            {value.description}
          </p>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="h-1 w-20 rounded-full"
            style={{
              background: 'linear-gradient(to right, var(--amla-gold), var(--forest))',
              transformOrigin: 'left'
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
