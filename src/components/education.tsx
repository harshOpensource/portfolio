"use client";

import { UniversityIcon } from "lucide-react";
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

function Education({}: Props) {
  return (
    <motion.div initial={animation.hide} animate={animation.show}>
      <div className="mb-56 mt-36 mx-4 md:mx-1">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <li className="ms-10 mt-16">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -start-4 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <UniversityIcon className="w-5 h-5 text-blue-800 dark:text-blue-300" />
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              BS in Data Science and its Applications (Indian Institute of
              Technology, Madras)
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2020 - Sept 2024 (Expected)
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              The BS in Data Science and its Applications is a four-year
              undergraduate program offered by the Department of Computer
              Science and Engineering, IIT Madras.
            </p>
          </li>
          <li className="ms-10 mt-16">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -start-4 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <UniversityIcon className="w-5 h-5 text-blue-800 dark:text-blue-300" />
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              National Institute of Electronics and Information Technology (B
              Level)
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2023 - 2025 (Expected)
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              The B Level is a Master's in Computer Applications course offered
              by the DOEACC Society in the field of Information Technology. It
              falls under the Ministry of Electronics and Information
              Technology, Government of India.
            </p>
          </li>
          <li className="ms-10 mt-16">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -start-4 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <UniversityIcon className="w-5 h-5 text-blue-800 dark:text-blue-300" />
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              National Institute of Electronics and Information Technology (A
              Level)
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2021 - 2023
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              The A Level is a Advanced Diploma course offered by the DOEACC
              Society in the field of Information Technology. It falls under the
              Ministry of Electronics and Information Technology, Government of
              India.
            </p>
          </li>
          <li className="ms-10 mt-16">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -start-4 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <UniversityIcon className="w-5 h-5 text-blue-800 dark:text-blue-300" />
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              National Institute of Electronics and Information Technology (O
              Level)
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2020 - 2021
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              The O Level is a foundation-level course offered by the DOEACC
              Society in the field of Information Technology. It falls under the
              Ministry of Electronics and Information Technology, Government of
              India.
            </p>
          </li>

          <li className="ms-10 mt-16">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -start-4 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <UniversityIcon className="w-5 h-5 text-blue-800 dark:text-blue-300" />
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Bachelors in Geology
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2020 - 2023
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              I've completed my Bachelors in Geology from the University of
              Agra, India.
            </p>
          </li>
        </ol>
      </div>
    </motion.div>
  );
}

export default Education;
