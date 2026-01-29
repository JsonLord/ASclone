import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-12 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-charcoal-lighter pb-12 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-violet-accent rounded flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
            <span className="text-xl font-bold text-white tracking-tighter">PULSETRAIN</span>
          </div>
          <div className="flex gap-8 text-gray-400">
            <Link href="#" className="hover:text-violet-accent transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-violet-accent transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-violet-accent transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-violet-accent transition-colors">Twitter</Link>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} PULSETRAIN GmbH. All rights reserved. Built for the future of mobility.
        </div>
      </div>
    </footer>
  );
}
