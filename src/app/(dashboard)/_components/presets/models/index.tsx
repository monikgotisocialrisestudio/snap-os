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
import { useRouter } from "next/navigation";
import React from "react";

const Models = () => {
  const router = useRouter();

  const records = [
    {
      model: "Brianna ",
      run_time: "Main",
      type: "Search Adds and Quick Adds",
      devices: "iPhone 11 (GXYXR17KO), iPhone 8 (GLAXSY7KO)",
      total: 2,
      id: getUniqueID(),
    },
    {
      model: "Sarah",
      run_time: "Testing",
      type: "Quick Adds",
      devices: "iPhone 8 (DFAS8DSJ2)",
      total: 1,
      id: getUniqueID(),
    },
    {
      model: "Brianna ",
      run_time: "Default",
      type: "Search Adds",
      devices: "iPhone 8 (FDAS9S0JF), iPhone 8 (GLAXSY7KO)",
      total: 1,
      id: getUniqueID(),
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <div className={SECTION_SUB_HEADER}>Models</div>

      <div className="grid grid-cols-5">
        <div className="col-span-4 gap-4 rounded-md border border-border p-4">
          <table className="flex w-full flex-col gap-4">
            <thead>
              <tr className="grid grid-cols-4 text-left">
                <th className={TABLE_TITLE_ROW_CELL}>Model</th>
                <th className={TABLE_TITLE_ROW_CELL}>Preset</th>
              </tr>
            </thead>
            <tbody className="flex flex-col gap-6">
              {records.map((row) => (
                <tr className="grid border-collapse grid-cols-4" key={row.id}>
                  <td className={cn("rounded-l-md", TABLE_ROW_CELL)}>
                    <Button
                      variant="link"
                      className="h-fit !p-0"
                      // eslint-disable-next-line @typescript-eslint/no-empty-function
                      onClick={() => {}}
                    >
                      {row.model}
                    </Button>
                  </td>
                  <td className={TABLE_ROW_CELL}>{row.run_time}</td>

                  <td className={cn("rounded-r-md text-right", TABLE_ROW_CELL)}>
                    <Button
                      variant="link"
                      className="ml-auto h-fit !p-0"
                      // eslint-disable-next-line @typescript-eslint/no-empty-function
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
            <Button
              variant="secondary"
              onClick={() => {
                router.push("presets/create-model");
              }}
            >
              Create
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Models;
