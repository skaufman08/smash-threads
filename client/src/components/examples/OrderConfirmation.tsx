import OrderConfirmation from '../OrderConfirmation';
import casualtiesImg from '@assets/generated_images/Casualties_band_t-shirt_design_fb471175.png';
import misfitsImg from '@assets/generated_images/Misfits_skull_t-shirt_d9340758.png';

export default function OrderConfirmationExample() {
  const items = [
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
  ];

  return (
    <OrderConfirmation
      orderNumber="PUNK2025-001"
      items={items}
      total={88}
      customerEmail="rebel@punkrock.com"
      onContinueShopping={() => console.log('Continue shopping')}
    />
  );
}
