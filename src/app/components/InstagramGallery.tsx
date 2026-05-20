import { motion } from "motion/react";
import { Instagram } from "lucide-react";
import Masonry from "react-responsive-masonry";

export default function InstagramGallery() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=800&fit=crop",
      likes: "2.4k"
    },
    {
      url: "https://images.unsplash.com/photo-1509099381441-ea3c0cf98b94?w=600&h=600&fit=crop",
      likes: "1.8k"
    },
    {
      url: "https://images.unsplash.com/photo-1599639957043-f3aa5c986398?w=600&h=700&fit=crop",
      likes: "3.1k"
    },
    {
      url: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&h=800&fit=crop",
      likes: "2.2k"
    },
    {
      url: "https://images.unsplash.com/photo-1587049352846-4a222e784fce?w=600&h=600&fit=crop",
      likes: "1.5k"
    },
    {
      url: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=700&fit=crop",
      likes: "2.7k"
    }
  ];

  return (
    <section className="py-24 bg-snow relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-7xl mb-6 font-display text-forest">
            Life at the
            <br />
            <span className="text-earth">Farm</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 font-sans">
            Follow our daily harvest, recipes, and mountain moments
          </p>

          {/* Follow CTA */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-lg transition-all"
            style={{
              background: 'var(--forest)',
              color: 'var(--cream)',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            <Instagram className="w-6 h-6" />
            Follow @doongooseberryfarm
          </motion.button>
        </motion.div>

        {/* Masonry Grid */}
        <Masonry columnsCount={3} gutter="20px">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              whileHover="hover"
              className="group relative overflow-hidden rounded-3xl cursor-pointer"
              style={{ boxShadow: 'var(--shadow-md)' }}
            >
              <motion.img
                variants={{
                  hover: { scale: 1.05 }
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                src={image.url}
                alt="Farm life moment"
                className="w-full h-auto object-cover"
              />

              {/* Hover Overlay */}
              <motion.div
                variants={{
                  hover: { opacity: 1 }
                }}
                initial={{ opacity: 0 }}
                className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/50 to-transparent flex items-center justify-center"
              >
                <div className="text-center">
                  <Instagram className="w-10 h-10 text-cream mx-auto mb-3" />
                  <div className="flex items-center gap-2 text-cream">
                    <span className="text-lg font-semibold">{image.likes}</span>
                    <span className="text-sm">likes</span>
                  </div>
                </div>
              </motion.div>

              {/* Hover Glow */}
              <motion.div
                variants={{
                  hover: { opacity: 1 }
                }}
                initial={{ opacity: 0 }}
                className="absolute inset-0 pointer-events-none rounded-3xl"
                style={{ boxShadow: '0 0 32px 0 rgba(28, 58, 43, 0.3)' }}
              />
            </motion.div>
          ))}
        </Masonry>
      </div>
    </section>
  );
}
