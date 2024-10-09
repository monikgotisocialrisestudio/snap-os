import { ScrollArea } from "@/components/ui/scroll-area";
import { SECTION_SUB_HEADER } from "@/lib/classNames";
import React from "react";

const Logs = () => {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <h4 className={SECTION_SUB_HEADER}>Logs</h4>
      <ScrollArea className="h-72 max-h-72 rounded-md border border-muted-foreground/50">
        <div className="flex h-full flex-col p-4">
          <p className="flex-1"></p>
          <p>[2024-07-28 21:21:43] Run Executed</p>
          <p>[2024-07-29 17:37:49] Run Failed</p>
          <p>[2024-07-30 17:24:36] Retry Run</p>
          <p>[2024-07-30 18:29:39] Skipping account briannaberry</p>
          <p>[2024-07-28 21:21:43] Run Executed</p>
        </div>
      </ScrollArea>
    </div>
  );
};

export default Logs;
