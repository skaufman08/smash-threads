import ProductCard from '../ProductCard';
import casualtiesImg from '@assets/generated_images/Casualties_band_t-shirt_design_fb471175.png';

export default function ProductCardExample() {
  const product = {
    id: '1',
    name: 'Riot Shield',
    price: 28,
    image: casualtiesImg,
    band: 'THE CASUALTIES'
  };

  return (
    <div className="p-8 max-w-sm">
      <ProductCard 
        product={product} 
        onAddToCart={(p) => console.log('Added to cart:', p)}
        rotationClass="punk-rotate-2"
      />
    </div>
  );
}
