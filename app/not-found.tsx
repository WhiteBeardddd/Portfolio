import Link from "next/link"

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 py-24 text-center">
      <p className="font-mono text-sm text-subtle">$ curl -I this-page</p>
      <p className="mt-2 font-mono text-5xl font-bold text-accent">404</p>
      <h1 className="mt-4 text-2xl font-bold text-fg">That page isn&apos;t here.</h1>
      <p className="mt-3 text-muted">It may have moved when the portfolio was reorganised into case studies.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/projects" className="rounded-full bg-accent-strong px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-strong-hover">
          Browse projects
        </Link>
        <Link href="/" className="rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-fg hover:border-accent hover:text-accent">
          Go home
        </Link>
      </div>
    </main>
  )
}
