import { useState } from 'react';
import { Link } from 'react-router';
import { Calendar, User, ArrowRight, Clock, BookOpen, Sparkles, TrendingUp, Leaf } from 'lucide-react';
import { TiltCard } from '../components/effects/TiltCard';
import { MagneticButton } from '../components/effects/MagneticButton';
import { GlowEffect } from '../components/effects/GlowEffect';
import { RippleButton } from '../components/effects/RippleButton';
import { ScrollReveal } from '../components/animations/ScrollReveal';
import { StaggerChildren } from '../components/animations/StaggerChildren';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function BlogPage() {
  const [showAll, setShowAll] = useState(false);

  const featuredPost = {
    title: 'The Benefits of Organic Eating: A Complete Guide',
    excerpt: 'Discover how switching to organic products can transform your health and well-being. We explore the science, the tradition, and the taste that makes organic truly different.',
    image: 'https://images.unsplash.com/photo-1649509857227-f63b234545f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
    author: 'Dr. Anjali Gupta',
    date: 'March 20, 2024',
    readTime: '8 min read',
    category: 'Health & Wellness',
    slug: 'benefits-of-organic-eating',
  };

  const posts = [
    {
      title: 'Traditional Pickle Making: An Art Form',
      excerpt: 'Learn about the ancient techniques that make our pickles so special.',
      image: 'https://images.unsplash.com/photo-1562346816-9d0bdd559ec1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      author: 'Meera Devi',
      date: 'March 18, 2024',
      readTime: '5 min read',
      category: 'Recipes',
      slug: 'traditional-pickle-making',
    },
    {
      title: 'Honey: Nature\'s Golden Medicine',
      excerpt: 'Explore the incredible health benefits of raw, unprocessed organic honey.',
      image: 'https://images.unsplash.com/photo-1773957949171-8ccca4580bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      author: 'Dr. Rajesh Kumar',
      date: 'March 15, 2024',
      readTime: '6 min read',
      category: 'Health & Wellness',
      slug: 'honey-golden-medicine',
    },
    {
      title: 'Sustainable Farming in the Himalayas',
      excerpt: 'How we maintain ecological balance while growing organic produce.',
      image: 'https://images.unsplash.com/photo-1686150569507-e41a64f92d68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      author: 'Ramesh Sharma',
      date: 'March 12, 2024',
      readTime: '7 min read',
      category: 'Farming',
      slug: 'sustainable-farming-himalayas',
    },
    {
      title: '5 Ways to Use Murabba in Your Daily Diet',
      excerpt: 'Creative and delicious ways to enjoy this traditional sweet preserve.',
      image: 'https://images.unsplash.com/photo-1667653052149-f4cdc800e9f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      author: 'Chef Priya Singh',
      date: 'March 10, 2024',
      readTime: '4 min read',
      category: 'Recipes',
      slug: 'murabba-daily-diet',
    },
    {
      title: 'The Journey of a Mango: From Tree to Pickle',
      excerpt: 'Follow the complete process of how we transform fresh mangoes into delicious pickles.',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      author: 'Vikram Singh',
      date: 'March 8, 2024',
      readTime: '6 min read',
      category: 'Behind the Scenes',
      slug: 'mango-journey',
    },
    {
      title: 'Organic vs Conventional: What\'s the Difference?',
      excerpt: 'Understanding why organic matters and how it impacts your health.',
      image: 'https://images.unsplash.com/photo-1512389238664-e68d7988ebac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      author: 'Dr. Anjali Gupta',
      date: 'March 5, 2024',
      readTime: '7 min read',
      category: 'Education',
      slug: 'organic-vs-conventional',
    },
  ];

  const categories = ['All', 'Recipes', 'Health & Wellness', 'Farming', 'Behind the Scenes', 'Education'];

  return (
    <div className="min-h-screen bg-[#fafaf8]">
      {/* Hero Header */}
      <div className="relative py-24 overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1620482060657-38b4bb0ab9c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Magazine and organic foods"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.25)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1c3a2b]/80 to-[#0d1f18]/70" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-[rgba(212,165,51,0.35)] backdrop-blur-sm mb-6">
              <BookOpen className="w-3.5 h-3.5 text-[#d4a533]" />
              <span className="text-[#d4a533] text-xs font-semibold tracking-[0.15em] uppercase">Stories &amp; Insights</span>
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] text-white mb-4"
          >
            Our Journal
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="text-white/70 max-w-2xl mx-auto leading-relaxed"
          >
            Stories, recipes, and insights from our organic Himalayan world
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Featured Post */}
        <ScrollReveal>
          <Link to={`/blog/${featuredPost.slug}`} className="group flex flex-col overflow-hidden rounded-[30px] bg-[#fcfbf8] border border-[#ece8df] shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] block mb-16">
                  <div className="relative overflow-hidden h-[240px] shrink-0 w-full">
                    <ImageWithFallback
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-1.5 bg-[#d4a533] text-white text-xs font-semibold rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-10 lg:p-12 flex flex-col justify-center">
                    <span className="inline-block px-3 py-1 bg-[#f5f0e8] text-[#4a6741] rounded-full text-xs font-semibold mb-4 w-fit">
                      {featuredPost.category}
                    </span>
                    <h2 className="font-serif text-[clamp(1.5rem,3vw,2.2rem)] text-[#1c2a1f] mb-4 group-hover:text-[#4a6741] transition-colors leading-tight">
                      {featuredPost.title}
                    </h2>
                    <p className="text-[#6b6560] mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-[#9b9590] mb-6">
                      <div className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-[#1c3a2b] font-semibold group-hover:gap-4 transition-all duration-300">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
          </Link>
        </ScrollReveal>

        {/* Filter Tags */}
        <ScrollReveal>
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  cat === 'All'
                    ? 'bg-[#1c3a2b] text-white shadow-md'
                    : 'bg-white text-[#3a3a3a] border border-[rgba(0,0,0,0.08)] hover:border-[#4a6741]/30 hover:bg-[#f5f0e8]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Posts Grid */}
        <StaggerChildren staggerDelay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(0, showAll ? posts.length : 3).map((post) => (
              <Link 
                key={post.slug} 
                to={`/blog/${post.slug}`} 
                className="group flex flex-col h-full overflow-hidden rounded-[30px] bg-[#fcfbf8] border border-[#ece8df] shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] block"
              >
                <div className="relative overflow-hidden h-[240px] shrink-0 w-full">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-center block transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3.5 py-1.5 bg-white/95 backdrop-blur-md text-[#4a6741] text-[13px] font-semibold rounded-full shadow-sm border border-white/20">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="font-serif font-bold text-[1.25rem] text-[#1c2a1f] mb-3 group-hover:text-[#4a6741] transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-[#6b6560] text-[15px] leading-relaxed line-clamp-2 flex-1 mb-5">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-[13px] font-medium text-[#8a8580] pt-4 border-t border-[#ece8df] mt-auto">
                    <div className="flex items-center gap-1.5">
                      <User className="w-4 h-4 text-[#4a6741]/70" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#4a6741]/70" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </StaggerChildren>

        {/* Load More */}
        <ScrollReveal>
          <div className="flex justify-center mt-14">
            <MagneticButton strength={0.3}>
              <GlowEffect glowColor="#1c3a2b" intensity={25}>
                <RippleButton 
                  onClick={() => setShowAll(!showAll)}
                  className="flex items-center gap-2.5 px-9 py-4 bg-[#1c3a2b] hover:bg-[#2a4a3b] text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <BookOpen className="w-4 h-4" />
                  {showAll ? 'Show Less' : 'Load More Articles'}
                </RippleButton>
              </GlowEffect>
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
