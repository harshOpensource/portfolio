"use client";

import { StarFilledIcon } from "@radix-ui/react-icons";
import { ArrowUpRightFromCircleIcon } from "lucide-react";
import { motion } from "framer-motion";

type Props = {};

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

function Experience({}: Props) {
  return (
    <motion.div initial={animation.hide} animate={animation.show}>
      <div className="border-[1px] rounded-lg p-[2rem] my-5">
        <div className="flex flex-col gap-[2px]">
          <div className="text-lg mb-2">
            AI Solutions Integration Analyst and Full Stack Developer
          </div>
          <div className="text-sm text-muted-foreground">Onboard AI</div>
          <div className="text-sm text-muted-foreground">
            Permanent Part-time
          </div>
          <div className="text-sm text-muted-foreground">
            Dec 2023 - Present · 3 months
          </div>
        </div>

        <div className="mt-5">
          Offering freelance AI integration services, committed to delivering
          innovative solutions for businesses. Developed custom AI tools like
          Webhooks and GPT integration, tailored for improved efficiency.
          Tailored solutions to meet unique client needs, ensuring seamless AI
          integration into diverse business environments
        </div>

        <div className="flex flex-col gap-4">
          <div className="my-4 text-muted-foreground">
            Some key projects worked on during this time 👇
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <StarFilledIcon className="mr-2 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                AI Automation Appointment Scheduling System
              </span>
            </div>
            <div className="flex items-center ml-6">
              <ArrowUpRightFromCircleIcon className="h-4 w-4 mr-2" />
              <div className="text-sm">
                Reducing the time spent on scheduling appointments
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <StarFilledIcon className="mr-2 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                AI Queries and Responses System
              </span>
            </div>
            <div className="flex items-center ml-6">
              <ArrowUpRightFromCircleIcon className="h-4 w-4 mr-2" />
              <div className="text-sm">
                Improved customer service experience
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <StarFilledIcon className="mr-2 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Custom AI tools like Webhooks and GPT integration
              </span>
            </div>
            <div className="flex items-center ml-6">
              <ArrowUpRightFromCircleIcon className="h-4 w-4 mr-2" />
              <div className="text-sm">Improved efficiency</div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <StarFilledIcon className="mr-2 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Tailored solutions to meet unique client needs
              </span>
            </div>
            <div className="flex items-center ml-6">
              <ArrowUpRightFromCircleIcon className="h-4 w-4 mr-2" />
              <div className="text-sm">Ensured seamless AI</div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-[1px] rounded-lg p-[2rem] my-8">
        <div className="flex flex-col gap-[2px]">
          <div className="text-lg mb-2">
            Freelancer (Blockchain and Full Stack Developer)
          </div>
          <div className="text-sm text-muted-foreground">Upwork</div>
          <div className="text-sm text-muted-foreground">
            Contract Part-time
          </div>
          <div className="text-sm text-muted-foreground">
            Jun 2022 - Present · 2+ years
          </div>
        </div>

        <div className="mt-5">
          Specialized expertise in blockchain development, contributing to the
          creation and enhancement of decentralized application (DApps) and
          smart contracts. Employed a collaborative and client-focused approach,
          ensuring a deep understanding of project requirements and delivering
          tailored solutions that meet or exceed expectations. Smooth
          Integration of Smart Contract with the Frontend using Ether.js
        </div>

        <div className="flex flex-col gap-4">
          <div className="my-4 text-muted-foreground">
            Some key projects worked on during this time 👇
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <StarFilledIcon className="mr-2 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Decentralized Application (DApps) and Smart Contracts
              </span>
            </div>
            <div className="flex items-center ml-6">
              <ArrowUpRightFromCircleIcon className="h-4 w-4 mr-2" />
              <div className="text-sm">Increased transparency and security</div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <StarFilledIcon className="mr-2 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Integration of Smart Contract with the Frontend using
              </span>
            </div>
            <div className="flex items-center ml-6">
              <ArrowUpRightFromCircleIcon className="h-4 w-4 mr-2" />
              <div className="text-sm">Ether.js</div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <StarFilledIcon className="mr-2 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Collaborative and client-focused approach
              </span>
            </div>
            <div className="flex items-center ml-6">
              <ArrowUpRightFromCircleIcon className="h-4 w-4 mr-2" />
              <div className="text-sm">Deep understanding</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
