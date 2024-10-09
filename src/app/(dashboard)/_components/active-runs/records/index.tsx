"use client";
import { cn, getUniqueID } from "@/lib/utils";
import React, { useState } from "react";
import { Trash2 } from "lucide-react";
import { TABLE_ROW_CELL, TABLE_TITLE_ROW_CELL } from "@/lib/classNames";
import { Button } from "@/components/ui/button";
import AccountDetails from "./account-details";
import { ActionTooltip } from "@/components/shared/action-tooltip";
import Confirmation from "@/components/shared/confirmation";

const Records = () => {
  const [details, setDeatils] = useState<{ open: boolean; id: string | null }>({
    open: false,
    id: null,
  });
  const [confirm, setConfirm] = useState(false);

  const records = [
    {
      model: "Brianna / Main",
      run_time: "3:00 pm",
      type: "Search Adds and Quick Adds",
      devices: "iPhone 11 (GXYXR17KO), iPhone 8 (GLAXSY7KO)",
      total: 2,
      id: getUniqueID(),
    },
    {
      model: "Sarah / Default",
      run_time: "4:00 pm",
      type: "Quick Adds",
      devices: "iPhone 8 (DFAS8DSJ2)",
      total: 1,
      id: getUniqueID(),
    },
    {
      model: "Brianna / Testing",
      run_time: "4:00 pm",
      type: "Search Adds",
      devices: "iPhone 8 (FDAS9S0JF), iPhone 8 (GLAXSY7KO)",
      total: 1,
      id: getUniqueID(),
    },
  ];

  return (
    <>
      <table className="flex w-full flex-col gap-4">
        <thead>
          <tr className="grid grid-cols-5 text-left">
            <th className={TABLE_TITLE_ROW_CELL}>Model</th>
            <th className={TABLE_TITLE_ROW_CELL}>Run Time</th>
            <th className={TABLE_TITLE_ROW_CELL}>Type</th>
            <th className={TABLE_TITLE_ROW_CELL}>Devices</th>
          </tr>
        </thead>
        <tbody className="flex flex-col gap-8">
          {records.map(row => (
            <tr className="grid border-collapse grid-cols-5" key={row.id}>
              <td className={cn("rounded-l-md", TABLE_ROW_CELL)}>
                <Button
                  variant="link"
                  className="h-fit !p-0"
                  onClick={() =>
                    setDeatils({
                      id: row.id,
                      open: true,
                    })
                  }
                >
                  {row.model}
                </Button>
              </td>
              <td className={TABLE_ROW_CELL}>{row.run_time}</td>
              <td className={TABLE_ROW_CELL}>{row.type}</td>
              <td className="relative rounded-r-md border border-muted-foreground/50 bg-secondary/70 px-4 py-2 text-sm">
                <div className="truncate">{row.devices}</div>
                <div className="absolute -bottom-6 right-1 text-sm text-muted-foreground">
                  Total: {row.total}
                </div>
              </td>
              <td className="flex items-center px-4">
                <ActionTooltip label="Delete">
                  <Button
                    variant="outline"
                    className="flex h-fit items-center p-1"
                    onClick={() => setConfirm(true)}
                  >
                    <Trash2 size={20} />
                  </Button>
                </ActionTooltip>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AccountDetails
        open={details.open}
        onOpenChange={value => {
          if (!value) {
            setDeatils({ open: false, id: null });
          }
        }}
      />
      <Confirmation
        open={confirm}
        onOpenChange={setConfirm}
        content="Are you sure, want to delete active run?"
      />
    </>
  );
};

export default Records;
