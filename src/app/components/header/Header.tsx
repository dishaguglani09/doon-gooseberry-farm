import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";
import { Leaf, Search, Heart, User, ShoppingBag, Menu, X } from "lucide-react";
import MegaMenu from "./MegaMenu";
import SearchBar from "./SearchBar";
import MiniCart from "./MiniCart";
import MobileMenu from "./MobileMenu";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: "home" | "shop" | "about") => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showMiniCart, setShowMiniCart] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [cartCount, setCartCount] = useState(3);

  const { scrollY } = useScroll();
  const headerHeight = useTransform(scrollY, [0, 100], [80, 64]);
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.85]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", page: "home" as const },
    { label: "Shop", page: "shop" as const, hasMegaMenu: true },
    { label: "About", page: "about" as const }
  ];

  return (
    <>
      <motion.header
        style={{ height: headerHeight }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      >
        <motion.div
          className="h-full border-b"
          style={{
            backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(12px)',
            boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.08)' : 'none',
            borderColor: isScrolled ? 'rgba(139, 125, 107, 0.15)' : 'rgba(139, 125, 107, 0.1)'
          }}
        >
          <div className="container mx-auto px-6 h-full">
            <div className="flex items-center justify-between h-full">
              {/* Logo */}
              <motion.button
                style={{ scale: logoScale }}
                onClick={() => onNavigate("home")}
                className="flex items-center gap-2 group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Leaf className="w-8 h-8 text-primary" />
                </motion.div>
                <span className="text-2xl font-serif text-foreground hidden sm:block">
                  Organic Farm Fresh
                </span>
              </motion.button>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-8">
                {navLinks.map((link) => (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => link.hasMegaMenu && setShowMegaMenu(true)}
                    onMouseLeave={() => link.hasMegaMenu && setShowMegaMenu(false)}
                  >
                    <motion.button
                      onClick={() => onNavigate(link.page)}
                      className="relative py-2 px-1 text-foreground font-medium transition-colors group"
                      whileHover={{ y: -1 }}
                    >
                      {link.label}

                      {/* Hover underline */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Active indicator */}
                      {currentPage === link.page && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                        />
                      )}
                    </motion.button>
                  </div>
                ))}
              </nav>

              {/* Right Actions */}
              <div className="flex items-center gap-4">
                {/* Search */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowSearch(!showSearch)}
                  className="hidden md:flex p-2.5 rounded-full transition-colors"
                  style={{ backgroundColor: showSearch ? 'rgba(74, 103, 65, 0.1)' : 'transparent' }}
                >
                  <Search className="w-5 h-5 text-foreground" />
                </motion.button>

                {/* Wishlist */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="hidden md:flex p-2.5 rounded-full hover:bg-muted transition-colors"
                >
                  <Heart className="w-5 h-5 text-foreground" />
                </motion.button>

                {/* Account */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="hidden md:flex p-2.5 rounded-full hover:bg-muted transition-colors"
                >
                  <User className="w-5 h-5 text-foreground" />
                </motion.button>

                {/* Cart */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowMiniCart(!showMiniCart)}
                  className="relative p-2.5 rounded-full transition-colors"
                  style={{ backgroundColor: showMiniCart ? 'rgba(74, 103, 65, 0.1)' : 'transparent' }}
                >
                  <ShoppingBag className="w-5 h-5 text-foreground" />
                  {cartCount > 0 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center"
                    >
                      <span className="text-white text-xs font-bold">{cartCount}</span>
                    </motion.div>
                  )}
                </motion.button>

                {/* Mobile Menu Toggle */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                  className="lg:hidden p-2.5 rounded-full hover:bg-muted transition-colors"
                >
                  {showMobileMenu ? (
                    <X className="w-6 h-6 text-foreground" />
                  ) : (
                    <Menu className="w-6 h-6 text-foreground" />
                  )}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mega Menu */}
        {showMegaMenu && (
          <MegaMenu
            onClose={() => setShowMegaMenu(false)}
            onNavigate={onNavigate}
          />
        )}
      </motion.header>

      {/* Search Overlay */}
      {showSearch && (
        <SearchBar onClose={() => setShowSearch(false)} />
      )}

      {/* Mini Cart */}
      {showMiniCart && (
        <MiniCart
          onClose={() => setShowMiniCart(false)}
          cartCount={cartCount}
        />
      )}

      {/* Mobile Menu */}
      {showMobileMenu && (
        <MobileMenu
          currentPage={currentPage}
          onNavigate={(page) => {
            onNavigate(page);
            setShowMobileMenu(false);
          }}
          onClose={() => setShowMobileMenu(false)}
          cartCount={cartCount}
        />
      )}
    </>
  );
}
