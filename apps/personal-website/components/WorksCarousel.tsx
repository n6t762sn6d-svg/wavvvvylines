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
    tags: ["react", "next.js", "tailwind","typescript", "php",  "ci/cd", "bootstrap", "mui"],
    title: "GenealogyBank",
    blurb: "Genealogy research platfrom built with React, TypeScript, Next.js, PHP and Drupal.",
    url: "https://www.genealogybank.com/",
    image: "/work-images/genealogybank.png",
  },
    {
    tags: ["e-commerce", "magento", "wordpress", "javascript", "html", "css"],
    title: "Electric California",
    blurb: "Lifestyle apparel brand Electric California custom designed e-commerce presence built with Magento and WordPress.",
    url: "http://www.electriccalifornia.com/",
    image: "/work-images/electric-california.png",
  },
    {
    tags: ["e-commerce", "magento", "html", "css", "javascript"],
    title: "Soccer Loco",
    blurb: "Custom designed e-commerce platform for soccer apparel and gear built with Magento.",
    url: "https://fanshoppe.live/",
    image: "/work-images/soccer-loco.jpg",
  },
    {
    tags: ["e-commerce", "api"],
    title: "Mor Furniture",
    // blurb: "Developed responsive product pages and interfaces for e-commerce platform. Managed third-party vendor API integrations to streamline operations and experience.",
    url: "http://www.morfurniture.com/",
    image: "/work-images/mor-furniture.png",
  },
  { 
    tags: ["wordpress", "aws", "ui", "laravel", "php", "twig"],
    title: "Underground Elephant",
    // blurb: "Built WordPress and Laravel UI with performance optimization and AWS infrastructure. Implemented third-party APIs and vendor integrations to enhance user experience.",
    url: "https://digitalmediasolutions.com/",
    image: "/work-images/undergroundelephant.png",
  },
  {
    tags: ["html", "sass", "node", "php", "api"],
    title: "Zipquote",
    // blurb: "Developed responsive UI with semantic HTML5 and SASS styling. Managed Node.js backend integrations and PHP APIs for seamless internal data communication.",
    url: "http://zipquote.com",
    image: "/work-images/zipquote-platform.png",
  },

  {
    tags: [ "conversion optimization", "node", "performance", "a/b testing", "javascript"],
    title: "Instant Checkmate",
    // blurb: "Developed people search platform with Node.js and REST API integrations. Implemented A/B testing and performance optimizations to improve conversion and user metrics.",
    url: "http://www.instantcheckmate.com",
    image: "/work-images/instantcheckmate.png",
  },
  {
    tags: ["html", "css", "js", 'razor', '.net'],
    title: "PitchEngine",
    // blurb: "Built PR and media platform with HTML, CSS, JavaScript, and Razor templates. Delivered responsive interfaces and ASP.NET WordPress integrations for content publishing.",
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
  const carouselRef = useRef<HTMLDivElement>(null)

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

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (carouselRef.current?.contains(document.activeElement)) {
        if (e.key === "ArrowLeft") {
          e.preventDefault()
          go(idx - 1)
        } else if (e.key === "ArrowRight") {
          e.preventDefault()
          go(idx + 1)
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [idx, go])

  return (
    <div
      ref={carouselRef}
      role="region"
      aria-label="Portfolio works carousel"
      aria-live="polite"
      aria-atomic="false"
    >
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
          aria-label="Previous work"
        >
          <ArrowLeft className="h-3 w-3" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-7 w-7 rounded-md"
          onClick={() => go(idx + 1)}
          disabled={idx >= max}
          aria-label="Next work"
        >
          <ArrowRight className="h-3 w-3" />
        </Button>

        {/* Dots */}
        <div className="flex gap-1 ml-1" role="tablist" aria-label="Work carousel slides">
          {works.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === idx}
              aria-label={`Go to work ${i + 1} of ${works.length}`}
              onClick={() => go(i)}
              className={cn(
                "h-1 w-1 rounded-full border transition-all duration-200 cursor-pointer",
                i === idx ? "bg-muted-foreground border-muted-foreground w-3" : "bg-transparent border-border"
              )}
            ></button>
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
           <p className=" text-foreground mb-1.5 font-bold">{title}</p>
        <div className="flex gap-1.5 flex-wrap mb-2">
          {/* {tags.map((t) => (
            <Badge
              key={t}
              variant="secondary"
              className=" tracking-widest uppercase px-2 py-0.5"
            >
              {t}
            </Badge>
          ))} */}
        </div>
     
        <p className=" text-muted-foreground leading-[1.7]">{blurb}</p>
      </div>
    </a>
  )
}
