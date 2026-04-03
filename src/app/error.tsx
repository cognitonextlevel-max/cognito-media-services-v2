"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Client error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl sm:text-8xl font-cabinet font-black text-zinc-900 leading-none tracking-tighter mb-4">
        ERROR
      </h1>
      <p className="text-sm font-mono uppercase tracking-[0.4em] text-zinc-600 mb-8">
        Something went wrong
      </p>
      <div className="flex gap-4">
        <button
          type="button"
          onClick={reset}
          className="px-6 py-3 bg-cyan-400 text-black text-xs font-mono font-black uppercase tracking-[0.3em] rounded-sm hover:bg-white transition-all"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="px-6 py-3 border border-zinc-800 text-zinc-400 text-xs font-mono font-black uppercase tracking-[0.3em] rounded-sm hover:border-cyan-400 hover:text-cyan-400 transition-all"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
