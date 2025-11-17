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

  const { subtotal, tax } = useCart();

  return (
    <div className="min-h-screen grain-texture">
      <Header cartItemCount={items.length} onCartClick={() => setCartOpen(true)} />
      <div className="container mx-auto py-8 px-4">
        <Button
          variant="ghost"
          onClick={() => setLocation('/')}
          className="mb-6 font-black uppercase border-[2px]"
          data-testid="button-back"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Shop
        </Button>
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <CheckoutForm total={total} onSubmit={handleSubmit} />
          </div>
          <div>
            <div className="border-[4px] border-foreground p-5 punk-rotate-1 xerox-grain sticky top-24">
              <h3 className="text-2xl md:text-3xl font-black uppercase leading-none tracking-tighter border-b-[3px] border-foreground pb-3 mb-4">
                ORDER<br/>SUMMARY
              </h3>
              <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                    className="flex gap-3 border-[2px] border-foreground p-2"
                    data-testid={`summary-item-${item.id}`}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 object-cover border-[2px] border-foreground contrast-125"
                    />
                    <div className="flex-1">
                      <p className="text-[9px] font-black uppercase">{item.band}</p>
                      <h4 className="font-black uppercase text-xs leading-tight">{item.name}</h4>
                      <div className="flex gap-1 mt-0.5">
                        <span className="text-[7px] font-black border border-foreground px-1">{item.selectedSize}</span>
                        <span className="text-[7px] font-black border border-foreground px-1">{item.selectedColor}</span>
                      </div>
                      <p className="text-xs font-black mt-0.5">
                        {item.quantity} × ${item.price}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-black text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-2 mt-4 pt-3 border-t-[3px] border-foreground">
                <div className="flex justify-between text-sm font-black">
                  <span>SUBTOTAL:</span>
                  <span data-testid="text-summary-subtotal">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-black">
                  <span>TAX (8%):</span>
                  <span data-testid="text-summary-tax">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xl font-black pt-2 border-t-[2px] border-foreground">
                  <span>TOTAL:</span>
                  <span data-testid="text-summary-total">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
