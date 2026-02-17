"use client";

import Reveal from "@/components/motion/Reveal";

export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-4xl font-bold text-navy">About Jheart Ventures</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="w-24 h-1 bg-gold mx-auto mt-4 mb-6" />
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-4 text-gray-700 text-lg">
              Jheart Ventures is a multi-service brand delivering professional painting
              and paint production, alongside modern web and mobile development.
              We focus on quality, reliability, and clear communication.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-3 text-left">
            <Reveal delay={0.16}   whileHover={{ scale: 1.06, y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 18 }}className="rounded-xl border-2 border-navy p-8 hover:shadow-xl transition-shadow bg-linear-to-br from-white to-gold-light">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-bold text-xl text-navy">Quality First</h3>
              <p className="mt-3 text-gray-700">
                Durable finishes, consistent production, and clean delivery.
              </p>
            </Reveal>
            <Reveal delay={0.22} whileHover={{ scale: 1.06, y: -6 }}  transition={{ type: "spring", stiffness: 300, damping: 18 }} className="rounded-xl border-2 border-navy p-8 hover:shadow-xl transition-shadow bg-linear-to-br from-white to-gold-light">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl text-navy">Reliable Service</h3>
              <p className="mt-3 text-gray-700">
                We show up, communicate, and complete to standard.
              </p>
            </Reveal>
            <Reveal delay={0.28}  whileHover={{ scale: 1.06, y: -6 }}
  transition={{ type: "spring", stiffness: 300, damping: 18 }}  className="rounded-xl border-2 border-navy p-8 hover:shadow-xl transition-shadow bg-linear-to-br from-white to-gold-light">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl text-navy">Modern Solutions</h3>
              <p className="mt-3 text-gray-700">
                Websites and apps that help your business grow.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
