// "use client";

// import Reveal from "@/components/motion/Reveal";
// import Link from "next/link";

// const services = [
//   {
//     title: "Painting Services",
//     desc: "Professional interior and exterior painting for homes and businesses.",
//     icon: "🎨",
//     link: "/services/painting"
//   },
//   {
//     title: "Paint Production",
//     desc: "High-quality paint manufacturing for retail and wholesale.",
//     icon: "🏭",
//     link: "/services/painting"
//   },
//   {
//     title: "Web Development",
//     desc: "Modern, responsive websites built with cutting-edge technology.",
//     icon: "💻",
//     link: "/services/web-dev"
//   },
//   {
//     title: "Mobile Apps",
//     desc: "Cross-platform mobile applications for iOS and Android.",
//     icon: "📱",
//     link: "/services/web-dev"
//   },
// ];

// export default function Services() {
//   return (
//     <section className="py-24 bg-navy">
//       <div className="container mx-auto px-6">
//         <Reveal>
//           <h2 className="text-center text-4xl font-bold text-white">Our Services</h2>
//         </Reveal>
//         <Reveal delay={0.08}>
//           <div className="w-24 h-1 bg-gold mx-auto mt-4 mb-12" />
//         </Reveal>

//         <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
//           {services.map((s, idx) => (
//             <Reveal key={s.title} delay={0.12 + idx * 0.08}>
//               <Link href={s.link} className="block group">
//                 <div className="rounded-xl bg-white border-2 border-gold p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
//                   <div className="text-5xl mb-4">{s.icon}</div>
//                   <h3 className="text-xl font-bold text-navy mb-3">{s.title}</h3>
//                   <p className="text-gray-600 mb-4">{s.desc}</p>
//                   <span className="text-gold font-semibold group-hover:underline inline-flex items-center">
//                     Learn More 
//                     <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                   </span>
//                 </div>
//               </Link>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useState } from "react";
import Reveal from "@/components/motion/Reveal";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

type Service = {
  title: string;
  desc: string;
  icon: string;
  link: string;
  bullets?: string[];
  moreBullets?: string[];
};

const services: Service[] = [
  {
    title: "Painting Services",
    desc: "Professional interior and exterior painting for homes and businesses.",
    icon: "🎨",
    link: "/services/painting",
    bullets: ["Residential & commercial painting", "Interior & exterior finishes"],
    moreBullets: ["Texture finishes & special effects", "Color consultation & finishing"],
  },
  {
    title: "Paint Production",
    desc: "High-quality paint manufacturing for retail and wholesale.",
    icon: "🏭",
    link: "/services/painting",
    bullets: ["Retail & wholesale supply", "Durable paint formulations"],
    moreBullets: ["Custom color mixing", "Bulk production & logistics"],
  },
  {
    title: "Web Development",
    desc: "Modern, responsive websites built with cutting-edge technology.",
    icon: "💻",
    link: "/services/web-dev",
    bullets: ["Business websites", "Admin dashboards"],
    moreBullets: ["SEO optimization", "API integrations"],
  },
  {
    title: "Mobile Apps",
    desc: "Cross-platform mobile applications for iOS and Android.",
    icon: "📱",
    link: "/services/mobile",
    bullets: ["Android & iOS apps", "UI/UX design"],
    moreBullets: ["Cloud sync & authentication", "Performance optimization"],
  },
];

function ServiceCardExpandable({ service }: { service: Service }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl bg-white border-2 border-gold p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
      <div className="text-5xl mb-4">{service.icon}</div>

      <h3 className="text-xl font-bold text-navy mb-3">{service.title}</h3>

      <p className="text-gray-600">{service.desc}</p>

      {/* bullets (always visible) */}
      <ul className="mt-4 space-y-2 text-gray-600">
        {service.bullets?.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
            <span className="leading-relaxed" >{b}</span>
          </li>
        ))}
      </ul>

      {/* smooth expand area */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="more"
            initial={{ height: 0, opacity: 0, y: -6 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <ul className="mt-2 space-y-2 text-gray-600">
              {service.moreBullets?.map((b, i) => (
                <li key={`more-${i}`} className=" flex gap-2 items-start">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-navy" />
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* actions */}
      <div className="mt-auto pt-5 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-gold font-medium hover:underline"
          aria-expanded={open}
        >
          {open ? "View Less ↑" : "View More ↓"}
        </button>

        <Link
          href={service.link}
          className="text-navy font-semibold hover:text-gold transition inline-flex items-center"
        >
          Learn More
          <svg
            className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section className="py-24 bg-navy">
      <div className="container mx-auto px-6">
        <Reveal>
          <h2 className="text-center text-4xl font-bold text-white">Our Services</h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="w-24 h-1 bg-gold mx-auto mt-4 mb-12" />
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {services.map((service, idx) => (
            <Reveal key={service.title} delay={0.12 + idx * 0.08}>
              <ServiceCardExpandable service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
