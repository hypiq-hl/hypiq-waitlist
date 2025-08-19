'use client'

import Link from 'next/link'
import Image from 'next/image'

export function Navigation() {
  return (
    <nav className="bg-[#0e241f] border-b border-white/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Left side - Logo */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-16 h-16 rounded-lg overflow-hidden flex items-center justify-center">
                <Image src="/HYPIQ-logo-white.png" alt="HYPIQ" width={64} height={64} className="object-contain" />
              </div>
              <span className="text-xl font-bold text-white">HYPIQ</span>
            </Link>
          </div>

          {/* Right side - Waitlist badge */}
          <div className="flex items-center space-x-4">
            <span className="px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white text-xs font-semibold">
              Waitlist
            </span>
          </div>
        </div>
      </div>
    </nav>
  )
}
