import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useToast } from './ToastContext';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  slug?: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: any, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateCartQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('cartItems');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      } catch (e) {
        // ignore error and fallback to default seed
      }
    }
    // Seed initial products for the user (as originally hardcoded)
    return [
      { id: 1, name: 'Himalayan Mango Pickle', price: 349, quantity: 2, image: 'https://images.unsplash.com/photo-1562346816-9d0bdd559ec1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', slug: 'himalayan-mango-pickle' },
      { id: 2, name: 'Organic Honey', price: 499, quantity: 1, image: 'https://images.unsplash.com/photo-1773957949171-8ccca4580bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', slug: 'organic-honey' },
      { id: 3, name: 'Mixed Fruit Murabba', price: 299, quantity: 1, image: 'https://images.unsplash.com/photo-1667653052149-f4cdc800e9f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', slug: 'mixed-fruit-murabba' },
    ];
  });

  const { showToast } = useToast();

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: any, quantity: number = 1) => {
    setCartItems((prev) => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        showToast(`Updated quantity in cart`, "success");
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      showToast(`Added to cart successfully!`, "success");
      return [...prev, {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity,
        image: product.image,
        slug: product.slug
      }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prev) => {
      if (prev.some(item => item.id === productId)) {
        showToast("Removed from cart", "success");
        return prev.filter(item => item.id !== productId);
      }
      return prev;
    });
  };

  const updateCartQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) return;
    setCartItems((prev) =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateCartQuantity, clearCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
