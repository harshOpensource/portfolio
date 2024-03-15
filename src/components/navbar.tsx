"use client";

import { usePathname } from "next/navigation";

import { HEADER_LINKS } from "@/config/links";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="hidden space-x-2 md:flex">
        {HEADER_LINKS.map((link) => {
          const isActive = link.href === pathname;

          return (
            <li
              key={link.text}
              className="relative flex h-[60px] items-center justify-center"
            >
              <Link
                className={cn(
                  "rounded px-3 py-2 text-sm font-medium transition-colors",
                  {
                    ["text-muted-foreground hover:text-foreground"]: !isActive,
                  },
                  {
                    ["text-foreground"]: isActive,
                  }
                )}
                href={link.href}
              >
                {link.text}
              </Link>
              {isActive && (
                <>
                  <div className="absolute bottom-0 left-1/2 h-px w-12 -translate-x-1/2 bg-nav-link-indicator dark:bg-nav-link-indicator-dark" />
                  <div className="absolute bottom-0 left-1/2 size-2.5 -translate-x-1/2 rounded-[4px] bg-[rgb(255_122_151)] blur-[8px] dark:bg-[rgb(223_29_72)]" />
                </>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
