import React from "react";
import { Metadata } from "next";
import { TabsContent } from "@/components/ui/tabs";
import { DASHBOARD_TABS } from "@/lib/enums";
import ActiveRuns from "../_components/active-runs";
import Presets from "../_components/presets";
import Header from "../_components/header";
import { Card } from "@/components/ui/card";
import Execute from "../_components/execute";

export async function generateMetadata(
): Promise<Metadata> {
  const title = "SnapOS";

  return {
    title: title,
  };
}

const Dashboard = () => {
  return (
    <>
      <Header>
        <TabsContent value={DASHBOARD_TABS.ACTIVE_RUNS}>
          <ActiveRuns />
        </TabsContent>
        <TabsContent value={DASHBOARD_TABS.EXECUTE}>
          <Card className="border-none p-4">
            <Execute />
          </Card>
        </TabsContent>

        <TabsContent value={DASHBOARD_TABS.PRESETS}>
          <Presets />
        </TabsContent>
      </Header>
    </>
  );
};

export default Dashboard;
