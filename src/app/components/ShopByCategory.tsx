import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function ShopByCategory() {
  const categories = [
    {
      label: "Heritage Blend",
      title: "Pickles",
      itemCount: "12 Items",
      image: "https://images.unsplash.com/photo-1599639957043-f3aa5c986398?w=800&h=1000&fit=crop",
    },
    {
      label: "Fresh & Tangy",
      title: "Chutneys",
      itemCount: "8 Items",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=1000&fit=crop",
    },
    {
      label: "Cold-Pressed",
      title: "Juices",
      itemCount: "6 Items",
      image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800&h=1000&fit=crop",
    },
    {
      label: "Wild Sweetness",
      title: "Candies",
      itemCount: "15 Items",
      image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=800&h=1000&fit=crop",
    },
    {
      label: "Small-Batch",
      title: "Jams",
      itemCount: "9 Items",
      image: "https://images.unsplash.com/photo-1620061589361-e3684bf06699?w=800&h=1000&fit=crop",
    },
    {
      label: "Stone-Ground",
      title: "Spices",
      itemCount: "24 Items",
      image: "https://images.unsplash.com/photo-1615485500834-bc10199bc5ed?w=800&h=1000&fit=crop",
    }
  ];

  return (
    <section 
      className="py-24 relative overflow-hidden" 
      style={{ background: "linear-gradient(180deg, #f8f5ef, #f3f1ea)" }}
    >
      {/* Background Decor - Refined Meaningful Floating Shapes */}
      <motion.div
        animate={{ y: [0, -15, 0], opacity: [0.03, 0.05, 0.03] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-[#d4a533] rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 15, 0], opacity: [0.02, 0.04, 0.02] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-[#4a6741] rounded-full blur-[120px] pointer-events-none"
      />

      {/* Subtle Grain Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjA4IiAvPjwvc3ZnPg==')] pointer-events-none mix-blend-overlay" />

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-[40px] lg:text-[56px] mb-4 font-serif text-[#1c271b] tracking-tight">
            Explore the Harvest
          </h2>
          <p className="text-[17px] text-[#5a6a54] max-w-2xl mx-auto font-medium">
            Discover our curated collection of handcrafted Himalayan delicacies
          </p>
        </motion.div>

        {/* Premium Symmetrical Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-[28px] bg-white cursor-pointer flex flex-col aspect-[4/5] overflow-hidden"
              style={{
                boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px) scale(1.01)";
                e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.06)";
              }}
            >
              {/* Image Section */}
              <div className="relative flex-grow overflow-hidden">
                <motion.img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                />
                
                {/* Subtle overlay gradient between image and content for seamless blending */}
                <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent" />
              </div>
              
              {/* Card Content Section */}
              <div className="bg-white px-6 pt-2 pb-7 flex flex-col items-center text-center relative z-10">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#8a9a86] uppercase mb-2 transition-colors duration-300 group-hover:text-[#d4a533]">
                  {category.label}
                </span>
                <h3 className="font-serif text-[28px] text-[#1c271b] mb-1.5 transition-colors duration-300">
                  {category.title}
                </h3>
                <span className="text-[13px] text-[#9ca399] font-medium tracking-wide">
                  {category.itemCount}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
