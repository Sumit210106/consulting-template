import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-ink text-cream flex flex-col items-center justify-center p-6 text-center select-none">
      <div className="space-y-6 max-w-sm">
        <div className="font-mono-label text-lime tracking-[0.3em] text-xs">404 ERROR</div>
        <h1 className="text-3xl font-display font-medium tracking-tight">
          Page Not Found
        </h1>
        <p className="text-muted-foreground text-sm leading-relaxed">
          The requested page is not active or could not be found.
        </p>
        {/* <div className="pt-4">
          <Link
            href="/jrv"
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-mono-label border border-white/10 rounded-md hover:border-lime/30 hover:text-lime transition-all duration-300"
          >
            Go to Portal
          </Link>
        </div> */}
      </div>
    </main>
  );
}
