"use client";
import { ActionTooltip } from "@/components/shared/action-tooltip";
import { Button } from "@/components/ui/button";
import {
  SECTION_SUB_HEADER,
  TABLE_ROW_CELL,
  TABLE_TITLE_ROW_CELL,
} from "@/lib/classNames";
import { cn, getUniqueID } from "@/lib/utils";
import { Trash2 } from "lucide-react";
import React from "react";

const Usernames = () => {
  const records = [
    {
      model: "Brianna_usernamese",
      run_time: "Main",
      type: "Search Adds and Quick Adds",
      devices: "iPhone 11 (GXYXR17KO), iPhone 8 (GLAXSY7KO)",
      total: 2,
      id: getUniqueID(),
    },
    {
      model: "Sarah_usernames",
      run_time: "Testing",
      type: "Quick Adds",
      devices: "iPhone 8 (DFAS8DSJ2)",
      total: 1,
      id: getUniqueID(),
    },
    {
      model: "West_coast_usernames ",
      run_time: "Default",
      type: "Search Adds",
      devices: "iPhone 8 (FDAS9S0JF), iPhone 8 (GLAXSY7KO)",
      total: 1,
      id: getUniqueID(),
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <div className={SECTION_SUB_HEADER}>Usernames</div>
      <div className="grid grid-cols-5">
        <div className="col-span-4 gap-4 rounded-md border border-muted-foreground/50 p-4">
          <table className="flex w-full flex-col gap-4">
            <thead>
              <tr className="grid grid-cols-4 text-left">
                <th className={TABLE_TITLE_ROW_CELL}>Usernames</th>
              </tr>
            </thead>
            <tbody className="flex flex-col gap-6">
              {records.map(row => (
                <tr className="grid border-collapse grid-cols-4" key={row.id}>
                  <td className={cn("rounded-l-md", TABLE_ROW_CELL)}>
                    <Button
                      variant="link"
                      className="h-fit !p-0"
                      onClick={() => {}}
                    >
                      {row.model}
                    </Button>
                  </td>

                  <td
                    className={cn(
                      "col-span-2 rounded-r-md text-right",
                      TABLE_ROW_CELL
                    )}
                  >
                    <Button
                      variant="link"
                      className="ml-auto h-fit !p-0"
                      onClick={() => {}}
                    >
                      edit
                    </Button>
                  </td>
                  <td className="flex items-center px-4">
                    <ActionTooltip label="Delete">
                      <Button
                        variant="outline"
                        className="flex h-fit items-center p-1"
                      >
                        <Trash2 size={20} />
                      </Button>
                    </ActionTooltip>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="col-span-4 mt-10 text-right">
            <Button variant="secondary">Create</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usernames;
