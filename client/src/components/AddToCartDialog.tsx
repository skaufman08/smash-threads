import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart } from 'lucide-react';
import { Product } from '@/contexts/CartContext';

interface AddToCartDialogProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, color: string) => void;
}

export default function AddToCartDialog({
  product,
  open,
  onClose,
  onAddToCart,
}: AddToCartDialogProps) {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  if (!product) return null;

  const handleAdd = () => {
    if (selectedSize && selectedColor) {
      onAddToCart(product, selectedSize, selectedColor);
      setSelectedSize('');
      setSelectedColor('');
      onClose();
    }
  };

  const handleClose = () => {
    setSelectedSize('');
    setSelectedColor('');
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md border-[4px] border-foreground xerox-grain">
        <DialogHeader>
          <DialogTitle className="text-2xl font-black uppercase tracking-tight punk-rotate-1" data-testid="text-dialog-title">
            SELECT OPTIONS
          </DialogTitle>
          <DialogDescription className="sr-only">
            Choose size and color for {product.name}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex gap-3 border-[2px] border-foreground p-3">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-20 object-cover border-[2px] border-foreground contrast-125"
              data-testid="img-dialog-product"
            />
            <div className="flex-1">
              <p className="text-[9px] font-black uppercase tracking-wider" data-testid="text-dialog-band">
                {product.band}
              </p>
              <h3 className="font-black uppercase text-lg leading-tight" data-testid="text-dialog-name">
                {product.name}
              </h3>
              <p className="text-sm font-black mt-1" data-testid="text-dialog-price">
                ${product.price}
              </p>
            </div>
          </div>

          <div className="border-[2px] border-foreground p-3 space-y-2">
            <p className="text-xs font-black uppercase tracking-wider">Description:</p>
            <p className="text-sm font-mono leading-relaxed" data-testid="text-dialog-description">
              {product.description}
            </p>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-wider">
              SIZE:
            </label>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <Badge
                  key={size}
                  variant={selectedSize === size ? 'default' : 'outline'}
                  className={`cursor-pointer font-black px-4 py-2 text-sm border-[2px] ${
                    selectedSize === size ? '' : 'hover-elevate'
                  }`}
                  onClick={() => setSelectedSize(size)}
                  data-testid={`button-size-${size.toLowerCase()}`}
                >
                  {size}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-wider">
              COLOR:
            </label>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <Badge
                  key={color}
                  variant={selectedColor === color ? 'default' : 'outline'}
                  className={`cursor-pointer font-black px-4 py-2 text-sm border-[2px] ${
                    selectedColor === color ? '' : 'hover-elevate'
                  }`}
                  onClick={() => setSelectedColor(color)}
                  data-testid={`button-color-${color.toLowerCase()}`}
                >
                  {color}
                </Badge>
              ))}
            </div>
          </div>

          <Button
            onClick={handleAdd}
            disabled={!selectedSize || !selectedColor}
            className="w-full font-black uppercase text-sm py-6 border-[3px]"
            size="lg"
            data-testid="button-confirm-add"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            ADD TO CART
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
