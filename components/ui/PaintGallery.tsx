// "use client";

// import { useEffect, useMemo, useState } from "react";
// import Image from "next/image";
// import { AnimatePresence, motion } from "framer-motion";

// export type GalleryItem = {
//   id: string;
//   src: string;
//   alt: string;
//   tag: string; // category
//   aspect?: "square" | "portrait" | "landscape" | "wide";
//   relatedIds?: string[]; // optional “more like this”
// };

// const aspectClass: Record<NonNullable<GalleryItem["aspect"]>, string> = {
//   square: "aspect-square",
//   portrait: "aspect-[3/4]",
//   landscape: "aspect-[4/3]",
//   wide: "aspect-[16/10]",
// };

// function clampIndex(i: number, len: number) {
//   if (len <= 0) return 0;
//   return (i + len) % len;
// }

// export default function PaintingGallery({ items }: { items: GalleryItem[] }) {
//   const [category, setCategory] = useState<string>("All");
//   const [query, setQuery] = useState("");
//   const [activeId, setActiveId] = useState<string | null>(null);

//   const categories = useMemo(() => {
//     const set = new Set(items.map((i) => i.tag));
//     return ["All", ...Array.from(set)];
//   }, [items]);

//   const filtered = useMemo(() => {
//     const q = query.trim().toLowerCase();
//     return items.filter((it) => {
//       const matchCategory = category === "All" ? true : it.tag === category;
//       const matchQuery =
//         !q ||
//         it.alt.toLowerCase().includes(q) ||
//         it.tag.toLowerCase().includes(q);
//       return matchCategory && matchQuery;
//     });
//   }, [items, category, query]);

//   const activeIndex = useMemo(() => {
//     if (!activeId) return -1;
//     return filtered.findIndex((x) => x.id === activeId);
//   }, [activeId, filtered]);

//   const activeItem = activeIndex >= 0 ? filtered[activeIndex] : null;

//   const open = (id: string) => setActiveId(id);
//   const close = () => setActiveId(null);

//   const goNext = () => {
//     if (filtered.length === 0) return;
//     const next = clampIndex(activeIndex + 1, filtered.length);
//     setActiveId(filtered[next].id);
//   };

//   const goPrev = () => {
//     if (filtered.length === 0) return;
//     const prev = clampIndex(activeIndex - 1, filtered.length);
//     setActiveId(filtered[prev].id);
//   };

//   // keyboard nav
//   useEffect(() => {
//     if (!activeId) return;

//     const onKeyDown = (e: KeyboardEvent) => {
//       if (e.key === "Escape") close();
//       if (e.key === "ArrowRight") goNext();
//       if (e.key === "ArrowLeft") goPrev();
//     };

//     window.addEventListener("keydown", onKeyDown);
//     return () => window.removeEventListener("keydown", onKeyDown);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [activeId, activeIndex, filtered]);

//   // related items: prefer explicit relatedIds, else fall back to same tag
//   const related = useMemo(() => {
//     if (!activeItem) return [];
//     const byId = new Map(items.map((i) => [i.id, i]));
//     const explicit =
//       activeItem.relatedIds?.map((id) => byId.get(id)).filter(Boolean) as
//         | GalleryItem[]
//         | undefined;

//     if (explicit && explicit.length) return explicit.slice(0, 8);

//     // fallback: same category, not itself
//     return items
//       .filter((x) => x.tag === activeItem.tag && x.id !== activeItem.id)
//       .slice(0, 8);
//   }, [activeItem, items]);

//   return (
//     <div className="mt-14">
//       {/* Header */}
//       <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
//         <div>
//           <h3 className="text-3xl font-bold text-navy">Recent Painting Gallery</h3>
//           <div className="w-24 h-1 bg-gold mt-4" />
//         </div>

//         {/* Search */}
//         <div className="w-full sm:w-[320px]">
//           <label className="sr-only" htmlFor="gallery-search">
//             Search gallery
//           </label>
//           <input
//             id="gallery-search"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             placeholder="Search (e.g. interior, exterior...)"
//             className="w-full rounded-xl border-2 border-navy/20 bg-white px-4 py-3 text-sm text-navy outline-none focus:border-gold"
//           />
//         </div>
//       </div>

