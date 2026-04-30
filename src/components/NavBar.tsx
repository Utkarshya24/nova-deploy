"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavBar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 h-[68px] w-full bg-white/80 backdrop-blur-md border-b border-transparent transition-colors duration-200" id="navbar">
      <div className="mx-auto max-w-7xl px-6 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          {/* Logo icon placeholder */}
          <div className="text-brand transition-transform group-hover:scale-110">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          </div>
          <span className="font-heading font-bold text-[18px] text-text-heading">NovaDeploy</span>
        </Link>

        {/* Center Pill Navigation */}
        <nav className="hidden md:flex items-center bg-[#F1F5F9] border border-border-default rounded-full p-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-1.5 text-[14px] font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-brand rounded-full shadow-[0_2px_8px_rgba(37,99,235,0.3)]'
                    : 'text-text-muted hover:text-brand'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden sm:inline-flex text-[15px] font-medium text-text-body hover:text-brand transition-colors">
            Log In
          </Link>
          <Link href="/signup" className="inline-flex items-center justify-center bg-[#0F172A] text-white rounded-full px-5 py-2 font-semibold text-[15px] hover:bg-[#1E293B] transition-colors shadow-sm">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
