import { motion } from "motion/react";
import { Home, ChevronRight, Sparkles, Leaf } from "lucide-react";

export default function ShopHero() {
  const badges = [
    { label: "100% Organic", icon: Leaf, color: "from-green-500 to-emerald-600" },
    { label: "Farm Fresh", icon: "🌾", color: "from-amber-500 to-orange-600" },
    { label: "Harvested Daily", icon: Sparkles, color: "from-blue-500 to-cyan-600" },
    { label: "No Preservatives", icon: "✨", color: "from-purple-500 to-pink-600" }
  ];

  return (
    <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.2, y: 0 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1761478329709-c83ef00016c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Fresh organic produce"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Floating Trust Badges */}
      <div className="absolute top-24 right-8 lg:right-16 z-30 flex flex-col gap-3">
        {badges.map((badge, index) => {
          const IconComponent = typeof badge.icon === 'string' ? null : badge.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                delay: 0.6 + index * 0.15,
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
              whileHover={{ scale: 1.05, x: -5 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${badge.color} rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity`} />
              <div className="relative backdrop-blur-md rounded-2xl px-5 py-3 shadow-xl flex items-center gap-3 border" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                {IconComponent ? (
                  <IconComponent className="w-5 h-5 text-primary" />
                ) : (
                  <span className="text-xl">{badge.icon}</span>
                )}
                <span className="text-sm font-semibold text-gray-800">{badge.label}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 mb-8 text-sm transition-colors"
            style={{ color: 'rgba(255, 255, 255, 0.7)' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
          >
            <Home className="w-4 h-4" />
            <ChevronRight className="w-3 h-3" />
            <span className="font-medium">Shop</span>
          </motion.div>

          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-8xl text-white mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Fresh Organic Essentials
            </motion.h1>
            <motion.p
              className="text-xl lg:text-2xl max-w-2xl leading-relaxed mb-8"
              style={{ color: 'rgba(255, 255, 255, 0.95)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              Naturally pure, sustainably sourced, and lovingly handcrafted. Experience the finest organic products delivered fresh from our farms.
            </motion.p>

            {/* Mini Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-6"
              style={{ color: 'rgba(255, 255, 255, 0.8)' }}
            >
              {["500+ Products", "25+ Farms", "10,000+ Customers"].map((stat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                  <span className="text-sm font-medium">{stat}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Floating Elements */}
      <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            y: [0, -25, 0],
            rotate: [0, 8, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-32 left-12 text-7xl opacity-10"
        >
          🍃
        </motion.div>
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -8, 0],
            x: [0, -10, 0]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-24 right-1/3 text-6xl opacity-10"
        >
          🌾
        </motion.div>
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/4 text-5xl opacity-10"
        >
          🥬
        </motion.div>
      </div>
    </section>
  );
}
