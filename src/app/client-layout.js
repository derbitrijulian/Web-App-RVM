'use client';
import Navbar from '@/components/ui/navbar';
import { usePathname } from 'next/navigation';

export default function clientLayout({ children }) {
  const pathName = usePathname();
  const NavbarPages = ['/home', '/profil', '/lokasi', '/aktifitas'];

  return (
    <section>
      {children}
      {NavbarPages.includes(pathName) && <Navbar />}
    </section>
  );
}
