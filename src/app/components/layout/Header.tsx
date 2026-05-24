import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import { Search, Heart, User, ShoppingCart, ChevronDown, Menu, X as XIcon, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useWishlist } from '../../contexts/WishlistContext';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [cartCount] = useState(3);
  const { wishlistItems } = useWishlist();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { name: 'Pickles', slug: 'pickles', image: 'https://images.unsplash.com/photo-1562346816-9d0bdd559ec1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { name: 'Murabba', slug: 'murabba', image: 'https://images.unsplash.com/photo-1667653052149-f4cdc800e9f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { name: 'Juices', slug: 'juices', image: 'https://images.unsplash.com/photo-1695634237630-f99602661946?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { name: 'Organic Powders', slug: 'organic-powders', image: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { name: 'Honey', slug: 'honey', image: 'https://images.unsplash.com/photo-1773957949199-bc3aa74850ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { name: 'Seasonal Products', slug: 'seasonal', image: 'https://images.unsplash.com/photo-1686150569507-e41a64f92d68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { name: 'Best Sellers', slug: 'best-sellers', image: 'https://images.unsplash.com/photo-1773957949171-8ccca4580bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { name: 'Gift Boxes', slug: 'gift-boxes', image: 'https://images.unsplash.com/photo-1759563871375-d5b140f6646e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-nav shadow-[0_4px_24px_rgba(0,0,0,0.06)]'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
      style={{
        backdropFilter: isScrolled ? 'blur(16px) saturate(180%)' : 'blur(8px)',
        WebkitBackdropFilter: isScrolled ? 'blur(16px) saturate(180%)' : 'blur(8px)',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              className="w-10 h-10 bg-gradient-to-br from-[#4a6741] to-[#5a7851] rounded-xl flex items-center justify-center shadow-lg"
              whileHover={{ rotate: 8, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Leaf className="w-6 h-6 text-white" strokeWidth={2.5} />
            </motion.div>
            <span className="text-xl md:text-2xl font-serif text-[#2a2a2a] link-underline">
              Organic Farm Fresh
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-[#2a2a2a] hover:text-[#4a6741] font-medium transition-all duration-300 hover:scale-105 link-underline">
              Home
            </Link>
            <Link to="/products" className="text-[#2a2a2a] hover:text-[#4a6741] font-medium transition-all duration-300 hover:scale-105 link-underline">
              All Products
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setIsCategoriesOpen(true)}
              onMouseLeave={() => setIsCategoriesOpen(false)}
            >
              <button className="flex items-center gap-1 text-[#2a2a2a] hover:text-[#4a6741] font-medium transition-colors">
                Categories
                <ChevronDown className={`w-4 h-4 transition-transform ${isCategoriesOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isCategoriesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 glass-card rounded-[28px] shadow-2xl border border-white/40 overflow-hidden min-w-[850px] bg-white/90 backdrop-blur-xl"
                  >
                    <div className="grid grid-cols-4 gap-6 p-8">
                      {categories.map((category) => (
                        <Link
                          key={category.slug}
                          to={`/category/${category.slug}`}
                          className="flex flex-col items-center gap-4 group p-2 rounded-2xl hover:bg-black/5 transition-colors duration-400"
                        >
                          <div className="relative w-20 h-20 rounded-[20px] shadow-sm group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-400 ease-[0.22,1,0.36,1] overflow-hidden">
                            <img
                              src={category.image}
                              alt={category.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 rounded-[20px] bg-gradient-to-tr from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
                          </div>
                          <span className="text-[15px] font-semibold text-[#2a2a2a] text-center group-hover:text-[#4a6741] transition-colors duration-300">{category.name}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link 
              to="/#our-story" 
              onClick={(e) => {
                const element = document.getElementById('our-story');
                if (element) {
                  e.preventDefault();
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-[#2a2a2a] hover:text-[#4a6741] font-medium transition-all duration-300 hover:scale-105 link-underline"
            >
              Our Story
            </Link>
            <Link to="/blog" className="text-[#2a2a2a] hover:text-[#4a6741] font-medium transition-all duration-300 hover:scale-105 link-underline">
              Blog
            </Link>
            <Link to="/contact" className="text-[#2a2a2a] hover:text-[#4a6741] font-medium transition-all duration-300 hover:scale-105 link-underline">
              Contact
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-3">
            <motion.button
              onClick={() => navigate('/search')}
              className="p-2 md:p-2.5 rounded-full hover:bg-[#f5f0e8] transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search className="w-5 h-5 text-[#2a2a2a]" />
            </motion.button>
            <Link to="/wishlist" className="hidden md:block relative">
              <motion.div
                className="p-2.5 rounded-full hover:bg-[#f5f0e8] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart className={`w-5 h-5 ${wishlistItems.length > 0 ? 'fill-red-500 text-red-500' : 'text-[#2a2a2a]'}`} />
                <AnimatePresence>
                  {wishlistItems.length > 0 && (
                    <motion.span
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="absolute -top-1 -right-1 bg-[#1c3a2b] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                    >
                      {wishlistItems.length}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
            <Link to="/login" className="hidden md:flex items-center">
              <motion.div
                className="px-4 py-2 rounded-full hover:bg-[#f5f0e8] border border-transparent transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <User className="w-4 h-4 text-[#2a2a2a]" />
                <span className="text-[#2a2a2a] text-[14px] font-semibold whitespace-nowrap">Login / Register</span>
              </motion.div>
            </Link>
            <Link to="/cart" className="relative">
              <motion.div
                className="p-2 md:p-2.5 rounded-full hover:bg-[#f5f0e8] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ShoppingCart className="w-5 h-5 text-[#2a2a2a]" />
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-[#1c3a2b] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </motion.div>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-[#f5f0e8] transition-colors"
            >
              {isMobileMenuOpen ? <XIcon className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-[rgba(139,125,107,0.1)]"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#2a2a2a] hover:text-[#4a6741] font-medium py-2"
              >
                Home
              </Link>
              <Link
                to="/products"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#2a2a2a] hover:text-[#4a6741] font-medium py-2"
              >
                All Products
              </Link>
              <div>
                <button
                  onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                  className="flex items-center justify-between w-full text-[#2a2a2a] hover:text-[#4a6741] font-medium py-2"
                >
                  Categories
                  <ChevronDown className={`w-4 h-4 transition-transform ${isCategoriesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isCategoriesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {categories.map((category) => (
                      <Link
                        key={category.slug}
                        to={`/category/${category.slug}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-2 text-[#6b6560] hover:text-[#4a6741] py-2 px-2 rounded-lg hover:bg-[#f5f0e8] transition-all"
                      >
                        <div className="w-10 h-10 rounded-[12px] overflow-hidden shadow-sm shrink-0">
                          <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
                        </div>
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                to="/#our-story"
                onClick={(e) => {
                  const element = document.getElementById('our-story');
                  if (element) {
                    e.preventDefault();
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                  setIsMobileMenuOpen(false);
                }}
                className="text-[#2a2a2a] hover:text-[#4a6741] font-medium py-2"
              >
                Our Story
              </Link>
              <Link
                to="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#2a2a2a] hover:text-[#4a6741] font-medium py-2"
              >
                Blog
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#2a2a2a] hover:text-[#4a6741] font-medium py-2"
              >
                Contact
              </Link>
              <Link
                to="/wishlist"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#2a2a2a] hover:text-[#4a6741] font-medium py-2 border-t border-[rgba(139,125,107,0.1)] mt-2 pt-4 flex items-center gap-2"
              >
                <Heart className={`w-5 h-5 ${wishlistItems.length > 0 ? 'fill-red-500 text-red-500' : ''}`} />
                Wishlist {wishlistItems.length > 0 && `(${wishlistItems.length})`}
              </Link>
              <Link
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#2a2a2a] hover:text-[#4a6741] font-medium py-2"
              >
                <User className="w-5 h-5 inline mr-2" />
                Login / Sign Up
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