//       {/* Category pills */}
//       <div className="mt-6 flex flex-wrap gap-2">
//         {categories.map((c) => {
//           const active = c === category;
//           return (
//             <button
//               key={c}
//               type="button"
//               onClick={() => setCategory(c)}
//               className={[
//                 "rounded-full border-2 px-4 py-2 text-sm font-semibold transition",
//                 active
//                   ? "bg-gold border-gold text-navy"
//                   : "bg-white border-navy/20 text-navy hover:border-gold",
//               ].join(" ")}
//             >
//               {c}
//             </button>
//           );
//         })}
//       </div>

//       {/* Masonry */}
//       <div className="mt-8">
//         {/* CSS columns masonry (simple + fast) */}
//         <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:balance]">
//           {filtered.map((img) => (
//             <button
//               key={img.id}
//               type="button"
//               onClick={() => open(img.id)}
//               className="group mb-6 w-full break-inside-avoid rounded-2xl border-2 border-navy bg-white shadow-md hover:shadow-2xl transition text-left overflow-hidden"
//             >
//               <div
//                 className={[
//                   "relative w-full",
//                   aspectClass[img.aspect || "landscape"],
//                 ].join(" ")}
//               >
//                 <Image
//                   src={img.src}
//                   alt={img.alt}
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/35 transition-colors duration-300" />

//                 <div className="absolute left-4 top-4">
//                   <span className="inline-flex items-center rounded-full bg-gold px-3 py-1 text-xs font-semibold text-navy">
//                     {img.tag}
//                   </span>
//                 </div>

//                 <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
//                   <div className="rounded-xl bg-white/90 border border-gold px-4 py-3">
//                     <p className="text-sm font-semibold text-navy">{img.alt}</p>
//                     <p className="text-xs text-gray-700">Tap to preview</p>
//                   </div>
//                 </div>
//               </div>
//             </button>
//           ))}
//         </div>

//         {filtered.length === 0 && (
//           <div className="mt-10 rounded-2xl border-2 border-navy/20 bg-white p-8 text-center">
//             <p className="font-semibold text-navy">No images found</p>
//             <p className="text-sm text-gray-600 mt-1">
//               Try another category or search term.
//             </p>
//           </div>
//         )}
//       </div>

//       {/* Lightbox */}
//       <AnimatePresence>
//         {activeItem && (
//           <motion.div
//             className="fixed inset-0 z-999 flex items-center justify-center bg-black/80 p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onMouseDown={close}
//           >
//             <motion.div
//               className="relative w-full max-w-5xl rounded-2xl bg-white overflow-hidden"
//               initial={{ scale: 0.98, y: 10, opacity: 0 }}
//               animate={{ scale: 1, y: 0, opacity: 1 }}
//               exit={{ scale: 0.98, y: 10, opacity: 0 }}
//               transition={{ type: "spring", stiffness: 260, damping: 22 }}
//               onMouseDown={(e) => e.stopPropagation()}
//             >
//               {/* Top bar */}
//               <div className="flex items-center justify-between gap-3 border-b border-navy/10 p-4">
//                 <div className="min-w-0">
//                   <p className="text-sm font-semibold text-navy truncate">
//                     {activeItem.alt}
//                   </p>
//                   <p className="text-xs text-gray-600">{activeItem.tag}</p>
//                 </div>

//                 <div className="flex items-center gap-2">
//                   <button
//                     type="button"
//                     onClick={goPrev}
//                     className="rounded-lg border border-navy/20 px-3 py-2 text-sm font-semibold text-navy hover:border-gold"
//                     aria-label="Previous"
//                   >
//                     ←
//                   </button>
//                   <button
//                     type="button"
//                     onClick={goNext}
//                     className="rounded-lg border border-navy/20 px-3 py-2 text-sm font-semibold text-navy hover:border-gold"
//                     aria-label="Next"
//                   >
//                     →
//                   </button>
//                   <button
//                     type="button"
//                     onClick={close}
//                     className="rounded-lg bg-navy px-3 py-2 text-sm font-semibold text-white hover:opacity-90"
//                     aria-label="Close"
//                   >
//                     ✕
//                   </button>
//                 </div>
//               </div>

