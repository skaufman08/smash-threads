import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart } from 'lucide-react';
import { Product } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  rotationClass?: string;
}

export default function ProductCard({ product, onAddToCart, rotationClass = '' }: ProductCardProps) {
  return (
    <Card 
      className={`overflow-visible border-2 border-foreground relative ${rotationClass} hover-elevate active-elevate-2 transition-transform`}
      data-testid={`card-product-${product.id}`}
    >
      <div className="absolute -top-2 -right-2 z-10">
        <Badge 
          variant="destructive" 
          className="font-bold text-xs px-2 py-1 punk-rotate-1 stamp-effect"
          data-testid={`badge-price-${product.id}`}
        >
          ${product.price}
        </Badge>
      </div>
      
      <div className="aspect-square overflow-hidden bg-card border-b-2 border-foreground">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          data-testid={`img-product-${product.id}`}
        />
      </div>
      
      <div className="p-4 space-y-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground" data-testid={`text-band-${product.id}`}>
            {product.band}
          </p>
          <h3 className="font-bold text-lg uppercase mt-1" data-testid={`text-name-${product.id}`}>
            {product.name}
          </h3>
        </div>
        
        <Button
          onClick={() => onAddToCart(product)}
          className="w-full font-bold uppercase tracking-wide"
          size="default"
          data-testid={`button-add-cart-${product.id}`}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </Card>
  );
}
