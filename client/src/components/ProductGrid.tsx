import ProductCard from './ProductCard';
import { Product } from '@/contexts/CartContext';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const rotations = ['punk-rotate-1', 'punk-rotate-2', 'punk-rotate-3', 'punk-rotate-4', '', 'punk-rotate-1'];

export default function ProductGrid({ products, onAddToCart }: ProductGridProps) {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h2 className="text-5xl font-black uppercase mb-4 punk-rotate-1" data-testid="text-catalog-title">
          The Collection
        </h2>
        <p className="text-lg font-bold uppercase tracking-wide text-muted-foreground">
          Legendary Bands. Raw Designs. Pure Rebellion.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            rotationClass={rotations[index % rotations.length]}
          />
        ))}
      </div>
    </div>
  );
}