//               {/* Image area (swipe on mobile) */}
//               <div className="relative bg-black">
//                 <motion.div
//                   className="relative w-full aspect-16/10 sm:aspect-4/3"
//                   drag="x"
//                   dragConstraints={{ left: 0, right: 0 }}
//                   dragElastic={0.12}
//                   onDragEnd={(_, info) => {
//                     const swipe = info.offset.x;
//                     const velocity = info.velocity.x;

//                     // swipe threshold
//                     if (swipe < -80 || velocity < -500) goNext();
//                     if (swipe > 80 || velocity > 500) goPrev();
//                   }}
//                 >
//                   <Image
//                     src={activeItem.src}
//                     alt={activeItem.alt}
//                     fill
//                     className="object-contain"
//                   />
//                 </motion.div>
//               </div>

//               {/* Related */}
//               <div className="p-4">
//                 <div className="flex items-center justify-between">
//                   <p className="text-sm font-bold text-navy">More like this</p>
//                   <p className="text-xs text-gray-600">
//                     Swipe image to navigate • Esc to close
//                   </p>
//                 </div>

//                 <div className="mt-3 grid grid-cols-4 sm:grid-cols-6 gap-3">
//                   {related.map((r) => (
//                     <button
//                       key={r.id}
//                       type="button"
//                       onClick={() => open(r.id)}
//                       className="group relative rounded-xl overflow-hidden border border-navy/15 hover:border-gold"
//                       aria-label={`Open related image: ${r.alt}`}
//                     >
//                       <div className="relative aspect-square">
//                         <Image
//                           src={r.src}
//                           alt={r.alt}
//                           fill
//                           className="object-cover transition-transform duration-300 group-hover:scale-110"
//                         />
//                       </div>
//                     </button>
//                   ))}
//                   {related.length === 0 && (
//                     <p className="col-span-full text-sm text-gray-600">
//                       No related images yet for this item.
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  tag: string; // category
  aspect?: "square" | "portrait" | "landscape" | "wide";
  relatedIds?: string[]; // optional “more like this”
};

const aspectClass: Record<NonNullable<GalleryItem["aspect"]>, string> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/10]",
};

function clampIndex(i: number, len: number) {
  if (len <= 0) return 0;
  return (i + len) % len;
}

/** ✅ Your 4 originals become “templates” */
const baseImages: Array<
  Omit<GalleryItem, "id" | "relatedIds"> & { prefix: string }
> = [
  {
    prefix: "interior",
    src: "https://i.pinimg.com/1200x/da/d4/53/dad453c1772c6d82123c8357369276db.jpg",
    alt: "Interior painting project",
    tag: "Interior",
    aspect: "portrait",
  },
  {
    prefix: "production",
    src: "https://i.pinimg.com/736x/a4/95/1f/a4951f09c357ba0424da6a3169e40fa7.jpg",
    alt: "Paint production work",
    tag: "Production",
    aspect: "landscape",
  },
  {
    prefix: "consult",
    src: "https://i.pinimg.com/1200x/e0/2e/0c/e02e0c58226348cd1dc304d272d99ddc.jpg",
    alt: "Color consultation palette",
    tag: "Consultation",
    aspect: "wide",
  },
  {
    prefix: "exterior",
    src: "https://i.pinimg.com/736x/68/61/13/6861131a6a80c2b83116cee873c9ba43.jpg",
    alt: "Exterior painting project",
    tag: "Exterior",
    aspect: "landscape",
  },
];

