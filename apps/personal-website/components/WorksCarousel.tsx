// components/WorksCarousel.tsx
import Image from "next/image";
import { ExternalLink } from "lucide-react";
const works = [
  {
    tags: [
      "react",
      "next.js",
      "tailwind",
      "typescript",
      "php",
      "ci/cd",
      "bootstrap",
      "mui",
    ],
    title: "GenealogyBank",
    blurb:
      "Genealogy research platform built with React, TypeScript, Jest, Next.js, PHP, Tailwind, traditional CSS, MUI and Drupal paired with agentic workflows.",
    url: "https://www.genealogybank.com/",
    image: "/work-images/genealogybank.png",
  },
  {
    tags: ["e-commerce", "magento", "wordpress", "javascript", "html", "css"],
    title: "Electric California",
    blurb:
      "Lifestyle apparel brand Electric California custom designed e-commerce presence built with Magento and WordPress.",
    url: "http://www.electriccalifornia.com/",
    image: "/work-images/electric-california.png",
  },
  {
    tags: ["e-commerce", "javascript", "html", "css"],
    title: "Mor Furniture",
    blurb:
      "E-commerce storefront for West Coast home furniture retailer Mor Furniture.",
    url: "http://www.morfurniture.com/",
    image: "/work-images/mor-furniture.png",
  },
  {
    tags: ["e-commerce", "javascript", "html", "css"],
    title: "Soccer Loco",
    blurb: "E-commerce storefront for soccer specialty retailer Soccer Loco.",
    url: "http://www.soccerloco.net",
    image: "/work-images/soccer-loco.jpg",
  },
  {
    tags: ["html", "sass", "node", "php", "api"],
    title: "Zipquote",
    blurb:
      "Ad-tech platform for insurance quote generation built with Node.js, PHP, REST API integrations and custom a/b testing software.",
    url: "http://zipquote.com",
    image: "/work-images/zipquote-platform.png",
  },
  {
    tags: ["html", "css", "js", "razor", ".net"],
    title: "PitchEngine",
    blurb:
      "PR and media platform disrupting the traditional press release model, built with ASP.NET, Razor, HTML, CSS and JavaScript.",
    url: "http://www.pitchengine.com",
    image: "/work-images/pitch-engine.jpg",
  },
  {
    tags: [
      "conversion optimization",
      "node",
      "performance",
      "a/b testing",
      "javascript",
    ],
    title: "Instant Checkmate",
    blurb:
      "People search platform built on top of Node.js, with a focus on conversion optimization, performance, and a/b testing.",
    url: "http://www.instantcheckmate.com",
    image: "/work-images/instantcheckmate.png",
  },
];

export function WorksCarousel() {
  return (
    <ul
      aria-label="Selected work"
      className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none p-0 m-0"
    >
      {works.map((w) => (
        <li key={w.title}>
          <WorkCard {...w} />
        </li>
      ))}
    </ul>
  );
}

/* ── Single card ── */

function WorkCard({
  tags,
  title,
  blurb,
  url,
  image,
}: {
  tags: string[];
  title: string;
  blurb: string;
  url: string;
  image: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full rounded-lg border border-border bg-card hover:border-muted-foreground/30 transition-colors overflow-hidden no-underline"
    >
      {/* Thumbnail */}
      <div className="h-[140px] bg-muted border-b border-border overflow-hidden flex items-center justify-center relative">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          priority={false}
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Info */}
      <div className="p-3.5">
        <p className=" text-foreground mb-1.5 font-bold">
          {title} <ExternalLink className="inline" size={12} />
        </p>
        <p className=" text-muted-foreground leading-[1.7]">{blurb}</p>
      </div>
    </a>
  );
}
