import { motion, AnimatePresence } from "motion/react";
import { X, Star, Leaf, Apple, Milk, Cookie, Coffee, Salad, Sparkles, Award, ChevronDown } from "lucide-react";
import { useState } from "react";

interface FilterSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  isMobile?: boolean;
  activeFilters?: { label: string; value: string }[];
  onFilterChange?: (filters: { label: string; value: string }[]) => void;
}

export default function FilterSidebar({ isOpen = true, onClose, isMobile = false, activeFilters = [], onFilterChange }: FilterSidebarProps) {
  const [priceRange, setPriceRange] = useState([200, 1200]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedCertifications, setSelectedCertifications] = useState<string[]>([]);
  const [expandedSections, setExpandedSections] = useState<string[]>(['categories', 'price', 'rating']);

  const categories = [
    { id: "pickles", name: "Pickles", icon: Apple, count: 24, color: "text-orange-600", bgColor: "bg-orange-50", borderColor: "border-orange-200" },
    { id: "chutneys", name: "Chutneys", icon: Salad, count: 18, color: "text-green-600", bgColor: "bg-green-50", borderColor: "border-green-200" },
    { id: "jams", name: "Jams", icon: Cookie, count: 15, color: "text-red-600", bgColor: "bg-red-50", borderColor: "border-red-200" },
    { id: "juices", name: "Juices", icon: Coffee, count: 12, color: "text-emerald-600", bgColor: "bg-emerald-50", borderColor: "border-emerald-200" },
    { id: "candies", name: "Candies", icon: Sparkles, count: 10, color: "text-amber-600", bgColor: "bg-amber-50", borderColor: "border-amber-200" },
    { id: "spices", name: "Spices", icon: Star, count: 20, color: "text-yellow-700", bgColor: "bg-yellow-50", borderColor: "border-yellow-200" }
  ];

  const certifications = [
    { id: "usda", name: "USDA Organic", icon: Leaf },
    { id: "nongmo", name: "Non-GMO", icon: Sparkles },
    { id: "fairtrade", name: "Fair Trade", icon: Award },
    { id: "glutenfree", name: "Gluten-Free", icon: Star }
  ];

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(c => c !== categoryId)
        : [...prev, categoryId]
    );
  };

  const toggleCertification = (certId: string) => {
    setSelectedCertifications(prev =>
      prev.includes(certId)
        ? prev.filter(c => c !== certId)
        : [...prev, certId]
    );
  };

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedRating(null);
    setPriceRange([200, 1200]);
    setSelectedCertifications([]);
  };

  const content = (
    <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
      <div className="p-6 space-y-6">
        {/* Header */}
        {isMobile && (
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-serif">Filters</h3>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="p-2 hover:bg-primary/10 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </motion.button>
          </div>
        )}

        {/* Active Filters */}
        {(selectedCategories.length > 0 || selectedRating !== null || selectedCertifications.length > 0) && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-4 border border-primary/10"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-foreground flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Active Filters
              </span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={clearAllFilters}
                className="text-xs text-primary hover:text-primary/80 font-medium underline underline-offset-2"
              >
                Clear All
              </motion.button>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedCategories.map(catId => {
                const cat = categories.find(c => c.id === catId);
                return (
                  <motion.div
                    key={catId}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white border-2 border-primary/20 text-primary px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-2 shadow-sm"
                  >
                    {cat?.name}
                    <button
                      onClick={() => toggleCategory(catId)}
                      className="hover:bg-primary/20 rounded-full p-0.5 transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </motion.div>
                );
              })}
              {selectedRating && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white border-2 border-amber-200 text-amber-600 px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-2 shadow-sm"
                >
                  {selectedRating}+ Stars
                  <button
                    onClick={() => setSelectedRating(null)}
                    className="hover:bg-amber-100 rounded-full p-0.5 transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </motion.div>
              )}
              {selectedCertifications.map(certId => {
                const cert = certifications.find(c => c.id === certId);
                return (
                  <motion.div
                    key={certId}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white border-2 border-green-200 text-green-600 px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-2 shadow-sm"
                  >
                    {cert?.name}
                    <button
                      onClick={() => toggleCertification(certId)}
                      className="hover:bg-green-100 rounded-full p-0.5 transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Categories Section */}
        <div className="space-y-3">
          <button
            onClick={() => toggleSection('categories')}
            className="w-full flex items-center justify-between group"
          >
            <h4 className="text-lg font-serif flex items-center gap-2">
              <Leaf className="w-5 h-5 text-primary" />
              Categories
            </h4>
            <ChevronDown className={`w-5 h-5 text-muted-foreground group-hover:text-primary transition-all ${expandedSections.includes('categories') ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {expandedSections.includes('categories') && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 gap-3 overflow-hidden"
              >
                {categories.map((category, index) => {
                  const Icon = category.icon;
                  const isSelected = selectedCategories.includes(category.id);
                  return (
                    <motion.button
                      key={category.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => toggleCategory(category.id)}
                      className={`relative p-4 rounded-2xl border-2 transition-all ${
                        isSelected
                          ? `${category.borderColor} ${category.bgColor} shadow-lg`
                          : "border-border hover:border-primary/30 hover:bg-white"
                      }`}
                      style={!isSelected ? { backgroundColor: 'rgba(255, 255, 255, 0.5)' } : undefined}
                    >
                      {isSelected && (
                        <motion.div
                          layoutId={`category-${category.id}`}
                          className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl"
                        />
                      )}
                      <div className="relative z-10">
                        <Icon className={`w-7 h-7 mx-auto mb-2 ${isSelected ? category.color : 'text-muted-foreground'}`} />
                        <div className="text-sm font-medium">{category.name}</div>
                        <div className={`text-xs ${isSelected ? category.color : 'text-muted-foreground'}`}>
                          {category.count}+ items
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Price Range Section */}
        <div className="space-y-3">
          <button
            onClick={() => toggleSection('price')}
            className="w-full flex items-center justify-between group"
          >
            <h4 className="text-lg font-serif">Price Range</h4>
            <ChevronDown className={`w-5 h-5 text-muted-foreground group-hover:text-primary transition-all ${expandedSections.includes('price') ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {expandedSections.includes('price') && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="space-y-4 overflow-hidden"
              >
                <div className="flex items-center justify-between px-2">
                  <span className="text-xl font-semibold text-primary">₹{priceRange[0]}</span>
                  <span className="text-muted-foreground">—</span>
                  <span className="text-xl font-semibold text-primary">₹{priceRange[1]}</span>
                </div>
                <div className="relative px-2">
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className="w-full h-2 bg-gradient-to-r from-primary to-accent rounded-full appearance-none cursor-pointer slider"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Under ₹500", range: [0, 500] },
                    { label: "₹500-₹1000", range: [500, 1000] },
                    { label: "Premium", range: [1000, 2000] }
                  ].map((preset) => (
                    <motion.button
                      key={preset.label}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setPriceRange(preset.range)}
                      className="px-3 py-2 text-xs border-2 border-border rounded-xl hover:border-primary hover:bg-primary/5 transition-all font-medium"
                    >
                      {preset.label}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Customer Rating Section */}
        <div className="space-y-3">
          <button
            onClick={() => toggleSection('rating')}
            className="w-full flex items-center justify-between group"
          >
            <h4 className="text-lg font-serif">Customer Rating</h4>
            <ChevronDown className={`w-5 h-5 text-muted-foreground group-hover:text-primary transition-all ${expandedSections.includes('rating') ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {expandedSections.includes('rating') && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="space-y-2 overflow-hidden"
              >
                {[5, 4, 3].map((rating) => (
                  <motion.button
                    key={rating}
                    whileHover={{ x: 5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedRating(rating)}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${
                      selectedRating === rating
                        ? "bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 shadow-md"
                        : "bg-white border-2 border-border hover:border-amber-200 hover:bg-amber-50/30"
                    }`}
                  >
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < rating ? "fill-amber-400 text-amber-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium">& up</span>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Certifications Section */}
        <div className="space-y-3">
          <button
            onClick={() => toggleSection('certifications')}
            className="w-full flex items-center justify-between group"
          >
            <h4 className="text-lg font-serif">Certifications</h4>
            <ChevronDown className={`w-5 h-5 text-muted-foreground group-hover:text-primary transition-all ${expandedSections.includes('certifications') ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {expandedSections.includes('certifications') && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="space-y-2 overflow-hidden"
              >
                {certifications.map((cert) => {
                  const Icon = cert.icon;
                  const isSelected = selectedCertifications.includes(cert.id);
                  return (
                    <motion.label
                      key={cert.id}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-50/50 cursor-pointer transition-all group"
                    >
                      <div className={`relative flex items-center justify-center w-5 h-5 border-2 rounded-md transition-all ${
                        isSelected ? 'bg-primary border-primary' : 'border-border group-hover:border-primary'
                      }`}>
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                          >
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </motion.div>
                        )}
                      </div>
                      <Icon className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium flex-1">{cert.name}</span>
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleCertification(cert.id)}
                        className="sr-only"
                      />
                    </motion.label>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 backdrop-blur-sm z-50"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 bg-background rounded-t-3xl z-50 max-h-[90vh] shadow-2xl"
            >
              {content}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  }

  return (
    <div className="sticky top-6 backdrop-blur-xl rounded-3xl shadow-xl border overflow-hidden" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderColor: 'rgba(139, 125, 107, 0.5)' }}>
      {content}
    </div>
  );
}
