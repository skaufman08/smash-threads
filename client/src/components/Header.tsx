import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Moon, Sun } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

export default function Header({ cartItemCount, onCartClick }: HeaderProps) {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="sticky top-0 z-50 border-b-4 border-foreground bg-background grain-texture">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <h1 className="font-black text-2xl md:text-4xl uppercase tracking-tight punk-rotate-1" data-testid="text-logo">
              <span className="text-primary">RIOT</span>{' '}
              <span className="text-foreground">THREADS</span>
            </h1>
            <p className="text-xs md:text-sm font-bold uppercase tracking-widest mt-1" data-testid="text-tagline">
              Underground Punk Supply
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
              className="relative"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            <Button
              variant="secondary"
              onClick={onCartClick}
              className="relative font-bold uppercase"
              data-testid="button-cart"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              <span className="hidden sm:inline">Cart</span>
              {cartItemCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center p-0 text-xs font-bold stamp-effect"
                  data-testid="badge-cart-count"
                >
                  {cartItemCount}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
