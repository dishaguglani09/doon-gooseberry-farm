import { motion } from "motion/react";
import { Mail, ArrowRight } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="relative overflow-hidden min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1920&h=1080&fit=crop"
          alt="Himalayan farm harvest scene"
          className="w-full h-full object-cover"
        />

        {/* Forest Green Overlay 80% Opacity */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest/85 via-forest/80 to-forest/90" />

        {/* Additional Layered Gradient Depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-earth/30 via-transparent to-earth/30" />

        {/* Grain Texture */}
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjA4IiAvPjwvc3ZnPg==')]" />

        {/* Cinematic Shadows */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      {/* Floating Leaves */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
          rotate: [0, 10, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-20 text-9xl opacity-10"
      >
        🍃
      </motion.div>

      <motion.div
        animate={{
          y: [0, 25, 0],
          x: [0, -20, 0],
          rotate: [0, -12, 0]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-20 text-8xl opacity-10"
      >
        🌿
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Headline */}
            <h2 className="text-5xl lg:text-6xl xl:text-7xl text-cream mb-6 font-display leading-tight">
              Seasonal stories, first-harvest alerts, and recipes — straight from our farm.
            </h2>

            {/* Incentive */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-10"
            >
              <p className="text-lg text-amla-gold font-semibold">
                Get 10% off your first order
              </p>
              <div className="w-full h-px bg-amla-gold/30 mt-2" />
            </motion.div>

            {/* Newsletter Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="backdrop-blur-xl rounded-3xl p-8 border"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'rgba(255, 255, 255, 0.2)'
              }}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full pl-14 pr-5 py-4 rounded-2xl bg-snow text-forest placeholder:text-muted-foreground focus:outline-none focus:ring-4 transition-all font-sans"
                    style={{ focusRing: 'rgba(212, 165, 51, 0.3)' }}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 rounded-2xl font-semibold flex items-center gap-2 justify-center transition-all whitespace-nowrap"
                  style={{
                    background: 'var(--amla-gold)',
                    color: 'var(--forest)',
                    boxShadow: 'var(--shadow-lg)'
                  }}
                >
                  Join the Farm
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.button>
              </div>
            </motion.div>

            {/* Privacy Note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-sm mt-6 font-sans"
              style={{ color: 'rgba(245, 240, 232, 0.7)' }}
            >
              No spam, no clutter. Just the harvest updates that matter. Unsubscribe anytime.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Soft Lighting Gradients */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amla-gold/10 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-cream/5 rounded-full blur-3xl" />
    </section>
  );
}
