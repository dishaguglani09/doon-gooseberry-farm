import { motion } from "motion/react";
import { Leaf, Recycle, Wind, Droplets } from "lucide-react";

export default function Sustainability() {
  const commitments = [
    {
      icon: Leaf,
      title: "100% Organic Farming",
      description: "Every ingredient grown without synthetic pesticides, herbicides, or GMOs. Our farms are certified organic and follow regenerative practices that enrich the soil.",
      stat: "Zero Chemicals"
    },
    {
      icon: Recycle,
      title: "Compostable Packaging",
      description: "Glass jars, recycled paper labels, and biodegradable shipping materials. Nothing from our packaging ends up in landfills—it all returns to the earth.",
      stat: "100% Recyclable"
    },
    {
      icon: Wind,
      title: "Carbon Neutral Operations",
      description: "Solar-powered facilities, electric delivery vehicles, and carbon offset programs. We measure and minimize our footprint at every step of production.",
      stat: "Net Zero by 2025"
    },
    {
      icon: Droplets,
      title: "Water Conservation",
      description: "Rainwater harvesting, drip irrigation, and zero-waste processing. Our mountain springs are protected, and every drop is used with reverence.",
      stat: "50% Less Water"
    }
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-mist to-snow overflow-hidden">
      {/* Soft Natural Texture */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjA4IiAvPjwvc3ZnPg==')]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 border-2 border-forest/20 bg-forest/5">
            <Leaf className="w-4 h-4 text-forest" />
            <span className="text-sm font-semibold text-forest tracking-wider">EARTH FIRST</span>
          </div>

          <h2 className="text-5xl lg:text-7xl mb-6 font-display text-forest">
            Our Commitment to
            <br />
            <span className="text-earth">The Planet</span>
          </h2>

          <p className="text-xl text-charcoal/70 leading-relaxed font-sans">
            Every choice we make—from seed to jar—is guided by one principle: leave the earth better than we found it.
          </p>
        </motion.div>

        {/* Commitments Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {commitments.map((commitment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              className="group"
            >
              <div className="bg-cream rounded-3xl p-8 lg:p-10 h-full border-2 border-transparent hover:border-forest/10 transition-all" style={{ boxShadow: 'var(--shadow-sm)' }}>
                {/* Icon & Stat */}
                <div className="flex items-start justify-between mb-6">
                  <div className="inline-flex p-4 rounded-2xl bg-forest/10 group-hover:bg-forest/15 transition-colors">
                    <commitment.icon className="w-7 h-7 text-forest" />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-display text-amla-gold mb-1">
                      {commitment.stat}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl lg:text-3xl font-heading text-forest mb-4 leading-tight">
                  {commitment.title}
                </h3>

                {/* Description */}
                <p className="text-base lg:text-lg text-charcoal/70 leading-relaxed font-sans">
                  {commitment.description}
                </p>

                {/* Decorative Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.5, duration: 0.6 }}
                  className="mt-6 h-0.5 w-20 rounded-full bg-gradient-to-r from-forest to-amla-gold"
                  style={{ transformOrigin: 'left' }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certification Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-sm font-semibold text-charcoal/60 mb-6 tracking-wider">CERTIFIED BY</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              "USDA Organic",
              "Fair Trade",
              "Carbon Neutral",
              "B Corporation"
            ].map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 + idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 rounded-full border-2 border-forest/20 bg-forest/5 font-sans font-semibold text-forest"
              >
                {cert}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-forest/5 rounded-3xl p-8 lg:p-12 text-center border-2 border-forest/10">
            <p className="text-2xl lg:text-3xl font-accent italic text-forest leading-relaxed">
              Since 1995, we've planted over 50,000 trees, protected 200 acres of Himalayan forest, and supported 100+ farming families—because sustainability isn't a trend, it's who we are.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Floating Leaf */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          rotate: [0, 15, 0],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 text-9xl opacity-5"
      >
        🍃
      </motion.div>
    </section>
  );
}
