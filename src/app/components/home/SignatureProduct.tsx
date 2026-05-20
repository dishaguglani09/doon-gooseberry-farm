import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Star, ShoppingBag } from "lucide-react";

export default function SignatureProduct() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const textY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={containerRef} className="relative py-32 bg-earth overflow-hidden">
      {/* Rich Textured Background */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjA4IiAvPjwvc3ZnPg==')]" />

      {/* Atmospheric Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest/20 via-transparent to-forest/20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left: Product Image */}
          <motion.div
            style={{ y: imageY }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              {/* Main Product Image */}
              <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: '0 40px 80px rgba(0, 0, 0, 0.3)' }}>
                <img
                  src="https://images.unsplash.com/photo-1599639957043-f3aa5c986398?w=800&h=1000&fit=crop"
                  alt="Himalayan Mango Pickle - Signature Product"
                  className="w-full aspect-[4/5] object-cover"
                />

                {/* Dramatic Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Limited Edition Badge */}
                <div className="absolute top-6 left-6">
                  <div className="px-4 py-2 rounded-full backdrop-blur-xl border-2 border-amla-gold/50"
                    style={{ backgroundColor: 'rgba(212, 165, 51, 0.9)' }}>
                    <span className="text-xs font-bold text-forest tracking-wider">SIGNATURE</span>
                  </div>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-6 right-6">
                  <div className="px-4 py-2 rounded-full backdrop-blur-xl bg-cream/90 flex items-center gap-2">
                    <Star className="w-4 h-4 fill-amla-gold text-amla-gold" />
                    <span className="text-sm font-bold text-forest">4.9</span>
                  </div>
                </div>
              </div>

              {/* Floating Ingredient Circle */}
              <motion.div
                initial={{ opacity: 0, x: -30, rotate: -10 }}
                whileInView={{ opacity: 1, x: 0, rotate: -5 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full overflow-hidden border-4 border-cream"
                style={{ boxShadow: 'var(--shadow-xl)' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1553279147-83a9be58730a?w=200&h=200&fit=crop"
                  alt="Himalayan Mango"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Grain Texture */}
              <div className="absolute inset-0 opacity-15 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjA4IiAvPjwvc3ZnPg==')]" />
            </motion.div>
          </motion.div>

          {/* Right: Product Story */}
          <motion.div
            style={{ y: textY }}
            className="space-y-8"
          >
            {/* Category Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-semibold text-amla-gold tracking-wider">
                ARTISAN PICKLE COLLECTION
              </span>
            </motion.div>

            {/* Product Name */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-5xl lg:text-6xl xl:text-7xl font-display text-cream leading-[1.1]"
            >
              Wild Himalayan
              <br />
              <span className="text-amla-gold">Mango Pickle</span>
            </motion.h2>

            {/* Description Layers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-xl lg:text-2xl text-cream/90 leading-relaxed font-sans">
                Sun-ripened mangoes from 6,000-foot orchards, hand-cut and aged in cold-pressed mustard oil with seventeen traditional spices.
              </p>

              <p className="text-lg text-cream/70 leading-relaxed font-sans">
                This isn't just pickle—it's six months of patience, three generations of knowledge, and the taste of monsoon rains on mountain fruit.
              </p>
            </motion.div>

            {/* Ingredients Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-3"
            >
              <p className="text-sm font-semibold text-amla-gold tracking-wider">
                KEY INGREDIENTS
              </p>
              <div className="flex flex-wrap gap-2">
                {["Wild Mango", "Mustard Oil", "Himalayan Salt", "Fenugreek", "Turmeric", "Aged 6 Months"].map((ingredient, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-cream/10 text-cream border border-cream/20 backdrop-blur-sm"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Price & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap items-center gap-6 pt-6"
            >
              <div>
                <div className="text-5xl font-display text-amla-gold mb-1">₹349</div>
                <div className="text-sm text-cream/60 font-sans">500g · Limited Batch</div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-3 transition-all"
                style={{
                  background: 'var(--amla-gold)',
                  color: 'var(--forest)',
                  boxShadow: '0 20px 40px rgba(212, 165, 51, 0.3)'
                }}
              >
                <ShoppingBag className="w-5 h-5" />
                Add to Cart
              </motion.button>
            </motion.div>

            {/* Awards/Recognition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="pt-6 border-t border-cream/10"
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl">🏆</div>
                <div>
                  <p className="text-sm font-semibold text-cream">
                    Best Artisan Pickle 2024
                  </p>
                  <p className="text-xs text-cream/60">
                    Himalayan Food Awards · Uttarakhand
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Ambient Floating Element */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          rotate: [0, 10, 0],
          opacity: [0.03, 0.06, 0.03]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 text-9xl opacity-5"
      >
        🥭
      </motion.div>
    </section>
  );
}
