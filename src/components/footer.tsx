import { FOOTER_LINKS } from "@/config/links";

import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="relative mt-24 mx-auto mb-2 flex max-w-5xl flex-col rounded-2xl bg-background/30 p-8 shadow-sm saturate-100 backdrop-blur-[10px]">
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3">
        {FOOTER_LINKS.map((list) => (
          <div
            key={list.id}
            className="mb-10 flex flex-col items-start gap-4 pr-4"
          >
            {list.links.map((link, i) => {
              const { href, text } = link;

              return (
                <Link key={i} href={href}>
                  {text}
                </Link>
              );
            })}
          </div>
        ))}
      </div>
      <div className="mt-20 flex items-center justify-between text-sm">
        <div>&copy; {new Date().getFullYear()} Harsh Bardhan</div>
      </div>
    </footer>
  );
};
