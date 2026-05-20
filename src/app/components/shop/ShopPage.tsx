import { useState } from "react";
import ShopHero from "./ShopHero";
import FilterSidebar from "./FilterSidebar";
import SortBar from "./SortBar";
import ProductGrid from "./ProductGrid";
import QuickViewModal from "./QuickViewModal";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  badge?: string;
  inStock: boolean;
  nutritionHighlights?: string[];
  deliveryDays?: number;
}

const sampleProducts: Product[] = [
  {
    id: 1,
    name: "Himalayan Mango Pickle",
    description: "Slow-cooked in mustard oil with Himalayan spices",
    price: 349,
    image: "https://images.unsplash.com/photo-1599639957043-f3aa5c986398?w=600&h=600&fit=crop",
    rating: 4.9,
    reviews: 234,
    badge: "Bestseller",
    inStock: true,
    nutritionHighlights: ["100% Natural", "No Preservatives", "Traditional Recipe"],
    deliveryDays: 2
  },
  {
    id: 2,
    name: "Wild Berry Jam",
    description: "Handcrafted from wild Himalayan berries",
    price: 299,
    image: "https://images.unsplash.com/photo-1620061589361-e3684bf06699?w=600&h=600&fit=crop",
    rating: 4.8,
    reviews: 189,
    badge: "Limited Harvest",
    inStock: true,
    nutritionHighlights: ["Small Batch", "No Added Sugar", "Real Fruit"],
    deliveryDays: 2
  },
  {
    id: 3,
    name: "Fresh Amla Juice",
    description: "Cold-pressed from organic Himalayan amla",
    price: 249,
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=600&fit=crop",
    rating: 5.0,
    reviews: 312,
    badge: "Fresh Today",
    inStock: true,
    nutritionHighlights: ["Vitamin C Rich", "No Water Added", "Farm Fresh"],
    deliveryDays: 1
  },
  {
    id: 4,
    name: "Mint Coriander Chutney",
    description: "Fresh herbs with a perfect spice balance",
    price: 179,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&h=600&fit=crop",
    rating: 4.9,
    reviews: 267,
    badge: "Homemade",
    inStock: true,
    nutritionHighlights: ["Fresh Herbs", "No Artificial Colors", "Authentic Taste"],
    deliveryDays: 1
  },
  {
    id: 5,
    name: "Organic Turmeric Powder",
    description: "Sun-dried and stone-ground at source",
    price: 199,
    image: "https://images.unsplash.com/photo-1615485500834-bc10199bc5ed?w=600&h=600&fit=crop",
    rating: 4.7,
    reviews: 421,
    badge: "Certified Organic",
    inStock: true,
    nutritionHighlights: ["High Curcumin", "Chemical Free", "Lab Tested"],
    deliveryDays: 2
  },
  {
    id: 6,
    name: "Honey Ginger Candies",
    description: "Handmade with wild honey and fresh ginger",
    price: 149,
    image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=600&h=600&fit=crop",
    rating: 4.6,
    reviews: 98,
    badge: "New Arrival",
    inStock: true,
    nutritionHighlights: ["Natural Sweetener", "Digestive Aid", "No Artificial Flavors"],
    deliveryDays: 2
  },
  {
    id: 7,
    name: "Mixed Fruit Chutney",
    description: "Seasonal fruits with aromatic spices",
    price: 229,
    image: "https://images.unsplash.com/photo-1589621316382-008455b857cd?w=600&h=600&fit=crop",
    rating: 4.8,
    reviews: 176,
    badge: "Bestseller",
    inStock: true,
    nutritionHighlights: ["Real Fruit Pieces", "Traditional Recipe", "Handmade"],
    deliveryDays: 2
  },
  {
    id: 8,
    name: "Wild Himalayan Honey",
    description: "Raw honey from mountain wildflowers",
    price: 449,
    originalPrice: 549,
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784fce?w=600&h=600&fit=crop",
    rating: 4.9,
    reviews: 523,
    badge: "Premium",
    inStock: true,
    nutritionHighlights: ["Unprocessed", "Single Origin", "Rich in Antioxidants"],
    deliveryDays: 2
  },
  {
    id: 9,
    name: "Garlic Pickle",
    description: "Aged garlic in aromatic mustard oil",
    price: 279,
    image: "https://images.unsplash.com/photo-1628418876641-3564530e2c8a?w=600&h=600&fit=crop",
    rating: 4.7,
    reviews: 189,
    badge: "Traditional",
    inStock: true,
    nutritionHighlights: ["Aged 3 Months", "Health Benefits", "Authentic Recipe"],
    deliveryDays: 2
  },
  {
    id: 10,
    name: "Apricot Jam",
    description: "Sun-ripened Himalayan apricots",
    price: 319,
    image: "https://images.unsplash.com/photo-1557925923-cd4648e211a0?w=600&h=600&fit=crop",
    rating: 4.8,
    reviews: 256,
    badge: "Limited Harvest",
    inStock: true,
    nutritionHighlights: ["No Pectin Added", "Natural Sweetness", "Small Batch"],
    deliveryDays: 2
  },
  {
    id: 11,
    name: "Red Chili Powder",
    description: "Handpicked and sun-dried Himalayan chilies",
    price: 159,
    image: "https://images.unsplash.com/photo-1583535437827-c9d67c7e3e6a?w=600&h=600&fit=crop",
    rating: 4.6,
    reviews: 334,
    badge: "Certified Organic",
    inStock: true,
    nutritionHighlights: ["Authentic Heat", "No Additives", "Pure & Natural"],
    deliveryDays: 2
  },
  {
    id: 12,
    name: "Lemon Pickle",
    description: "Tangy preserved lemons in traditional spices",
    price: 269,
    image: "https://images.unsplash.com/photo-1587486937467-0469fae82d63?w=600&h=600&fit=crop",
    rating: 4.7,
    reviews: 201,
    badge: "Traditional",
    inStock: true,
    nutritionHighlights: ["Citrus Rich", "Probiotic", "Handmade"],
    deliveryDays: 2
  }
];

