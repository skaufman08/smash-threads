import { useState } from 'react';
import { useLocation } from 'wouter';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import CartDrawer from '@/components/CartDrawer';
import AddToCartDialog from '@/components/AddToCartDialog';
import { useCart, Product } from '@/contexts/CartContext';
import deadKennedsImg from '@assets/generated_images/Dead_Kennedys_shirt_design_ac6edf07.png';
import rancidImg from '@assets/generated_images/Rancid_band_t-shirt_bbfe9285.png';
import misfitsImg from '@assets/generated_images/Misfits_skull_t-shirt_d9340758.png';
import blackFlagImg from '@assets/generated_images/Black_Flag_logo_shirt_678bf405.png';
import ramonesImg from '@assets/generated_images/Ramones_seal_t-shirt_84a94938.png';
import sexPistolsImg from '@assets/generated_images/Sex_Pistols_anarchy_shirt_4eb28827.png';
import clashImg from '@assets/generated_images/The_Clash_graffiti_shirt_1cabb689.png';
import { useToast } from '@/hooks/use-toast';

const PRODUCTS: Product[] = [
  { 
    id: '1', 
    name: 'Riot Shield', 
    price: 28, 
    image: 'https://images.unsplash.com/photo-1538751252895-baf363358ff7?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    band: 'THE CASUALTIES',
    description: 'Classic street punk design featuring The Casualties iconic logo. Raw energy captured in fabric form.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Red']
  },
  { 
    id: '2', 
    name: 'Anarchy Now', 
    price: 30, 
    image: deadKennedsImg, 
    band: 'DEAD KENNEDYS',
    description: 'Political punk at its finest. Dead Kennedys anti-establishment message blazed across 100% cotton.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Charcoal']
  },
  { 
    id: '3', 
    name: 'Street Punk', 
    price: 29, 
    image: rancidImg, 
    band: 'RANCID',
    description: 'East Bay punk legends. Rancid artwork that screams rebellion from every thread.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Navy']
  },
  { 
    id: '4', 
    name: 'Dead Skull', 
    price: 32, 
    image: misfitsImg, 
    band: 'MISFITS',
    description: 'Horror punk royalty. The legendary Misfits Crimson Ghost skull - a punk rock essential.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Red']
  },
  { 
    id: '5', 
    name: 'Four Bars', 
    price: 27, 
    image: blackFlagImg, 
    band: 'BLACK FLAG',
    description: 'The four bars that changed everything. Hardcore punk history stitched into premium fabric.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Grey']
  },
  { 
    id: '6', 
    name: 'Presidential Seal', 
    price: 31, 
    image: ramonesImg, 
    band: 'RAMONES',
    description: 'Hey Ho Lets Go! The iconic Ramones presidential seal - New York punk heritage.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Red']
  },
  { 
    id: '7', 
    name: 'Anarchy Symbol', 
    price: 29, 
    image: sexPistolsImg, 
    band: 'SEX PISTOLS',
    description: 'God Save The Queen. Sex Pistols anarchy symbol - the shirt that sparked a revolution.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Pink']
  },
  { 
    id: '8', 
    name: 'Street Fighter', 
    price: 30, 
    image: clashImg, 
    band: 'THE CLASH',
    description: 'The only band that matters. Combat rock attitude meets street punk style.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Army Green']
  },
  { 
    id: '9', 
    name: 'Underground', 
    price: 29, 
    image: 'https://images.unsplash.com/photo-1645093875147-4678b3671e3c?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    band: 'RIOT CREW',
    description: 'Raw underground sound captured in cotton. For those who live the rebellion every day.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Grey']
  },
  { 
    id: '10', 
    name: 'Rebel Soul', 
    price: 31, 
    image: 'https://images.unsplash.com/photo-1530286910461-6a1960d1e83a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    band: 'CHAOS THEORY',
    description: 'Street punk attitude meets hardcore edge. Wear your rebellion loud and proud.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Charcoal']
  },
  { 
    id: '11', 
    name: 'Noise Maker', 
    price: 28, 
    image: 'https://images.unsplash.com/photo-1627250259974-fb70f4e1a176?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    band: 'STATIC RAGE',
    description: 'Distortion and defiance woven into every thread. Maximum volume, maximum attitude.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Red']
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
