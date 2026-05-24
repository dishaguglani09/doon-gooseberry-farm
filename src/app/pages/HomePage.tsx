import { Link } from 'react-router';
import { ArrowRight, Star, Leaf, ShieldCheck, Truck, Award, Apple, Droplet, Sparkles, Package, Gift, ShoppingCart, Heart, Play, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { ScrollReveal } from '../components/animations/ScrollReveal';
import { StaggerChildren, StaggerItem } from '../components/animations/StaggerChildren';
import { TiltCard } from '../components/effects/TiltCard';
import { MagneticButton } from '../components/effects/MagneticButton';
import { GlowEffect } from '../components/effects/GlowEffect';
import { RippleButton } from '../components/effects/RippleButton';
import { ParallaxSection } from '../components/effects/ParallaxSection';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { StorySection } from '../components/sections/StorySection';

const HERO_BG = 'https://images.unsplash.com/photo-1765883958680-bfc9345be81b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920';
const FARM_WOMEN = 'https://images.unsplash.com/photo-1755353545156-ae3525d9b676?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900';
const FARM_HARVEST = 'https://images.unsplash.com/photo-1755353018072-a8c33e95503b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900';
const TERRACED_FARM = 'https://images.unsplash.com/photo-1763809678352-0f9ca8adb331?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900';
const TEA_HILLS = 'https://images.unsplash.com/photo-1772089003655-6b1fdbf74282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900';

export function HomePage() {
  const featuredProducts = [
    {
      id: 1,
      name: 'Himalayan Mango Pickle',
      slug: 'himalayan-mango-pickle',
      price: 349,
      originalPrice: 449,
      image: 'https://images.unsplash.com/photo-1562346816-9d0bdd559ec1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      rating: 4.8,
      reviews: 124,
      badge: 'Best Seller',
      badgeColor: '#1c3a2b',
    },
    {
      id: 2,
      name: 'Organic Honey',
      slug: 'organic-honey',
      price: 499,
      originalPrice: 599,
      image: 'https://images.unsplash.com/photo-1773957949171-8ccca4580bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      rating: 4.9,
      reviews: 89,
      badge: 'Premium',
      badgeColor: '#b8902c',
    },
    {
      id: 3,
      name: 'Mixed Fruit Murabba',
      slug: 'mixed-fruit-murabba',
      price: 299,
      originalPrice: 399,
      image: 'https://images.unsplash.com/photo-1667653052149-f4cdc800e9f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      rating: 4.7,
      reviews: 156,
      badge: 'New',
      badgeColor: '#4a6741',
    },
    {
      id: 4,
      name: 'Amla Juice',
      slug: 'amla-juice',
      price: 249,
      originalPrice: 299,
      image: 'https://images.unsplash.com/photo-1759006249055-8c4030a2d56a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      rating: 4.6,
      reviews: 98,
      badge: 'Trending',
      badgeColor: '#2a4a3b',
    },
  ];

  const categories = [
    {
      name: 'Pickles',
      slug: 'pickles',
      count: 24,
      image: 'https://images.unsplash.com/photo-1562346816-9d0bdd559ec1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      tagline: 'Traditionally crafted',
    },
    {
      name: 'Murabba',
      slug: 'murabba',
      count: 18,
      image: 'https://images.unsplash.com/photo-1667653052149-f4cdc800e9f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      tagline: 'Sweet preserves',
    },
    {
      name: 'Juices',
      slug: 'juices',
      count: 12,
      image: 'https://images.unsplash.com/photo-1695634237630-f99602661946?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      tagline: 'Cold-pressed fresh',
    },
    {
      name: 'Honey',
      slug: 'honey',
      count: 8,
      image: 'https://images.unsplash.com/photo-1773957949199-bc3aa74850ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      tagline: 'Wild harvested',
    },
    {
      name: 'Powders',
      slug: 'organic-powders',
      count: 15,
      image: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      tagline: 'Ayurvedic herbs',
    },
    {
      name: 'Gift Boxes',
      slug: 'gift-boxes',
      count: 6,
      image: 'https://images.unsplash.com/photo-1759563871375-d5b140f6646e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      tagline: 'Curated collections',
    },
  ];

  const benefits = [
    {
      icon: <Leaf className="w-7 h-7" />,
      title: '100% Organic',
      description: 'No chemicals, pesticides, or artificial preservatives — ever.',
    },
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      title: 'Quality Certified',
      description: 'Certified by National Organic Standards since 2000.',
    },
    {
      icon: <Truck className="w-7 h-7" />,
      title: 'Farm Direct',
      description: 'Fresh from our Himalayan farms to your doorstep.',
    },
    {
      icon: <Award className="w-7 h-7" />,
      title: '30 Years Legacy',
      description: 'Three decades of unwavering trust and tradition.',
    },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Delhi',
      rating: 5,
      text: 'The mango pickle is absolutely delicious! Reminds me of my grandmother\'s homemade pickles. Will definitely order again.',
      initials: 'PS',
    },
    {
      name: 'Rajesh Kumar',
      location: 'Mumbai',
      rating: 5,
      text: 'Best quality products! The gooseberry juice is so fresh and healthy. Great for the whole family.',
      initials: 'RK',
    },
    {
      name: 'Anita Verma',
      location: 'Bangalore',
      rating: 5,
      text: 'Love the strawberry jam! It\'s so natural and tasty. Perfect for breakfast toast. Highly recommended!',
      initials: 'AV',
    },
    {
      name: 'Vikram Singh',
      location: 'Dehradun',
      rating: 5,
      text: 'Excellent farm products with authentic taste. The packaging is also very good. Fast delivery too!',
      initials: 'VS',
    },
  ];

  const processSteps = [
    { num: '01', title: 'Seed to Soil', desc: 'Organic seeds sown in certified chemical-free Himalayan soil.' },
    { num: '02', title: 'Hand Harvested', desc: 'Each produce hand-picked at peak ripeness by skilled farmers.' },
    { num: '03', title: 'Artisan Craft', desc: 'Traditional recipes, cold-press methods, zero additives.' },
    { num: '04', title: 'Direct to You', desc: 'Packed fresh and shipped directly from farm to your table.' },
  ];

  const gallery = [
    { src: 'https://images.unsplash.com/photo-1649509857227-f63b234545f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', alt: 'Herbs and spices plate', tall: true },
    { src: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', alt: 'Indian spices', tall: false },
    { src: 'https://images.unsplash.com/photo-1686150569507-e41a64f92d68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', alt: 'Green farm hills', tall: false },
    { src: 'https://images.unsplash.com/photo-1619189191912-1856f400d633?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', alt: 'Green chili closeup', tall: true },
    { src: 'https://images.unsplash.com/photo-1603122612817-2fe0e0631a93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', alt: 'Organic powder', tall: false },
    { src: 'https://images.unsplash.com/photo-1682490301133-db17d61a5324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', alt: 'Wooden spoon spices', tall: false },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">

      {/* ─── Hero ───────────────────────────────────────── */}
      <section className="relative h-[92vh] min-h-[620px] overflow-hidden hero-section-container">
        <ImageWithFallback
          src={HERO_BG}
          alt="Himalayan terraced farm fields"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 hero-bg-cinematic"
          style={{ filter: 'brightness(0.6)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,25,15,0.35)] via-[rgba(10,25,15,0.45)] to-[rgba(10,25,15,0.75)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(28,58,43,0.3)] to-transparent" />

        {/* Floating accent orbs */}
        <motion.div
          className="absolute top-24 right-16 w-72 h-72 bg-[#d4a533]/10 rounded-full blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.65, 0.4] }}
          transition={{ duration: 9, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-16 left-8 w-96 h-96 bg-[#4a6741]/15 rounded-full blur-3xl pointer-events-none"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 12, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-[rgba(212,165,51,0.4)] backdrop-blur-sm mb-8">
              <Leaf className="w-3.5 h-3.5 text-[#d4a533]" />
              <span className="text-[#d4a533] text-xs font-semibold tracking-[0.15em] uppercase">Est. 1995 · Doon Gooseberry Farm</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="font-serif text-[clamp(2.4rem,7vw,5.5rem)] leading-[1.1] mb-6 text-white max-w-4xl"
          >
            From the Hills,
            <br />
            <span className="text-[#d4a533]">For Your Table</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="text-[rgba(245,240,232,0.88)] max-w-2xl mb-10 leading-relaxed"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}
          >
            Three decades of preserving Himalayan traditions. Every jar crafted with
            mountain-grown ingredients, ancestral recipes, and unwavering commitment to purity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <Link to="/products" className="hero-btn-primary">
              Shop Now
              <ArrowRight className="w-4.5 h-4.5" />
            </Link>

            <button 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' });
              }} 
              className="hero-btn-secondary"
            >
              <Play className="w-4 h-4" />
              Our Story
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65 }}
            className="flex flex-wrap gap-8 justify-center mt-14"
          >
            {[
              { val: '30+', label: 'Years Legacy' },
              { val: '50K+', label: 'Happy Families' },
              { val: '100%', label: 'Organic' },
              { val: '50+', label: 'Products' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-[#d4a533] font-bold" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>{s.val}</p>
                <p className="text-white/60 text-xs tracking-wide">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-white/40" />
          <p className="text-xs tracking-[0.2em] uppercase">Scroll</p>
        </div>
      </section>

      {/* ─── Trust Bar ──────────────────────────────────── */}
      <section className="bg-[#1c3a2b] py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-white/80 text-sm">
            {[
              { icon: <CheckCircle className="w-4 h-4 text-[#d4a533]" />, text: '100% Organic Certified' },
              { icon: <CheckCircle className="w-4 h-4 text-[#d4a533]" />, text: 'No Artificial Preservatives' },
              { icon: <Truck className="w-4 h-4 text-[#d4a533]" />, text: 'Free Shipping above ₹999' },
              { icon: <CheckCircle className="w-4 h-4 text-[#d4a533]" />, text: 'Eco-Friendly Packaging' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                {item.icon}
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Featured Products ────────────────────────── */}
      <section className="py-24 bg-[#fdfcfb]">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
              <div>
                <p className="text-[#4a6741] text-sm font-semibold tracking-[0.12em] uppercase mb-3">Our Collection</p>
                <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-[#1c2a1f] leading-tight">Featured Products</h2>
              </div>
              <Link to="/products" className="flex items-center gap-2 text-[#4a6741] font-semibold hover:gap-3 transition-all duration-300 shrink-0">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <StaggerItem key={product.id}>
                <Link to={`/product/${product.slug}`} className="group flex flex-col h-full overflow-hidden rounded-[30px] bg-[#fcfbf8] border border-[#ece8df] shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] block">
                    <div className="relative overflow-hidden h-[240px] shrink-0 w-full">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                      {product.badge && (
                        <div
                          className="absolute top-3 left-3 px-3 py-1 text-white text-xs font-semibold rounded-full"
                          style={{ background: product.badgeColor }}
                        >
                          {product.badge}
                        </div>
                      )}
                      <motion.button
                        className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm hover:bg-red-50"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                      >
                        <Heart className="w-4 h-4 text-[#6b6560]" />
                      </motion.button>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-semibold text-[1.1rem] text-[#1c2a1f] mb-2 leading-snug">{product.name}</h3>
                      <div className="flex items-center gap-1.5 mb-5">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-[#FFB900] text-[#FFB900]' : 'text-gray-200 fill-gray-200'}`} />
                          ))}
                        </div>
                        <span className="text-xs text-[#9b9590]">({product.reviews})</span>
                      </div>
                      <div className="flex items-center justify-between mt-auto">
                        <div>
                          <span className="font-bold text-[#1c3a2b]" style={{ fontSize: '1.25rem' }}>₹{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-[#9b9590] line-through ml-2">₹{product.originalPrice}</span>
                          )}
                        </div>
                        <GlowEffect glowColor="#1c3a2b" intensity={18}>
                          <RippleButton
                            className="flex items-center gap-1.5 px-5 py-2.5 bg-[#1c3a2b] hover:bg-[#2a4a3b] text-white rounded-full text-[13px] font-semibold transition-all duration-300 shadow hover:shadow-lg"
                            onClick={(e: React.MouseEvent) => { e.preventDefault(); e.stopPropagation(); }}
                          >
                            <ShoppingCart className="w-4 h-4" />
                            Add
                          </RippleButton>
                        </GlowEffect>
                      </div>
                    </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ─── Categories ──────────────────────────────── */}
      <section className="py-24 bg-[#f5f0e8]">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-[#4a6741] text-sm font-semibold tracking-[0.12em] uppercase mb-3">Browse</p>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-[#1c2a1f]">Shop by Category</h2>
              <p className="text-[#7a7570] mt-3 max-w-xl mx-auto">
                Explore our curated range of organic Himalayan products
              </p>
            </div>
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <StaggerItem key={category.slug}>
                <Link to={`/category/${category.slug}`} className="group flex flex-col h-full overflow-hidden rounded-[30px] bg-[#fcfbf8] border border-[#ece8df] shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] block text-center">
                    <div className="relative overflow-hidden h-[240px] shrink-0 w-full">
                      <ImageWithFallback
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                    </div>
                    <div className="p-6 flex flex-col flex-1 items-center justify-center">
                      <p className="text-[#d4a533] text-[11px] font-semibold tracking-wider uppercase mb-1.5">{category.tagline}</p>
                      <h3 className="text-[#1c2a1f] font-serif text-lg font-bold leading-tight mb-1">{category.name}</h3>
                      <p className="text-[#8a8580] text-[13px] mt-auto font-medium">{category.count} items</p>
                    </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ─── Why Choose Us ───────────────────────────── */}
      <ParallaxSection speed={0.25}>
        <section className="relative py-28 overflow-hidden">
          <ImageWithFallback
            src={TEA_HILLS}
            alt="Organic tea farm hills"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'brightness(0.2) saturate(0.7)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1c3a2b]/90 to-[#0d1f18]/80" />

          <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="text-[#d4a533] text-sm font-semibold tracking-[0.12em] uppercase mb-3">Our Promise</p>
                <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-white mb-4">Why Choose Us</h2>
                <p className="text-white/60 max-w-2xl mx-auto">
                  Three decades of commitment to purity, sustainability, and your family's health
                </p>
              </div>
            </ScrollReveal>

            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="group text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#d4a533]/30 transition-all duration-500 backdrop-blur-sm"
                    whileHover={{ y: -6 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-[#d4a533]/15 border border-[#d4a533]/20 flex items-center justify-center mx-auto mb-5 text-[#d4a533] group-hover:bg-[#d4a533]/25 transition-colors duration-300"
                      whileHover={{ rotate: 8, scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 12 }}
                    >
                      {benefit.icon}
                    </motion.div>
                    <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">{benefit.description}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>
      </ParallaxSection>

      {/* ─── Farm Story (New Story Section) ─────────── */}
      <StorySection />

      {/* ─── Farm to Table Process ─────────────────── */}
      <section className="py-24 bg-[#1c2a1f] overflow-hidden relative">
        <div className="absolute inset-0 opacity-5">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-[#d4a533] text-sm font-semibold tracking-[0.12em] uppercase mb-3">How It Works</p>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-white">Farm to Your Table</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* connecting line */}
            <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-[1px] bg-gradient-to-r from-transparent via-[#d4a533]/30 to-transparent" />

            {processSteps.map((step, i) => (
              <ScrollReveal key={i}>
                <motion.div
                  className="relative text-center"
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className="w-16 h-16 rounded-full bg-[#d4a533]/10 border-2 border-[#d4a533]/30 flex items-center justify-center mx-auto mb-5">
                    <span className="text-[#d4a533] font-bold text-sm">{step.num}</span>
                  </div>
                  <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ────────────────────────────── */}
      <section className="py-28 bg-[#f8f7f4]">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] text-black mb-4">
                What Our <span className="text-[#4a6741]">Customers</span> Say
              </h2>
              <p className="text-[#6b6560] max-w-2xl mx-auto text-[1.1rem] leading-relaxed">
                Don't just take our word for it — hear from our happy customers across India.
              </p>
            </div>
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <StaggerItem key={i} className="h-full">
                <motion.div
                  className="bg-white rounded-[24px] p-8 sm:p-10 border border-[#e5e0d8] flex flex-col h-full transform-gpu"
                  initial={false}
                  whileHover={{
                    y: -8,
                    boxShadow: '0 20px 40px -15px rgba(0,0,0,0.06)',
                    borderColor: 'rgba(74,103,65,0.4)',
                  }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <div className="flex mb-6 gap-1.5">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-[#FFB900] text-[#FFB900]" />
                    ))}
                  </div>
                  
                  <p className="text-[#4a4540] font-medium leading-[1.8] mb-10 flex-1 text-[1.05rem]">
                    “{t.text}”
                  </p>
                  
                  <div className="pt-6 border-t border-[#f0ebe1] flex items-center gap-4 mt-auto">
                    <div className="w-[46px] h-[46px] rounded-full bg-[#f0f4f1] flex items-center justify-center shrink-0">
                      <span className="text-[#4a6741] font-bold text-[15px] tracking-wide">{t.initials}</span>
                    </div>
                    <div>
                      <p className="font-bold text-black text-[15px]">{t.name}</p>
                      <p className="text-[13px] text-[#8a8580] mt-0.5">{t.location}</p>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>


      {/* ─── Newsletter CTA ───────────────────────────── */}
      <section className="relative py-28 overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1772089004439-882c469db998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Misty mountains organic farm"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.25) saturate(0.8)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1c3a2b]/85 to-[#0d1f18]/80" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[#d4a533] text-sm font-semibold tracking-[0.12em] uppercase mb-4">Stay Connected</p>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-white mb-5">
                Join Our Organic Community
              </h2>
              <p className="text-white/70 mb-10 leading-relaxed">
                Receive exclusive offers, seasonal recipes, wellness tips, and stories from our farm — delivered monthly.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-6 py-4 rounded-full bg-white/12 border border-white/20 text-white placeholder-white/45 backdrop-blur-md focus:outline-none focus:border-[#d4a533]/60 transition-colors"
                />
                <MagneticButton strength={0.2}>
                  <GlowEffect glowColor="#d4a533" intensity={25}>
                    <RippleButton className="px-7 py-4 bg-gradient-to-r from-[#d4a533] to-[#c49a2e] hover:from-[#e5b644] hover:to-[#d4a533] text-white rounded-full font-semibold whitespace-nowrap transition-all duration-300 shadow-lg hover:shadow-2xl">
                      Subscribe
                    </RippleButton>
                  </GlowEffect>
                </MagneticButton>
              </div>
              <p className="text-white/40 text-xs mt-4">No spam, ever. Unsubscribe anytime.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
