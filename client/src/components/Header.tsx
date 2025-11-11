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
    <header className="sticky top-0 z-50 border-b-[5px] border-foreground bg-background xerox-grain">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <h1 className="font-black text-2xl md:text-5xl uppercase tracking-tighter leading-none punk-rotate-2" data-testid="text-logo">
              <span className="inline-block -mr-1">RIOT</span>
              <span className="inline-block punk-rotate-1 ml-1">THREADS</span>
            </h1>
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mt-1 punk-rotate-4" data-testid="text-tagline">
              ★ UNDERGROUND PUNK ★
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
              className="relative border-[2px] border-foreground"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            <Button
              onClick={onCartClick}
              className="relative font-black uppercase text-xs border-[3px]"
              data-testid="button-cart"
            >
              <ShoppingCart className="w-4 h-4 mr-1.5" />
              <span className="hidden sm:inline">CART</span>
              {cartItemCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-3 -right-3 h-7 w-7 flex items-center justify-center p-0 text-xs font-black border-[3px] border-foreground punk-rotate-5"
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
