"use client";

import { Facebook, Instagram, Twitter } from "lucide-react";

const socialLinks = [
  { name: "Twitter", icon: <Twitter className="w-4 h-4" /> },
  { name: "Facebook", icon: <Facebook className="w-4 h-4" /> },
  { name: "Instagram", icon: <Instagram className="w-4 h-4" /> },
];

const legalLinks = ["Impressum", "Datenschutz"];

export function Footer() {
  return (
    <footer className="bg-gray-900/95 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">DVPD</h3>
            <p className="text-gray-400">Demokratische Volkspartei Deutschland</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Kontakt</h3>
            <p className="text-gray-400">info@dvpd.de</p>
            <p className="text-gray-400">Tel: 030 123456789</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Social Media</h3>
            <div className="space-y-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {social.icon} {social.name}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Rechtliches</h3>
            <div className="space-y-2">
              {legalLinks.map((legal) => (
                <a
                  key={legal}
                  href="#"
                  className="block text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {legal}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 DVPD. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}