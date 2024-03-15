"use client";

import { ClockIcon } from "lucide-react";

export const CodingHours = () => {
  const totalhours =
    new Date().getTime() / 1000 / 60 / 60 / 24 / 365.25 / 4 + 48 * 365;

  return (
    <div className="flex flex-col gap-6 rounded-xl p-4 shadow-feature-card dark:shadow-feature-card-dark lg:p-6">
      <div className="flex items-center gap-2">
        <ClockIcon className="size-[18px]" />
        <h2 className="text-sm font-light">Coding hours</h2>
      </div>
      <div className="flex grow items-center justify-center font-title text-3xl font-semibold">
        {Math.round(totalhours)} hrs
      </div>
    </div>
  );
};