export default function ShopPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<{ label: string; value: string }[]>([]);
  const [wishlist, setWishlist] = useState<Set<number>>(new Set());

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product);
    setIsQuickViewOpen(true);
  };

  const handleToggleWishlist = (productId: number) => {
    setWishlist(prev => {
      const newWishlist = new Set(prev);
      if (newWishlist.has(productId)) {
        newWishlist.delete(productId);
      } else {
        newWishlist.add(productId);
      }
      return newWishlist;
    });
  };

  const removeFilter = (value: string) => {
    setActiveFilters(prev => prev.filter(f => f.value !== value));
  };

  const clearAllFilters = () => {
    setActiveFilters([]);
  };

  return (
    <div className="min-h-screen bg-cream">
      <ShopHero />

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-[320px,1fr] gap-8">
          <div className="hidden lg:block">
            <FilterSidebar activeFilters={activeFilters} onFilterChange={setActiveFilters} />
          </div>

          <div>
            <SortBar
              resultCount={sampleProducts.length}
              onFilterClick={() => setIsMobileFilterOpen(true)}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
            />

            {/* Active Filter Pills */}
            {activeFilters.length > 0 && (
              <div className="flex flex-wrap items-center gap-3 mb-6 p-4 bg-snow rounded-2xl border border-border">
                <span className="text-sm font-semibold text-forest">Active Filters:</span>
                {activeFilters.map((filter) => (
                  <button
                    key={filter.value}
                    onClick={() => removeFilter(filter.value)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-amla-gold/10 text-forest border border-amla-gold/30 hover:bg-amla-gold/20 transition-all"
                  >
                    {filter.label}
                    <span className="text-lg leading-none">×</span>
                  </button>
                ))}
                <button
                  onClick={clearAllFilters}
                  className="text-sm font-medium text-earth hover:text-forest transition-colors underline"
                >
                  Clear all
                </button>
              </div>
            )}

            <ProductGrid
              products={sampleProducts}
              onQuickView={handleQuickView}
              wishlist={wishlist}
              onToggleWishlist={handleToggleWishlist}
              hasMore={false}
            />
          </div>
        </div>
      </div>

      <FilterSidebar
        isOpen={isMobileFilterOpen}
        onClose={() => setIsMobileFilterOpen(false)}
        isMobile={true}
        activeFilters={activeFilters}
        onFilterChange={setActiveFilters}
      />

      <QuickViewModal
        product={selectedProduct}
        isOpen={isQuickViewOpen}
        onClose={() => {
          setIsQuickViewOpen(false);
          setSelectedProduct(null);
        }}
      />
    </div>
  );
}
