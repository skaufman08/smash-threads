import { useState } from 'react';
import { useLocation } from 'wouter';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import CartDrawer from '@/components/CartDrawer';
import { useCart } from '@/contexts/CartContext';
import casualtiesImg from '@assets/generated_images/Casualties_band_t-shirt_design_fb471175.png';
import deadKennedsImg from '@assets/generated_images/Dead_Kennedys_shirt_design_ac6edf07.png';
import rancidImg from '@assets/generated_images/Rancid_band_t-shirt_bbfe9285.png';
import misfitsImg from '@assets/generated_images/Misfits_skull_t-shirt_d9340758.png';
import blackFlagImg from '@assets/generated_images/Black_Flag_logo_shirt_678bf405.png';
import ramonesImg from '@assets/generated_images/Ramones_seal_t-shirt_84a94938.png';
import sexPistolsImg from '@assets/generated_images/Sex_Pistols_anarchy_shirt_4eb28827.png';
import clashImg from '@assets/generated_images/The_Clash_graffiti_shirt_1cabb689.png';
import { useToast } from '@/hooks/use-toast';

const PRODUCTS = [
  { id: '1', name: 'Riot Shield', price: 28, image: casualtiesImg, band: 'THE CASUALTIES' },
  { id: '2', name: 'Anarchy Now', price: 30, image: deadKennedsImg, band: 'DEAD KENNEDYS' },
  { id: '3', name: 'Street Punk', price: 29, image: rancidImg, band: 'RANCID' },
  { id: '4', name: 'Dead Skull', price: 32, image: misfitsImg, band: 'MISFITS' },
  { id: '5', name: 'Four Bars', price: 27, image: blackFlagImg, band: 'BLACK FLAG' },
  { id: '6', name: 'Presidential Seal', price: 31, image: ramonesImg, band: 'RAMONES' },
  { id: '7', name: 'Anarchy Symbol', price: 29, image: sexPistolsImg, band: 'SEX PISTOLS' },
  { id: '8', name: 'Street Fighter', price: 30, image: clashImg, band: 'THE CLASH' },
];

export default function HomePage() {
  const [cartOpen, setCartOpen] = useState(false);
  const { items, addToCart, updateQuantity, removeFromCart, total, itemCount } = useCart();
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const handleAddToCart = (product: typeof PRODUCTS[0]) => {
    addToCart(product);
    toast({
      title: 'Added to Cart!',
      description: `${product.name} has been added to your cart.`,
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
        <ProductGrid products={PRODUCTS} onAddToCart={handleAddToCart} />
      </div>
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={items}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        total={total}
        onCheckout={handleCheckout}
      />
    </div>
  );
}
