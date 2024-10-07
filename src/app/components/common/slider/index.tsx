import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface SliderProps {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}

const Slider: React.FC<SliderProps> = ({ selectedTab, setSelectedTab }) => {
  return (
    <Tabs defaultValue="active-runs" className="inline-flex rounded-md shadow-sm bg-[#1C2124] mt-6 p-2">
      <TabsList>
        <TabsTrigger
          value="active-runs"
          onClick={() => setSelectedTab("active-runs")}
          className={`px-4 py-2 text-sm font-medium leading-5 text-white bg-[#1C2124] border-none rounded-s-lg focus:z-10 focus:ring-2 focus:ring-transparent focus:text-white focus:bg-[#2A3134] focus:rounded ${selectedTab === "active-runs" ? "bg-[#2A3134]" : ""}`}
        >
          Active Runs
        </TabsTrigger>
        <TabsTrigger
          value="execute"
          onClick={() => setSelectedTab("execute")}
          className={`px-4 py-2 text-sm font-medium leading-5 text-white bg-[#1C2124] border-none focus:z-10 focus:ring-2 focus:ring-transparent focus:text-white focus:bg-[#2A3134] ${selectedTab === "execute" ? "bg-[#2A3134]" : ""}`}
        >
          Execute
        </TabsTrigger>
        <TabsTrigger
          value="presets"
          onClick={() => setSelectedTab("presets")}
          className={`px-4 py-2 text-sm font-medium leading-5 text-white bg-[#1C2124] border-none rounded-r-lg focus:z-10 focus:ring-2 focus:ring-transparent focus:text-white focus:bg-[#2A3134] focus:rounded ${selectedTab === "presets" ? "bg-[#2A3134]" : ""}`}
        >
          Presets
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default Slider;
