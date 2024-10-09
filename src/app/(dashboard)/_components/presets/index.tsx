import { SECTION_HEADER } from "@/lib/classNames";
import React from "react";
import Models from "./models";
import Usernames from "./usernames";
import { Separator } from "@/components/ui/separator";

const Presets = () => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className={SECTION_HEADER}>Presets</h2>
      <Models />
      <Separator />
      <Usernames />
    </div>
  );
};

export default Presets;
