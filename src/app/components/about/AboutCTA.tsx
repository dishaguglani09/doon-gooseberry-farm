import { motion } from "motion/react";
import { ArrowRight, Leaf } from "lucide-react";

interface AboutCTAProps {
  onShopNowClick?: () => void;
}

export default function AboutCTA({ onShopNowClick }: AboutCTAProps) {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8))' }} />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOCIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjA1IiAvPjwvc3ZnPg==')] opacity-30 z-10" />
        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Fresh organic produce"
          className="h-full w-full object-cover"
        />
      </div>

      <motion.div
        className="absolute top-20 left-20 z-20 opacity-20"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Leaf className="w-40 h-40 text-white" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-20 z-20 opacity-15"
        animate={{
          y: [0, 30, 0],
          rotate: [0, -10, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <span className="text-9xl">🌾</span>
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-10 z-20 opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          rotate: 360
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <span className="text-8xl">🥕</span>
      </motion.div>

      <div className="container mx-auto px-6 lg:px-12 relative z-30">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="mb-8 inline-block"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-2xl mx-auto">
              <Leaf className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl lg:text-7xl xl:text-8xl text-white mb-8 leading-tight"
          >
            Taste the
            <br />
            <span className="text-accent bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Fresh Difference
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl lg:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            Join 10,000+ families who trust us for farm-fresh, organic goodness delivered to their doorstep. Experience the difference that care, quality, and sustainability make.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(74, 103, 65, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              onClick={onShopNowClick}
              className="text-white px-10 py-5 rounded-full font-medium text-lg flex items-center gap-3 shadow-2xl transition-all cursor-pointer"
              style={{ background: 'linear-gradient(to right, #4a6741, #8b9d83)' }}
            >
              Start Shopping
              <ArrowRight className="w-6 h-6" />
            </motion.button>

            <motion.a
              href="#"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.25)" }}
              whileTap={{ scale: 0.98 }}
              className="backdrop-blur-md text-white px-10 py-5 rounded-full font-medium text-lg border-2 transition-all inline-block"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.3)' }}
            >
              View Our Products
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-16 flex flex-wrap justify-center gap-8 text-white"
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
                transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
                className="flex items-center gap-3 backdrop-blur-md px-6 py-3 rounded-full border"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.2)' }}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
