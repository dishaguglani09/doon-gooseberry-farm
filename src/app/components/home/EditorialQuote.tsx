import { motion } from "motion/react";

export default function EditorialQuote() {
  return (
    <section className="relative py-40 bg-forest overflow-hidden">
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjA4IiAvPjwvc3ZnPg==')]" />

      {/* Atmospheric Light Leak */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-amla-gold/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-cream/5 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* Large Opening Quote Mark */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute -top-12 -left-4 lg:-left-12 text-9xl lg:text-[12rem] font-display text-amla-gold/20 leading-none select-none"
            >
              "
            </motion.div>

            {/* Quote Text */}
            <blockquote className="relative z-10">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-4xl lg:text-5xl xl:text-6xl font-accent italic text-cream leading-[1.4] mb-12"
              >
                In the silence of the mountains, where time moves slowly and nature whispers ancient secrets, we craft food that carries the soul of the Himalayas.
              </motion.p>

              <motion.footer
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="flex items-center gap-6"
              >
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amla-gold/30 to-transparent" />
                <div className="text-center">
                  <p className="text-lg font-sans text-cream/90 mb-1">
                    Established 1995
                  </p>
                  <p className="text-sm text-cream/60 font-sans">
                    Dehradun, Uttarakhand
                  </p>
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amla-gold/30 to-transparent" />
              </motion.footer>
            </blockquote>

            {/* Closing Quote Mark */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute -bottom-20 -right-4 lg:-right-12 text-9xl lg:text-[12rem] font-display text-amla-gold/20 leading-none select-none"
            >
              "
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Organic Element */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, 0],
          opacity: [0.05, 0.08, 0.05]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 left-20 text-9xl opacity-5"
      >
        🌿
      </motion.div>
    </section>
  );
}
