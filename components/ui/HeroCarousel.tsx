"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface Slide {
  title: string;
  subtitle: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  imageSrc: string;
  imageAlt?: string;
}

interface HeroCarouselProps {
  slides: Slide[];
  autoPlayInterval?: number;
}

export default function HeroCarousel({
  slides,
  autoPlayInterval = 5000,
}: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const hasSlides = slides?.length > 0;

  // Keep index valid if slides change
  useEffect(() => {
    if (!hasSlides) return;
    setCurrentIndex((i) => Math.min(i, slides.length - 1));
  }, [hasSlides, slides.length]);

  // Autoplay
  useEffect(() => {
    if (!hasSlides) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [hasSlides, slides.length, autoPlayInterval]);

  const currentSlide = useMemo(() => {
    if (!hasSlides) return null;
    return slides[currentIndex];
  }, [hasSlides, slides, currentIndex]);

  const goToSlide = (index: number) => {
    if (!hasSlides) return;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    if (!hasSlides) return;
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    if (!hasSlides) return;
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (!hasSlides) {
    return (
      <section className="relative overflow-hidden bg-navy min-h-150 flex items-center">
        <div className="container mx-auto px-6 py-20 text-center text-white">
          <h2 className="text-2xl font-semibold">No slides provided</h2>
          <p className="text-gray-300 mt-2">
            Pass a slides array with imageSrc, title, subtitle, and description.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden min-h-180 flex items-center">
      {/* ===================== */}
      {/* Background Image Layer */}
      {/* ===================== */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide!.imageSrc}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src={currentSlide!.imageSrc}
              alt={currentSlide!.imageAlt || currentSlide!.title}
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-linear-to-br from-black/50 via-navy/55 to-black/50" />

      </div>

      {/* ===================== */}
      {/* Pattern Overlay Layer  */}
      {/* ===================== */}
      <div className="absolute inset-0 z-1 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255, 215, 0, 0.3) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* ===================== */}
      {/* Accent Lines Layer     */}
      {/* ===================== */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gold z-2"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-gold z-2"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      />

      {/* ===================== */}
      {/* Content Layer          */}
      {/* ===================== */}
      <div className="container mx-auto px-6 py-20 relative z-3">
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-4"
              >
                <span className="text-gold text-sm font-semibold tracking-wider uppercase px-4 py-2 border border-gold rounded-full">
                  {currentSlide!.subtitle}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
              >
                {currentSlide!.title}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-3xl text-gray-100 max-w-3xl mx-auto mb-8"
              >
                {currentSlide!.description}
              </motion.p>

              {/* Button */}
              {currentSlide!.buttonText && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <a
                    href={currentSlide!.buttonLink || "#"}
                    className="inline-block bg-gold text-navy px-8 py-4 rounded-lg font-semibold hover:bg-gold-dark transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    {currentSlide!.buttonText}
                  </a>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-gold/20 hover:bg-gold text-white hover:text-navy transition-all duration-300 flex items-center justify-center group"
              aria-label="Previous slide"
            >
              <svg
                className="w-6 h-6 transform group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 ${
                    index === currentIndex
                      ? "w-12 h-3 bg-gold rounded-full"
                      : "w-3 h-3 bg-gold/40 hover:bg-gold/60 rounded-full"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-gold/20 hover:bg-gold text-white hover:text-navy transition-all duration-300 flex items-center justify-center group"
              aria-label="Next slide"
            >
              <svg
                className="w-6 h-6 transform group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ===================== */}
      {/* Decorative Shapes      */}
      {/* ===================== */}
      <div className="absolute top-20 right-10 w-32 h-32 border-4 border-gold/20 rounded-full animate-pulse z-2" />
      <div
        className="absolute bottom-20 left-10 w-24 h-24 border-4 border-gold/20 rounded-lg rotate-45 animate-pulse z-2"
        style={{ animationDelay: "1s" }}
      />
    </section>
  );
}
