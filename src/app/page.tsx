import { DASHBOARD_TABS } from "@/lib/enums";
import { redirect } from "next/navigation";

export default function Home() {
  redirect(DASHBOARD_TABS.ACTIVE_RUNS);
  return <></>;
}
