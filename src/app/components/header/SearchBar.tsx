import { motion, AnimatePresence } from "motion/react";
import { Search, TrendingUp, Clock, X } from "lucide-react";
import { useState } from "react";

interface SearchBarProps {
  onClose: () => void;
}

export default function SearchBar({ onClose }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const recentSearches = ["Organic Apples", "Fresh Milk", "Whole Wheat Bread"];
  const trendingProducts = [
    { name: "Organic Honey", category: "Homemade Goods" },
    { name: "Fresh Strawberries", category: "Fruits" },
    { name: "Almond Milk", category: "Dairy" }
  ];

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-40"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(4px)' }}
      />

      {/* Search Container */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-24 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-6"
      >
        <div
          className="rounded-3xl shadow-2xl border overflow-hidden backdrop-blur-xl"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            borderColor: 'rgba(139, 125, 107, 0.15)'
          }}
        >
          {/* Search Input */}
          <div className="p-6 border-b" style={{ borderColor: 'rgba(139, 125, 107, 0.1)' }}>
            <div className="flex items-center gap-4">
              <Search className="w-6 h-6 text-muted-foreground flex-shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for organic products..."
                className="flex-1 outline-none text-lg bg-transparent"
                autoFocus
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 rounded-full hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </motion.button>
            </div>
          </div>

          {/* Search Results */}
          <div className="p-6 max-h-96 overflow-y-auto">
            {searchQuery === "" ? (
              <div className="space-y-6">
                {/* Recent Searches */}
                {recentSearches.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <h3 className="text-sm font-semibold text-muted-foreground">Recent Searches</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {recentSearches.map((search, index) => (
                        <motion.button
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 rounded-full text-sm border transition-colors"
                          style={{
                            backgroundColor: 'rgba(74, 103, 65, 0.05)',
                            borderColor: 'rgba(74, 103, 65, 0.15)'
                          }}
                        >
                          {search}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Trending Products */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-4 h-4 text-muted-foreground" />
                    <h3 className="text-sm font-semibold text-muted-foreground">Trending Now</h3>
                  </div>
                  <div className="space-y-2">
                    {trendingProducts.map((product, index) => (
                      <motion.button
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ x: 4 }}
                        className="w-full text-left p-3 rounded-xl hover:bg-muted transition-colors"
                      >
                        <div className="font-medium text-foreground">{product.name}</div>
                        <div className="text-sm text-muted-foreground">{product.category}</div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                <Search className="w-12 h-12 mx-auto mb-3 opacity-30" />
                <p>Searching for "{searchQuery}"...</p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
}
