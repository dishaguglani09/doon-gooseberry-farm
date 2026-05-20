import { motion } from "motion/react";
import { Star, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Emily Rodriguez",
      location: "San Francisco, CA",
      rating: 5,
      text: "The freshness is unmatched! I can taste the difference in every bite. My family has never been healthier since we started ordering from here.",
      product: "Organic Vegetable Box",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
      name: "James Chen",
      location: "Austin, TX",
      rating: 5,
      text: "Finally, a company that truly cares about quality and sustainability. The homemade bread is absolutely divine!",
      product: "Artisan Bread Collection",
      avatar: "https://i.pravatar.cc/150?img=13"
    },
    {
      name: "Sarah Williams",
      location: "Portland, OR",
      rating: 5,
      text: "As a chef, I'm extremely picky about ingredients. These are the best organic products I've found. Simply outstanding quality.",
      product: "Chef's Premium Selection",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    {
      name: "Michael Brown",
      location: "Seattle, WA",
      rating: 5,
      text: "The customer service is exceptional, and the produce always arrives fresh and beautifully packaged. Highly recommend!",
      product: "Weekly Farm Box",
      avatar: "https://i.pravatar.cc/150?img=12"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl lg:text-6xl mb-4">What Our Customers Say</h2>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-lg font-medium">4.9/5</span>
            <span className="text-muted-foreground">Rated by 12,000+ Customers</span>
          </div>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="backdrop-blur-md rounded-3xl p-8 lg:p-12 shadow-xl border"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', borderColor: 'rgba(139, 125, 107, 0.5)' }}
            >
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
                  />
                </div>

                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                    <div className="flex">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-primary">Verified Buyer</span>
                  </div>

                  <p className="text-xl lg:text-2xl text-foreground mb-6 leading-relaxed">
                    "{testimonials[currentIndex].text}"
                  </p>

                  <div>
                    <p className="font-medium text-lg">{testimonials[currentIndex].name}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[currentIndex].location}</p>
                    <p className="text-sm text-primary mt-2">Purchased: {testimonials[currentIndex].product}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "w-8 bg-primary" : "w-2 bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
