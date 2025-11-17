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
import { ShoppingCart, X } from 'lucide-react';
import { Product } from '@/contexts/CartContext';

interface AddToCartDialogProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, color: string) => void;
}

const COLOR_IMAGE_VARIANTS: Record<string, Record<string, string>> = {
  'Black': {
    default: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&auto=format&fit=crop',
  },
  'White': {
    default: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop',
  },
  'Red': {
    default: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop',
  },
  'Grey': {
    default: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=800&auto=format&fit=crop',
  },
  'Gray': {
    default: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=800&auto=format&fit=crop',
  },
  'Navy': {
    default: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800&auto=format&fit=crop',
  },
  'Charcoal': {
    default: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&auto=format&fit=crop',
  },
};

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

  const getCurrentImage = () => {
    if (selectedColor && COLOR_IMAGE_VARIANTS[selectedColor]) {
      return COLOR_IMAGE_VARIANTS[selectedColor].default;
    }
    return product.image;
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-full w-full h-screen m-0 p-0 border-0 rounded-none overflow-y-auto">
        <div className="min-h-screen bg-background border-[5px] border-foreground xerox-grain">
          <div className="sticky top-0 z-50 bg-background border-b-[5px] border-foreground p-4">
            <DialogHeader className="flex flex-row items-center justify-between">
              <DialogTitle className="text-3xl md:text-5xl font-black uppercase tracking-tight punk-rotate-1" data-testid="text-dialog-title">
                SELECT OPTIONS
              </DialogTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleClose}
                className="border-[3px] border-foreground"
                data-testid="button-close-dialog"
              >
                <X className="h-6 w-6" />
              </Button>
              <DialogDescription className="sr-only">
                Choose size and color for {product.name}
              </DialogDescription>
            </DialogHeader>
          </div>

          <div className="container mx-auto px-4 py-8 max-w-4xl space-y-6">
            <div className="border-[4px] border-foreground p-4 bg-card">
              <img
                src={getCurrentImage()}
                alt={product.name}
                className="w-full max-w-2xl mx-auto h-auto object-cover border-[3px] border-foreground contrast-125 transition-all duration-300"
                data-testid="img-dialog-product"
              />
            </div>

            <div className="border-[4px] border-foreground p-6 bg-card space-y-3">
              <p className="text-sm font-black uppercase tracking-wider text-muted-foreground" data-testid="text-dialog-band">
                {product.band}
              </p>
              <h3 className="font-black uppercase text-3xl md:text-4xl leading-tight" data-testid="text-dialog-name">
                {product.name}
              </h3>
              <p className="text-2xl font-black" data-testid="text-dialog-price">
                ${product.price}
              </p>
            </div>

            <div className="border-[4px] border-foreground p-6 bg-card space-y-3">
              <p className="text-sm font-black uppercase tracking-wider">Description:</p>
              <p className="text-base font-mono leading-relaxed" data-testid="text-dialog-description">
                {product.description}
              </p>
            </div>

            <div className="border-[4px] border-foreground p-6 bg-card space-y-4">
              <label className="text-lg font-black uppercase tracking-wider block">
                SIZE:
              </label>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <Badge
                    key={size}
                    variant={selectedSize === size ? 'default' : 'outline'}
                    className={`cursor-pointer font-black px-6 py-3 text-lg border-[3px] ${
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

            <div className="border-[4px] border-foreground p-6 bg-card space-y-4">
              <label className="text-lg font-black uppercase tracking-wider block">
                COLOR:
              </label>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <Badge
                    key={color}
                    variant={selectedColor === color ? 'default' : 'outline'}
                    className={`cursor-pointer font-black px-6 py-3 text-lg border-[3px] ${
                      selectedColor === color ? '' : 'hover-elevate'
                    }`}
                    onClick={() => setSelectedColor(color)}
                    data-testid={`button-color-${color.toLowerCase()}`}
                  >
                    {color}
                  </Badge>
                ))}
              </div>
              {selectedColor && (
                <p className="text-sm font-black uppercase tracking-wide text-muted-foreground mt-2">
                  Preview showing {selectedColor} variant
                </p>
              )}
            </div>

            <Button
              onClick={handleAdd}
              disabled={!selectedSize || !selectedColor}
              className="w-full font-black uppercase text-lg py-8 border-[4px] bg-red-600 hover:bg-red-700 text-black border-black rounded-none"
              size="lg"
              data-testid="button-confirm-add"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              ADD TO CART
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
