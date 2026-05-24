import { useState } from 'react';
import { Link } from 'react-router';
import { Search, Star, Filter } from 'lucide-react';
import { motion } from 'motion/react';
import { TiltCard } from '../components/effects/TiltCard';
import { RippleButton } from '../components/effects/RippleButton';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function SearchResultsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const searchResults = [
    { id: 1, name: 'Himalayan Mango Pickle', slug: 'himalayan-mango-pickle', category: 'Pickles', price: 349, image: 'https://images.unsplash.com/photo-1562346816-9d0bdd559ec1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', rating: 4.8, reviews: 124 },
    { id: 2, name: 'Mixed Fruit Murabba', slug: 'mixed-fruit-murabba', category: 'Murabba', price: 299, image: 'https://images.unsplash.com/photo-1667653052149-f4cdc800e9f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', rating: 4.7, reviews: 156 },
    { id: 3, name: 'Amla Juice', slug: 'amla-juice', category: 'Juices', price: 249, image: 'https://images.unsplash.com/photo-1759006249055-8c4030a2d56a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', rating: 4.6, reviews: 98 },
    { id: 4, name: 'Lemon Pickle', slug: 'lemon-pickle', category: 'Pickles', price: 299, image: 'https://images.unsplash.com/photo-1613271596363-4fb96ef16eac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', rating: 4.7, reviews: 142 },
  ];

  return (
    <div className="min-h-screen bg-[#fafaf8] py-12">
      <div className="container mx-auto px-4">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8b7d6b] group-focus-within:text-[#1c3a2b] transition-colors" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products, categories, recipes..."
              className="w-full pl-12 pr-6 py-3.5 rounded-full border border-[rgba(139,125,107,0.2)] bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1c3a2b]/20 focus:border-[#4a6741] text-[#2a2a2a] placeholder:text-[#8b7d6b] transition-all duration-300"
              autoFocus
            />
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-end justify-between mb-8 pb-4 border-b border-[rgba(139,125,107,0.1)]">
          <div>
            <h1 className="font-serif text-[2rem] text-[#2a2a2a] mb-1">Search Results</h1>
            <p className="text-sm font-medium text-[#6b6560]">Found {searchResults.length} products</p>
          </div>
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[rgba(139,125,107,0.2)] bg-white shadow-sm hover:bg-[#f5f0e8] hover:border-[#1c3a2b]/20 transition-all duration-300 text-sm font-semibold text-[#2a2a2a]">
            <Filter className="w-4 h-4" />
            <span>Filters</span>
          </button>
        </div>

        {/* Results Grid */}
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {searchResults.map(product => (
                <Link
                  to={`/product/${product.slug}`}
                  key={product.id}
                  className="group flex flex-col h-full overflow-hidden rounded-[30px] bg-[#fcfbf8] border border-[#ece8df] shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] block"
                >
                    <div className="h-[240px] shrink-0 w-full relative overflow-hidden">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="mb-3">
                        <span className="inline-flex items-center px-3 py-1.5 bg-[#f0f4ef] text-[#4a6741] rounded-full text-[11px] font-bold tracking-wide uppercase">
                          {product.category}
                        </span>
                      </div>
                      <h3 className="font-semibold text-[1.1rem] text-[#2a2a2a] mb-2 leading-snug">{product.name}</h3>
                      <div className="flex items-center gap-1.5 mb-5">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3.5 h-3.5 ${
                                i < Math.floor(product.rating) ? 'fill-[#FFB900] text-[#FFB900]' : 'text-gray-200 fill-gray-200'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-[12px] font-medium text-[#8b7d6b]">({product.reviews})</span>
                      </div>
                      <div className="mt-auto flex items-center justify-between pt-2">
                        <span className="text-[1.25rem] font-bold text-[#1c3a2b]">₹{product.price}</span>
                        <RippleButton
                          className="px-5 py-2.5 bg-[#1c3a2b] hover:bg-[#2a4a3b] text-white rounded-full text-[13px] font-semibold transition-colors duration-300"
                          onClick={(e: React.MouseEvent) => {
                            e.preventDefault();
                            e.stopPropagation();
                            console.log('Added to cart:', product.name);
                          }}
                        >
                          Add
                        </RippleButton>
                      </div>
                    </div>
                </Link>
            ))}
          </div>
        ) : (
          <div className="glass-card rounded-3xl p-16 text-center shadow-xl">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-[#4a6741] to-[#5a7851] rounded-3xl flex items-center justify-center">
              <Search className="w-16 h-16 text-white" strokeWidth={1.5} />
            </div>
            <h2 className="font-serif text-3xl text-[#2a2a2a] mb-4">No results found</h2>
            <p className="text-[#6b6560] mb-8">Try adjusting your search terms or browse our categories</p>
            <Link to="/products">
              <RippleButton className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#1c3a2b] to-[#2a4a3b] hover:from-[#2a4a3b] hover:to-[#1c3a2b] text-white rounded-full font-semibold transition-all duration-500 shadow-[0_8px_30px_rgba(28,58,43,0.3)] hover:shadow-[0_12px_40px_rgba(28,58,43,0.5)]">
                Browse All Products
              </RippleButton>
            </Link>
          </div>
        )}

        {/* Popular Searches */}
        <div className="mt-16">
          <h2 className="font-semibold text-xl text-[#2a2a2a] mb-4">Popular Searches</h2>
          <div className="flex flex-wrap gap-3">
            {['Mango Pickle', 'Organic Honey', 'Amla Juice', 'Mixed Murabba', 'Lemon Pickle'].map(term => (
              <button
                key={term}
                onClick={() => setSearchQuery(term)}
                className="px-6 py-3 bg-white hover:bg-[#f5f0e8] rounded-full text-[#2a2a2a] font-medium transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
