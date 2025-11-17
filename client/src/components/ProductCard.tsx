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
      className={`overflow-visible border-[3px] border-foreground relative ${rotationClass} transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl xerox-grain rounded-lg`}
      style={{
        filter: 'drop-shadow(4px 4px 0px rgba(0, 0, 0, 0.3))',
      }}
      data-testid={`card-product-${product.id}`}
    >
      <div className="absolute -top-3 -right-3 z-10">
        <Badge 
          variant="destructive" 
          className="font-black text-sm px-3 py-1.5 punk-rotate-3 border-[3px] border-foreground"
          data-testid={`badge-price-${product.id}`}
        >
          ${product.price}
        </Badge>
      </div>
      
      <div className="aspect-square overflow-hidden bg-card border-b-[3px] border-foreground rounded-t-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover contrast-125 grayscale-[30%] transition-transform duration-300 hover:scale-110 hover:-translate-y-2"
          data-testid={`img-product-${product.id}`}
        />
      </div>
      
      <div className="p-4 space-y-4">
        <div className="space-y-2">
          <p className="text-[10px] font-black uppercase tracking-widest" data-testid={`text-band-${product.id}`}>
            {product.band}
          </p>
          <h3 className="font-black text-xl uppercase leading-tight" data-testid={`text-name-${product.id}`}>
            {product.name}
          </h3>
        </div>
        
        <Button
          onClick={() => onAddToCart(product)}
          className="w-full font-black uppercase tracking-wider text-xs border-[3px] bg-red-600 hover:bg-red-700 text-black border-black rounded-none"
          size="default"
          data-testid={`button-add-cart-${product.id}`}
        >
          <ShoppingCart className="w-4 h-4 mr-1.5" />
          ADD TO CART
        </Button>
      </div>
    </Card>
  );
}
