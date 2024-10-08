"use client";
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DASHBOARD_TABS } from "@/lib/enums";
import { useParams, useRouter } from "next/navigation";

const Header = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const params = useParams();
  const router = useRouter();
  return (
    <div className="container mx-auto flex justify-between py-4">
      <Tabs
        defaultValue={params.slug as string}
        className="w-full"
        onValueChange={value => {
          router.push(value);
        }}
      >
        <div className="flex justify-end">
          <TabsList className="flex w-fit justify-between">
            <TabsTrigger value={DASHBOARD_TABS.ACTIVE_RUNS}>
              Active Runs
            </TabsTrigger>
            <TabsTrigger value={DASHBOARD_TABS.EXECUTE}>Execute</TabsTrigger>
            <TabsTrigger value={DASHBOARD_TABS.PRESETS}>Presets</TabsTrigger>
          </TabsList>
        </div>
        {children}
      </Tabs>
    </div>
  );
};

export default Header;
