"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";

export interface LightboxImageProps {
  /** Path to the image (e.g. "/assets/photo.jpg") */
  src: string;
  /** Alt text — also used as the modal's aria-label */
  alt?: string;
  /** Intrinsic width — used for Next/Image optimization + modal fallback */
  width?: number;
  /** Intrinsic height — used for Next/Image optimization + modal fallback */
  height?: number;
  /** Extra classes applied to the thumbnail <Image> */
  className?: string;
  /** Extra classes applied to the clickable wrapper <button> */
  wrapperClassName?: string;
  /** Optional caption shown under the image inside the modal */
  caption?: string;
  /** Set true for above-the-fold images */
  priority?: boolean;
  /** Optional sizes hint for responsive loading */
  sizes?: string;
}

export default function LightboxImage({
  src,
  alt = "",
  width = 1000,
  height = 1000,
  className = "",
  wrapperClassName = "",
  caption,
  priority = false,
  sizes,
}: LightboxImageProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const close = useCallback((): void => setOpen(false), []);

  // Lock body scroll + close on Esc while modal is open
  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent): void => {
      if (e.key === "Escape") close();
    };

    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  const modal: React.ReactElement | null = open ? (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt || "Image preview"}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-navy/80 p-4 backdrop-blur-sm animate-[fadeIn_200ms_ease-out]"
      onClick={close}
    >
      {/* Close button */}
      <button
        type="button"
        onClick={close}
        aria-label="Close image"
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-navy shadow-lg transition hover:scale-105 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white/70 sm:right-6 sm:top-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Image container — stop propagation so clicking image doesn't close */}
      <div
        className="relative max-h-[90vh] max-w-[92vw] animate-[zoomIn_220ms_ease-out]"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          width={width || 1600}
          height={height || 1600}
          className="h-auto max-h-[90vh] w-auto max-w-[92vw] rounded-xl object-contain shadow-2xl"
          sizes="92vw"
          priority
        />
        {caption && (
          <p className="mt-3 text-center text-xs tracking-wider text-white/80">
            {caption}
          </p>
        )}
      </div>
    </div>
  ) : null;

  return (
    <>
      {/* Clickable thumbnail */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`View ${alt || "image"} larger`}
        className={`group relative block w-full cursor-zoom-in overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-navy/40 ${wrapperClassName}`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`transition-transform duration-500 group-hover:scale-[1.03] ${className}`}
          priority={priority}
          sizes={sizes}
        />

        {/* Zoom hint badge on hover */}
        <span className="pointer-events-none absolute inset-0 flex items-end justify-end bg-gradient-to-t from-navy/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="m-3 rounded-full bg-white/90 p-2 shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3.5 w-3.5 text-navy"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="11" y1="8" x2="11" y2="14" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
          </span>
        </span>
      </button>

      {mounted && modal ? createPortal(modal, document.body) : null}
    </>
  );
}