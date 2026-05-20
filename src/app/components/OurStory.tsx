import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function OurStory() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);

  const acts = [
    {
      title: "The Hills",
      content: "In the pristine valleys of Uttarakhand, where morning mist kisses mountain peaks, our story begins. These ancient hills have nurtured life for millennia, blessed with pure air, mineral-rich soil, and natural springs that flow from the Himalayas."
    },
    {
      title: "The Harvest",
      content: "At dawn, when the first rays of sunlight illuminate the terraced farms, our artisan farmers begin their sacred work. Each fruit is handpicked at peak ripeness, each leaf selected with care. This is slow food at its purest—no machines, no shortcuts, only human hands and deep knowledge passed through generations."
    },
    {
      title: "The Jar",
      content: "In small copper vessels, using recipes perfected over decades, transformation happens. Sun-dried spices, wild honey, Himalayan salt—each ingredient plays its part. What emerges is not just food, but a piece of the mountains, sealed with intention and love, ready to journey to your table."
    }
  ];

  return (
    <section ref={containerRef} className="relative bg-cream overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Panel - Fixed Parallax Image */}
        <div className="relative lg:sticky lg:top-0 h-screen overflow-hidden">
          <motion.div
            style={{ y: imageY, scale: imageScale }}
            className="absolute inset-0"
          >
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=1600&fit=crop"
              alt="Misty Himalayan mountains at dawn"
              className="w-full h-full object-cover"
            />

            {/* Cinematic Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-forest/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-cream/30" />

            {/* Grain Texture */}
            <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjA4IiAvPjwvc3ZnPg==')]" />

            {/* Layered Fog Overlays */}
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-cream/50 to-transparent" />
          </motion.div>

          {/* Floating Organic Elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 text-9xl opacity-10"
          >
            🌿
          </motion.div>
        </div>

        {/* Right Panel - Scrolling Narrative */}
        <div className="bg-cream relative">
          <div className="py-24 px-8 lg:px-16 max-w-2xl">
            {/* Three Acts */}
            {acts.map((act, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="mb-20"
              >
                {/* Act Number */}
                <div className="text-amla-gold font-sans text-sm tracking-wider mb-4">
                  ACT {index + 1}
                </div>

                {/* Act Title */}
                <h3 className="text-4xl lg:text-5xl font-display text-forest mb-6 leading-tight">
                  {act.title}
                </h3>

                {/* Act Content */}
                <p className="text-lg lg:text-xl text-charcoal/80 leading-relaxed font-sans">
                  {act.content}
                </p>

                {/* Divider */}
                {index < acts.length - 1 && (
                  <div className="mt-12 flex items-center gap-4">
                    <div className="w-12 h-px bg-amla-gold/30" />
                    <div className="w-2 h-2 rounded-full bg-amla-gold/30" />
                    <div className="flex-1 h-px bg-amla-gold/10" />
                  </div>
                )}
              </motion.div>
            ))}

            {/* Pull Quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative my-20 py-12 px-8 lg:px-12"
            >
              {/* Oversized Quote Marks */}
              <div className="absolute -top-4 -left-4 text-9xl font-accent text-amla-gold/20 leading-none">
                "
              </div>

              <p className="relative z-10 text-3xl lg:text-4xl font-accent italic text-amla-gold leading-relaxed text-center">
                Every jar carries the taste of a Himalayan morning.
              </p>

              {/* Soft Glow Effect */}
              <div className="absolute inset-0 bg-amla-gold/5 rounded-3xl blur-2xl -z-10" />
            </motion.div>

            {/* Light Leak Decoration */}
            <div className="absolute bottom-20 right-0 w-64 h-64 bg-amla-gold/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
