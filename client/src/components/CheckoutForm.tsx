import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card } from '@/components/ui/card';

const checkoutSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  address: z.string().min(5, 'Address is required'),
  city: z.string().min(2, 'City is required'),
  state: z.string().min(2, 'State is required'),
  zipCode: z.string().min(5, 'Valid ZIP code required'),
  cardNumber: z.string().min(16, 'Valid card number required'),
  expiryDate: z.string().regex(/^\d{2}\/\d{2}$/, 'Format: MM/YY'),
  cvv: z.string().min(3, 'CVV required'),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

interface CheckoutFormProps {
  onSubmit: (data: CheckoutFormData) => void;
  total: number;
}

export default function CheckoutForm({ onSubmit, total }: CheckoutFormProps) {
  const form = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      fullName: '',
      email: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
    },
  });

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-black uppercase punk-rotate-1 mb-2" data-testid="text-checkout-title">
          Checkout
        </h2>
        <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
          Complete your order
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <Card className="p-6 border-2 border-foreground space-y-4 punk-rotate-1">
            <h3 className="font-black uppercase text-lg border-b-2 border-foreground pb-2">
              Contact Information
            </h3>
            
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold uppercase text-xs">Full Name</FormLabel>
                  <FormControl>
                    <Input {...field} className="border-2 border-input" data-testid="input-fullname" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold uppercase text-xs">Email</FormLabel>
                  <FormControl>
                    <Input {...field} type="email" className="border-2 border-input" data-testid="input-email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </Card>

          <Card className="p-6 border-2 border-foreground space-y-4 punk-rotate-2">
            <h3 className="font-black uppercase text-lg border-b-2 border-foreground pb-2">
              Shipping Address
            </h3>
            
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold uppercase text-xs">Street Address</FormLabel>
                  <FormControl>
                    <Input {...field} className="border-2 border-input" data-testid="input-address" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold uppercase text-xs">City</FormLabel>
                    <FormControl>
                      <Input {...field} className="border-2 border-input" data-testid="input-city" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold uppercase text-xs">State</FormLabel>
                    <FormControl>
                      <Input {...field} className="border-2 border-input" data-testid="input-state" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="zipCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold uppercase text-xs">ZIP Code</FormLabel>
                  <FormControl>
                    <Input {...field} className="border-2 border-input" data-testid="input-zipcode" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </Card>

          <Card className="p-6 border-2 border-foreground space-y-4 punk-rotate-3">
            <h3 className="font-black uppercase text-lg border-b-2 border-foreground pb-2">
              Payment Information
            </h3>
            
            <FormField
              control={form.control}
              name="cardNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold uppercase text-xs">Card Number</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="1234 5678 9012 3456" className="border-2 border-input" data-testid="input-cardnumber" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="expiryDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold uppercase text-xs">Expiry Date</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="MM/YY" className="border-2 border-input" data-testid="input-expiry" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="cvv"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold uppercase text-xs">CVV</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="123" className="border-2 border-input" data-testid="input-cvv" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </Card>

          <Card className="p-6 border-2 border-foreground bg-card">
            <div className="flex justify-between items-center mb-4">
              <span className="font-black uppercase text-xl">Order Total:</span>
              <span className="font-black text-2xl text-primary" data-testid="text-order-total">
                ${total.toFixed(2)}
              </span>
            </div>
            <Button
              type="submit"
              className="w-full font-black text-lg uppercase py-6"
              size="lg"
              data-testid="button-place-order"
            >
              Place Order
            </Button>
          </Card>
        </form>
      </Form>
    </div>
  );
}
