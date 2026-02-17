"use client";

import Reveal from "@/components/motion/Reveal";

const reasons = [
  {
    title: "Proven Expertise",
    desc: "Years of experience in both traditional services and modern technology.",
    icon: "⭐"
  },
  {
    title: "Competitive Pricing",
    desc: "Quality service and products at prices that make sense for your budget.",
    icon: "💰"
  },
  {
    title: "Customer Focused",
    desc: "Your satisfaction drives everything we do, from start to finish.",
    icon: "❤️"
  },
  {
    title: "Timely Delivery",
    desc: "We respect deadlines and deliver projects on time, every time.",
    icon: "⏱️"
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-br from-gold-light via-white to-gold-light">
      <div className="container mx-auto px-6">
        <Reveal>
          <h2 className="text-center text-4xl font-bold text-navy">Why Choose Jheart Ventures?</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="w-24 h-1 bg-navy mx-auto mt-4 mb-12" />
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {reasons.map((r, idx) => (
            <Reveal key={r.title} delay={0.12 + idx * 0.08}>
              <div className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 bg-navy rounded-full flex items-center justify-center text-4xl transform group-hover:scale-110 transition-transform shadow-lg">
                  {r.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{r.title}</h3>
                <p className="text-gray-700">{r.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
