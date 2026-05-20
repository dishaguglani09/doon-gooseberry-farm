import { motion } from "motion/react";
import { ArrowRight, Leaf } from "lucide-react";

interface PreFooterCTAProps {
  onShopNowClick?: () => void;
}

export default function PreFooterCTA({ onShopNowClick }: PreFooterCTAProps) {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to bottom, rgba(74, 103, 65, 0.85), rgba(90, 120, 81, 0.85))' }} />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOCIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjA1IiAvPjwvc3ZnPg==')] opacity-30 z-10" />
        <img
          src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1920&h=600&fit=crop"
          alt="Organic farm"
          className="w-full h-full object-cover"
        />
      </div>

      <motion.div
        className="absolute top-20 left-20 z-20 opacity-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Leaf className="w-32 h-32 text-white" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-20 z-20 opacity-15"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <span className="text-9xl">🌾</span>
      </motion.div>

      <div className="container mx-auto px-6 relative z-30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl lg:text-7xl text-white mb-6 leading-tight font-serif">
              Bring Farm Freshness
              <br />
              <span className="text-accent">Home Today</span>
            </h2>

            <p className="text-xl lg:text-2xl mb-12 leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Join thousands of families choosing organic living. Experience the difference of
              truly fresh, chemical-free food delivered to your doorstep.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onShopNowClick}
                className="px-10 py-5 rounded-full font-semibold text-lg flex items-center gap-3 shadow-2xl text-primary cursor-pointer"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
              >
                Shop Now
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 rounded-full font-semibold text-lg border-2 text-white"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'rgba(255, 255, 255, 0.3)'
                }}
              >
                Explore Collections
              </motion.button>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex flex-wrap justify-center gap-8 text-white"
            >
              {[
                { icon: "🌱", label: "100% Organic" },
                { icon: "✨", label: "Chemical Free" },
                { icon: "🚜", label: "Farm Fresh" },
                { icon: "❤️", label: "Family Owned" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-3 px-6 py-3 rounded-full border backdrop-blur-md"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    borderColor: 'rgba(255, 255, 255, 0.2)'
                  }}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
