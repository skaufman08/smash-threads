import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative border-b-4 border-foreground overflow-hidden grain-texture">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
      
      <div className="relative container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl space-y-8">
          <div className="space-y-4">
            <h1 
              className="text-6xl md:text-8xl font-black uppercase leading-none punk-rotate-1"
              data-testid="text-hero-title"
            >
              <span className="block text-foreground">SMASH THE</span>
              <span className="block text-primary mt-2">MAINSTREAM</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold uppercase tracking-wide max-w-2xl" data-testid="text-hero-subtitle">
              Authentic punk rock band tees. No posers. No sellouts. Just raw rebellion.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              onClick={scrollToProducts}
              size="lg"
              className="font-black uppercase text-lg px-8 py-6"
              data-testid="button-shop-now"
            >
              Shop Now
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="font-black uppercase text-lg px-8 py-6"
              data-testid="button-learn-more"
            >
              Our Story
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 pt-8 border-t-2 border-foreground/30">
            <div className="space-y-1">
              <p className="text-3xl font-black text-primary" data-testid="text-stat-designs">50+</p>
              <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground">Designs</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-black text-primary" data-testid="text-stat-bands">30+</p>
              <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground">Bands</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-black text-primary" data-testid="text-stat-shipping">FREE</p>
              <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground">Shipping</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
