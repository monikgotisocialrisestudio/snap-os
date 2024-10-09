import React from "react";
import { Metadata, ResolvingMetadata } from "next";
import { TabsContent } from "@/components/ui/tabs";
import { DASHBOARD_TABS } from "@/lib/enums";
import ActiveRuns from "../_components/active-runs";
import Presets from "../_components/presets";
import Header from "../_components/header";
import { Card } from "@/components/ui/card";
import Execute from "../_components/execute";

type propType = { params: { slug: string }; searchParams: {} };

export async function generateMetadata(
  { params, searchParams }: propType,
  parent: ResolvingMetadata
): Promise<Metadata> {
  let title = "SnapOS";

  return {
    title: title,
  };
}

const Dashboard = (props: propType) => {
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
