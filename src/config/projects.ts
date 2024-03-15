import { ProjectMetadata } from "@/lib/types";

export const projectsData: ProjectMetadata[] = [
  {
    name: "Messenger",
    description: "A Real Time Chat Application",
    image: "/messenger.svg",
    github: "messenger",
    selected: true,
    slug: "messenger",
    techstack: [
      { label: "Nextjs" },
      { label: "GraphQL" },
      { label: "Typescript" },
      {
        label: "Tailwind CSS",
      },
      { label: "ShadCn UI" },
      {
        label: "NextAuth",
      },
      {
        label: "Prisma",
      },
      { label: "Uploadthing" },
      {
        label: "MongoDB",
      },
      {
        label: "Websockets",
      },
      {
        label: "Pusher",
      },
      {
        label: "Vercel",
      },
    ],
    website: "https://messenger-coral-one.vercel.app/",
    about: [
      {
        description:
          "Messenger represents the pinnacle of real-time chat applications, leveraging cutting-edge technologies to provide users with a seamless communication experience. Built with Next.js, GraphQL, and TypeScript, Messenger ensures high performance and scalability. The sleek user interface, crafted with Tailwind CSS, offers both elegance and functionality.",
      },
      {
        description:
          "With NextAuth handling authentication seamlessly and Prisma managing database interactions efficiently, Messenger ensures robust security and reliability. MongoDB serves as the underlying database, offering flexibility and scalability to accommodate growing user bases.",
      },
      {
        description:
          "The integration of Websockets and Pusher enables real-time messaging, ensuring that users can engage in conversations with minimal latency. Messenger is hosted on Vercel, guaranteeing lightning-fast deployment and hassle-free scalability.",
      },
      {
        description:
          "Whether it's one-on-one conversations or group chats, Messenger facilitates smooth communication, making it ideal for personal and professional use. Join the Messenger community today and experience the future of real-time chat applications.",
      },
    ],
  },
  {
    name: "Micro Clone",
    description: "A Real Time Collaboration Whiteboard",
    image: "/samples/micro.svg",
    github: "micro",
    selected: true,
    slug: "micro",
    techstack: [
      { label: "Typescript" },
      { label: "Nextjs" },
      { label: "Clerk Auth" },
      { label: "Liveblocks" },
      { label: "Tailwind CSS" },
      { label: "ShadCn UI" },
      { label: "Convex" },
      { label: "Vercel" },
    ],
    website: "https://micro-clone-gamma.vercel.app",
    about: [
      {
        description:
          "Micro Clone redefines collaborative workspaces with its cutting-edge technology stack and seamless user experience. Built with TypeScript and Next.js, Micro Clone ensures high performance and scalability, allowing teams to collaborate effortlessly.",
      },
      {
        description:
          "Clerk Auth provides secure authentication, ensuring that only authorized users can access the whiteboard. Liveblocks powers real-time collaboration, allowing multiple users to work on the same canvas simultaneously.",
      },
      {
        description:
          "Hosted on Vercel, The sleek and customizable user interface, crafted with Tailwind CSS and ShadCn UI, offers both style and functionality. With Convex handling database interactions efficiently, Micro Clone ensures robust data management and reliability.",
      },
    ],
  },

  {
    name: "Chat With PDF",
    description: "A AI Powered Chat Application ",
    image: "/samples/chatwithpdf.svg",
    github: "chatwithpdf",
    selected: true,
    slug: "chatwithpdf",
    techstack: [
      { label: "OpenAI" },
      { label: "Nextjs" },
      { label: "Langchain" },
      { label: "Uploadthing" },
      { label: "Postgres" },
      { label: "Drizzle ORM" },
      { label: "Stripe" },
      { label: "Clerk Auth" },
      { label: "Tailwind CSS" },
      { label: "ShadCn UI" },
      { label: "Vercel" },
    ],
    website: "https://chat-with-pdf-gpt.vercel.app",
    about: [
      {
        description:
          "Chat With PDF represents the forefront of document interaction, leveraging artificial intelligence and modern technology to streamline workflows and enhance productivity. Powered by OpenAI, Chat With PDF enables users to converse with PDF documents as if they were talking to a human, making document analysis and manipulation effortless.",
      },
      {
        description:
          "Built with Next.js and Langchain, Chat With PDF ensures high performance and scalability, providing users with a seamless experience. Postgres and Drizzle ORM handle data management efficiently, ensuring robust storage and retrieval of information.",
      },
      {
        description:
          "With Clerk Auth ensuring secure authentication and Tailwind CSS combined with ShadCn UI offering a sleek and intuitive user interface, Chat With PDF delivers both functionality and aesthetics. Whether it's extracting data, answering questions, or performing actions within documents, Chat With PDF empowers users to interact with PDFs in ways never thought possible.",
      },
    ],
  },
  {
    name: "Jotion",
    description: "A Feature Rich Notion Clone",
    image: "/samples/jotion.svg",
    github: "jotion",
    selected: true,
    slug: "jotion",
    techstack: [
      { label: "Typescript" },
      { label: "Nextjs" },
      { label: "Clerk Auth" },
      { label: "Tailwind CSS" },
      { label: "ShadCn UI" },
      { label: "Convex" },
      { label: "Vercel" },
    ],
    website: "https://jotion-fawn.vercel.app",
    about: [
      {
        description:
          "Jotion sets the standard for Notion-inspired platforms, combining cutting-edge technology with user-friendly design to deliver a seamless experience. Built with TypeScript and Next.js, Jotion ensures optimal performance and scalability, allowing users to create and manage projects effortlessly.",
      },
      {
        description:
          "Clerk Auth provides secure authentication, safeguarding user data and ensuring peace of mind. Tailwind CSS and ShadCn UI offer a sleek and customizable interface, allowing users to tailor their workspace to suit their preferences.",
      },
      {
        description:
          "Whether it's organizing notes, collaborating on documents, or tracking project progress, Jotion provides the tools you need to bring your ideas to fruition.",
      },
    ],
  },

  {
    name: "Decentralized Twitter",
    description: "A Decentralized Twitter Clone using Ethereum Blockchain",
    image: "/samples/twitter.svg",
    github: "twitter-dapp",
    selected: true,
    slug: "twitterdapp",
    techstack: [
      { label: "Nextjs" },
      { label: "Typescript" },
      { label: "Ethereum" },
      { label: "Solidity" },
      { label: "Hardhat" },
      { label: "Metamask" },
      { label: "Smart Contract" },
      { label: "Ethers.js" },
      { label: "Tailwind CSS" },
      { label: "ShadCn UI" },
      { label: "Vercel" },
    ],
    website: "https://twitter-decentralised.vercel.app",
    about: [
      {
        description:
          "Decentralized Twitter reimagines social media platforms, leveraging blockchain technology to provide users with a secure and transparent experience. Built with Next.js and Solidity, Decentralized Twitter ensures high performance and scalability, allowing users to interact with confidence.",
      },
      {
        description:
          "Powered by Ethereum and Solidity smart contracts, Decentralized Twitter enables users to interact with each other and publish tweets without relying on centralized authorities. Metamask integration allows users to securely manage their Ethereum wallets and interact with the blockchain seamlessly.",
      },
      {
        description:
          "The use of Hardhat facilitates the development and testing of smart contracts, ensuring reliability and security. Ethers.js simplifies interaction with the Ethereum blockchain, enabling smooth communication between the front end and smart contracts.",
      },
    ],
  },

  {
    name: "Spotify",
    description: "A Spotify Clone built with Supabase and Next.js",
    image: "/spotify.svg",
    github: "spotify-clone",
    selected: true,
    slug: "spotify",
    techstack: [
      { label: "Typescript" },
      { label: "nextjs" },
      { label: "Supabase" },
      { label: "Supabase Auth" },
      { label: "Tailwind CSS" },
      { label: "Postgres" },
      { label: "Vercel" },
    ],
    website: "https://spotify-clone-opensource.vercel.app",
    about: [
      {
        description:
          "Spotify Clone redefines music streaming platforms, leveraging modern technology to deliver a seamless and intuitive experience. Built with TypeScript and Next.js, Spotify Clone ensures high performance and scalability, allowing users to enjoy their favorite music effortlessly.",
      },
      {
        description:
          "Supabase Auth enables secure authentication, allowing users to create accounts and access personalized features seamlessly. Tailwind CSS provides a sleek and responsive user interface, enhancing the overall user experience.",
      },
      {
        description:
          "Hosted on Vercel, Spotify guarantees reliability and scalability, making it accessible to music enthusiasts worldwide. ",
      },
    ],
  },
];
