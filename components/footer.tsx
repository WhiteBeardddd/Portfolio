import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-gray-500 sm:flex-row sm:px-6">
        <p>
          © {new Date().getFullYear()} <span className="text-gray-300">Charles Benedict Boquecosa</span>
        </p>
        <div className="flex items-center gap-5 font-mono text-xs uppercase tracking-widest">
          <Link href="/projects" className="hover:text-accent transition-colors">Projects</Link>
          <Link href="/certifications" className="hover:text-accent transition-colors">Certifications</Link>
          <a href="https://github.com/Whitebeardddd" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
