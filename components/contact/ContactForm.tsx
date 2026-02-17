"use client";

import { useMemo, useState } from "react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";

const SERVICES = [
  "Painting Services & Paint Production",
  "Web & Mobile Development",
];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(SERVICES[0]);
  const [message, setMessage] = useState("");

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`Jheart Ventures — ${service}`);
    const body = encodeURIComponent(
      `Name: ${name}
Email: ${email}
Service: ${service}

Message:
${message}`
    );
    return `mailto:adebowalevictor722@gmail.com?subject=${subject}&body=${body}`;
  }, [name, email, service, message]);

  return (
    <Reveal delay={0.2} className="rounded-2xl border-2 border-navy p-8 bg-linear-to-br from-white to-gold-light">
      <h2 className="text-2xl font-bold text-navy mb-2">Send a Message</h2>
      <div className="w-16 h-1 bg-gold mb-4" />
      <p className="text-gray-700 mb-8">
        Fill the form and we'll get back to you shortly.
      </p>

      <div className="grid gap-5">
        <div className="grid gap-2">
          <label className="text-sm font-semibold text-navy">Name</label>
          <input
            className="h-12 rounded-lg border-2 border-navy/20 px-4 outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-semibold text-navy">Email</label>
          <input
            type="email"
            className="h-12 rounded-lg border-2 border-navy/20 px-4 outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-semibold text-navy">Service</label>
          <select
            className="h-12 rounded-lg border-2 border-navy/20 px-4 outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all bg-white"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-semibold text-navy">Message</label>
          <textarea
            className="min-h-35 rounded-lg border-2 border-navy/20 p-4 outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us about your project..."
          />
        </div>

        <a href={mailto}>
          <Button className="w-full">Send Email</Button>
        </a>

        {/* <p className="text-xs text-gray-600">
          Note: Replace <span className="font-semibold text-navy">hello@jheartventures.com</span> with your real business email.
        </p> */}
      </div>
    </Reveal>
  );
}
