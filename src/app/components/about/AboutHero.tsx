import { motion, useScroll, useTransform } from "motion/react";
import { Leaf, Award, Heart, Shield } from "lucide-react";
import { useRef } from "react";

export default function AboutHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.5]);

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden">
      {/* Background Image/Video */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        {/* Forest Green Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-forest/70 via-forest/50 to-forest/70" />

        {/* Grain Texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOCIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjA1IiAvPjwvc3ZnPg==')] opacity-20 z-10" />

        {/* Hero Image */}
        <img
          src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1920&h=1080&fit=crop"
          alt="Himalayan mountain farm"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* EST Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute top-8 left-1/2 -translate-x-1/2 z-30 backdrop-blur-xl rounded-full px-8 py-3 border"
        style={{ backgroundColor: 'rgba(245, 240, 232, 0.15)', borderColor: 'rgba(212, 165, 51, 0.3)' }}
      >
        <span className="text-sm font-semibold tracking-wider text-amla-gold">EST. 1995</span>
      </motion.div>

      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9 }}
          >
            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-cream mb-8 leading-[1.1] font-display">
              From the Hills,
              <br />
              <span className="text-amla-gold">
                For Your Table
              </span>
            </h1>

            <p className="text-xl lg:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed font-sans text-cream/90">
              Three decades of preserving Himalayan traditions. Every jar crafted with mountain-grown ingredients, ancestral recipes, and unwavering commitment to purity.
            </p>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 12, 0] }}
        transition={{
          opacity: { delay: 1.5 },
          y: { delay: 2, repeat: Infinity, duration: 2.5, ease: "easeInOut" }
        }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 text-center"
      >
        <div className="text-sm mb-2 tracking-wider" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Scroll to explore our story</div>
        <div className="w-6 h-10 border-2 rounded-full mx-auto flex items-start justify-center p-2" style={{ borderColor: 'rgba(255, 255, 255, 0.4)' }}>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute top-1/4 left-10 z-20 opacity-20"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <Leaf className="w-32 h-32 text-white" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 right-16 z-20 opacity-10"
        animate={{
          rotate: -360,
          y: [0, -20, 0]
        }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <span className="text-9xl">🌾</span>
      </motion.div>
    </section>
  );
}
