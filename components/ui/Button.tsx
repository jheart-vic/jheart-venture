import { cn } from "@/lib/utils";

export default function Button({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={cn(
        "rounded-lg bg-gold text-navy px-8 py-4 font-bold hover:bg-gold-dark transition-all duration-300 transform hover:scale-105 shadow-lg",
        className
      )}
    >
      {children}
    </button>
  );
}
