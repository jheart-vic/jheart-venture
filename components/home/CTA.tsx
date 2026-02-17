"use client";

import Reveal from "@/components/motion/Reveal";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 215, 0, 0.3) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xl text-gray-300 mb-10">
              Whether you need painting services or a digital solution, we're here to help bring your vision to life.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-gold text-navy px-10 py-4 rounded-lg font-bold text-lg hover:bg-gold-dark transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Get in Touch
              </Link>
              <Link
                href="/services"
                className="inline-block bg-transparent border-2 border-gold text-gold px-10 py-4 rounded-lg font-bold text-lg hover:bg-gold hover:text-navy transition-all duration-300 transform hover:scale-105"
              >
                View Services
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-40 h-40 border-4 border-gold/10 rounded-full" />
      <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-gold/10 rounded-lg rotate-45" />
    </section>
  );
}
