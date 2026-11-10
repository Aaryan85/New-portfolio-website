import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <span className="font-mono text-sm uppercase tracking-widest text-sky-500 mb-2">
        ERROR 404
      </span>
      <h1 className="text-5xl sm:text-7xl font-black text-zinc-950 dark:text-white tracking-tight">
        Page Not Found
      </h1>
      <p className="mt-3 text-sm sm:text-base text-zinc-500 dark:text-zinc-400 max-w-md">
        The route or case study you requested could not be located in this directory.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-950 text-white dark:bg-white dark:text-black text-xs font-mono font-medium hover:opacity-90 transition-opacity"
      >
        <ArrowLeft size={14} />
        RETURN HOME
      </Link>
    </div>
  );
}

