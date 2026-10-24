import { createContext, useContext, useState, type ReactNode } from 'react';

interface Product {
  id: string | number;
  name: string;
  price: string;
  category: string;
  image?: string;
  description?: string;
}

interface QuickViewContextType {
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;
  selectedProduct: Product | null;
  isOpen: boolean;
}

const QuickViewContext = createContext<QuickViewContextType | undefined>(undefined);

export function QuickViewProvider({ children }: { children: ReactNode }) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openQuickView = (product: Product) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };

  const closeQuickView = () => {
    setIsOpen(false);
    setTimeout(() => setSelectedProduct(null), 300); // Clear after animation
  };

  return (
    <QuickViewContext.Provider value={{ openQuickView, closeQuickView, selectedProduct, isOpen }}>
      {children}
    </QuickViewContext.Provider>
  );
}

export function useQuickView() {
  const context = useContext(QuickViewContext);
  if (context === undefined) {
    throw new Error('useQuickView must be used within a QuickViewProvider');
  }
  return context;
}
