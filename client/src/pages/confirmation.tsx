import { useLocation } from 'wouter';
import { useCart } from '@/contexts/CartContext';
import OrderConfirmation from '@/components/OrderConfirmation';
import Header from '@/components/Header';
import { useEffect } from 'react';

export default function ConfirmationPage() {
  const [location, setLocation] = useLocation();
  const { items, total, clearCart } = useCart();

  const params = new URLSearchParams(location.split('?')[1]);
  const orderNumber = params.get('order') || 'UNKNOWN';
  const email = params.get('email') || 'customer@example.com';

  const orderItems = [...items];

  useEffect(() => {
    if (orderItems.length > 0) {
      clearCart();
    }
  }, []);

  if (orderItems.length === 0 && !orderNumber) {
    setLocation('/');
    return null;
  }

  return (
    <div className="min-h-screen grain-texture">
      <Header cartItemCount={0} onCartClick={() => {}} />
      <div className="container mx-auto py-12">
        <OrderConfirmation
          orderNumber={orderNumber}
          items={orderItems}
          total={total}
          customerEmail={email}
          onContinueShopping={() => setLocation('/')}
        />
      </div>
    </div>
  );
}
