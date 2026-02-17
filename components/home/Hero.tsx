"use client";

import HeroCarousel from "@/components/ui/HeroCarousel";

const slides = [
  {
    title: "Painting Excellence & Digital Innovation",
    subtitle: "Professional Services",
    description:
      "Transform your spaces with expert painting and bring your digital vision to life with cutting-edge web solutions.",
    buttonText: "Explore Our Services",
    buttonLink: "/services",
    imageSrc:  "https://i.pinimg.com/1200x/da/d4/53/dad453c1772c6d82123c8357369276db.jpg",
    imageAlt: "Painting and digital services",
  },
  {
    title: "Premium Paint Production & Consultation",
    subtitle: "Quality Manufacturing",
    description:
      "Locally crafted, internationally standard paints that deliver lasting beauty and protection for every surface.",
    buttonText: "View Our Products",
    buttonLink: "/services/painting",
    imageSrc: "https://i.pinimg.com/1200x/e0/2e/0c/e02e0c58226348cd1dc304d272d99ddc.jpg",
    imageAlt: "Paint production",
  },
  {
    title: "Modern Web & Mobile Solutions",
    subtitle: "Digital Excellence",
    description:
      "Build powerful digital experiences with our expert development team - from websites to mobile apps.",
    buttonText: "Start Your Project",
    buttonLink: "/services/web-dev",
    imageSrc: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Web and mobile development",
  },
  {
    title: "Your Trusted Partner in Growth",
    subtitle: "Jheart Ventures",
    description:
      "Combining traditional craftsmanship with modern technology to deliver exceptional results for your business.",
    buttonText: "Contact Us Today",
    buttonLink: "/contact",
    imageSrc: "https://i.pinimg.com/736x/3a/c3/3a/3ac33a30c33381f282cd5e2489142d42.jpg",
    imageAlt: "Business growth partnership",
  },
];

export default function Hero() {
  return <HeroCarousel slides={slides} autoPlayInterval={6000} />;
}
