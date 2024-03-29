import {
  SiGithub,
  SiGmail,
  SiLinkedin,
  type IconType,
} from "@icons-pack/react-simple-icons";
import {
  BarChartIcon,
  FlameIcon,
  MessageCircleIcon,
  MonitorIcon,
  PencilIcon,
  UserCircleIcon,
} from "lucide-react";

type HeaderLinks = Array<{
  icon: React.ReactNode;
  href: string;
  text: string;
}>;

type FooterLinks = Array<{
  id: number;
  links: Array<{
    href: string;
    text: string;
  }>;
}>;

type SocialLinks = Array<{
  href: string;
  title: string;
  icon: IconType;
}>;

export const HEADER_LINKS: HeaderLinks = [
  {
    icon: <BarChartIcon className="size-3.5" />,
    href: "/",
    text: "Home",
  },
  {
    icon: <FlameIcon className="size-3.5" />,
    href: "/projects",
    text: "Projects",
  },
  {
    icon: <PencilIcon className="size-3.5" />,
    href: "/education",
    text: "Education",
  },
  {
    icon: <MessageCircleIcon className="size-3.5" />,
    href: "/experience",
    text: "Experience",
  },
  {
    icon: <UserCircleIcon className="size-3.5" />,
    href: "/about",
    text: "About",
  },
  {
    icon: <MonitorIcon className="size-3.5" />,
    href: "#contact-me",
    text: "contact",
  },
];

export const FOOTER_LINKS: FooterLinks = [
  {
    id: 1,
    links: [
      {
        href: "/",
        text: "Home",
      },
      {
        href: "/projects",
        text: "Projects",
      },
      {
        href: "/about",
        text: "About",
      },
      {
        href: "#contact-me",
        text: "Contact",
      },
    ],
  },
  {
    id: 2,
    links: [
      {
        href: "/education",
        text: "Education",
      },
      {
        href: "/experience",
        text: "Experience",
      },
      {
        href: "/projects",
        text: "Projects",
      },
      {
        href: "#contact-me",
        text: "Links",
      },
    ],
  },
  {
    id: 3,
    links: [
      {
        href: "https://github.com/harshOpensource",
        text: "GitHub",
      },
      {
        href: "https://www.linkedin.com/in/harsh-bardhan-ai/",
        text: "LinkedIn",
      },
      {
        href: "mailto:harshopensource@gmail.com",
        text: "Email",
      },
    ],
  },
];

export const SOCIAL_LINKS: SocialLinks = [
  {
    href: "https://github.com/harshOpensource",
    title: "GitHub",
    icon: SiGithub,
  },
  {
    href: "mailto:harshopensource@gmail.com",
    title: "Email",
    icon: SiGmail,
  },
  {
    href: "https://www.linkedin.com/in/harsh-bardhan-ai/",
    title: "Linkedin",
    icon: SiLinkedin,
  },
];
