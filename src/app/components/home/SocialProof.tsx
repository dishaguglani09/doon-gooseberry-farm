import { motion } from "motion/react";
import { ShieldCheck, Users, Heart, TrendingUp, Star, Quote } from "lucide-react";
import { Badge } from "../ui/Badge";
import StarRating from "../ui/StarRating";

export default function SocialProof() {
  const stats = [
    {
      icon: Users,
      number: "50,000+",
      label: "Happy Families",
      color: "sage"
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Average Rating",
      color: "saffron"
    },
    {
      icon: ShieldCheck,
      number: "100%",
      label: "Organic Certified",
      color: "success"
    },
    {
      icon: Heart,
      number: "98%",
      label: "Repeat Customers",
      color: "copper"
    }
  ];

  const featuredReviews = [
    {
      name: "Priya Sharma",
      location: "Delhi",
      initial: "P",
      review: "Every jar tastes like it was made in my grandmother's kitchen. The mango pickle especially—I can taste the sunshine, the care, the mountains. This is what real food should be.",
    },
    {
      name: "Rajesh Negi",
      location: "Dehradun",
      initial: "R",
      review: "As someone from Uttarakhand, I'm particular about authentic flavors. These products bring me home with every bite. The quality, the taste, the tradition—all preserved perfectly.",
    },
    {
      name: "Anita Mehta",
      location: "Mumbai",
      initial: "A",
      review: "I've tried countless organic brands, but nothing compares to this. You can feel the difference when food is made with love, not machines. My children now refuse store-bought jams!",
    }
  ];

  const trustBadges = [
    "Certified Organic",
    "100% Chemical Free",
    "Farm Fresh Daily",
    "Eco-Friendly Packaging",
    "Direct from Farmers",
    "Lab Tested Quality"
  ];

  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      {/* Grain Texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjA4IiAvPjwvc3ZnPg==')]" />

      {/* Soft Light Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amla-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-7xl mb-6 font-display text-forest">
            Stories from
            <br />
            <span className="text-earth">Our Community</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real people, real stories, real taste
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-snow rounded-2xl p-8 text-center border border-border shadow-md hover:shadow-xl transition-all"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex p-4 rounded-2xl mb-4"
                style={{
                  background: `linear-gradient(135deg, rgba(28, 58, 43, 0.1), rgba(212, 165, 51, 0.1))`
                }}
              >
                <stat.icon className="w-8 h-8 text-forest" />
              </motion.div>
              <div className="text-4xl font-display text-forest mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Editorial Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-20">
          {featuredReviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="mb-16 last:mb-0"
            >
              {/* Centered Quote */}
              <div className="relative text-center px-8 py-12">
                {/* Floating Quote Marks */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.2, 0.3, 0.2]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-8 left-1/2 -translate-x-1/2 text-9xl font-display text-amla-gold/20"
                >
                  "
                </motion.div>

                {/* Review Text */}
                <p className="text-3xl lg:text-4xl font-display text-charcoal leading-relaxed mb-8 relative z-10">
                  {review.review}
                </p>

                {/* Attribution */}
                <div className="flex items-center justify-center gap-4">
                  {/* Avatar Circle with Initials */}
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-cream font-semibold text-xl"
                    style={{ backgroundColor: 'var(--forest)' }}
                  >
                    {review.initial}
                  </div>

                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-forest font-sans">{review.name}</h4>
                      <Badge variant="outline" size="sm" icon={<ShieldCheck className="w-3 h-3" />}>
                        Verified
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{review.location}</p>
                  </div>
                </div>

                {/* Soft Glow */}
                <div className="absolute inset-0 bg-amla-gold/5 rounded-3xl blur-2xl -z-10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-snow rounded-3xl p-12 border border-border text-center"
        >
          <h3 className="text-2xl font-heading mb-8 text-forest">Why Families Trust Us</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge variant="forest" size="lg" icon={<ShieldCheck className="w-4 h-4" />}>
                  {badge}
                </Badge>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-8 pt-8 border-t border-border"
          >
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <StarRating rating={4.9} showNumber reviewCount={12847} size="lg" />
              <span className="text-muted-foreground">•</span>
              <span className="text-lg font-medium text-forest">
                Based on real customer reviews
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
