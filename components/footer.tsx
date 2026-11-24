import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-subtle sm:flex-row sm:px-6">
        <p>
          © {new Date().getFullYear()} <span className="text-muted">Charles Benedict Boquecosa</span>
        </p>
        <div className="flex items-center gap-5 font-mono text-xs uppercase tracking-widest">
          <Link href="/projects" className="transition-colors hover:text-accent">
            Projects
          </Link>
          <Link href="/certifications" className="transition-colors hover:text-accent">
            Certifications
          </Link>
          <a
            href="https://github.com/Whitebeardddd"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
