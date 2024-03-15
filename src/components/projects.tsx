"use client";

import { motion, useInView } from "framer-motion";
import { ArrowUpRightIcon, LightbulbIcon } from "lucide-react";
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import Image from "next/image";
import { ProjectMetadata } from "@/lib/types";

const variants = {
  initial: {
    y: 40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

type ProjectsProps = {
  projects: ProjectMetadata[];
};

type CardProps = {
  project: ProjectMetadata;
};

export const SelectedProjects = (props: ProjectsProps) => {
  const { projects } = props;
  const projectsRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(projectsRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={variants}
      ref={projectsRef}
      transition={{
        duration: 0.5,
      }}
      className="relative my-24 will-change-[transform,opacity]"
    >
      <motion.h2
        className="text-center font-title text-3xl font-bold sm:text-4xl"
        initial={{
          y: 30,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        Selected Projects
      </motion.h2>
      <motion.div
        className="mt-12 grid gap-4 md:grid-cols-2"
        initial={{
          y: 40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        {projects
          .filter((project) => project.selected)
          .map((project) => (
            <Card key={project.slug} project={project} />
          ))}
      </motion.div>
      <div className="my-8 flex items-center justify-center">
        <Link
          href="/projects"
          className={cn(
            buttonVariants({
              variant: "outline",
            }),
            "rounded-xl"
          )}
        >
          See all project
        </Link>
      </div>
    </motion.div>
  );
};

const Card = (props: CardProps) => {
  const { project } = props;
  const { slug, name, description, image, techstack } = project;

  return (
    <Link
      key={slug}
      href={`/projects/${slug}`}
      className="group relative rounded-xl p-3 shadow-feature-card dark:shadow-feature-card-dark"
    >
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <LightbulbIcon className="size-[18px]" />
          <h2 className="font-light">Project</h2>
        </div>
        <ArrowUpRightIcon className="size-[18px] opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <Image
        src={image}
        width={1280}
        height={832}
        alt={name}
        className="rounded-lg group-hover:scale-95 ease-in-out transition-transform duration-500 dark:filter  dark:blur-0.5"
      />
      <div className="flex-1 px-2 py-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">{name}</h2>
          <div className="text-muted-foreground">{description}</div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {techstack.map((t) => {
            const { label } = t;

            return (
              <div
                key={label}
                className="rounded-full border bg-zinc-50 px-3 py-2 text-xs leading-4 dark:bg-zinc-900"
              >
                {label}
              </div>
            );
          })}
        </div>
      </div>
    </Link>
  );
};
