"use client";

import { ProjectMetadata } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = ProjectMetadata;
type ProjectCardsProps = {
  projects: ProjectMetadata[];
};

const ProjectCards = (props: ProjectCardsProps) => {
  const { projects } = props;

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.slug} {...project} />
      ))}
    </div>
  );
};

const ProjectCard = (props: ProjectCardProps) => {
  const { name, description, techstack, slug, image } = props;

  return (
    <Link
      href={`/projects/${slug}`}
      className="group rounded-xl px-2 py-4 shadow-feature-card dark:shadow-feature-card-dark"
    >
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

export default ProjectCards;
