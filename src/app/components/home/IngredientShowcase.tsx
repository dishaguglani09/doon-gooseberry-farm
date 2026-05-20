import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function IngredientShowcase() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const ingredients = [
    {
      name: "Wild Himalayan Honey",
      description: "Harvested from 10,000 feet, where bees gather nectar from rhododendron and wildflowers.",
      image: "https://images.unsplash.com/photo-1587049352846-4a222e784fce?w=800&h=1000&fit=crop",
      color: "#d97706"
    },
    {
      name: "Sun-Dried Amla",
      description: "Picked at dawn, dried under the pure Himalayan sun for 7 days to concentrate every nutrient.",
      image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&h=1000&fit=crop",
      color: "#16a34a"
    },
    {
      name: "Stone-Ground Turmeric",
      description: "Grown in mineral-rich soil, hand-dug, and ground between granite stones the traditional way.",
      image: "https://images.unsplash.com/photo-1615485500834-bc10199bc5ed?w=800&h=1000&fit=crop",
      color: "#ea580c"
    }
  ];

  return (
    <section ref={containerRef} className="relative py-32 bg-earth overflow-hidden">
      {/* Rich Textured Background */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjA4IiAvPjwvc3ZnPg==')]" />

      {/* Layered Gradient Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest/20 via-transparent to-forest/20" />

      {/* Floating Ambient Elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 right-20 w-96 h-96 bg-amla-gold rounded-full blur-3xl opacity-5"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-cream rounded-full blur-3xl opacity-10"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-7xl mb-6 font-display text-cream">
            Nature's Finest
            <br />
            <span className="text-amla-gold">Ingredients</span>
          </h2>
          <p className="text-xl text-cream/80 max-w-3xl mx-auto leading-relaxed font-sans">
            We source only the purest, most potent ingredients—each one telling a story of the mountains.
          </p>
        </motion.div>

        {/* Ingredient Cards - Cinematic Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {ingredients.map((ingredient, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover="hover"
              className="group relative"
            >
              <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: 'var(--shadow-xl)' }}>
                {/* Ingredient Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <motion.img
                    variants={{
                      hover: { scale: 1.08 }
                    }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    src={ingredient.image}
                    alt={ingredient.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Rich Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

                  {/* Hover Shimmer Effect */}
                  <motion.div
                    variants={{
                      hover: { opacity: 0.3 }
                    }}
                    initial={{ opacity: 0 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                    style={{
                      backgroundSize: '200% 100%',
                      animation: 'shimmer 3s infinite'
                    }}
                  />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  {/* Ingredient Name */}
                  <motion.h3
                    variants={{
                      hover: { y: -8 }
                    }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-heading text-cream mb-3 leading-tight"
                  >
                    {ingredient.name}
                  </motion.h3>

                  {/* Description - Reveals on Hover */}
                  <motion.p
                    variants={{
                      hover: { opacity: 1, y: 0 }
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    className="text-cream/90 font-sans leading-relaxed"
                  >
                    {ingredient.description}
                  </motion.p>

                  {/* Color Accent Bar */}
                  <motion.div
                    variants={{
                      hover: { scaleX: 1 }
                    }}
                    initial={{ scaleX: 0 }}
                    className="mt-6 h-1 rounded-full"
                    style={{
                      backgroundColor: ingredient.color,
                      transformOrigin: 'left',
                      boxShadow: `0 0 20px ${ingredient.color}`
                    }}
                  />
                </div>

                {/* Grain Texture */}
                <div className="absolute inset-0 opacity-15 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjA4IiAvPjwvc3ZnPg==')]" />
              </div>

              {/* Hover Glow */}
              <motion.div
                variants={{
                  hover: { opacity: 1 }
                }}
                initial={{ opacity: 0 }}
                className="absolute inset-0 pointer-events-none rounded-3xl"
                style={{
                  boxShadow: `0 0 60px ${ingredient.color}40`
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Decorative Organic Shape */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-1/2 left-10 text-9xl opacity-5"
        >
          🌾
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </section>
  );
}
