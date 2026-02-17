"use client";

import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export default function Footer() {
  return (
    <footer className="border-t-4  bg-white text-navy">
      <div className="container mx-auto px-6 py-16">
        <Reveal>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-2xl font-bold text-navy mb-4">Jheart Ventures</h3>
              <div className="w-16 h-1 bg-navy-dark mb-4" />
              <p className="text-navy leading-relaxed">
                Painting services, paint production, and modern web & mobile development solutions.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-navy">Services</h4>
              <ul className="space-y-3">
                <li>
                  <Link className="text-navy hover:text-gold transition-colors flex items-center gap-2" href="/services/painting">
                    <span>→</span> Painting & Paint Production
                  </Link>
                </li>
                <li>
                  <Link className="text-navy hover:text-gold transition-colors flex items-center gap-2" href="/services/web-dev">
                    <span>→</span> Web & Mobile Development
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-navy">Company</h4>
              <ul className="space-y-3">
                <li>
                  <Link className="text-navy hover:text-gold transition-colors flex items-center gap-2" href="/">
                    <span>→</span> Home
                  </Link>
                </li>
                <li>
                  <Link className="text-navy hover:text-gold transition-colors flex items-center gap-2" href="/contact">
                    <span>→</span> Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-navy">Get In Touch</h4>
              <p className="text-navy mb-4 leading-relaxed">
                Email or WhatsApp — we reply fast.
              </p>
              <Link 
                className="inline-block bg-gold text-navy px-6 py-3 rounded-lg font-semibold hover:bg-gold-dark transition-all transform hover:scale-105" 
                href="/contact"
              >
                Contact Us →
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gold/30">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-navy">
                © {new Date().getFullYear()} Jheart Ventures. All rights reserved.
              </span>
              <div className="flex gap-4 text-navy">
                <span>Built with ❤️ using Next.js</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
