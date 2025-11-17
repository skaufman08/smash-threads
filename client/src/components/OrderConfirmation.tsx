import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';
import { CartItem } from '@/contexts/CartContext';

interface OrderConfirmationProps {
  orderNumber: string;
  items: CartItem[];
  total: number;
  customerEmail: string;
  onContinueShopping: () => void;
}

export default function OrderConfirmation({
  orderNumber,
  items,
  total,
  customerEmail,
  onContinueShopping,
}: OrderConfirmationProps) {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <Card className="p-6 md:p-8 border-[5px] border-foreground space-y-6 punk-rotate-2 xerox-grain">
        <div className="text-center space-y-4 border-[3px] border-foreground p-6">
          <CheckCircle2 className="w-24 h-24 mx-auto stroke-[3]" data-testid="icon-success" />
          <h1 className="text-5xl md:text-6xl font-black uppercase leading-none tracking-tighter punk-rotate-1" data-testid="text-success-title">
            ORDER<br/>CONFIRMED!
          </h1>
          <p className="text-base font-black uppercase tracking-wide border-t-[2px] border-foreground pt-4">
            THANKS PUNK ROCKER!
          </p>
        </div>

        <Card className="p-5 border-[3px] border-foreground bg-secondary punk-rotate-1">
          <div className="space-y-2">
            <p className="text-[10px] font-black uppercase tracking-wider">ORDER NUMBER</p>
            <Badge variant="secondary" className="text-2xl font-black px-4 py-2 border-[3px] border-foreground" data-testid="text-order-number">
              #{orderNumber}
            </Badge>
          </div>
          <p className="text-xs mt-4 font-black uppercase tracking-wide border-t-[2px] border-foreground pt-3 mt-3">
            CONFIRMATION: <span className="font-mono" data-testid="text-customer-email">{customerEmail}</span>
          </p>
        </Card>

        <div className="space-y-4">
          <h2 className="font-black uppercase text-2xl tracking-tight border-b-[3px] border-foreground pb-2">
            ORDER SUMMARY
          </h2>
          {items.map((item) => (
            <div
              key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
              className="flex justify-between items-center py-3 border-b-[2px] border-foreground"
              data-testid={`order-item-${item.id}`}
            >
              <div className="flex gap-3 items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 object-cover border-[2px] border-foreground contrast-125"
                  data-testid={`img-order-item-${item.id}`}
                />
                <div>
                  <p className="font-black uppercase text-sm" data-testid={`text-order-name-${item.id}`}>{item.name}</p>
                  <div className="flex gap-1.5 mt-0.5">
                    <span className="text-[8px] font-black border border-foreground px-1">{item.selectedSize}</span>
                    <span className="text-[8px] font-black border border-foreground px-1">{item.selectedColor}</span>
                  </div>
                  <p className="text-xs font-black mt-0.5">
                    QTY: <span data-testid={`text-order-qty-${item.id}`}>{item.quantity}</span> × ${item.price}
                  </p>
                </div>
              </div>
              <p className="font-black text-lg" data-testid={`text-order-subtotal-${item.id}`}>
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}

          <div className="flex justify-between items-center pt-4 border-t-[4px] border-foreground border-[3px] border-foreground p-4">
            <span className="text-2xl font-black uppercase tracking-tight">TOTAL PAID:</span>
            <span className="text-4xl font-black" data-testid="text-total-paid">
              ${total.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="pt-4">
          <Button
            onClick={onContinueShopping}
            className="w-full font-black uppercase text-base py-6 border-[3px]"
            size="lg"
            data-testid="button-continue-shopping"
          >
            ▶ BACK TO SHOP ◀
          </Button>
        </div>
      </Card>
    </div>
  );
}
