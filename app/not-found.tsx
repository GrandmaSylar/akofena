import Link from "next/link";
import AkofenaIcon from "@/components/AkofenaIcon";

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center bg-ink px-6 text-center">
      <AkofenaIcon size={48} color="rgba(59,130,246,0.4)" className="mb-8" />
      <p className="text-white/20 text-xs font-mono uppercase tracking-widest mb-4">404</p>
      <h1 className="text-3xl font-bold text-white mb-3">Page not found</h1>
      <p className="text-white/40 text-sm mb-8 max-w-xs">
        This page does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue text-white text-sm font-semibold rounded-sm hover:bg-blue-light active:scale-[0.98] transition-all"
      >
        Go home
      </Link>
    </div>
  );
}
