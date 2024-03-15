"use client";

import { projectsData } from "@/config/projects";
import Image from "next/image";
import React from "react";
import Header from "./header";
import { motion } from "framer-motion";
import Project from "@/components/projects/project/project";
import { redirect } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

const animation = {
  hide: {
    x: -30,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
};

function ProjectPage({ params }: Props) {
  // filter the project data by the slug
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    redirect("/");
  }
  return (
    <div className="mb-16 mx-auto max-w-3xl">
      <Header metadata={project!} />
      <motion.div initial={animation.hide} animate={animation.show}>
        <Image
          width={1280}
          height={832}
          alt={project?.name!}
          className="my-12 rounded-lg"
          src={project?.image!}
        />

        <Project content={project!} />
      </motion.div>
    </div>
  );
}

export default ProjectPage;
