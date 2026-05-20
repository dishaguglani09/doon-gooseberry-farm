import { motion, useScroll, useTransform } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Calendar, TrendingUp, Truck, Users } from "lucide-react";

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const milestones = [
    {
      year: "1995",
      title: "A Family Recipe Becomes a Mission",
      description: "In the terraced farms of Dehradun, a grandmother's mango pickle recipe inspired the beginning of our journey. What started in a small kitchen became a promise to preserve Himalayan traditions.",
      icon: Calendar,
      image: "https://images.unsplash.com/photo-1509099381441-ea3c0cf98b94?w=600&h=400&fit=crop"
    },
    {
      year: "2005",
      title: "Organic Certification Achieved",
      description: "Partnered with 20 local Himalayan farmers committed to chemical-free cultivation. Our products earned official organic certification, validating our dedication to purity.",
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=400&fit=crop"
    },
    {
      year: "2015",
      title: "From Hills to Homes Nationwide",
      description: "Launched our online platform, making authentic Himalayan flavors accessible to families across India. Every jar shipped with the same care it was crafted.",
      icon: Truck,
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop"
    },
    {
      year: "2024",
      title: "50,000+ Families Trust Us",
      description: "Today, we serve thousands of families who choose authenticity over convenience. Our commitment to traditional recipes and mountain-grown ingredients remains unchanged.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden bg-cream">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOCIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjAzIiAvPjwvc3ZnPg==')] opacity-50" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl lg:text-7xl mb-6 font-display text-forest">Our Journey</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-sans">
            Three decades of preserving Himalayan food heritage
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-border" />

          <motion.div
            className="absolute left-8 lg:left-1/2 top-0 w-1 -translate-x-1/2 shadow-lg"
            style={{
              height: lineHeight,
              background: 'linear-gradient(to bottom, var(--forest), var(--amla-gold), var(--forest))',
              boxShadow: '0 10px 15px -3px rgba(28, 58, 43, 0.3)'
            }}
          />

          <div className="space-y-24">
            {milestones.map((milestone, index) => (
              <MilestoneCard key={index} milestone={milestone} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MilestoneCard({ milestone, index }: { milestone: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className={`lg:grid lg:grid-cols-2 lg:gap-12 items-center ${!isEven ? "lg:grid-flow-dense" : ""}`}>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
          className="absolute left-8 lg:left-1/2 -translate-x-1/2 z-20 w-16 h-16 rounded-full flex items-center justify-center border-4"
          style={{
            background: 'linear-gradient(to bottom right, var(--forest), var(--amla-gold))',
            borderColor: 'var(--cream)',
            boxShadow: 'var(--shadow-xl)'
          }}
        >
          <milestone.icon className="w-7 h-7 text-white" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className={`hidden lg:block ${!isEven ? "lg:col-start-2" : ""}`}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-xl group">
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              src={milestone.image}
              alt={milestone.title}
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent)' }} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 50 : -50 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className={`ml-24 lg:ml-0 ${!isEven ? "lg:col-start-1 lg:row-start-1 lg:text-right" : ""}`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 150 }}
            className={`inline-block mb-4 ${!isEven ? "lg:float-right lg:clear-right" : ""}`}
          >
            <div className="rounded-full px-6 py-2 border bg-amla-gold/10 border-amla-gold/30">
              <span className="text-3xl font-display text-forest">{milestone.year}</span>
            </div>
          </motion.div>

          <h3 className="text-3xl lg:text-4xl mb-4 font-heading text-forest clear-both">{milestone.title}</h3>
          <p className="text-lg text-muted-foreground leading-relaxed font-sans">{milestone.description}</p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className={`mt-6 h-1 w-20 rounded-full ${!isEven ? "lg:ml-auto" : ""}`}
            style={{
              background: 'linear-gradient(to right, var(--amla-gold), var(--forest))',
              transformOrigin: !isEven ? "right" : "left"
            }}
          />
        </motion.div>

        <div className="lg:hidden ml-24 mt-6">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src={milestone.image}
              alt={milestone.title}
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent)' }} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
