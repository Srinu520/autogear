import { business } from "@/lib/siteData";

export function OpenNowBadge() {
  return (
    <div
      className="fixed bottom-20 right-4 z-40 flex items-center gap-3 rounded-full border border-white/10 bg-neutral-950/80 px-4 py-3 text-xs shadow-[0_8px_24px_rgba(0,0,0,0.45)] backdrop-blur md:bottom-6 md:right-6"
      aria-live="polite"
    >
      <span className="h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
      <div className="flex flex-col">
        <span className="font-semibold">{business.openStatus}</span>
        <span className="text-gray-400">Open {business.hours}</span>
      </div>
    </div>
  );
}

