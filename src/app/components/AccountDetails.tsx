import React, { useState } from "react";
import Select, { StylesConfig, ActionMeta } from "react-select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const options = [
  { value: "value1", label: "Last 24 hours" },
  { value: "value2", label: "Last 7 days" },
  { value: "value3", label: "Last 30 days" },
];

type OptionType = {
  value: string;
  label: string;
};

function AccountDetails({ name }: { name: string | undefined }) {
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(
    options[0]
  );

  const customStyles: StylesConfig<OptionType> = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#2A3134",
      borderColor: "#2A3134",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#4A4D4F",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#4A4D4F"
        : state.isFocused
        ? "#3A3D3F"
        : "#2A3134",
      color: "white",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "white",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#2A3134",
    }),
  };

  const handleChange = (
    newValue: OptionType | null,
    actionMeta: ActionMeta<OptionType>
  ) => {
    setSelectedOption(newValue);
    console.log(`Option selected:`, newValue);
    console.log(`Action:`, actionMeta);
  };

  return (
    <div className="p-8">
      <div className="flex flex-col">
        <div className="flex items-center">
          <h1 className="text-2xl">{name}</h1>
          <Badge
            variant="destructive"
            className="bg-white text-black rounded-xl p-1 text-sm ml-4 flex items-center px-3"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full mr-1" />
            Active
          </Badge>
        </div>
        <div className="text-sm text-[#707477]">Created 20 - June - 2024</div>
      </div>
      <div className="flex mt-4 items-center justify-between">
        <div>
          <h1 className="text-xl">Account Analytics</h1>
        </div>
        <div className="ml-4 w-1/2 text-black">
          <Select
            value={selectedOption}
            onChange={handleChange}
            options={options}
            className="react-select-container"
            classNamePrefix="react-select"
            styles={customStyles}
            isMulti={false}
          />
        </div>
      </div>
      <div className="flex justify-between mt-8">
        <Card className="bg-[#2A3134] rounded-md border-none w-1/2 mr-2">
          <CardContent className="pt-16">
            <div className="px-2">
              <span className="font-bold text-3xl">271</span> Search Adds
            </div>
            <div className="px-2 pb-4">Search Adds Completed</div>
          </CardContent>
        </Card>
        <Card className="bg-[#2A3134] rounded-md w-1/2 ml-2 border-none">
          <CardContent className="pt-16">
            <div className="px-2">
              <span className="font-bold text-3xl">150</span> Total Adds
            </div>
            <div className="px-2 pb-4">Total Adds Completed</div>
          </CardContent>
        </Card>
      </div>
      <h1 className="mt-9 text-xl">Logs</h1>
      <div className="mt-2 border-2 border-[#2A3134] rounded-md">
        <div className="p-2 mt-16 mb-4">
          <p>[2024-07-28 21:21:43] Run Executed</p>
          <p>[2024-07-28 21:21:43] Run Failed</p>
          <p>[2024-07-28 21:21:43] Retry Run</p>
          <p>[2024-07-28 21:21:43] Skipping account briannaberry</p>
          <p>[2024-07-28 21:21:43] Run Executed</p>
        </div>
      </div>
      <div className="mt-16 flex justify-end">
        <Button
          type="button"
          className="bg-[#2A3134] text-white rounded-lg px-6 py-5 transition duration-200"
        >
          Edit Preset
        </Button>
      </div>
    </div>
  );
}

export default AccountDetails;
