"use client";

import React, { useState } from "react";
import Slider from "./components/common/slider";
import Main from "./components/index";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState("active-runs");

  return (
    <div className="h-screen bg-[#313940]">
    <div className="flex xl:flex-row flex-col-reverse flex-1 px-6">
      <div className="container mx-auto xl:w-4/5 w-full mt-8">
        <Main selectedTab={selectedTab} />
      </div>
      <div className="xl:w-1/5 w-full mx-auto flex justify-center items-start">
        <Slider selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </div>
    </div>
    </div>
  );
}
