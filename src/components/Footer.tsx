import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white pt-[80px] pb-[40px] px-6">
      <div className="mx-auto max-w-7xl max-w-layout">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 text-[14px]">
          
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              <span className="font-heading font-bold text-[18px]">NovaDeploy</span>
            </div>
            <p className="text-white/60 mb-6">Ship at the speed of thought.</p>
            <div className="flex flex-col gap-2 mb-6">
              <input type="email" placeholder="Email address" className="bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white placeholder:text-white/40 focus:outline-none focus:border-white/40" />
              <button className="bg-white text-[#0F172A] font-semibold rounded-xl px-4 py-2 hover:bg-white/90">Subscribe</button>
              <span className="text-[11px] text-white/40">By subscribing you agree to our terms.</span>
            </div>
          </div>

          <div className="md:col-span-1 flex flex-col gap-3">
            <h4 className="font-semibold text-white mb-2">Product</h4>
            <Link href="/features" className="text-white/70 hover:text-white transition-colors">Features</Link>
            <Link href="/pricing" className="text-white/70 hover:text-white transition-colors">Pricing</Link>
            <Link href="/changelog" className="text-white/70 hover:text-white transition-colors">Changelog</Link>
            <Link href="/docs" className="text-white/70 hover:text-white transition-colors">Documentation</Link>
          </div>

          <div className="md:col-span-1 flex flex-col gap-3">
            <h4 className="font-semibold text-white mb-2">Company</h4>
            <Link href="/about" className="text-white/70 hover:text-white transition-colors">About Us</Link>
            <Link href="/careers" className="text-white/70 hover:text-white transition-colors">Careers</Link>
            <Link href="/blog" className="text-white/70 hover:text-white transition-colors">Blog</Link>
            <Link href="/contact" className="text-white/70 hover:text-white transition-colors">Contact</Link>
          </div>

          <div className="md:col-span-1 flex flex-col gap-3">
            <h4 className="font-semibold text-white mb-2">Resources</h4>
            <Link href="/templates" className="text-white/70 hover:text-white transition-colors">Templates</Link>
            <Link href="/community" className="text-white/70 hover:text-white transition-colors">Community</Link>
            <Link href="/partners" className="text-white/70 hover:text-white transition-colors">Partners</Link>
            <Link href="/status" className="text-white/70 hover:text-white transition-colors">System Status</Link>
          </div>

          <div className="md:col-span-1 flex flex-col gap-3">
            <h4 className="font-semibold text-white mb-2">Download App</h4>
            <button className="border border-white/20 rounded-xl px-4 py-2 hover:bg-white/5 transition-colors text-left flex items-center gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/><path d="M10 2c1 .5 2 2 2 5"/></svg>
              <div className="flex flex-col">
                <span className="text-[10px] text-white/70">Download on the</span>
                <span className="font-semibold">App Store</span>
              </div>
            </button>
            <button className="border border-white/20 rounded-xl px-4 py-2 hover:bg-white/5 transition-colors text-left flex items-center gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              <div className="flex flex-col">
                <span className="text-[10px] text-white/70">GET IT ON</span>
                <span className="font-semibold">Google Play</span>
              </div>
            </button>
          </div>
        </div>
        
        <div className="w-full h-px bg-white/10 my-8"></div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-white/40">
          <div>© {new Date().getFullYear()} NovaDeploy Inc. All rights reserved.</div>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white/70 transition-colors">Terms</Link>
            <Link href="/cookies" className="hover:text-white/70 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
