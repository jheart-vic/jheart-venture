"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {  useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type NavItem = { label: string; href: string };

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Painting", href: "/services/painting" },
  { label: "Web & Mobile", href: "/services/web-dev" },
  { label: "Contact", href: "/contact" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

function NavLink({
  href,
  label,
  active,
  onClick,
}: NavItem & { active: boolean; onClick?: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "relative rounded-md px-4 py-2 text-sm font-semibold transition-colors",
        active ? "text-gold" : "text-white hover:text-gold"
      )}
    >
      {label}
      {active ? (
        <motion.span
          layoutId="nav-underline"
          className="absolute left-0 right-0 -bottom-1 h-0.5 rounded bg-gold"
          transition={{ duration: 0.25, ease: "easeOut" }}
        />
      ) : null}
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on route change
  // useEffect(() => setMobileOpen(false), [pathname]);

  const activeIndex = useMemo(() => {
    const idx = NAV_ITEMS.findIndex((i) => isActivePath(pathname, i.href));
    return idx === -1 ? 0 : idx;
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-navy/95 backdrop-blur shadow-xl bg-navy">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <Link href="/" className="text-2xl font-bold text-gold hover:text-gold-dark transition-colors flex items-center gap-2">
       
            <Image
              src="/images/jh-logo1.png"
            alt="Company Logo"
            width={200}
            height={200}
            priority
            className="object-contain w-10 h-10"
            />
          {/* <img src="images/jh-logo1.png" alt=""  /> */}
          Jheart Ventures
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.href}
              {...item}
              active={isActivePath(pathname, item.href)}
            />
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact">
            <Button className="hidden sm:inline-flex text-sm px-6 py-2">Get a Quote</Button>
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-lg border-2 border-gold px-3 py-2 md:hidden hover:bg-gold/10 transition-colors"
          >
            <span className="sr-only">Menu</span>
            <div className="relative h-4 w-5">
              <span
                className={cn(
                  "absolute left-0 top-0 h-0.5 w-5 bg-gold transition-transform",
                  mobileOpen ? "translate-y-2 rotate-45" : ""
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1.5 h-0.5 w-5 bg-gold transition-opacity",
                  mobileOpen ? "opacity-0" : "opacity-100"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-3 h-0.5 w-5 bg-gold transition-transform",
                  mobileOpen ? "-translate-y-1 -rotate-45" : ""
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {mobileOpen ? (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/50 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              className="absolute left-0 right-0 z-50 border-b-2 border-gold bg-navy md:hidden shadow-xl"
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="container mx-auto px-6 py-6">
                <div className="flex flex-col gap-2">
                  {NAV_ITEMS.map((item, idx) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: reduceMotion ? 0 : idx * 0.05 }}
                    >
                      <NavLink
                        {...item}
                        active={activeIndex === idx}
                        onClick={() => setMobileOpen(false)}
                      />
                    </motion.div>
                  ))}

                  <Link href="/contact" onClick={() => setMobileOpen(false)}>
                    <Button className="mt-4 w-full">Get a Quote</Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
