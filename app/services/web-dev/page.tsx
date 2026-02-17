import type { Metadata } from "next";
import Reveal from "@/components/motion/Reveal";
import HeroCarousel from "@/components/ui/HeroCarousel";

export const metadata: Metadata = {
  title: "Web & Mobile Development | Jheart Ventures",
  description:
    "Websites, web apps, mobile apps, and technical consultation from Jheart Ventures.",
};

const heroSlides = [
  {
    title: "Modern Web Development",
    subtitle: "Digital Solutions",
    description: "Build fast, responsive websites that engage your audience and drive results.",
    buttonText: "Start Your Project",
    buttonLink: "/contact",
        imageSrc: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2Vic2l0ZSUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
    imageAlt: "Web and mobile development",
  },
  {
    title: "Mobile App Development",
    subtitle: "iOS & Android",
    description: "Create powerful mobile experiences that your customers will love.",
    buttonText: "Learn More",
    buttonLink: "#services",
        imageSrc: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Web and mobile development",
  },
  {
    title: "Technical Consultation",
    subtitle: "Expert Guidance",
    description: "Get expert advice on architecture, optimization, and technology choices.",
    buttonText: "Schedule Call",
    buttonLink: "/contact",
        imageSrc: "https://plus.unsplash.com/premium_photo-1733353204288-ba5c8ba3ad7d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Web and mobile development",
  }
];

const services = [
  { title: "Website Development", desc: "Fast, responsive websites built with modern tools.", icon: "🌐" },
  { title: "Web Applications", desc: "Dashboards, portals, and business systems.", icon: "⚡" },
  { title: "Mobile Apps", desc: "Android/iOS apps (cross-platform where it fits).", icon: "📱" },
  { title: "Consultation", desc: "Planning, reviews, architecture, and optimization.", icon: "💡" },
];

export default function WebDevPage() {
  return (
    <>
      <HeroCarousel slides={heroSlides} autoPlayInterval={5000} />
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <h1 className="text-4xl font-bold text-navy">Web & Mobile Development</h1>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="w-24 h-1 bg-gold mt-4 mb-6" />
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-lg text-gray-700">
                Smart solutions for modern businesses — from landing pages to full applications.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              {services.map((s, idx) => (
                <Reveal key={s.title} delay={0.16 + idx * 0.06} className="rounded-xl border-2 border-navy p-8 hover:shadow-xl transition-all bg-linear-to-br from-white to-gold-light">
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h2 className="text-xl font-bold text-navy mb-3">{s.title}</h2>
                  <p className="text-gray-700">{s.desc}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.32} className="mt-14 rounded-xl bg-navy p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Workflow</h3>
              <div className="flex flex-wrap gap-3 items-center">
                <span className="bg-gold text-navy px-4 py-2 rounded-full font-semibold">Discover</span>
                <span className="text-gold">→</span>
                <span className="bg-gold text-navy px-4 py-2 rounded-full font-semibold">Design</span>
                <span className="text-gold">→</span>
                <span className="bg-gold text-navy px-4 py-2 rounded-full font-semibold">Build</span>
                <span className="text-gold">→</span>
                <span className="bg-gold text-navy px-4 py-2 rounded-full font-semibold">Launch</span>
                <span className="text-gold">→</span>
                <span className="bg-gold text-navy px-4 py-2 rounded-full font-semibold">Support</span>
              </div>
            </Reveal>

            <Reveal delay={0.38} className="mt-10 rounded-xl border-2 border-gold p-8 bg-gold-light">
              <h3 className="text-2xl font-bold text-navy mb-4">Technologies We Use</h3>
              <div className="flex flex-wrap gap-3">
                {["Next.js", "React", "TypeScript", "Node.js", "APIs", "Databases"].map(tech => (
                  <span key={tech} className="bg-navy text-gold px-4 py-2 rounded-lg font-semibold">
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
