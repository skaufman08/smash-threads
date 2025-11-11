import CartDrawer from '../CartDrawer';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import casualtiesImg from '@assets/generated_images/Casualties_band_t-shirt_design_fb471175.png';
import misfitsImg from '@assets/generated_images/Misfits_skull_t-shirt_d9340758.png';

export default function CartDrawerExample() {
  const [open, setOpen] = useState(true);
  const [items, setItems] = useState([
    {
      id: '1',
      name: 'Riot Shield',
      price: 28,
      image: casualtiesImg,
      band: 'THE CASUALTIES',
      quantity: 2
    },
    {
      id: '4',
      name: 'Dead Skull',
      price: 32,
      image: misfitsImg,
      band: 'MISFITS',
      quantity: 1
    }
  ]);

  const updateQuantity = (id: string, quantity: number) => {
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity } : item
    ).filter(item => item.quantity > 0));
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Cart</Button>
      <CartDrawer
        open={open}
        onClose={() => setOpen(false)}
        items={items}
        onUpdateQuantity={updateQuantity}
        onRemove={removeItem}
        total={total}
        onCheckout={() => console.log('Checkout clicked')}
      />
    </div>
  );
}
