"use client"

import Image from "next/image"
import { useCallback, useEffect, useRef, useState } from "react"
import type { Shot } from "@/lib/data"

/*
 * Evidence gallery with a native <dialog> lightbox.
 * Escape closes (browser default), arrow keys step through images,
 * focus returns to the thumbnail that opened it.
 */
export default function Gallery({ shots }: { shots: Shot[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const openerRef = useRef<HTMLButtonElement | null>(null)
  const [index, setIndex] = useState<number | null>(null)

  const open = (i: number, opener: HTMLButtonElement) => {
    openerRef.current = opener
    setIndex(i)
    dialogRef.current?.showModal()
  }

  const close = useCallback(() => dialogRef.current?.close(), [])

  const step = useCallback(
    (delta: number) => setIndex((i) => (i === null ? i : (i + delta + shots.length) % shots.length)),
    [shots.length]
  )

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    const onClose = () => {
      setIndex(null)
      openerRef.current?.focus()
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1)
      if (e.key === "ArrowLeft") step(-1)
    }
    dialog.addEventListener("close", onClose)
    dialog.addEventListener("keydown", onKey)
    return () => {
      dialog.removeEventListener("close", onClose)
      dialog.removeEventListener("keydown", onKey)
    }
  }, [step])

  const [lead, ...rest] = shots
  const current = index === null ? null : shots[index]

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        {[lead, ...rest].map((shot, i) => (
          <figure key={shot.src} className={i === 0 && shots.length > 2 ? "sm:col-span-2" : undefined}>
            <button
              type="button"
              onClick={(e) => open(i, e.currentTarget)}
              className="group relative block w-full overflow-hidden rounded-xl border border-line bg-panel-2 transition-colors hover:border-accent/50"
              aria-label={`Enlarge: ${shot.caption}`}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                width={shot.width}
                height={shot.height}
                sizes={i === 0 && shots.length > 2 ? "(min-width: 1024px) 768px, 100vw" : "(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"}
                className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <span
                aria-hidden
                className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-ink/80 text-accent opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
            <figcaption className="mt-2 text-sm leading-snug text-muted">{shot.caption}</figcaption>
          </figure>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        aria-label={current ? current.caption : "Image viewer"}
        className="m-auto max-h-[92vh] w-[min(96vw,1400px)] overflow-visible bg-transparent p-0 text-fg"
        onClick={(e) => {
          if (e.target === e.currentTarget) close()
        }}
      >
        {current && (
          <figure className="flex flex-col items-center">
            <Image
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              sizes="96vw"
              className="max-h-[78vh] w-auto rounded-lg object-contain"
            />
            <figcaption className="mt-3 flex w-full flex-wrap items-center justify-between gap-3 px-1 text-sm text-muted">
              <span>
                <span className="mr-2 font-mono text-xs text-subtle">
                  {(index ?? 0) + 1}/{shots.length}
                </span>
                {current.caption}
              </span>
              <span className="flex gap-2">
                {shots.length > 1 && (
                  <>
                    <button type="button" onClick={() => step(-1)} className="rounded-full border border-line px-3 py-1.5 text-fg hover:border-accent hover:text-accent">
                      ← Prev
                    </button>
                    <button type="button" onClick={() => step(1)} className="rounded-full border border-line px-3 py-1.5 text-fg hover:border-accent hover:text-accent">
                      Next →
                    </button>
                  </>
                )}
                <button type="button" onClick={close} className="rounded-full bg-accent-strong px-3 py-1.5 font-semibold text-white hover:bg-accent-strong-hover">
                  Close
                </button>
              </span>
            </figcaption>
          </figure>
        )}
      </dialog>
    </>
  )
}
