import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function ShopByCategory() {
  const categories = [
    {
      name: "Pickles",
      image: "https://images.unsplash.com/photo-1599639957043-f3aa5c986398?w=800&h=1000&fit=crop",
      description: "Slow-cooked with mountain-grown ingredients",
      gridArea: "pickle"
    },
    {
      name: "Chutneys",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop",
      description: "Fresh herbs and traditional spice blends",
      gridArea: "chutney"
    },
    {
      name: "Juices",
      image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800&h=800&fit=crop",
      description: "Cold-pressed from organic Himalayan fruits",
      gridArea: "juice"
    },
    {
      name: "Candies",
      image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=600&h=800&fit=crop",
      description: "Handmade with wild honey and natural sugars",
      gridArea: "candy"
    },
    {
      name: "Jams",
      image: "https://images.unsplash.com/photo-1620061589361-e3684bf06699?w=800&h=800&fit=crop",
      description: "Small-batch preserves from wild berries",
      gridArea: "jam"
    },
    {
      name: "Spices",
      image: "https://images.unsplash.com/photo-1615485500834-bc10199bc5ed?w=800&h=1000&fit=crop",
      description: "Sun-dried and stone-ground at source",
      gridArea: "spice"
    }
  ];

  return (
    <section className="py-24 bg-snow relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-amla-gold rounded-full blur-3xl opacity-5" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-forest rounded-full blur-3xl opacity-5" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-7xl mb-6 font-display text-forest">
            Explore the Harvest
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-sans">
            Discover our curated collection of handcrafted Himalayan delicacies
          </p>
        </motion.div>

        {/* Asymmetric Editorial Grid */}
        <div
          className="grid gap-6"
          style={{
            gridTemplateAreas: `
              "pickle pickle chutney"
              "juice candy chutney"
              "juice jam spice"
              "jam jam spice"
            `,
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(4, 240px)"
          }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover="hover"
              className="group relative overflow-hidden rounded-3xl cursor-pointer"
              style={{
                gridArea: category.gridArea,
                boxShadow: 'var(--shadow-md)'
              }}
            >
              {/* Full-Bleed Image */}
              <div className="absolute inset-0">
                <motion.img
                  variants={{
                    hover: { scale: 1.05 }
                  }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />

                {/* Cinematic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

                {/* Hover Overlay Fade */}
                <motion.div
                  variants={{
                    hover: { opacity: 0.5 }
                  }}
                  initial={{ opacity: 0.7 }}
                  className="absolute inset-0 bg-forest/40"
                />
              </div>

              {/* Category Name (Always Visible) */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-4xl font-display text-cream mb-2">
                  {category.name}
                </h3>

                {/* Hidden Content (Reveals on Hover) */}
                <motion.div
                  variants={{
                    hover: { opacity: 1, y: 0 }
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  className="space-y-3"
                >
                  <p className="text-cream/90 font-sans">
                    {category.description}
                  </p>

                  <motion.div
                    className="flex items-center gap-2 text-amla-gold font-semibold"
                    variants={{
                      hover: { x: 4 }
                    }}
                  >
                    Explore
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Hover Glow */}
              <motion.div
                variants={{
                  hover: { opacity: 1 }
                }}
                initial={{ opacity: 0 }}
                className="absolute inset-0 pointer-events-none rounded-3xl"
                style={{ boxShadow: 'var(--shadow-glow)' }}
              />

              {/* Grain Overlay */}
              <div className="absolute inset-0 opacity-15 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjA4IiAvPjwvc3ZnPg==')]" />
            </motion.div>
          ))}
        </div>

        {/* Floating Ingredient Illustrations */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-32 right-32 text-7xl opacity-10"
        >
          🫚
        </motion.div>
      </div>
    </section>
  );
}
