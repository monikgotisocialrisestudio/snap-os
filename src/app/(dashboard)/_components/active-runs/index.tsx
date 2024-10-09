import { SECTION_HEADER } from "@/lib/classNames";
import React from "react";
import Records from "./records";
import clsx from "clsx";

const ActiveRuns = () => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className={clsx(SECTION_HEADER)}>Active Runs</h2>
      <Records />
    </div>
  );
};

export default ActiveRuns;
