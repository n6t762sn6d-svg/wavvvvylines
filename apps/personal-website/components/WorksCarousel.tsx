// components/WorksCarousel.tsx
"use client"

import Image from "next/image"
import { useRef, useState, useCallback, useEffect } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const works = [
  {
    tags: ["react", "typescript", "ci/cd"],
    title: "GenealogyBank",
    blurb: "Scalable component architecture for a historical records platform. Accessibility-first, performant.",
    url: "https://www.genealogybank.com/",
    image: "/work-images/genealogybank.png",
  },
  { 
    tags: ["infra", "ui"],
    title: "Underground Elephant",
    blurb: "Rebuilt deployment pipelines, shipped customer-facing interfaces.",
    url: "https://digitalmediasolutions.com/",
    image: "/work-images/undergroundelephant.png",
  },
  {
    tags: ["html", "sass", "node"],
    title: "Zipquote",
    blurb: "Responsive UI with semantic HTML5 and SASS. Internal API integrations via Node.",
    url: "http://zipquote.com",
    image: "/work-images/zipquote-platform.png",
  },
  {
    tags: ["wordpress", "jquery"],
    title: "Electric California",
    blurb: "Responsive web presence. Semantic HTML5, jQuery, WordPress.",
    url: "http://www.electriccalifornia.com/",
    image: "/assets/images/electric-california.png",
  },
  {
    tags: ["e-commerce", "api"],
    title: "Mor Furniture",
    blurb: "Frontend across responsive product pages. Third-party vendor integrations.",
    url: "http://www.morfurniture.com/",
    image: "/work-images/mor-furniture.png",
  },
  {
    tags: ["html", "css", "js"],
    title: "Soccer Loco",
    blurb: "E-commerce UI. Semantic markup, responsive CSS, vendor integrations.",
    url: "http://www.soccerloco.com",
    image: "/work-images/soccer-loco.jpg",
  },
  {
    tags: ["wordpress", "php"],
    title: "Instant Checkmate",
    blurb: "People search platform. Responsive pages, WordPress at scale.",
    url: "http://www.instantcheckmate.com",
    image: "/work-images/instantcheckmate.png",
  },
  {
    tags: ["html", "css", "js"],
    title: "PitchEngine",
    blurb: "PR and media platform. HTML, CSS, JavaScript with WordPress and jQuery.",
    url: "http://www.pitchengine.com",
    image: "/work-images/pitch-engine.jpg",
  },
]

const CARD_WIDTH = 272
const GAP = 10

export function WorksCarousel() {
  const [idx, setIdx] = useState(0)
  const [visibleCount, setVisibleCount] = useState(1)
  const wrapRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef(0)

  // Recalculate visible cards on resize
  useEffect(() => {
    const measure = () => {
      if (wrapRef.current) {
        const w = wrapRef.current.offsetWidth
        setVisibleCount(Math.max(1, Math.floor(w / (CARD_WIDTH + GAP))))
      }
    }
    measure()
    const ro = new ResizeObserver(measure)
    if (wrapRef.current) ro.observe(wrapRef.current)
    return () => ro.disconnect()
  }, [])

  const max = works.length - visibleCount
  const go = useCallback((n: number) => setIdx(Math.max(0, Math.min(n, max))), [max])

  // Clamp idx when viewport resizes
  useEffect(() => { setIdx((i) => Math.min(i, max)) }, [max])

  return (
    <div>
      {/* Track */}
      <div ref={wrapRef} className="overflow-hidden">
        <div
          className="flex transition-transform duration-[420ms] ease-[cubic-bezier(.25,.46,.45,.94)]"
          style={{
            gap: GAP,
            transform: `translateX(-${idx * (CARD_WIDTH + GAP)}px)`,
          }}
          onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX }}
          onTouchEnd={(e) => {
            const dx = touchStartX.current - e.changedTouches[0].clientX
            if (Math.abs(dx) > 40) go(dx > 0 ? idx + 1 : idx - 1)
          }}
        >
          {works.map((w) => (
            <WorkCard key={w.title} {...w} />
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-2 mt-3">
        <Button
          variant="outline"
          size="icon"
          className="h-7 w-7 rounded-md"
          onClick={() => go(idx - 1)}
          disabled={idx === 0}
        >
          <ArrowLeft className="h-3 w-3" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-7 w-7 rounded-md"
          onClick={() => go(idx + 1)}
          disabled={idx >= max}
        >
          <ArrowRight className="h-3 w-3" />
        </Button>

        {/* Dots */}
        <div className="flex  gap-1 ml-1">
          {works.map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-1 w-1 rounded-full border transition-all duration-200",
                i === idx ? "bg-muted-foreground border-muted-foreground w-3" : "bg-transparent border-border"
              )}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── Single card ── */

function WorkCard({
  tags,
  title,
  blurb,
  url,
  image,
}: {
  tags: string[]
  title: string
  blurb: string
  url: string
  image: string
}) {

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-none block rounded-lg border border-border bg-card hover:border-muted-foreground/30 transition-colors overflow-hidden no-underline"
      style={{ width: CARD_WIDTH }}
    >
      {/* Thumbnail */}
      <div className="h-[140px] bg-muted border-b border-border overflow-hidden flex items-center justify-center relative">
    
          <Image
            src={image}
            alt={title}
            fill
            sizes="272px"
            priority={false}
            className="w-full h-full object-cover object-top opacity-80 hover:opacity-100 transition-opacity"
            
          />
       
      </div>

      {/* Info */}
      <div className="p-3.5">
        <div className="flex gap-1.5 flex-wrap mb-2">
          {tags.map((t) => (
            <Badge
              key={t}
              variant="secondary"
              className="text-[9px] tracking-widest uppercase px-2 py-0.5 rounded"
            >
              {t}
            </Badge>
          ))}
        </div>
        <p className="text-xs text-foreground mb-1.5 font-normal">{title}</p>
        <p className="text-[10px] text-muted-foreground leading-[1.7]">{blurb}</p>
      </div>
    </a>
  )
}
