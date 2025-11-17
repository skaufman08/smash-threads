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
  onUpdateQuantity: (id: string, size: string, color: string, quantity: number) => void;
  onRemove: (id: string, size: string, color: string) => void;
  subtotal: number;
  tax: number;
  total: number;
  onCheckout: () => void;
}

export default function CartDrawer({
  open,
  onClose,
  items,
  onUpdateQuantity,
  onRemove,
  subtotal,
  tax,
  total,
  onCheckout,
}: CartDrawerProps) {
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg border-l-[5px] border-foreground xerox-grain">
        <SheetHeader className="border-b-[3px] border-foreground pb-3">
          <SheetTitle className="text-3xl font-black uppercase tracking-tighter leading-none punk-rotate-2" data-testid="text-cart-title">
            YOUR<br/>CART
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
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                    className="border-[3px] border-foreground p-3 space-y-2 relative overflow-visible xerox-grain"
                    data-testid={`cart-item-${item.id}`}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => onRemove(item.id, item.selectedSize, item.selectedColor)}
                      className="absolute -top-3 -right-3 h-9 w-9 bg-destructive text-destructive-foreground hover:bg-destructive border-[3px] border-foreground punk-rotate-5"
                      data-testid={`button-remove-${item.id}`}
                    >
                      <X className="h-5 w-5 font-black" />
                    </Button>

                    <div className="flex gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover border-[2px] border-foreground contrast-125"
                        data-testid={`img-cart-item-${item.id}`}
                      />
                      <div className="flex-1">
                        <p className="text-[9px] font-black uppercase tracking-wider" data-testid={`text-cart-band-${item.id}`}>
                          {item.band}
                        </p>
                        <h4 className="font-black uppercase text-sm leading-tight" data-testid={`text-cart-name-${item.id}`}>
                          {item.name}
                        </h4>
                        <div className="flex gap-1.5 mt-1">
                          <Badge variant="outline" className="text-[8px] font-black px-1.5 py-0.5 border-[1px]" data-testid={`badge-size-${item.id}`}>
                            {item.selectedSize}
                          </Badge>
                          <Badge variant="outline" className="text-[8px] font-black px-1.5 py-0.5 border-[1px]" data-testid={`badge-color-${item.id}`}>
                            {item.selectedColor}
                          </Badge>
                        </div>
                        <p className="text-xs font-black mt-0.5" data-testid={`text-cart-price-${item.id}`}>
                          ${item.price}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-1.5">
                        <Button
                          variant="secondary"
                          size="icon"
                          onClick={() => onUpdateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="h-8 w-8 border-[2px]"
                          data-testid={`button-decrease-${item.id}`}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <Badge variant="outline" className="px-3 py-1.5 font-black text-sm border-[2px]" data-testid={`text-quantity-${item.id}`}>
                          {item.quantity}
                        </Badge>
                        <Button
                          variant="secondary"
                          size="icon"
                          onClick={() => onUpdateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity + 1)}
                          className="h-8 w-8 border-[2px]"
                          data-testid={`button-increase-${item.id}`}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <p className="font-black text-xl" data-testid={`text-subtotal-${item.id}`}>
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="border-t-[4px] border-foreground pt-4 space-y-3 mt-4">
              <div className="space-y-2 border-[2px] border-foreground p-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-black uppercase">SUBTOTAL:</span>
                  <span className="text-lg font-black" data-testid="text-cart-subtotal">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-black uppercase">TAX (8%):</span>
                  <span className="text-lg font-black" data-testid="text-cart-tax">
                    ${tax.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t-[2px] border-foreground">
                  <span className="text-xl font-black uppercase tracking-tight">TOTAL:</span>
                  <span className="text-2xl font-black" data-testid="text-cart-total">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>
              <Button
                onClick={onCheckout}
                className="w-full font-black text-base uppercase py-6 border-[3px]"
                size="lg"
                data-testid="button-checkout"
              >
                ▶ CHECKOUT NOW ◀
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
