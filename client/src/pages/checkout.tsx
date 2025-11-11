import { useLocation } from 'wouter';
import { useCart } from '@/contexts/CartContext';
import CheckoutForm from '@/components/CheckoutForm';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';

export default function CheckoutPage() {
  const [, setLocation] = useLocation();
  const { total, items } = useCart();
  const [cartOpen, setCartOpen] = useState(false);

  if (items.length === 0) {
    return (
      <div className="min-h-screen grain-texture">
        <Header cartItemCount={0} onCartClick={() => setCartOpen(false)} />
        <div className="container mx-auto px-4 py-24 text-center">
          <h2 className="text-3xl font-black uppercase mb-4">Your cart is empty</h2>
          <Button onClick={() => setLocation('/')} data-testid="button-back-home">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Shop
          </Button>
        </div>
      </div>
    );
  }

  const handleSubmit = (data: any) => {
    const orderNumber = `PUNK${Date.now().toString().slice(-6)}`;
    setLocation(`/confirmation?order=${orderNumber}&email=${encodeURIComponent(data.email)}`);
  };

  return (
    <div className="min-h-screen grain-texture">
      <Header cartItemCount={items.length} onCartClick={() => setCartOpen(true)} />
      <div className="container mx-auto py-8">
        <Button
          variant="ghost"
          onClick={() => setLocation('/')}
          className="mb-6 font-bold uppercase"
          data-testid="button-back"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Shop
        </Button>
        <CheckoutForm total={total} onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
