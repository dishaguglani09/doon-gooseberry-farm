import { useParams, Link } from 'react-router';
import { Star, ArrowRight, Package, Sparkles, Cherry, Droplet, Leaf, ShoppingCart } from 'lucide-react';
import { motion } from 'motion/react';
import { TiltCard } from '../components/effects/TiltCard';
import { RippleButton } from '../components/effects/RippleButton';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function CategoryPage() {
  const { categorySlug } = useParams();

  const categoryData: Record<string, any> = {
    pickles: {
      name: 'Pickles',
      description: 'Traditional Himalayan pickles made with age-old recipes and the finest organic ingredients',
      icon: Package,
      color: 'from-[#4a6741] to-[#5a7851]',
      heroImg: 'https://images.unsplash.com/photo-1562346816-9d0bdd559ec1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    },
    murabba: {
      name: 'Murabba',
      description: 'Sweet fruit preserves crafted with mountain-fresh fruits and pure organic honey',
      icon: Sparkles,
      color: 'from-[#8b5a3c] to-[#a0724e]',
      heroImg: 'https://images.unsplash.com/photo-1667653052149-f4cdc800e9f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    },
    juices: {
      name: 'Juices',
      description: 'Cold-pressed organic juices packed with natural goodness and no added sugar',
      icon: Cherry,
      color: 'from-[#d4a533] to-[#b8902c]',
      heroImg: 'https://images.unsplash.com/photo-1759006249055-8c4030a2d56a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    },
    honey: {
      name: 'Honey',
      description: 'Pure, raw honey harvested from pristine Himalayan forests',
      icon: Droplet,
      color: 'from-[#c9a227] to-[#8b6914]',
      heroImg: 'https://images.unsplash.com/photo-1773957949171-8ccca4580bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    },
    'organic-powders': {
      name: 'Organic Powders',
      description: 'Ayurvedic herbal powders sourced from certified organic Himalayan farms',
      icon: Leaf,
      color: 'from-[#4a6741] to-[#6a8761]',
      heroImg: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    },
    'gift-boxes': {
      name: 'Gift Boxes',
      description: 'Curated organic gift collections perfect for every celebration',
      icon: Package,
      color: 'from-[#2a4a3b] to-[#1c3a2b]',
      heroImg: 'https://images.unsplash.com/photo-1759563871375-d5b140f6646e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    },
  };

  const category = categoryData[categorySlug || 'pickles'] || categoryData.pickles;

  const categoryImages: Record<string, string> = {
    pickles: 'https://images.unsplash.com/photo-1562346816-9d0bdd559ec1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    murabba: 'https://images.unsplash.com/photo-1667653052149-f4cdc800e9f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    juices: 'https://images.unsplash.com/photo-1695634237630-f99602661946?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    honey: 'https://images.unsplash.com/photo-1773957949199-bc3aa74850ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    'organic-powders': 'https://images.unsplash.com/photo-1603122612817-2fe0e0631a93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    'gift-boxes': 'https://images.unsplash.com/photo-1759563871375-d5b140f6646e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  };

  const productImg = categoryImages[categorySlug || 'pickles'] || categoryImages.pickles;

  const products = [
    { id: 1, name: `Himalayan ${category.name}`, slug: `himalayan-${categorySlug}`, price: 349, rating: 4.8, reviews: 124 },
    { id: 2, name: `Organic ${category.name}`, slug: `organic-${categorySlug}`, price: 299, rating: 4.7, reviews: 89 },
    { id: 3, name: `Premium ${category.name}`, slug: `premium-${categorySlug}`, price: 449, rating: 4.9, reviews: 156 },
    { id: 4, name: `Traditional ${category.name}`, slug: `traditional-${categorySlug}`, price: 399, rating: 4.6, reviews: 98 },
    { id: 5, name: `Special ${category.name}`, slug: `special-${categorySlug}`, price: 499, rating: 4.8, reviews: 142 },
    { id: 6, name: `Classic ${category.name}`, slug: `classic-${categorySlug}`, price: 329, rating: 4.7, reviews: 67 },
  ];

  return (
    <div className="min-h-screen bg-[#fafaf8]">
      {/* Hero */}
      <div className="relative py-24 overflow-hidden">
        <ImageWithFallback
          src={category.heroImg}
          alt={category.name}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.25)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1c3a2b]/80 to-[#0d1f18]/70" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[rgba(212,165,51,0.35)] backdrop-blur-sm mb-6">
              <Leaf className="w-3.5 h-3.5 text-[#d4a533]" />
              <span className="text-[#d4a533] text-xs font-semibold tracking-[0.15em] uppercase">Organic Collection</span>
            </div>
            <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] mb-4">{category.name}</h1>
            <p className="text-white/75 mb-6 max-w-2xl leading-relaxed">{category.description}</p>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1.5">
                <span className="font-semibold">{products.length}</span>
                <span className="text-white/65">Products Available</span>
              </div>
              <div className="w-1 h-1 bg-white/40 rounded-full" />
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 fill-[#FFB900] text-[#FFB900]" />
                <span className="font-semibold">4.7+</span>
                <span className="text-white/65">Average Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
              <Link
                to={`/product/${product.slug}`}
                key={product.id}
                className="group flex flex-col h-full overflow-hidden rounded-[30px] bg-[#fcfbf8] border border-[#ece8df] shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] block"
              >
                  <div className="h-[240px] shrink-0 w-full overflow-hidden relative">
                    <ImageWithFallback
                      src={productImg}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-semibold text-[1.1rem] text-[#1c2a1f] mb-2 leading-snug">{product.name}</h3>
                    <div className="flex items-center gap-1.5 mb-5">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-[#FFB900] text-[#FFB900]' : 'text-gray-200 fill-gray-200'}`} />
                        ))}
                      </div>
                      <span className="text-[12px] font-medium text-[#9b9590]">({product.reviews})</span>
                    </div>
                    <div className="flex items-center justify-between mt-auto pt-2">
                      <span className="font-bold text-[#1c3a2b]" style={{ fontSize: '1.25rem' }}>₹{product.price}</span>
                      <RippleButton
                        className="flex items-center gap-1.5 px-5 py-2.5 bg-[#1c3a2b] hover:bg-[#2a4a3b] text-white rounded-full text-[13px] font-semibold transition-colors duration-300"
                        onClick={(e: React.MouseEvent) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                      >
                        <ShoppingCart className="w-4 h-4" />
                        Add
                      </RippleButton>
                    </div>
                  </div>
              </Link>
          ))}
        </div>

        {/* Related Categories */}
        <div className="mt-20">
          <h2 className="font-serif text-[2rem] text-[#2a2a2a] mb-8">Explore Other Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(categoryData)
              .filter(([slug]) => slug !== categorySlug)
              .map(([slug, cat]) => (
                  <Link to={`/category/${slug}`} key={slug} className="group flex flex-col h-full overflow-hidden rounded-[30px] bg-[#fcfbf8] border border-[#ece8df] shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] block text-center">
                      <div className="h-[200px] shrink-0 w-full overflow-hidden relative bg-[#f5f0e8]">
                        <ImageWithFallback
                          src={categoryImages[slug]}
                          alt={cat.name}
                          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-1 items-center justify-center">
                        <h3 className="font-semibold text-[1.1rem] text-[#2a2a2a] leading-tight mb-2">{cat.name}</h3>
                        <p className="text-[12px] font-medium text-[#8b7d6b] mt-auto opacity-80 group-hover:opacity-100 transition-opacity uppercase tracking-wider">Explore Category</p>
                      </div>
                  </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
