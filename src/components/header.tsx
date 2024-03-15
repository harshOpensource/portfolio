"use client";

import { motion } from "framer-motion";
import * as React from "react";
import MobileNav from "@/components/mobile-nav";
import Navbar from "@/components/navbar";

import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Separator } from "./ui/separator";
import Image from "next/image";

const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener("scroll", changeBackground);

    return () => document.removeEventListener("scroll", changeBackground);
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed inset-x-0 top-4 z-40 mx-auto flex h-[60px] max-w-5xl items-center justify-between rounded-2xl bg-background/30 px-8 shadow-sm saturate-100 backdrop-blur-[10px] transition-colors",
        isScrolled && "bg-background/80"
      )}
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <a
        href="#skip-nav"
        className="fixed left-4 top-4 -translate-y-20 rounded-sm border bg-background p-2 font-medium shadow-sm transition-transform focus-visible:translate-y-0 focus-visible:ring focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <span>Skip to main content</span>
      </a>
      <Link href="/" className="flex items-center justify-center gap-1">
        <span className="sr-only">Homepage</span>
        <Image
          src={"/avatar.png"}
          alt="logo"
          width={40}
          height={40}
          aria-hidden="true"
          className="rounded-xl"
        />
      </Link>
      <div className="flex items-center gap-2">
        <Navbar />
        <Separator orientation="vertical" className="h-6" />
        <ThemeToggle />
        <MobileNav />
      </div>
    </motion.header>
  );
};
export default Header;
