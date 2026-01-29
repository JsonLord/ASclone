'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-charcoal-lighter bg-charcoal/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-white tracking-tighter flex items-center gap-2">
              <div className="w-8 h-8 bg-violet-accent rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full animate-pulse" />
              </div>
              PULSETRAIN
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="#technology" className="text-gray-300 hover:text-violet-accent transition-colors">Technology</Link>
              <Link href="#team" className="text-gray-300 hover:text-violet-accent transition-colors">Team</Link>
              <Link href="#join" className="text-gray-300 hover:text-violet-accent transition-colors">Join us</Link>
              <Link href="#contact" className="px-4 py-2 bg-violet-accent text-white rounded-full hover:bg-violet-accent/80 transition-all">Contact us</Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-charcoal border-b border-charcoal-lighter">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#technology"
              className="block px-3 py-2 text-gray-300 hover:text-violet-accent"
              onClick={() => setIsOpen(false)}
            >
              Technology
            </Link>
            <Link
              href="#team"
              className="block px-3 py-2 text-gray-300 hover:text-violet-accent"
              onClick={() => setIsOpen(false)}
            >
              Team
            </Link>
            <Link
              href="#join"
              className="block px-3 py-2 text-gray-300 hover:text-violet-accent"
              onClick={() => setIsOpen(false)}
            >
              Join us
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 text-violet-accent font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Contact us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
