import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Sprout, Users, Heart, Award } from "lucide-react";

export default function BrandStory() {
  const stories = [
    {
      title: "Where It All Began",
      year: "1998",
      content: "In the heart of California's fertile valleys, the Anderson family planted their first organic seeds. What started as a small family garden grew into a passion for sustainable, chemical-free farming that would feed thousands.",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      icon: Sprout,
      reverse: false
    },
    {
      title: "Growing Together",
      year: "2005",
      content: "We partnered with local family farms who shared our values of authenticity and sustainability. Every harvest became a celebration of community, care, and the simple beauty of food grown the way nature intended.",
      image: "https://images.unsplash.com/photo-1595855759920-86582396756a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      icon: Users,
      reverse: true
    },
    {
      title: "Handcrafted with Heart",
      year: "2012",
      content: "We began creating our signature homemade preserves, sauces, and baked goods. Each jar is hand-labeled, each loaf carefully kneaded, each jar filled with recipes passed down through generations.",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      icon: Heart,
      reverse: false
    },
    {
      title: "Certified Excellence",
      year: "2018",
      content: "Our commitment to purity earned us USDA Organic, Non-GMO, and Fair Trade certifications. But beyond the badges, it's the smiles of families we feed and the land we protect that drive us forward.",
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      icon: Award,
      reverse: true
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden" style={{ background: 'linear-gradient(to bottom, #fdfcfb, rgba(245, 241, 237, 0.3), #fdfcfb)' }}>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzhiOWQ4MyIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-xl">
              <Heart className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          <h2 className="text-5xl lg:text-7xl mb-6 text-foreground">Our Story</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A journey of three generations, rooted in family values and a deep respect for the land.
          </p>
        </motion.div>

        <div className="space-y-32">
          {stories.map((story, index) => (
            <StoryBlock key={index} story={story} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StoryBlock({ story, index }: { story: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
        story.reverse ? "lg:grid-flow-dense" : ""
      }`}
    >
      <motion.div
        initial={{ opacity: 0, x: story.reverse ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: story.reverse ? 50 : -50 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className={story.reverse ? "lg:col-start-2" : ""}
      >
        <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
          <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2), transparent)' }} />
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
            src={story.image}
            alt={story.title}
            className="w-full aspect-[4/3] object-cover"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="absolute bottom-6 left-6 z-20"
          >
            <div className="backdrop-blur-md rounded-full px-6 py-2 border" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.3)' }}>
              <span className="text-white font-medium">{story.year}</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: story.reverse ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: story.reverse ? -50 : 50 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className={story.reverse ? "lg:col-start-1 lg:row-start-1" : ""}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
          className="inline-block mb-6"
        >
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center border" style={{ background: 'linear-gradient(to bottom right, rgba(74, 103, 65, 0.2), rgba(139, 157, 131, 0.2))', borderColor: 'rgba(74, 103, 65, 0.2)' }}>
            <story.icon className="w-8 h-8 text-primary" />
          </div>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-4xl lg:text-5xl mb-6 text-foreground"
        >
          {story.title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg lg:text-xl text-muted-foreground leading-relaxed"
        >
          {story.content}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-8 h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full"
          style={{ transformOrigin: story.reverse ? "right" : "left" }}
        />
      </motion.div>
    </motion.div>
  );
}
