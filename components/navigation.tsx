"use client";

import Link from "next/link";

const navItems = ["Startseite", "Über uns", "Programm", "Aktuelles", "Kontakt"];

export function Navigation() {
  return (
    <nav className="fixed w-full backdrop-blur-md bg-white/5 border-b border-white/10 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="font-bold text-2xl text-white">DVPD</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-4 py-2 rounded-lg text-gray-100 text-sm font-medium hover:bg-white/10 transition-all duration-300"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}