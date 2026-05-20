import { motion } from "motion/react";

export default function FounderStory() {
  return (
    <section className="relative py-32 bg-cream overflow-hidden">
      {/* Warm Paper Texture */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjA4IiAvPjwvc3ZnPg==')]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: 'var(--shadow-xl)' }}>
              {/* Main Image */}
              <img
                src="https://images.unsplash.com/photo-1509099381441-ea3c0cf98b94?w=800&h=1000&fit=crop"
                alt="Family farming in Himalayan valley"
                className="w-full aspect-[4/5] object-cover"
              />

              {/* Warm Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest/40 via-transparent to-transparent" />

              {/* Vintage Frame Effect */}
              <div className="absolute inset-0 border-8 border-cream/20 rounded-3xl pointer-events-none" />
            </div>

            {/* Floating Handwritten Label */}
            <motion.div
              initial={{ opacity: 0, rotate: -5, y: 20 }}
              whileInView={{ opacity: 1, rotate: -3, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute -bottom-6 -right-6 bg-snow rounded-2xl p-6 border-2 border-forest/10"
              style={{ boxShadow: 'var(--shadow-lg)' }}
            >
              <p className="font-accent italic text-lg text-forest mb-1">
                The Sharma Family
              </p>
              <p className="text-sm text-charcoal/60 font-sans">
                Three Generations, One Passion
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Story */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Label */}
            <div className="inline-block px-5 py-2 rounded-full bg-amla-gold/10 border-2 border-amla-gold/30">
              <span className="text-sm font-semibold text-earth tracking-wider">OUR STORY</span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-display text-forest leading-tight">
              It Started with
              <br />
              <span className="text-amla-gold">My Grandmother's Recipe</span>
            </h2>

            {/* Story Paragraphs */}
            <div className="space-y-6 text-lg lg:text-xl text-charcoal/80 leading-relaxed font-sans">
              <p>
                In 1995, my grandmother handed me a worn notebook—its pages stained with turmeric and time, filled with recipes she'd perfected over six decades in these hills. "Don't let this disappear," she said.
              </p>

              <p>
                That notebook became our blueprint. Each recipe a portal to her kitchen, where copper vessels bubbled over wood fires and the air was thick with the scent of sun-dried spices.
              </p>

              <p>
                Today, our family still follows those exact recipes. My mother supervises every batch, my sister manages our farm partnerships, and my children—the fourth generation—are learning to taste the difference between good and extraordinary.
              </p>
            </div>

            {/* Signature */}
            <div className="pt-8 border-t-2 border-forest/10">
              <p className="font-accent italic text-3xl text-forest mb-2">
                With respect and gratitude,
              </p>
              <p className="text-2xl font-display text-amla-gold">
                Rajesh Sharma
              </p>
              <p className="text-sm text-charcoal/60 font-sans mt-1">
                Founder & Third-Generation Artisan
              </p>
            </div>

            {/* Trust Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-forest/5 border-2 border-forest/10"
            >
              <div className="w-12 h-12 rounded-full bg-amla-gold/20 flex items-center justify-center">
                <span className="text-2xl">🙏</span>
              </div>
              <div>
                <p className="font-semibold text-forest">Family-Owned Since 1995</p>
                <p className="text-sm text-charcoal/60">Three decades of handcrafted excellence</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Values Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-24 max-w-5xl mx-auto"
        >
          <div className="bg-forest rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden">
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjA4IiAvPjwvc3ZnPg==')]" />

            <div className="relative z-10">
              <p className="text-3xl lg:text-4xl font-accent italic text-amla-gold mb-8 leading-relaxed">
                "We don't chase scale. We protect recipes. We don't cut corners. We honor traditions."
              </p>

              <div className="flex flex-wrap justify-center gap-8 text-cream/90">
                <div>
                  <div className="text-4xl font-display mb-2">100+</div>
                  <div className="text-sm font-sans opacity-80">Farming Families</div>
                </div>
                <div className="w-px h-16 bg-cream/20" />
                <div>
                  <div className="text-4xl font-display mb-2">30</div>
                  <div className="text-sm font-sans opacity-80">Years of Craft</div>
                </div>
                <div className="w-px h-16 bg-cream/20" />
                <div>
                  <div className="text-4xl font-display mb-2">4</div>
                  <div className="text-sm font-sans opacity-80">Generations</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Handwritten Element */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          rotate: [0, 8, 0],
          opacity: [0.03, 0.06, 0.03]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 left-20 text-9xl opacity-5"
      >
        📖
      </motion.div>
    </section>
  );
}
