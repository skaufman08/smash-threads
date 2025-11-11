import ProductCard from './ProductCard';
import { Product } from '@/contexts/CartContext';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const rotations = ['punk-rotate-1', 'punk-rotate-2', 'punk-rotate-3', 'punk-rotate-4', 'punk-rotate-5', 'punk-rotate-6', 'punk-rotate-2', 'punk-rotate-1'];

export default function ProductGrid({ products, onAddToCart }: ProductGridProps) {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10 border-[4px] border-foreground p-6 punk-rotate-1 xerox-grain">
        <h2 className="text-4xl md:text-6xl font-black uppercase leading-none tracking-tighter punk-rotate-2" data-testid="text-catalog-title">
          THE<br/>COLLECTION
        </h2>
        <p className="text-xs md:text-sm font-black uppercase tracking-wide mt-2 border-l-[3px] border-foreground pl-3 punk-rotate-4">
          LEGENDARY BANDS /// RAW DESIGNS /// PURE REBELLION
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
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
