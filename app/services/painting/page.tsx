import type { Metadata } from "next";
import Reveal from "@/components/motion/Reveal";
import HeroCarousel from "@/components/ui/HeroCarousel";
import PaintingGallery, {
  type GalleryItem,
} from "@/components/ui/PaintGallery";

export const metadata: Metadata = {
  title: "Painting Services & Production | Jheart Ventures",
  description:
    "Professional painting, paint production, and color consultation from Jheart Ventures.",
};

const heroSlides = [
  {
    title: "Professional Painting Services",
    subtitle: "Transform Your Space",
    description:
      "Expert interior and exterior painting that brings your vision to life with precision and care.",
    buttonText: "Get a Quote",
    buttonLink: "/contact",
    imageSrc:
      "https://i.pinimg.com/736x/68/61/13/6861131a6a80c2b83116cee873c9ba43.jpg",
    imageAlt: "Paint production",
  },
  {
    title: "Premium Paint Production",
    subtitle: "Quality Manufacturing",
    description:
      "Locally crafted paints that meet international standards for durability and beauty.",
    buttonText: "View Products",
    buttonLink: "#products",
    imageSrc:
      "https://i.pinimg.com/736x/a4/95/1f/a4951f09c357ba0424da6a3169e40fa7.jpg",
    imageAlt: "Paint production",
  },
  {
    title: "Color Consultation",
    subtitle: "Expert Guidance",
    description:
      "Professional advice to help you choose the perfect colors for your project.",
    buttonText: "Schedule Consultation",
    buttonLink: "/contact",
    imageSrc:
      "https://i.pinimg.com/1200x/e0/2e/0c/e02e0c58226348cd1dc304d272d99ddc.jpg",
    imageAlt: "Paint production",
  },
];

// const galleryImages: GalleryItem[] = [
//   {
//     id: "interior-1",
//     src: "https://i.pinimg.com/1200x/da/d4/53/dad453c1772c6d82123c8357369276db.jpg",
//     alt: "Interior painting project",
//     tag: "Interior",
//     aspect: "portrait",
//     relatedIds: ["interior-2", "interior-3"],
//   },
//   {
//     id: "production-1",
//     src: "https://i.pinimg.com/736x/a4/95/1f/a4951f09c357ba0424da6a3169e40fa7.jpg",
//     alt: "Paint production work",
//     tag: "Production",
//     aspect: "landscape",
//     relatedIds: ["production-2"],
//   },
//   {
//     id: "consult-1",
//     src: "https://i.pinimg.com/1200x/e0/2e/0c/e02e0c58226348cd1dc304d272d99ddc.jpg",
//     alt: "Color consultation palette",
//     tag: "Consultation",
//     aspect: "wide",
//   },
//   {
//     id: "exterior-1",
//     src: "https://i.pinimg.com/736x/68/61/13/6861131a6a80c2b83116cee873c9ba43.jpg",
//     alt: "Exterior painting project",
//     tag: "Exterior",
//     aspect: "landscape",
//   },
// ];

const services = [
  {
    title: "Interior Painting",
    desc: "Walls, ceilings, trim — clean finishes for every room.",
    icon: "🏠",
  },
  {
    title: "Exterior Painting",
    desc: "Weather-resistant coatings for lasting protection.",
    icon: "🏗️",
  },
  {
    title: "Paint Production",
    desc: "Custom formulations for retail and wholesale.",
    icon: "🎨",
  },
  {
    title: "Color Consultation",
    desc: "Expert advice on palettes and finishes.",
    icon: "🎯",
  },
];

export default function PaintingPage() {
  return (
    <>
      <HeroCarousel slides={heroSlides} autoPlayInterval={5000} />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <h1 className="text-4xl font-bold text-navy">
                Painting Services & Production
              </h1>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="w-24 h-1 bg-gold mt-4 mb-6" />
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-lg text-gray-700">
                Quality painting and paint manufacturing backed by years of
                experience.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              {services.map((s, idx) => (
                <Reveal
                  key={s.title}
                  delay={0.16 + idx * 0.06}
                  whileHover={{ scale: 1.06 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="rounded-xl border-2 border-navy p-8 hover:shadow-xl transition-all bg-linear-to-br from-white to-gold-light"
                >
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h2 className="text-xl font-bold text-navy mb-3">
                    {s.title}
                  </h2>
                  <p className="text-gray-700">{s.desc}</p>
                </Reveal>
              ))}
            </div>

            <Reveal
              delay={0.32}
              className="mt-14 rounded-xl bg-navy p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4 text-center">Our Process</h3>

              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 items-center sm:justify-start">
                {/* 1 */}
                <span className="bg-gold text-navy px-4 py-2 rounded-full font-semibold">
                  Consultation
                </span>

                {/* arrows */}
                <span className="text-gold text-xl sm:hidden">↓</span>
                <span className="text-gold sm:inline hidden">→</span>

                {/* 2 */}
                <span className="bg-gold text-navy px-4 py-2 rounded-full font-semibold">
                  Preparation
                </span>

                <span className="text-gold text-xl sm:hidden">↓</span>
                <span className="text-gold sm:inline hidden">→</span>

                {/* 3 */}
                <span className="bg-gold text-navy px-4 py-2 rounded-full font-semibold">
                  Application
                </span>

                <span className="text-gold text-xl sm:hidden">↓</span>
                <span className="text-gold sm:inline hidden">→</span>

                {/* 4 */}
                <span className="bg-gold text-navy px-4 py-2 rounded-full font-semibold">
                  Inspection
                </span>

                <span className="text-gold text-xl sm:hidden">↓</span>
                <span className="text-gold sm:inline hidden">→</span>

                {/* 5 */}
                <span className="bg-gold text-navy px-4 py-2 rounded-full font-semibold">
                  Satisfaction
                </span>
              </div>
            </Reveal>

            <Reveal
              delay={0.38}
              whileHover={{ scale: 1.06, y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="mt-10 rounded-xl border-2 border-gold p-8 bg-gold-light"
            >
              <h3 className="text-2xl font-bold text-navy mb-4">
                Why Our Paint?
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span>
                    <strong>Durable:</strong> Long-lasting finish that
                    withstands the elements
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span>
                    <strong>Eco-friendly:</strong> Low VOC formulations for
                    healthier spaces
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span>
                    <strong>Affordable:</strong> Premium quality at competitive
                    prices
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span>
                    <strong>Custom colors:</strong> Wide range of options to
                    match your vision
                  </span>
                </li>
              </ul>
            </Reveal>

            {/* Gallery */}
            <PaintingGallery />
          </div>
        </div>
      </section>
    </>
  );
}
