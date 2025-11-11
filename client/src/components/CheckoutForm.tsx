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
      <div className="mb-6 border-[4px] border-foreground p-4 punk-rotate-2 xerox-grain">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none punk-rotate-1" data-testid="text-checkout-title">
          CHECK<br/>OUT
        </h2>
        <p className="text-xs font-black uppercase tracking-wide mt-2 border-l-[3px] border-foreground pl-3">
          COMPLETE YOUR ORDER
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <Card className="p-5 border-[3px] border-foreground space-y-4 punk-rotate-1 xerox-grain">
            <h3 className="font-black uppercase text-xl tracking-tight border-b-[3px] border-foreground pb-2">
              CONTACT INFO
            </h3>
            
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-black uppercase text-[10px] tracking-wider">FULL NAME</FormLabel>
                  <FormControl>
                    <Input {...field} className="border-[2px] border-input font-mono" data-testid="input-fullname" />
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
                  <FormLabel className="font-black uppercase text-[10px] tracking-wider">EMAIL</FormLabel>
                  <FormControl>
                    <Input {...field} type="email" className="border-[2px] border-input font-mono" data-testid="input-email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </Card>

          <Card className="p-5 border-[3px] border-foreground space-y-4 punk-rotate-2 xerox-grain">
            <h3 className="font-black uppercase text-xl tracking-tight border-b-[3px] border-foreground pb-2">
              SHIPPING ADDRESS
            </h3>
            
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-black uppercase text-[10px] tracking-wider">STREET ADDRESS</FormLabel>
                  <FormControl>
                    <Input {...field} className="border-[2px] border-input font-mono" data-testid="input-address" />
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
                    <FormLabel className="font-black uppercase text-[10px] tracking-wider">CITY</FormLabel>
                    <FormControl>
                      <Input {...field} className="border-[2px] border-input font-mono" data-testid="input-city" />
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
                    <FormLabel className="font-black uppercase text-[10px] tracking-wider">STATE</FormLabel>
                    <FormControl>
                      <Input {...field} className="border-[2px] border-input font-mono" data-testid="input-state" />
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
                  <FormLabel className="font-black uppercase text-[10px] tracking-wider">ZIP CODE</FormLabel>
                  <FormControl>
                    <Input {...field} className="border-[2px] border-input font-mono" data-testid="input-zipcode" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </Card>

          <Card className="p-5 border-[3px] border-foreground space-y-4 punk-rotate-3 xerox-grain">
            <h3 className="font-black uppercase text-xl tracking-tight border-b-[3px] border-foreground pb-2">
              PAYMENT INFO
            </h3>
            
            <FormField
              control={form.control}
              name="cardNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-black uppercase text-[10px] tracking-wider">CARD NUMBER</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="1234 5678 9012 3456" className="border-[2px] border-input font-mono" data-testid="input-cardnumber" />
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
                    <FormLabel className="font-black uppercase text-[10px] tracking-wider">EXPIRY</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="MM/YY" className="border-[2px] border-input font-mono" data-testid="input-expiry" />
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
                    <FormLabel className="font-black uppercase text-[10px] tracking-wider">CVV</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="123" className="border-[2px] border-input font-mono" data-testid="input-cvv" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </Card>

          <Card className="p-5 border-[4px] border-foreground bg-card punk-rotate-1">
            <div className="flex justify-between items-center mb-4 border-[2px] border-foreground p-3">
              <span className="font-black uppercase text-xl tracking-tight">TOTAL:</span>
              <span className="font-black text-3xl" data-testid="text-order-total">
                ${total.toFixed(2)}
              </span>
            </div>
            <Button
              type="submit"
              className="w-full font-black text-base uppercase py-6 border-[3px]"
              size="lg"
              data-testid="button-place-order"
            >
              ▶ PLACE ORDER ◀
            </Button>
          </Card>
        </form>
      </Form>
    </div>
  );
}
