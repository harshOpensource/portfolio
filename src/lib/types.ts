export type ProjectMetadata = {
  name: string;
  description: string;
  image: string;
  github: string;
  techstack: Array<{ label: string }>;
  selected: boolean;
  slug: string;
  about?: Array<{ description: string }>;
  website?: string;
};
