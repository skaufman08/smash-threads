import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative border-b-[6px] border-foreground overflow-hidden xerox-grain">
      <div className="absolute inset-0 bg-secondary" />
      
      <div className="relative container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-4xl space-y-6">
          <div className="space-y-3">
            <h1 
              className="text-6xl md:text-9xl font-black uppercase leading-[0.85] tracking-tighter punk-rotate-2"
              data-testid="text-hero-title"
            >
              <span className="block punk-rotate-3">SMASH</span>
              <span className="block punk-rotate-1 -mt-2">THE</span>
              <span className="block text-accent punk-rotate-4 -mt-2">SYSTEM</span>
            </h1>
            <p className="text-base md:text-xl font-black uppercase tracking-tight max-w-2xl leading-tight border-l-[4px] border-foreground pl-4 punk-rotate-1" data-testid="text-hero-subtitle">
              AUTHENTIC PUNK ROCK BAND TEES /// NO POSERS /// NO SELLOUTS /// JUST RAW REBELLION
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            <Button
              onClick={scrollToProducts}
              size="lg"
              className="font-black uppercase text-base px-6 py-6 border-[3px] punk-rotate-2"
              data-testid="button-shop-now"
            >
              ▼ SHOP NOW ▼
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="font-black uppercase text-base px-6 py-6 border-[3px] punk-rotate-1"
              data-testid="button-learn-more"
            >
              READ ZINE
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 pt-6 border-t-[3px] border-foreground">
            <div className="punk-rotate-1 border-[2px] border-foreground px-3 py-2">
              <p className="text-4xl font-black" data-testid="text-stat-designs">50+</p>
              <p className="text-[10px] font-black uppercase tracking-wider">DESIGNS</p>
            </div>
            <div className="punk-rotate-2 border-[2px] border-foreground px-3 py-2">
              <p className="text-4xl font-black" data-testid="text-stat-bands">30+</p>
              <p className="text-[10px] font-black uppercase tracking-wider">BANDS</p>
            </div>
            <div className="punk-rotate-3 border-[2px] border-foreground px-3 py-2">
              <p className="text-4xl font-black text-accent" data-testid="text-stat-shipping">FREE</p>
              <p className="text-[10px] font-black uppercase tracking-wider">SHIPPING</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
