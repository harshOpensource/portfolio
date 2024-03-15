"use client";

import PageTitle from "@/components/projects/page-title";
import {
  SiDrizzle,
  SiEthereum,
  SiFigma,
  SiFirebase,
  SiFlask,
  SiGit,
  SiGraphql,
  SiJinja,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
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
import { StarFilledIcon } from "@radix-ui/react-icons";
import { ArrowUpRightFromSquareIcon, Star } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

interface Repo {
  name: string;
  description: string;
  topics: string[];
  forks_count: number;
  html_url: string;
  language: string;
  watchers: number;
  homepage: string;
  pushed_at: string;
}

interface User {
  avatar_url: string;
  html_url: string;
  name: string;
}

const AboutPage = () => {
  const [repos, setRepos] = useState<Repo[]>();
  const [user, setUser] = useState<User>();

  const getData = async () => {
    const [gitUserRes, gitReposRes] = await Promise.all([
      fetch(`https://api.github.com/users/harshOpensource`),
      fetch(`https://api.github.com/users/harshOpensource/repos`),
    ]);

    const userData = await gitUserRes.json();
    const repoData = await gitReposRes.json();
    setUser(userData);
    /// filter the repos who has homepage
    const filteredRepos = repoData.filter((repo: any) => repo.homepage);

    setRepos(filteredRepos);

    // now who does not have homepage
    /*  const filteredReposs = repoData.filter((repo: any) => !repo.homepage);
    setRepos((prev: any) => [...prev, ...filteredReposs]); */
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="mb-8">
      <PageTitle title="About me" description="👋 Hi there! I am Harsh." />

      {/*  */}
      {user && (
        <>
          <div className="mb-4 text-pretty leading-8">
            I am a Full Stack Web Developer and AI Enthusiast. With a keen eye
            for crafting unique solutions, I thrive on pushing the boundaries of
            what's possible in web development and artificial intelligence
            integration. My journey in technology has been marked by a
            relentless pursuit of mastery in cutting-edge tools and frameworks.
            From my proficiency in Blockchain to my specialization in
            integrating third-party apps with GPT tailored for businesses, I
            bring a diverse skill set to the table. In the realm of web
            development, my expertise spans Next.js, GraphQL, Node.js, and Full
            Stack Development. I pride myself on my ability to leverage
            technologies like Python, Postgres, and MongoDB to create efficient,
            and scalable applications that resonate with users.
          </div>
          <div className="mb-8">
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
          <div className="text-muted-foreground text-2xl mb-6 font-semibold">
            Recent Projects
          </div>
        </>
      )}

      {user && (
        <div className="mb-16">
          <div className="flex gap-4 my-4">
            <Image
              className="rounded-full"
              src={user?.avatar_url}
              alt="Github Profile Photo"
              height={60}
              width={70}
            />
            <span className="flex flex-col gap-1">
              <p>{user.name}</p>
              <a
                href={user.html_url}
                className="flex items-center gap-2"
                rel="noreferrer"
                target="_blank"
              >
                <div className="text-muted-foreground text-sm">
                  {user.html_url}
                </div>
                <ArrowUpRightFromSquareIcon className="h-4 w-4 text-muted-foreground" />
              </a>
            </span>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {repos &&
          repos.map(
            (
              {
                name,
                description,
                topics,
                forks_count,
                html_url,
                language,
                watchers,
                homepage,
                pushed_at,
              }: any,
              index: any
            ) => {
              const date = new Date(pushed_at).toDateString();
              return (
                <div key={index}>
                  <article
                    key={index}
                    className="flex flex-col justify-between gap-[1rem] border-[1px] rounded-lg p-4 overflow-hidden min-h-36"
                  >
                    <span className="flex justify-between">
                      <a
                        href={html_url}
                        rel="noreferrer"
                        target="_blank"
                        className="flex gap-2 items-center"
                      >
                        <div>{name}</div>
                        <ArrowUpRightFromSquareIcon className="h-4 w-4" />
                      </a>
                      <a
                        href={homepage}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs"
                      >
                        {homepage}
                      </a>
                    </span>
                    <span>
                      <div className="text-muted-foreground text-sm">
                        {description}
                      </div>
                    </span>
                    <span className="flex items-center justify-between ">
                      <div className="text-sm text-muted-foreground">
                        <i
                          className={`devicon-${language.toLowerCase()}-plain colored`}
                        />
                        {language}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <StarFilledIcon className="h-4 w-4 text-muted-foreground" />{" "}
                        <div>{watchers}</div>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Star className="h-4 w-4 text-muted-foreground" />
                        <div>{forks_count}</div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {date}
                      </div>
                    </span>
                    <span>
                      {topics.map((e: any, index: any) => {
                        return (
                          <span key={index}>
                            <i></i> {e}
                          </span>
                        );
                      })}
                    </span>
                  </article>
                </div>
              );
            }
          )}
      </div>
    </div>
  );
};

export default AboutPage;
