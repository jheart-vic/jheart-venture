import type { Metadata } from "next";
import Reveal from "@/components/motion/Reveal";
import ContactForm from "@/components/contact/ContactForm";
import HeroCarousel from "@/components/ui/HeroCarousel";

export const metadata: Metadata = {
  title: "Contact | Jheart Ventures",
  description:
    "Get in touch with Jheart Ventures for painting services, paint production, or web and mobile development.",
};

const heroSlides = [
  {
    title: "Let's Work Together",
    subtitle: "Get In Touch",
    description:
      "Ready to transform your space or build your digital presence? We're here to help.",
    buttonText: "Contact Us Now",
    buttonLink: "#contact-form",
    imageSrc:
    "https://i.pinimg.com/736x/68/61/13/6861131a6a80c2b83116cee873c9ba43.jpg",
  imageAlt: "Contact background image", 
  },
  {
    title: "Professional Service Awaits",
    subtitle: "Reach Out Today",
    description:
      "From painting to web development, we deliver excellence in every project.",
    buttonText: "Start Conversation",
    buttonLink: "#contact-form",
    imageSrc:
      "https://i.pinimg.com/736x/ea/e1/24/eae124894b63a41758a311c5da351143.jpg",
    imageAlt: "Contact background image",
  },
  {
    title: "Your Success is Our Priority",
    subtitle: "Connect With Us",
    description:
      "Experience the Jheart Ventures difference. Quality, reliability, and results.",
    buttonText: "Get Started",
    buttonLink: "#contact-form",
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1673463876287-13c16606973c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29udGFjdCUyMGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
    imageAlt: "Contact background image",
  },
];

export default function ContactPage() {
  return (
    <>
      <HeroCarousel slides={heroSlides} autoPlayInterval={5000} />

      <section className="py-24 bg-white" id="contact-form">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <h1 className="text-4xl font-bold text-navy">
                Contact Jheart Ventures
              </h1>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="w-24 h-1 bg-gold mt-4 mb-6" />
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-lg text-gray-700">
                Tell us what you need and we'll respond with next steps.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-8 lg:grid-cols-2">
              <div className="grid gap-6">
                <Reveal delay={0.16} className="rounded-2xl bg-navy p-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    Quick Contact
                  </h2>
                  <p className="text-gray-300 mb-6">
                    Prefer WhatsApp or a call? Reach out directly.
                  </p>
                  <div className="grid gap-3">
                    <a
                      className="rounded-lg bg-gold text-navy px-6 py-4 font-semibold hover:bg-gold-dark transition-all flex items-center justify-center gap-2"
                      href="https://wa.me/2349056622820"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>📱</span> WhatsApp Us
                    </a>

                    <a
                      className="rounded-lg border-2 border-gold text-gold px-6 py-4 font-semibold hover:bg-gold hover:text-navy transition-all flex items-center justify-center gap-2"
                      href="tel:+2349056622820"
                    >
                      <span>📞</span> Call 09056622820
                    </a>
                  </div>
                </Reveal>

                <Reveal
                  delay={0.2}
                  className="rounded-2xl border-2 border-gold p-8 bg-gold-light"
                >
                  <h3 className="font-bold text-xl text-navy mb-3">
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p className="flex items-center gap-2">
                      <span className="text-gold">🕐</span>
                      <span className="font-semibold">Mon–Sat:</span> 9am – 6pm
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-gold">🌍</span>
                      <span>Nigeria (WAT)</span>
                    </p>
                  </div>
                </Reveal>

                <Reveal
                  delay={0.24}
                  className="rounded-2xl border-2 border-navy p-8"
                >
                  <h3 className="font-bold text-xl text-navy mb-3">
                    What We Offer
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-gold">✓</span> Painting Services
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold">✓</span> Paint Production
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold">✓</span> Web Development
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold">✓</span> Mobile Apps
                    </li>
                  </ul>
                </Reveal>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
