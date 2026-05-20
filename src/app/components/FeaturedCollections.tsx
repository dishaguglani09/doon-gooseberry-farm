import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function FeaturedCollections() {
  const collections = [
    {
      title: "Seasonal Fresh Picks",
      description: "Handpicked seasonal produce at peak freshness",
      image: "https://images.unsplash.com/photo-1657288089316-c0350003ca49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      span: "lg:col-span-2 lg:row-span-2"
    },
    {
      title: "Homemade Specials",
      description: "Artisanal products crafted with tradition",
      image: "https://images.unsplash.com/photo-1767065887268-e0827daae0fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      span: "lg:col-span-1"
    },
    {
      title: "Farm Harvest Essentials",
      description: "Daily essentials from local farms",
      image: "https://images.unsplash.com/photo-1758151748972-6840ed51058a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      span: "lg:col-span-1"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl lg:text-6xl mb-4">Curated Collections</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our thoughtfully curated selections of premium organic products
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {collections.map((collection, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`group relative overflow-hidden rounded-3xl ${collection.span} h-80 lg:h-auto`}
            >
              <div className="absolute inset-0">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10 group-hover:from-black/80 transition-all duration-500" />
              </div>

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                >
                  <h3 className="text-3xl lg:text-4xl text-white mb-2">{collection.title}</h3>
                  <p className="mb-4 text-base" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>{collection.description}</p>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-white font-medium group/btn"
                  >
                    Explore Collection
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
