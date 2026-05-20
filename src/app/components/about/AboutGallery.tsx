import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import Masonry from "react-responsive-masonry";

export default function AboutGallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=1000&fit=crop",
      caption: "Sunrise over terraced Himalayan farms"
    },
    {
      src: "https://images.unsplash.com/photo-1509099381441-ea3c0cf98b94?w=800&h=800&fit=crop",
      caption: "Handpicking organic mangoes at peak ripeness"
    },
    {
      src: "https://images.unsplash.com/photo-1599639957043-f3aa5c986398?w=800&h=1200&fit=crop",
      caption: "Traditional pickle-making in copper vessels"
    },
    {
      src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=800&fit=crop",
      caption: "Small-batch cooking with ancestral recipes"
    },
    {
      src: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=1000&fit=crop",
      caption: "Sun-drying spices in mountain air"
    },
    {
      src: "https://images.unsplash.com/photo-1587049352846-4a222e784fce?w=800&h=800&fit=crop",
      caption: "Wild honey collection from mountain hives"
    },
    {
      src: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800&h=1200&fit=crop",
      caption: "Cold-pressing fresh amla juice"
    },
    {
      src: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=900&fit=crop",
      caption: "Community of local farmers we work with"
    },
    {
      src: "https://images.unsplash.com/photo-1615485500834-bc10199bc5ed?w=800&h=800&fit=crop",
      caption: "Stone-grinding organic turmeric"
    }
  ];

  return (
    <section className="relative py-32 bg-snow overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjA4IiAvPjwvc3ZnPg==')]" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-7xl mb-6 font-display text-forest">Life on the Farm</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-sans">
            Real moments from the Himalayan hills—where tradition meets dedication, every single day.
          </p>
        </motion.div>

        <Masonry columnsCount={3} gutter="20px" className="masonry-grid">
          {galleryImages.map((image, index) => (
            <GalleryImage
              key={index}
              image={image}
              index={index}
              isHovered={hoveredIndex === index}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </Masonry>
      </div>
    </section>
  );
}

function GalleryImage({
  image,
  index,
  isHovered,
  onHover,
  onLeave
}: {
  image: any;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: index * 0.05, duration: 0.6 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
    >
      <div className="relative">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          src={image.src}
          alt={image.caption}
          className="w-full h-auto"
          loading="lazy"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-end"
          style={{ background: 'linear-gradient(to top, rgba(28, 58, 43, 0.95), rgba(28, 58, 43, 0.6), transparent)' }}
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="p-6 w-full"
          >
            <p className="text-cream font-sans font-medium text-lg leading-relaxed">{image.caption}</p>
          </motion.div>
        </motion.div>

        <div className="absolute inset-0 ring-1 ring-inset rounded-2xl pointer-events-none" style={{ ringColor: 'rgba(0, 0, 0, 0.1)' }} />
      </div>
    </motion.div>
  );
}
