import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 grid-blueprint opacity-10" />

      <div className="relative z-10">
        <h1 className="text-[120px] sm:text-[200px] font-cabinet font-black text-zinc-900 leading-none tracking-tighter">
          404
        </h1>
        <p className="text-caption font-mono uppercase tracking-[0.5em] text-zinc-600 mb-8 -mt-4">
          System Path Not Found
        </p>
        <Link
          href="/"
          className="inline-flex px-8 py-3 bg-cyan-400 text-black text-caption font-mono font-black uppercase tracking-[0.4em] rounded-sm hover:bg-white transition-all duration-500"
        >
          Return to Base
        </Link>
      </div>
    </div>
  );
}
