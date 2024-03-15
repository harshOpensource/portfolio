"use client";

import PageTitle from "@/components/projects/page-title";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { ArrowUpRightFromSquareIcon, Star } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Props = {};

const AboutPage = (props: Props) => {
  const [repos, setRepos] = useState<any>();
  const [user, setUser] = useState<any>();

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
    const filteredReposs = repoData.filter((repo: any) => !repo.homepage);
    setRepos((prev: any) => [...prev, ...filteredReposs]);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="mb-16">
      <PageTitle title="About me" description="👋 Hi there! I am Harsh." />
      {user && (
        <div className="text-muted-foreground text-2xl mb-6 font-semibold">
          Recent Projects
        </div>
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
