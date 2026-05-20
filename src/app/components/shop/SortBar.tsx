import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Grid3x3, List, SlidersHorizontal, Check } from "lucide-react";
import { useState } from "react";

interface SortBarProps {
  resultCount: number;
  onFilterClick?: () => void;
  viewMode: "grid" | "list";
  onViewModeChange: (mode: "grid" | "list") => void;
}

export default function SortBar({ resultCount, onFilterClick, viewMode, onViewModeChange }: SortBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [sortBy, setSortBy] = useState("popularity");

  const sortOptions = [
    { value: "popularity", label: "Popularity", icon: "🔥" },
    { value: "new", label: "Fresh Arrivals", icon: "✨" },
    { value: "price-low", label: "Price: Low to High", icon: "💰" },
    { value: "price-high", label: "Price: High to Low", icon: "💎" },
    { value: "rating", label: "Customer Rating", icon: "⭐" }
  ];

  const selectedOption = sortOptions.find(opt => opt.value === sortBy);

  return (
    <div className="backdrop-blur-xl rounded-3xl p-5 shadow-lg border mb-8" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderColor: 'rgba(139, 125, 107, 0.5)' }}>
      <div className="flex items-center justify-between gap-4 flex-wrap">
        {/* Left Side - Result Count & Filter Button */}
        <div className="flex items-center gap-4">
          {/* Result Count */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden lg:flex items-center gap-2"
          >
            <span className="text-sm text-muted-foreground">Showing</span>
            <span className="text-lg font-bold text-primary bg-primary/5 px-3 py-1 rounded-full">
              {resultCount}
            </span>
            <span className="text-sm text-muted-foreground">products</span>
          </motion.div>

          {/* Mobile Filter Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onFilterClick}
            className="lg:hidden flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-5 py-3 rounded-full font-semibold text-sm shadow-lg shadow-primary/30"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters & Sort
          </motion.button>
        </div>

        {/* Right Side - Sort & View Toggle */}
        <div className="flex items-center gap-3">
          {/* Sort Dropdown */}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-3 bg-white border-2 border-border px-5 py-3 rounded-full text-sm hover:border-primary hover:shadow-md transition-all min-w-[200px] justify-between group"
            >
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground text-xs font-medium">Sort by:</span>
                <span className="font-semibold text-foreground">{selectedOption?.label}</span>
              </div>
              <ChevronDown className={`w-4 h-4 text-muted-foreground group-hover:text-primary transition-all ${isOpen ? "rotate-180" : ""}`} />
            </motion.button>

            <AnimatePresence>
              {isOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsOpen(false)}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: -15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -15, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full right-0 mt-3 w-72 backdrop-blur-xl rounded-3xl shadow-2xl border overflow-hidden z-20"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', borderColor: 'rgba(139, 125, 107, 0.5)' }}
                  >
                    <div className="p-2">
                      {sortOptions.map((option, index) => (
                        <motion.button
                          key={option.value}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ x: 5, backgroundColor: "rgba(74, 103, 65, 0.05)" }}
                          onClick={() => {
                            setSortBy(option.value);
                            setIsOpen(false);
                          }}
                          className={`w-full text-left px-5 py-3.5 rounded-2xl text-sm transition-all flex items-center justify-between group ${
                            sortBy === option.value
                              ? "bg-gradient-to-r from-primary/10 to-accent/10 text-primary font-semibold shadow-sm"
                              : "text-foreground hover:bg-muted/50"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-xl">{option.icon}</span>
                            <span>{option.label}</span>
                          </div>
                          {sortBy === option.value && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 200 }}
                            >
                              <Check className="w-5 h-5 text-primary" />
                            </motion.div>
                          )}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* View Mode Toggle */}
          <div className="hidden sm:flex items-center gap-1 bg-white border-2 border-border rounded-full p-1.5 shadow-sm">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onViewModeChange("grid")}
              className={`p-2.5 rounded-full transition-all relative ${
                viewMode === "grid" ? "bg-gradient-to-br from-primary to-accent text-white shadow-lg" : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {viewMode === "grid" && (
                <motion.div
                  layoutId="viewMode"
                  className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <Grid3x3 className="w-4 h-4 relative z-10" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onViewModeChange("list")}
              className={`p-2.5 rounded-full transition-all relative ${
                viewMode === "list" ? "bg-gradient-to-br from-primary to-accent text-white shadow-lg" : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {viewMode === "list" && (
                <motion.div
                  layoutId="viewMode"
                  className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <List className="w-4 h-4 relative z-10" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
