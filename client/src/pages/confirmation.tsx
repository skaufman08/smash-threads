import { useLocation } from 'wouter';
import { useCart } from '@/contexts/CartContext';
import OrderConfirmation from '@/components/OrderConfirmation';
import Header from '@/components/Header';
import { useEffect, useState } from 'react';
import { CartItem } from '@/contexts/CartContext';

export default function ConfirmationPage() {
  const [location, setLocation] = useLocation();
  const { items, total, clearCart } = useCart();
  
  const [orderItems, setOrderItems] = useState<CartItem[]>([]);
  const [orderTotal, setOrderTotal] = useState(0);
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const order = params.get('order') || 'UNKNOWN';
    const customerEmail = params.get('email') || 'customer@example.com';
    
    setOrderNumber(order);
    setEmail(customerEmail);
    setOrderItems([...items]);
    setOrderTotal(total);
    
    if (items.length > 0) {
      clearCart();
    }
  }, []);

  if (orderItems.length === 0 && orderNumber === 'UNKNOWN') {
    return null;
  }

  return (
    <div className="min-h-screen grain-texture">
      <Header cartItemCount={0} onCartClick={() => {}} />
      <div className="container mx-auto py-12">
        <OrderConfirmation
          orderNumber={orderNumber}
          items={orderItems}
          total={orderTotal}
          customerEmail={email}
          onContinueShopping={() => setLocation('/')}
        />
      </div>
    </div>
  );
}
