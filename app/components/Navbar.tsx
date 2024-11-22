"use client";

import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center gap-4 p-4 bg-gray-100 mb-2">
      <Button
        variant={pathname === '/' ? 'default' : 'outline'}
        className={pathname === '/' ? 'bg-blue-500 text-white' : ''}
        onClick={() => (window.location.href = '/')}
      >
        Home
      </Button>
      <Button
        variant={pathname === '/about' ? 'default' : 'outline'}
        className={pathname === '/about' ? 'bg-blue-500 text-white' : ''}
        onClick={() => (window.location.href = '/about')}
      >
        About
      </Button>
      <Button
        variant={pathname === '/contact' ? 'default' : 'outline'}
        className={pathname === '/contact' ? 'bg-blue-500 text-white' : ''}
        onClick={() => (window.location.href = '/contact')}
      >
        Contact
      </Button>
    </nav>
  );
};

export default Navbar;
