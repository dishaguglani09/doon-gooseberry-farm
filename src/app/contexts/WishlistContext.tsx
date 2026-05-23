import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useToast } from './ToastContext';

export interface Product {
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
  category?: string;
  slug?: string;
}

interface WishlistContextType {
  wishlistItems: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: number) => void;
  toggleWishlist: (product: Product) => boolean;
  isInWishlist: (productId: number) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlistItems, setWishlistItems] = useState<Product[]>(() => {
    const saved = localStorage.getItem('wishlistItems');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return Array.isArray(parsed) ? parsed : [];
      } catch (e) {
        return [];
      }
    }
    return [];
  });

  const { showToast } = useToast();

  useEffect(() => {
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToWishlist = (product: Product) => {
    setWishlistItems((prev) => {
      if (!prev.some(item => item.id === product.id)) {
        showToast("Added to Wishlist", "success");
        return [...prev, product];
      }
      return prev;
    });
  };

  const removeFromWishlist = (productId: number) => {
    setWishlistItems((prev) => {
      if (prev.some(item => item.id === productId)) {
        showToast("Removed from Wishlist", "success");
        return prev.filter((item) => item.id !== productId);
      }
      return prev;
    });
  };

  const toggleWishlist = (product: Product) => {
    let added = false;
    setWishlistItems((prev) => {
      if (prev.some((item) => item.id === product.id)) {
        showToast("Removed from Wishlist", "success");
        return prev.filter((item) => item.id !== product.id);
      } else {
        added = true;
        showToast("Added to Wishlist", "success");
        return [...prev, product];
      }
    });
    // For toggleWishlist return value, we don't really use the return value because React state is async
    return true; 
  };

  const isInWishlist = (productId: number) => wishlistItems.some(item => item.id === productId);

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist, toggleWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}
