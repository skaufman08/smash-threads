import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Moon, Sun, Mail } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'wouter';

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

  const scrollToProducts = (e: React.MouseEvent) => {
    e.preventDefault();
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b-[5px] border-black bg-black text-white w-full">
      <div className="w-full px-6 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-shrink-0">
            <Link href="/">
              <h1 
                className="font-mono text-3xl md:text-5xl font-black uppercase tracking-tight leading-none cursor-pointer hover:text-red-500 transition-colors" 
                data-testid="text-logo"
                style={{ fontFamily: "'Courier New', monospace" }}
              >
                RIOTTHREADS
              </h1>
            </Link>
          </div>

          <nav className="flex items-center gap-6 flex-wrap justify-center" data-testid="nav-menu">
            <Link href="/">
              <a 
                className="font-mono text-sm md:text-base font-bold uppercase tracking-wide hover:text-red-500 transition-colors cursor-pointer"
                data-testid="link-home"
                style={{ fontFamily: "'Courier New', monospace" }}
              >
                HOME
              </a>
            </Link>
            <a 
              onClick={scrollToProducts}
              className="font-mono text-sm md:text-base font-bold uppercase tracking-wide hover:text-red-500 transition-colors cursor-pointer"
              data-testid="link-products"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              PRODUCTS
            </a>
            <button
              onClick={onCartClick}
              className="font-mono text-sm md:text-base font-bold uppercase tracking-wide hover:text-red-500 transition-colors cursor-pointer flex items-center gap-2"
              data-testid="link-cart"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              CART
              {cartItemCount > 0 && (
                <Badge
                  variant="destructive"
                  className="h-6 w-6 flex items-center justify-center p-0 text-xs font-black border-[2px] border-white"
                  data-testid="badge-cart-count"
                >
                  {cartItemCount}
                </Badge>
              )}
            </button>
            <a 
              href="mailto:info@riotthreads.com"
              className="font-mono text-sm md:text-base font-bold uppercase tracking-wide hover:text-red-500 transition-colors cursor-pointer flex items-center gap-1"
              data-testid="link-contact"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              <Mail className="w-4 h-4" />
              CONTACT
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
              className="relative border-[2px] border-white text-white hover:bg-white hover:text-black"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
