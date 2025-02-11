"use client";

import { useState } from "react";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md p-2.5 text-foreground md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {/* Add your menu icon here */}
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-background border-b md:hidden">
            <nav className="container py-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full py-2 text-left text-foreground/60 hover:text-foreground/80"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
