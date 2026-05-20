import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";

export default function CommunityTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Mother of Three",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      rating: 5,
      quote: "The freshness is unbelievable! My kids actually ask for vegetables now. Knowing it's organic and locally grown gives me such peace of mind.",
      location: "San Francisco, CA"
    },
    {
      name: "Michael Chen",
      role: "Home Chef",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      rating: 5,
      quote: "As a chef, quality ingredients are everything. Anderson Farm delivers restaurant-grade produce to my door. The flavor difference is remarkable.",
      location: "Oakland, CA"
    },
    {
      name: "Emily Rodriguez",
      role: "Wellness Advocate",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      rating: 5,
      quote: "I've been ordering for 2 years now. The homemade jams and breads are incredible, and their commitment to sustainability aligns perfectly with my values.",
      location: "Berkeley, CA"
    },
    {
      name: "David Thompson",
      role: "Farmer & Supplier",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      rating: 5,
      quote: "Partnering with Anderson Farm has been transformative for our small operation. They treat farmers fairly and help us reach families who appreciate real food.",
      location: "Fresno, CA"
    },
    {
      name: "Lisa Park",
      role: "Busy Professional",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      rating: 5,
      quote: "Farm-fresh groceries delivered to my door? It's a game-changer. I'm eating healthier without the hassle, and everything tastes like it came from a farmer's market.",
      location: "San Jose, CA"
    },
    {
      name: "James Anderson",
      role: "Retired Teacher",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      rating: 5,
      quote: "The Anderson family genuinely cares about their community. Every delivery feels personal, and the quality never disappoints. This is how food should be.",
      location: "Sacramento, CA"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="relative py-32 overflow-hidden" style={{ background: 'linear-gradient(to bottom, #fdfcfb, rgba(245, 241, 237, 0.3))' }}>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOCIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjAzIiAvPjwvc3ZnPg==')] opacity-50" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-7xl mb-6 text-foreground">Loved by Our Community</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from families, chefs, and farmers who trust us with their food
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 inline-block"
          >
            <div className="rounded-full px-8 py-4 border" style={{ background: 'linear-gradient(to right, rgba(74, 103, 65, 0.1), rgba(139, 157, 131, 0.1))', borderColor: 'rgba(74, 103, 65, 0.2)' }}>
              <div className="flex items-center gap-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-foreground">4.9 out of 5</div>
                  <div className="text-sm text-muted-foreground">Trusted by 10,000+ Families</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
          </div>

          <div className="relative">
            <div className="rounded-3xl shadow-2xl p-12 lg:p-16 backdrop-blur-xl border overflow-hidden" style={{ background: 'linear-gradient(to bottom right, #ffffff, #ffffff, rgba(245, 241, 237, 0.5))', borderColor: 'rgba(139, 125, 107, 0.075)' }}>
              <div className="absolute top-8 left-8 opacity-10">
                <Quote className="w-32 h-32 text-primary" />
              </div>

              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="relative z-10"
              >
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                  <motion.img
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-32 h-32 rounded-full object-cover shadow-xl ring-4 ring-primary/20"
                  />

                  <div className="flex-1 text-center lg:text-left">
                    <div className="flex justify-center lg:justify-start mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <p className="text-2xl lg:text-3xl text-foreground mb-6 leading-relaxed italic">
                      "{testimonials[currentIndex].quote}"
                    </p>

                    <div>
                      <div className="text-xl font-medium text-foreground">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-muted-foreground">
                        {testimonials[currentIndex].role} · {testimonials[currentIndex].location}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-primary w-8"
                        : "bg-border hover:bg-primary"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay: index * 0.1, duration: 0.7 }}
      className="group"
    >
      <div className="backdrop-blur-xl rounded-2xl p-8 shadow-lg border h-full hover:shadow-2xl hover:scale-105 transition-all duration-300" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderColor: 'rgba(139, 125, 107, 0.075)' }}>
        <div className="flex items-center gap-4 mb-6">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/20"
          />
          <div>
            <div className="font-medium text-foreground">{testimonial.name}</div>
            <div className="text-sm text-muted-foreground">{testimonial.role}</div>
          </div>
        </div>

        <div className="flex mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>

        <p className="text-muted-foreground leading-relaxed text-sm italic">
          "{testimonial.quote}"
        </p>
      </div>
    </motion.div>
  );
}
