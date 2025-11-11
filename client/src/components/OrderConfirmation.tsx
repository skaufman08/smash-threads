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
      <Card className="p-8 border-4 border-foreground space-y-6 punk-rotate-1">
        <div className="text-center space-y-4">
          <CheckCircle2 className="w-20 h-20 mx-auto text-primary" data-testid="icon-success" />
          <h1 className="text-4xl font-black uppercase punk-rotate-2" data-testid="text-success-title">
            Order Confirmed!
          </h1>
          <p className="text-lg font-bold">
            Thanks for your order, punk rocker!
          </p>
        </div>

        <Card className="p-6 border-2 border-foreground bg-accent">
          <div className="space-y-2">
            <p className="text-sm font-bold uppercase text-muted-foreground">Order Number</p>
            <Badge variant="secondary" className="text-xl font-black px-4 py-2 stamp-effect" data-testid="text-order-number">
              #{orderNumber}
            </Badge>
          </div>
          <p className="text-sm mt-4 font-bold">
            Confirmation sent to:{' '}
            <span className="text-primary" data-testid="text-customer-email">{customerEmail}</span>
          </p>
        </Card>

        <div className="space-y-4">
          <h2 className="font-black uppercase text-xl border-b-2 border-foreground pb-2">
            Order Summary
          </h2>
          {items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center py-3 border-b border-border"
              data-testid={`order-item-${item.id}`}
            >
              <div className="flex gap-4 items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover border-2 border-foreground"
                  data-testid={`img-order-item-${item.id}`}
                />
                <div>
                  <p className="font-bold uppercase" data-testid={`text-order-name-${item.id}`}>{item.name}</p>
                  <p className="text-sm text-muted-foreground">
                    Qty: <span data-testid={`text-order-qty-${item.id}`}>{item.quantity}</span> × ${item.price}
                  </p>
                </div>
              </div>
              <p className="font-black" data-testid={`text-order-subtotal-${item.id}`}>
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}

          <div className="flex justify-between items-center pt-4 border-t-2 border-foreground">
            <span className="text-2xl font-black uppercase">Total Paid:</span>
            <span className="text-3xl font-black text-primary" data-testid="text-total-paid">
              ${total.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="pt-6">
          <Button
            onClick={onContinueShopping}
            className="w-full font-black uppercase text-lg py-6"
            size="lg"
            data-testid="button-continue-shopping"
          >
            Continue Shopping
          </Button>
        </div>
      </Card>
    </div>
  );
}