/** ✅ Generates 100 items with unique IDs + safe relatedIds */
function makeGalleryImages(count = 100): GalleryItem[] {
  const items: GalleryItem[] = Array.from({ length: count }, (_, i) => {
    const t = baseImages[i % baseImages.length];
    const n = i + 1;

    return {
      id: `${t.prefix}-${n}`,
      src: t.src,
      alt: t.alt,
      tag: t.tag,
      aspect: t.aspect,
      // temporary; we'll fix relatedIds after we know all ids
      relatedIds: [],
    };
  });

  // Build a map: prefix -> list of ids in order
  const byPrefix = new Map<string, string[]>();
  for (const it of items) {
    const prefix = it.id.split("-")[0];
    if (!byPrefix.has(prefix)) byPrefix.set(prefix, []);
    byPrefix.get(prefix)!.push(it.id);
  }

  // Assign “more like this”: next 2 within same prefix group
  for (const it of items) {
    const prefix = it.id.split("-")[0];
    const list = byPrefix.get(prefix) || [];
    const idx = list.indexOf(it.id);

    const r1 = list[(idx + 1) % list.length];
    const r2 = list[(idx + 2) % list.length];

    it.relatedIds = [r1, r2].filter(Boolean);
  }

  return items;
}

/** ✅ Generated right here */
const galleryImages: GalleryItem[] = makeGalleryImages(100);

