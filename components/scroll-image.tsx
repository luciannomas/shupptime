"use client"

import { useEffect, useRef, useState } from "react"

interface ScrollImageProps {
  src: string
  alt: string
  className?: string
}

export function ScrollImage({ src, alt, className = "" }: ScrollImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`overflow-hidden rounded-2xl ${className} ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-1000`}
    >
      <img src={src || "/placeholder.svg"} alt={alt} className="w-full h-full object-cover" loading="lazy" />
    </div>
  )
}
