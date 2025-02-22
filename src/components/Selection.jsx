"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const pages = ["Home", "About", "Contact", "Projects", "Blog", "Resume"];

export default function Selection() {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(null);

  return (
    <nav className="fixed m-0 md:m-6 top-0 md:right-8 md:top-1/2 md:-translate-y-1/2 left-0 right-0 md:left-auto w-full md:w-auto p-4 md:p-0 bg-black/20 backdrop-blur-sm md:bg-transparent z-[100]">
      <div className="flex md:flex-col items-center justify-center md:items-end gap-4 md:gap-7 max-w-screen-xl mx-auto overflow-x-auto md:overflow-visible no-scrollbar">
        {pages.map((item, index) => {
          const isActive =
            pathname === (item === "Home" ? "/" : `/${item.toLowerCase()}`);
          return (
            <Link
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              key={item}
              className="group relative"
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <span
                className={`text-base md:text-lg font-doto tracking-wider transition-all duration-300
                  ${
                    isActive
                      ? "text-fern_green-400"
                      : "text-alabaster-400 hover:text-fern_green-300"
                  }
                  ${
                    isHovered === index
                      ? "opacity-100"
                      : "opacity-70 hover:opacity-100"
                  }`}
              >
                {item}
              </span>
              <span
                className={`absolute -left-2.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full
                  transition-all duration-300 transform
                  ${isActive ? "bg-fern_green-400" : "bg-transparent"}
                  ${isHovered === index ? "scale-100" : "scale-0"}`}
              />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
