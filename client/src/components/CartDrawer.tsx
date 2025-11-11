import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { CartItem } from '@/contexts/CartContext';

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
  total: number;
  onCheckout: () => void;
}

export default function CartDrawer({
  open,
  onClose,
  items,
  onUpdateQuantity,
  onRemove,
  total,
  onCheckout,
}: CartDrawerProps) {
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg border-l-4 border-foreground">
        <SheetHeader className="border-b-2 border-foreground pb-4">
          <SheetTitle className="text-2xl font-black uppercase punk-rotate-1" data-testid="text-cart-title">
            Your Cart
          </SheetTitle>
          <SheetDescription className="sr-only">
            Shopping cart with {items.length} items
          </SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] space-y-4">
            <p className="text-lg font-bold text-muted-foreground uppercase" data-testid="text-empty-cart">
              Cart is Empty
            </p>
            <Button onClick={onClose} data-testid="button-continue-shopping">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <div className="flex flex-col h-[calc(100vh-200px)]">
            <ScrollArea className="flex-1 pr-4">
              <div className="space-y-4 py-6">
                {items.map((item, index) => (
                  <div
                    key={item.id}
                    className="border-2 border-foreground p-4 space-y-3 relative overflow-visible"
                    data-testid={`cart-item-${item.id}`}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => onRemove(item.id)}
                      className="absolute -top-2 -right-2 h-8 w-8 bg-destructive text-destructive-foreground hover:bg-destructive border-2 border-foreground punk-rotate-3"
                      data-testid={`button-remove-${item.id}`}
                    >
                      <X className="h-4 w-4" />
                    </Button>

                    <div className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover border-2 border-foreground"
                        data-testid={`img-cart-item-${item.id}`}
                      />
                      <div className="flex-1">
                        <p className="text-xs font-bold uppercase text-muted-foreground" data-testid={`text-cart-band-${item.id}`}>
                          {item.band}
                        </p>
                        <h4 className="font-bold uppercase" data-testid={`text-cart-name-${item.id}`}>
                          {item.name}
                        </h4>
                        <p className="text-sm font-bold mt-1" data-testid={`text-cart-price-${item.id}`}>
                          ${item.price} each
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="secondary"
                          size="icon"
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          data-testid={`button-decrease-${item.id}`}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <Badge variant="outline" className="px-4 py-2 font-bold text-base" data-testid={`text-quantity-${item.id}`}>
                          {item.quantity}
                        </Badge>
                        <Button
                          variant="secondary"
                          size="icon"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          data-testid={`button-increase-${item.id}`}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="font-black text-lg" data-testid={`text-subtotal-${item.id}`}>
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="border-t-4 border-foreground pt-4 space-y-4 mt-4">
              <div className="flex justify-between items-center">
                <span className="text-xl font-black uppercase">Total:</span>
                <span className="text-2xl font-black text-primary" data-testid="text-cart-total">
                  ${total.toFixed(2)}
                </span>
              </div>
              <Button
                onClick={onCheckout}
                className="w-full font-black text-lg uppercase py-6"
                size="lg"
                data-testid="button-checkout"
              >
                Checkout Now
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
