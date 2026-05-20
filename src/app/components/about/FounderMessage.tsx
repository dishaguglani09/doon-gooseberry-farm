import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Heart } from "lucide-react";

export default function FounderMessage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden" style={{ background: 'linear-gradient(to bottom, rgba(245, 241, 237, 0.3), #fdfcfb)' }}>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzhiOWQ4MyIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent, transparent)' }} />
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                  alt="John Anderson, Founder"
                  className="w-full aspect-[3/4] object-cover"
                />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="absolute bottom-8 left-8 z-20"
                >
                  <div className="backdrop-blur-md rounded-2xl px-6 py-4 border" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.3)' }}>
                    <div className="text-white text-2xl font-serif mb-1">John Anderson</div>
                    <div className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Founder & Head Farmer</div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-2xl"
              >
                <Heart className="w-12 h-12 text-white" />
              </motion.div>

              <motion.div
                className="absolute -bottom-8 -left-8 opacity-20"
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                  <path d="M60 10L70 40L100 50L70 60L60 90L50 60L20 50L50 40L60 10Z" fill="currentColor" className="text-primary" />
                </svg>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mb-6"
              >
                <div className="inline-block rounded-full px-6 py-2 border" style={{ background: 'linear-gradient(to right, rgba(74, 103, 65, 0.1), rgba(139, 157, 131, 0.1))', borderColor: 'rgba(74, 103, 65, 0.2)' }}>
                  <span className="text-primary font-medium">A Message from Our Founder</span>
                </div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-4xl lg:text-6xl mb-8 text-foreground"
              >
                Feeding Families,
                <br />
                <span className="text-primary">Nurturing the Land</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-8"
              >
                <p>
                  When my grandparents first planted seeds on this land in 1998, they had a simple dream: to grow food the way nature intended—with care, patience, and respect for the earth.
                </p>

                <p>
                  Today, I'm honored to continue that legacy. Every morning when I walk through our fields, I'm reminded that what we do here isn't just farming—it's a promise to the families who trust us, the land that sustains us, and the future we're building together.
                </p>

                <p>
                  Thank you for choosing organic, choosing local, and choosing to be part of our story. Together, we're proving that food can be both nourishing and sustainable, delicious and ethical, modern and rooted in tradition.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <div className="text-4xl font-serif text-foreground mb-2" style={{ fontFamily: "'Brush Script MT', cursive" }}>
                  John Anderson
                </div>
                <div className="text-muted-foreground italic">With gratitude and fresh harvests,</div>
              </motion.div>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mt-8 h-1 w-32 bg-gradient-to-r from-primary to-accent rounded-full"
                style={{ transformOrigin: "left" }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
