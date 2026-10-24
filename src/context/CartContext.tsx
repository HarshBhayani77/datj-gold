import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

export interface CartItem {
  id: number | string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  variant: {
    color: string;
    material: string;
    size: string;
  };
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeFromCart: (idOrIndex: number | string, variant?: CartItem['variant']) => void;
  updateQuantity: (idOrIndex: number | string, variantOrDelta?: number | CartItem['variant'], newQty?: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const savedCart = localStorage.getItem('datj_cart') || localStorage.getItem('ruprays_cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (e) {
      console.warn('Failed to parse cart', e);
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('datj_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.warn('Failed to save cart', e);
    }
  }, [cartItems]);

  const addToCart = (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => {
    setCartItems(prev => {
      const existingItemIndex = prev.findIndex(i => 
        i.id === item.id && 
        i.variant.color === item.variant.color && 
        i.variant.material === item.variant.material && 
        i.variant.size === item.variant.size
      );

      if (existingItemIndex > -1) {
        const newItems = [...prev];
        newItems[existingItemIndex].quantity += (item.quantity || 1);
        return newItems;
      }
      return [...prev, { ...item, quantity: item.quantity || 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (idOrIndex: number | string, variant?: CartItem['variant']) => {
    if (typeof idOrIndex === 'number' && !variant) {
      setCartItems(prev => prev.filter((_, i) => i !== idOrIndex));
    } else {
      setCartItems(prev => prev.filter(i => !(i.id === idOrIndex && (!variant || (
        i.variant.color === variant.color &&
        i.variant.material === variant.material &&
        i.variant.size === variant.size
      )))));
    }
  };

  const updateQuantity = (
    idOrIndex: number | string,
    variantOrDelta?: number | CartItem['variant'],
    newQty?: number
  ) => {
    setCartItems(prev => {
      if (typeof idOrIndex === 'number' && typeof variantOrDelta === 'number' && newQty === undefined) {
        const index = idOrIndex;
        const delta = variantOrDelta;
        const item = prev[index];
        if (!item) return prev;
        const updated = item.quantity + delta;
        if (updated <= 0) return prev.filter((_, i) => i !== index);
        const next = [...prev];
        next[index] = { ...item, quantity: updated };
        return next;
      }
      const id = idOrIndex;
      const variant = typeof variantOrDelta === 'object' ? variantOrDelta : undefined;
      const quantity = newQty ?? 1;
      if (quantity <= 0) {
        return prev.filter(i => !(i.id === id && (!variant || (i.variant.color === variant.color && i.variant.material === variant.material && i.variant.size === variant.size))));
      }
      return prev.map(item => {
        if (item.id === id && (!variant || (
          item.variant.color === variant.color &&
          item.variant.material === variant.material &&
          item.variant.size === variant.size
        ))) {
          return { ...item, quantity };
        }
        return item;
      });
    });
  };

  const clearCart = () => setCartItems([]);

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      cartCount,
      cartTotal,
      isCartOpen,
      setIsCartOpen
    }}>
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
