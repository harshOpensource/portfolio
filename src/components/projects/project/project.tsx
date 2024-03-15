import { ProjectMetadata } from "@/lib/types";
import React from "react";

type Props = {
  content: ProjectMetadata;
};

function Project({ content }: Props) {
  return (
    <div className="my-8">
      <div className="mb-4 flex flex-wrap gap-2">
        {content.techstack.map((t) => {
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
      <div className="text-3xl font-semibold">{content.name}</div>
      <div className="mb-4 mt-2 text-base font-medium text-muted-foreground">
        {content.description}
      </div>

      <div className="text-base">
        {content.about?.map((about, id) => (
          <div className="mb-5" key={id}>
            {about.description}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
