"use client";

import {
  SiCss3,
  SiDrizzle,
  SiEthereum,
  SiFigma,
  SiFirebase,
  SiFlask,
  SiGit,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJinja,
  SiMarkdown,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNodedotjsHex,
  SiNotion,
  SiPostgresql,
  SiPrisma,
  SiPusher,
  SiPython,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVisualstudiocode,
  SiVuedotjs,
} from "@icons-pack/react-simple-icons";
import { ZapIcon } from "lucide-react";
import * as React from "react";
import Marquee from "react-fast-marquee";

export const StacksCard = () => {
  return (
    <div className="flex h-60 flex-col gap-2 overflow-hidden rounded-xl p-4 shadow-feature-card dark:shadow-feature-card-dark lg:p-6">
      <div className="flex items-center gap-2">
        <ZapIcon className="size-[18px]" />
        <h2 className="text-sm font-light">Tech Stacks</h2>
      </div>
      <Marquee className="py-4 flex gap-3" pauseOnHover direction="right">
        <SiTypescript className="size-10 ml-4" />
        <SiFigma className="size-10 ml-4" />
        <SiTailwindcss className="size-10 ml-4" />
        <SiNextdotjs className="size-10 ml-4" />
        <SiReact className="size-10 ml-4" />
        <SiPython className="size-10 ml-4" />
        <SiPostgresql className="size-10 ml-4" />
        <SiMongodb className="size-10 ml-4" />
        <SiGraphql className="size-10 ml-4" />
        <SiFlask className="size-10 ml-4" />
        <SiJinja className="size-10 ml-4" />
        <SiEthereum className="size-10 ml-4" />
        <SiMysql className="size-10 ml-4" />
        <SiCss3 className="size-10 ml-4" />
        <SiVisualstudiocode className="size-10 ml-4" />
        <SiPrisma className="size-10 ml-4" />
        <SiNodedotjs className="size-10 ml-4" />
        <SiFirebase className="size-10 ml-4" />
        <SiGit className="size-10 ml-4" />
        <SiDrizzle className="size-10 ml-4" />
        <SiVercel className="size-10 ml-4" />
        <SiVuedotjs className="size-10 ml-4" />
        <SiNotion className="size-10 ml-4" />
        <SiPusher className="size-10 ml-4" />
        <SiSupabase className="size-10 ml-4" />
      </Marquee>
      <Marquee className="py-4" pauseOnHover direction="left">
        <SiTypescript className="size-10 ml-4" />
        <SiFigma className="size-10 ml-4" />
        <SiTailwindcss className="size-10 ml-4" />
        <SiNextdotjs className="size-10 ml-4" />
        <SiReact className="size-10 ml-4" />
        <SiPython className="size-10 ml-4" />
        <SiPostgresql className="size-10 ml-4" />
        <SiMongodb className="size-10 ml-4" />
        <SiGraphql className="size-10 ml-4" />
        <SiFlask className="size-10 ml-4" />
        <SiJinja className="size-10 ml-4" />
        <SiEthereum className="size-10 ml-4" />
        <SiMysql className="size-10 ml-4" />
        <SiCss3 className="size-10 ml-4" />
        <SiVisualstudiocode className="size-10 ml-4" />
        <SiPrisma className="size-10 ml-4" />
        <SiNodedotjs className="size-10 ml-4" />
        <SiFirebase className="size-10 ml-4" />
        <SiGit className="size-10 ml-4" />
        <SiDrizzle className="size-10 ml-4" />
        <SiVercel className="size-10 ml-4" />
        <SiVuedotjs className="size-10 ml-4" />
        <SiNotion className="size-10 ml-4" />
        <SiPusher className="size-10 ml-4" />
        <SiSupabase className="size-10 ml-4" />
      </Marquee>
    </div>
  );
};
