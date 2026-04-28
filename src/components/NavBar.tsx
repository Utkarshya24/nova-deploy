import Link from 'next/link';

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 h-[68px] w-full bg-white/80 backdrop-blur-md border-b border-transparent transition-colors duration-200" id="navbar">
      <div className="mx-auto max-w-7xl px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo icon placeholder */}
          <div className="text-brand">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          </div>
          <span className="font-heading font-bold text-[18px] text-text-heading">NovaDeploy</span>
        </div>

        {/* Center Pill Navigation */}
        <nav className="hidden md:flex items-center bg-[#F1F5F9] border border-border-default rounded-full p-1">
          <Link href="/" className="px-4 py-1.5 text-[14px] font-medium text-white bg-brand rounded-full shadow-[0_2px_8px_rgba(37,99,235,0.3)] transition-colors">
            Home
          </Link>
          <Link href="/features" className="px-4 py-1.5 text-[14px] font-medium text-text-muted hover:text-brand transition-colors">
            Features
          </Link>
          <Link href="/pricing" className="px-4 py-1.5 text-[14px] font-medium text-text-muted hover:text-brand transition-colors">
            Pricing
          </Link>
          <Link href="/about" className="px-4 py-1.5 text-[14px] font-medium text-text-muted hover:text-brand transition-colors">
            About
          </Link>
          <Link href="/blog" className="px-4 py-1.5 text-[14px] font-medium text-text-muted hover:text-brand transition-colors">
            Blog
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden sm:inline-flex text-[15px] font-medium text-text-body hover:text-brand transition-colors">
            Log In
          </Link>
          <Link href="/signup" className="inline-flex items-center justify-center bg-[#0F172A] text-white rounded-full px-5 py-2 font-semibold text-[15px] hover:bg-[#1E293B] transition-colors">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
