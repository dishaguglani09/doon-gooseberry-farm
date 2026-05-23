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
      text: 'The mango pickle reminds me of my grandmother\'s homemade recipe. Absolutely authentic and delicious!',
      avatar: 'https://images.unsplash.com/photo-1580756321097-164e0ccb4ddf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=100',
      initials: 'PS',
    },
    {
      name: 'Rajesh Kumar',
      location: 'Mumbai',
      rating: 5,
      text: 'Best organic honey I\'ve ever tasted. Worth every penny. My entire family loves it!',
      avatar: '',
      initials: 'RK',
    },
    {
      name: 'Anjali Mehta',
      location: 'Bangalore',
      rating: 5,
      text: 'Finally found genuinely organic products. The taste difference is truly remarkable.',
      avatar: '',
      initials: 'AM',
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

            <Link to="/our-story" className="hero-btn-secondary">
              <Play className="w-4 h-4" />
              Our Story
            </Link>
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
                <Link to={`/product/${product.slug}`} className="group block h-full">
                  <TiltCard
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col border border-[rgba(0,0,0,0.06)]"
                    tiltIntensity={6}
                    scaleIntensity={1.02}
                    shadowIntensity={0.15}
                  >
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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

                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-semibold text-[#1c2a1f] mb-2 leading-snug">{product.name}</h3>
                      <div className="flex items-center gap-1.5 mb-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-[#FFB900] text-[#FFB900]' : 'text-gray-200 fill-gray-200'}`} />
                          ))}
                        </div>
                        <span className="text-xs text-[#9b9590]">({product.reviews})</span>
                      </div>
                      <div className="flex items-center justify-between mt-auto">
                        <div>
                          <span className="font-bold text-[#1c3a2b]" style={{ fontSize: '1.1rem' }}>₹{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-xs text-[#9b9590] line-through ml-2">₹{product.originalPrice}</span>
                          )}
                        </div>
                        <GlowEffect glowColor="#1c3a2b" intensity={18}>
                          <RippleButton
                            className="flex items-center gap-1.5 px-4 py-2 bg-[#1c3a2b] hover:bg-[#2a4a3b] text-white rounded-full text-xs font-semibold transition-all duration-300 shadow hover:shadow-lg"
                            onClick={(e: React.MouseEvent) => { e.preventDefault(); e.stopPropagation(); }}
                          >
                            <ShoppingCart className="w-3.5 h-3.5" />
                            Add
                          </RippleButton>
                        </GlowEffect>
                      </div>
                    </div>
                  </TiltCard>
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
                <Link to={`/category/${category.slug}`} className="group block">
                  <TiltCard
                    className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
                    tiltIntensity={5}
                    scaleIntensity={1.04}
                    shadowIntensity={0.2}
                  >
                    <ImageWithFallback
                      src={category.image}
                      alt={category.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-115"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(18,38,26,0.85)] via-[rgba(18,38,26,0.3)] to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-[#d4a533] text-xs mb-1">{category.tagline}</p>
                      <h3 className="text-white font-semibold leading-tight">{category.name}</h3>
                      <p className="text-white/60 text-xs mt-0.5">{category.count} items</p>
                    </div>
                  </TiltCard>
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

      {/* ─── Farm Story ─────────────────────────────── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Images composition */}
            <ScrollReveal>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-xl">
                      <ImageWithFallback
                        src={FARM_WOMEN}
                        alt="Woman harvesting organic herbs on farm"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="rounded-2xl overflow-hidden aspect-square shadow-lg">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1649509857227-f63b234545f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                        alt="Farm herbs plate"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="rounded-2xl overflow-hidden aspect-square shadow-lg">
                      <ImageWithFallback
                        src={TERRACED_FARM}
                        alt="Terraced mountain farm village"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-xl">
                      <ImageWithFallback
                        src={FARM_HARVEST}
                        alt="Harvesting on the organic farm"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Badge overlay */}
                <motion.div
                  className="absolute -bottom-6 -left-6 bg-gradient-to-br from-[#d4a533] to-[#b8902c] text-white p-6 rounded-2xl shadow-2xl"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <p className="text-3xl font-bold">30+</p>
                  <p className="text-sm font-medium text-white/90">Years of Trust</p>
                </motion.div>
              </div>
            </ScrollReveal>

            {/* Content */}
            <ScrollReveal>
              <div className="lg:pl-8">
                <p className="text-[#4a6741] text-sm font-semibold tracking-[0.12em] uppercase mb-4">Our Heritage</p>
                <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-[#1c2a1f] mb-6 leading-tight">
                  Three Decades of
                  <br />Organic Excellence
                </h2>
                <p className="text-[#6b6560] mb-5 leading-relaxed">
                  Since 1995, we've been cultivating organic produce in the pristine valleys of Uttarakhand. Our journey
                  began with a simple belief: that food should be pure, natural, and full of life.
                </p>
                <p className="text-[#6b6560] mb-8 leading-relaxed">
                  Today, we continue that legacy — combining traditional farming wisdom with modern sustainable practices
                  to bring you the finest organic products from the heart of the Himalayas.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { val: '50+ Acres', label: 'Certified organic land' },
                    { val: '50,000+', label: 'Families served' },
                    { val: '80+', label: 'Local farmers supported' },
                    { val: '0', label: 'Artificial additives' },
                  ].map((stat) => (
                    <div key={stat.val} className="p-4 rounded-xl bg-[#f5f0e8] border border-[rgba(74,103,65,0.1)]">
                      <p className="font-bold text-[#1c3a2b]" style={{ fontSize: '1.2rem' }}>{stat.val}</p>
                      <p className="text-xs text-[#6b6560] mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <MagneticButton strength={0.25}>
                  <Link
                    to="/our-story"
                    className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#1c3a2b] hover:bg-[#2a4a3b] text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Read Our Story
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </MagneticButton>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

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
      <section className="py-24 bg-[#fdfcfb]">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-[#4a6741] text-sm font-semibold tracking-[0.12em] uppercase mb-3">Reviews</p>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-[#1c2a1f]">What Families Say</h2>
              <p className="text-[#7a7570] mt-3 max-w-xl mx-auto">
                Real stories from people who trust our organic products every day
              </p>
            </div>
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <StaggerItem key={i}>
                <TiltCard
                  className="bg-white rounded-2xl p-7 border border-[rgba(0,0,0,0.06)] shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col"
                  tiltIntensity={5}
                  scaleIntensity={1.02}
                  shadowIntensity={0.12}
                >
                  <div className="flex mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-[#FFB900] text-[#FFB900]" />
                    ))}
                  </div>
                  <p className="text-[#3a3a3a] leading-relaxed mb-6 flex-1 italic">"{t.text}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-[rgba(0,0,0,0.06)]">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#4a6741] to-[#5a7851] flex items-center justify-center shrink-0">
                      <span className="text-white text-sm font-bold">{t.initials}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-[#1c2a1f]">{t.name}</p>
                      <p className="text-xs text-[#9b9590]">{t.location}</p>
                    </div>
                    <div className="ml-auto">
                      <div className="w-8 h-8 rounded-full bg-[#4a6741]/10 flex items-center justify-center">
                        <Leaf className="w-4 h-4 text-[#4a6741]" />
                      </div>
                    </div>
                  </div>
                </TiltCard>
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
