import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ChevronDown, Star, Leaf, Mountain } from "lucide-react";
import { Badge } from "./ui/Badge";

interface HeroSectionProps {
  onShopNowClick?: () => void;
}

export default function HeroSection({ onShopNowClick }: HeroSectionProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="h-full w-full"
        >
          <img
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1920&h=1080&fit=crop"
            alt="Himalayan organic farm valleys"
            className="h-full w-full object-cover"
          />

          {/* Cinematic Gradient Overlays - Deep Forest */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-forest" style={{ opacity: 0.7 }} />
          <div className="absolute inset-0 bg-gradient-to-r from-forest/50 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-earth/30 via-transparent to-transparent" />

          {/* Vignette Effect */}
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(circle at center, transparent 0%, rgba(28, 58, 43, 0.4) 100%)'
          }} />

          {/* Grain Texture Overlay */}
          <div className="absolute inset-0 opacity-25 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjA4IiAvPjwvc3ZnPg==')]" />

          {/* Atmospheric Light Leaks */}
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-amla-gold opacity-5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-cream opacity-10 blur-3xl" />
        </motion.div>
      </motion.div>

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-32 right-20 z-10 opacity-15"
      >
        <Leaf className="w-40 h-40 text-amla-gold" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -3, 0]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-32 left-20 z-10 opacity-10"
      >
        <Mountain className="w-48 h-48 text-cream" />
      </motion.div>

      {/* Trust Badge */}
      <motion.div
        style={{ opacity }}
        className="absolute top-24 right-8 z-30"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="backdrop-blur-xl rounded-2xl px-6 py-4 shadow-2xl border"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            borderColor: 'rgba(255, 255, 255, 0.2)'
          }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amla-gold text-amla-gold" />
              ))}
            </div>
            <span className="text-xl font-display text-white">4.9</span>
          </div>
          <p className="text-sm text-white font-medium">
            Trusted by 50,000+ Families
          </p>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 min-h-screen flex items-center"
      >
        <div className="container mx-auto px-6 lg:px-12 py-32">
          <div className="max-w-5xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-8"
            >
              <Badge
                variant="glass"
                size="lg"
                icon={<Leaf className="w-4 h-4" />}
                animate
              >
                Himalayan Organic • Est. 1998
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }}
              className="mb-8"
            >
              <h1 className="text-7xl lg:text-8xl xl:text-9xl text-cream mb-6 leading-[1.1] font-display" style={{ letterSpacing: '-0.02em' }}>
                From the hills of
                <br />
                <span className="text-amla-gold">Uttarakhand.</span>
              </h1>
              <p className="text-xl lg:text-2xl max-w-3xl leading-relaxed font-sans" style={{ color: 'rgba(245, 240, 232, 0.85)' }}>
                Crafted slowly in the Himalayas using age-old recipes and nature's finest harvests.
                Every jar tells a story of tradition, handmade care, and mountain-grown ingredients.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap gap-5 mb-16"
            >
              <motion.button
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onShopNowClick}
                className="px-10 py-5 rounded-2xl font-semibold text-lg flex items-center gap-3 transition-all"
                style={{
                  background: 'var(--amla-gold)',
                  color: 'var(--forest)',
                  boxShadow: 'var(--shadow-xl)'
                }}
              >
                Shop the Harvest
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.button>

              <motion.button
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 rounded-2xl font-semibold text-lg border-2 backdrop-blur-xl transition-all"
                style={{
                  backgroundColor: 'rgba(250, 250, 248, 0.1)',
                  borderColor: 'rgba(250, 250, 248, 0.3)',
                  color: 'var(--cream)',
                  boxShadow: 'var(--shadow-lg)'
                }}
              >
                Our Story
              </motion.button>
            </motion.div>

            {/* Trust Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              {[
                { label: "100% Organic Certified", icon: "🌱" },
                { label: "Harvested Daily", icon: "🌄" },
                { label: "Chemical Free", icon: "✨" },
                { label: "Direct from Farmers", icon: "🚜" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 backdrop-blur-xl px-5 py-3 rounded-2xl border shadow-lg"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    borderColor: 'rgba(255, 255, 255, 0.25)'
                  }}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-white font-medium">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Floating Ambient Elements */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
          rotate: [0, 10, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 right-1/4 z-10 opacity-20"
      >
        <div className="text-8xl">🫐</div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 25, 0],
          x: [0, -20, 0],
          rotate: [0, -15, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/3 left-1/3 z-10 opacity-15"
      >
        <div className="text-7xl">🍃</div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          rotate: [0, 8, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/3 right-1/3 z-10 opacity-25"
      >
        <div className="text-6xl">✨</div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 12, 0] }}
        transition={{ delay: 1.2, y: { repeat: Infinity, duration: 2.5, ease: "easeInOut" } }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3"
      >
        <p className="font-accent italic text-cream text-sm tracking-wide">Scroll to discover</p>
        <ChevronDown className="w-6 h-6 text-amla-gold" />
      </motion.div>
    </section>
  );
}
