"use client";

import type React from "react";
import { useEffect, useRef } from "react";

export function SmoothScrollContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = containerRef.current?.querySelectorAll("section");
    if (!sections) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            window.history.pushState({}, "", `#${id}`);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-[calc(100vh-4rem)] overflow-y-auto snap-y snap-mandatory scroll-smooth"
    >
      {children}
    </div>
  );
}
