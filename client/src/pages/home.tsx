import { useState } from 'react';
import { useLocation } from 'wouter';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import CartDrawer from '@/components/CartDrawer';
import AddToCartDialog from '@/components/AddToCartDialog';
import { useCart, Product } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

const PRODUCTS: Product[] = [
  { 
    id: '1', 
    name: 'Saltwater', 
    price: 30, 
    image: 'https://images.unsplash.com/photo-1695088647626-1d7c1d20f9c4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHB1bmslMjByb2NrJTIwdHNoaXJ0fGVufDB8fDB8fHww', 
    band: 'JOY DIVISION',
    description: 'Classic street punk design featuring Joy Division iconic logo. Raw energy captured in fabric form.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Red']
  },
  { 
    id: '2', 
    name: 'Hybrid Moments', 
    price: 25, 
    image: 'https://images.unsplash.com/photo-1645093875147-4678b3671e3c?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    band: 'MISFITS',
    description: 'Raw underground sound captured in cotton. For those who live the rebellion every day.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Grey']
  },
  { 
    id: '3', 
    name: 'Rebel Soul', 
    price: 31, 
    image: 'https://images.unsplash.com/photo-1530286910461-6a1960d1e83a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    band: 'CHAOS THEORY',
    description: 'Street punk attitude meets hardcore edge. Wear your rebellion loud and proud.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Charcoal']
  },
  { 
    id: '4', 
    name: 'Noise Maker', 
    price: 28, 
    image: 'https://images.unsplash.com/photo-1627250259974-fb70f4e1a176?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    band: 'STATIC RAGE',
    description: 'Distortion and defiance woven into every thread. Maximum volume, maximum attitude.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Red']
  },
  { 
    id: '5', 
    name: 'Broken Dreams', 
    price: 30, 
    image: 'https://images.unsplash.com/photo-1546998590-6a6195049fa7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    band: 'VOID WALKERS',
    description: 'Dark melodies and shattered expectations. Street punk meets post-hardcore intensity.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Navy']
  },
  { 
    id: '6', 
    name: 'Raw Power', 
    price: 29, 
    image: 'https://images.pexels.com/photos/16097217/pexels-photo-16097217.jpeg', 
    band: 'STREET FURY',
    description: 'Unfiltered aggression and pure punk energy. No compromise, no apologies.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Grey']
  },
];

export default function HomePage() {
  const [cartOpen, setCartOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { items, addToCart, updateQuantity, removeFromCart, subtotal, tax, total, itemCount } = useCart();
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const handleOpenDialog = (product: Product) => {
    setSelectedProduct(product);
    setDialogOpen(true);
  };

  const handleAddToCart = (product: Product, size: string, color: string) => {
    addToCart(product, size, color);
    toast({
      title: 'Added to Cart!',
      description: `${product.name} (${size}, ${color}) added to cart.`,
      duration: 2000,
    });
  };

  const handleCheckout = () => {
    setCartOpen(false);
    setLocation('/checkout');
  };

  return (
    <div className="min-h-screen grain-texture">
      <Header cartItemCount={itemCount} onCartClick={() => setCartOpen(true)} />
      <Hero />
      <div id="products">
        <ProductGrid products={PRODUCTS} onAddToCart={handleOpenDialog} />
      </div>
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={items}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        subtotal={subtotal}
        tax={tax}
        total={total}
        onCheckout={handleCheckout}
      />
      <AddToCartDialog
        product={selectedProduct}
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
