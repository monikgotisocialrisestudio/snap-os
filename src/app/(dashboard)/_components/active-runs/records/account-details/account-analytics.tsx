import CESelect from "@/components/shared/ce-select";
import { SECTION_HEADER, SECTION_SUB_HEADER } from "@/lib/classNames";
import { TIME_FRAME_OPTIONS } from "@/lib/constant";
import { TIME_FRAME_TYPE } from "@/lib/enums";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

const AccountAnalytics = () => {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState(
    TIME_FRAME_TYPE["all-time"]
  );
  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full items-center justify-between">
        <h4 className={SECTION_SUB_HEADER}>Account Analytics</h4>
        <CESelect
          triggerProps={{ className: "w-fit bg-secondary/70" }}
          options={TIME_FRAME_OPTIONS}
          value={selectedTimeFrame}
          onValueChange={value =>
            setSelectedTimeFrame(value as TIME_FRAME_TYPE)
          }
        />
      </div>

      <div className="flex gap-4">
        <div className="flex-1 rounded-md bg-secondary/70 p-4 pt-10">
          <div>
            <span className={cn(SECTION_HEADER, "font-bold")}>271</span>{" "}
            <span className={cn("text-lg text-muted-foreground")}>
              Search Adds
            </span>
          </div>
          <span className={cn("text-muted-foreground")}>
            Search Adds Completed
          </span>
        </div>
        <div className="flex-1 rounded-md bg-secondary/70 p-4 pt-10">
          <div>
            <span className={cn(SECTION_HEADER, "font-bold")}>731</span>{" "}
            <span className={cn("text-lg text-muted-foreground")}>
              Quick Adds
            </span>
          </div>
          <span className={cn("text-muted-foreground")}>
            Quick Adds Completed
          </span>
        </div>
      </div>
    </div>
  );
};

export default AccountAnalytics;
