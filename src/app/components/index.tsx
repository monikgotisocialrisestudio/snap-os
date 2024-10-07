import React from "react";
import ActiveRuns from "./ActiveRuns";
import Presents from "./Presents"; 

interface MainProps {
  selectedTab: string;
}

const Main: React.FC<MainProps> = ({ selectedTab }) => {
  const renderComponent = () => {
    switch (selectedTab) {
      case "active-runs":
        return <ActiveRuns />;
      // Uncomment and implement this case when the component is available
      case "execute":
        // return <ExecuteComponent />;
        return <Presents />;
      // case "presets":
      //   return <Presents />;
      default:
        return <ActiveRuns />;
    }
  };

  return (
    <div className="">
      <div className="py-4 rounded-lg dark:border-gray-700">
        {renderComponent()}
      </div>
    </div>
  );
};

export default Main;
