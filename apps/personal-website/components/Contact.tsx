// components/Contact.tsx
"use client";

import { useEffect, useState } from "react";
import { Mail, Linkedin, Briefcase } from "lucide-react";

// The email is assembled in the browser so it never appears as plain text
// in the static HTML, which keeps most scraper bots from harvesting it.
export function Contact() {
  const [email, setEmail] = useState("");
  useEffect(() => {
    setEmail(["caseylentz.work", "gmail.com"].join("@"));
  }, []);

  return (
    <div>
      <p className="text-foreground mb-4">
        Open to 100% remote full-time, contract, and contract-to-hire roles.
      </p>
      <ul className="space-y-2 text-muted-foreground">
        <li className="flex items-center gap-2">
          <Mail className="shrink-0" size={15} aria-hidden="true" />
          {email ? (
            <a href={`mailto:${email}`} className="underline underline-offset-4 hover:text-foreground">
              {email}
            </a>
          ) : (
            <span>Email</span>
          )}
        </li>
        <li className="flex items-center gap-2">
          <Linkedin className="shrink-0" size={15} aria-hidden="true" />
          <a
            href="https://www.linkedin.com/in/casey-lentz/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-foreground"
          >
            LinkedIn
          </a>
        </li>
        <li className="flex items-center gap-2">
          <Briefcase className="shrink-0" size={15} aria-hidden="true" />
          <a
            href="https://www.upwork.com/freelancers/~012df33a3ae2a871d9"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-foreground"
          >
            Upwork
          </a>
        </li>
      </ul>
    </div>
  );
}
