import React from "react";
import { Metadata, ResolvingMetadata } from "next";
import { DASHBOARD_TABS } from "@/lib/enums";
import { TabsContent } from "@radix-ui/react-tabs";
import { Card } from "@/components/ui/card";
import Execute from "../_components/execute";

// eslint-disable-next-line @typescript-eslint/ban-types
type propType = { params: { slug: string }; searchParams: {} };

export async function generateMetadata(
  { params, searchParams }: propType,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const title = "SnapOS";

  return {
    title: title,
  };
}

const Dashboard = (props: propType) => {
  return (
    <>
    <TabsContent value={DASHBOARD_TABS.EXECUTE}>
        <Card className="p-4 border-none">
          <Execute />
        </Card>
      </TabsContent>
    </>
  );
};

export default Dashboard;