export default function PaintingGallery({
  items = galleryImages, // ✅ default to generated list
}: {
  items?: GalleryItem[];
}) {
  const [category, setCategory] = useState<string>("All");
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState<string | null>(null);

  const categories = useMemo(() => {
    const set = new Set(items.map((i) => i.tag));
    return ["All", ...Array.from(set)];
  }, [items]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((it) => {
      const matchCategory = category === "All" ? true : it.tag === category;
      const matchQuery =
        !q ||
        it.alt.toLowerCase().includes(q) ||
        it.tag.toLowerCase().includes(q);
      return matchCategory && matchQuery;
    });
  }, [items, category, query]);

  const activeIndex = useMemo(() => {
    if (!activeId) return -1;
    return filtered.findIndex((x) => x.id === activeId);
  }, [activeId, filtered]);

  const activeItem = activeIndex >= 0 ? filtered[activeIndex] : null;

  const open = (id: string) => setActiveId(id);
  const close = () => setActiveId(null);

  const goNext = () => {
    if (filtered.length === 0) return;
    const next = clampIndex(activeIndex + 1, filtered.length);
    setActiveId(filtered[next].id);
  };

  const goPrev = () => {
    if (filtered.length === 0) return;
    const prev = clampIndex(activeIndex - 1, filtered.length);
    setActiveId(filtered[prev].id);
  };

  // lock body scroll when lightbox is open
  useEffect(() => {
    if (!activeId) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [activeId]);

  useEffect(() => {
    if (!activeId) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId, activeIndex, filtered]);

  const related = useMemo(() => {
    if (!activeItem) return [];
    const byId = new Map(items.map((i) => [i.id, i]));
    const explicit = activeItem.relatedIds
      ?.map((id) => byId.get(id))
      .filter(Boolean) as GalleryItem[] | undefined;

    if (explicit && explicit.length) return explicit.slice(0, 8);

    return items
      .filter((x) => x.tag === activeItem.tag && x.id !== activeItem.id)
      .slice(0, 8);
  }, [activeItem, items]);

  return (
    <div className="mt-14">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="text-3xl font-bold text-navy">
            Recent Painting Gallery
          </h3>
          <div className="w-24 h-1 bg-gold mt-4" />
        </div>

        {/* Search */}
        <div className="w-full sm:w-[320px]">
          <label className="sr-only" htmlFor="gallery-search">
            Search gallery
          </label>
          <input
            id="gallery-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search (e.g. interior, exterior...)"
            className="w-full rounded-xl border-2 border-navy/20 bg-white px-4 py-3 text-sm text-navy outline-none focus:border-gold"
          />
        </div>
      </div>

      {/* Category pills */}
      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map((c) => {
          const active = c === category;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={[
                "rounded-full border-2 px-4 py-2 text-sm font-semibold transition",
                active
                  ? "bg-gold border-gold text-navy"
                  : "bg-white border-navy/20 text-navy hover:border-gold",
              ].join(" ")}
            >
              {c}
            </button>
          );
        })}
      </div>

      {/* Masonry */}
      <div className="mt-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:balance]">
          {filtered.map((img) => (
            <button
              key={img.id}
              type="button"
              onClick={() => open(img.id)}
              className="group mb-6 w-full break-inside-avoid rounded-2xl border-2 border-navy bg-white shadow-md hover:shadow-2xl transition text-left overflow-hidden"
            >
              <div
                className={[
                  "relative w-full",
                  aspectClass[img.aspect || "landscape"],
                ].join(" ")}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/35 transition-colors duration-300" />

                <div className="absolute left-4 top-4">
                  <span className="inline-flex items-center rounded-full bg-gold px-3 py-1 text-xs font-semibold text-navy">
                    {img.tag}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="rounded-xl bg-white/90 border border-gold px-4 py-3">
                    <p className="text-sm font-semibold text-navy">{img.alt}</p>
                    <p className="text-xs text-gray-700">Tap to preview</p>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-10 rounded-2xl border-2 border-navy/20 bg-white p-8 text-center">
            <p className="font-semibold text-navy">No images found</p>
            <p className="text-sm text-gray-600 mt-1">
              Try another category or search term.
            </p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            className="fixed inset-0 z-999 flex items-center justify-center bg-black/80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={close}
          >
            <motion.div
              className="relative w-full max-w-5xl max-h-[85vh] rounded-2xl bg-white overflow-hidden"
              initial={{ scale: 0.98, y: 10, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.98, y: 10, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              onMouseDown={(e) => e.stopPropagation()}
            >
              {/* Top bar */}

              <div className="max-h-[85vh] overflow-y-auto">
                <div className="flex items-center justify-between gap-3 border-b border-navy/10 p-4">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-navy truncate">
                      {activeItem.alt}
                    </p>
                    <p className="text-xs text-gray-600">{activeItem.tag}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={goPrev}
                      className="rounded-lg border border-navy/20 px-3 py-2 text-sm font-semibold text-navy hover:border-gold"
                      aria-label="Previous"
                    >
                      ←
                    </button>
                    <button
                      type="button"
                      onClick={goNext}
                      className="rounded-lg border border-navy/20 px-3 py-2 text-sm font-semibold text-navy hover:border-gold"
                      aria-label="Next"
                    >
                      →
                    </button>
                    <button
                      type="button"
                      onClick={close}
                      className="rounded-lg bg-navy px-3 py-2 text-sm font-semibold text-white hover:opacity-90"
                      aria-label="Close"
                    >
                      ✕
                    </button>
                  </div>
                </div>

                {/* Image area */}
                <div className="relative bg-black">
                  <motion.div
                    className="relative w-full aspect-16/10 sm:aspect-4/3"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.12}
                    onDragEnd={(_, info) => {
                      const swipe = info.offset.x;
                      const velocity = info.velocity.x;
                      if (swipe < -80 || velocity < -500) goNext();
                      if (swipe > 80 || velocity > 500) goPrev();
                    }}
                  >
                    <Image
                      src={activeItem.src}
                      alt={activeItem.alt}
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                </div>

                {/* Related */}
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-bold text-navy">
                      More like this
                    </p>
                    <p className="text-xs text-gray-600">
                      Swipe image to navigate • Esc to close
                    </p>
                  </div>

                  <div className="mt-3 grid grid-cols-4 sm:grid-cols-6 gap-3">
                    {related.map((r) => (
                      <button
                        key={r.id}
                        type="button"
                        onClick={() => open(r.id)}
                        className="group relative rounded-xl overflow-hidden border border-navy/15 hover:border-gold"
                        aria-label={`Open related image: ${r.alt}`}
                      >
                        <div className="relative aspect-square">
                          <Image
                            src={r.src}
                            alt={r.alt}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                      </button>
                    ))}
                    {related.length === 0 && (
                      <p className="col-span-full text-sm text-gray-600">
                        No related images yet for this item.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
