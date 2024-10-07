"use client";
import React, { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import CustomDrawer from "./common/Drawer/Drawer";

const ActiveRuns: React.FC = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [selectedRun, setSelectedRun] = useState<{
        modal: string;
        runTime: string;
        type: string;
        devices: string;
    } | null>(null);

    const handleRowClick = (runData: { modal: string; runTime: string; type: string; devices: string; }) => {
        setSelectedRun(runData);
        setIsDrawerOpen(true);
    };

    const runsData = [
        { modal: "Brianna / Main", runTime: "3:00 pm", type: "Search Adds & Quick Adds", devices: "iPhone 11 (GXYXR17KO), iPhone 8..." },
        { modal: "Sarah / Default", runTime: "3:00 pm", type: "Search Adds & Quick Adds", devices: "iPhone 11 (GXYXR17KO), iPhone 8..." },
    ];

    return (
        <div className="relative overflow-x-auto">
            <h1 className="text-white text-[32px] leading-[36.4px] font-normal">Active Runs</h1>
            <Table className="bg-transparent w-full text-sm text-left rtl:text-right text-white mt-6 border-separate border-spacing-y-4">
                <TableHeader>
                    <TableRow>
                        <TableHead className="px-6 py-3 text-center text-base leading-5 font-semibold text-white">Modal</TableHead>
                        <TableHead className="px-6 py-3 text-center text-base leading-5 font-semibold text-white">Run Time</TableHead>
                        <TableHead className="px-6 py-3 text-center text-base leading-5 font-semibold text-white">Type</TableHead>
                        <TableHead className="px-6 py-3 text-center text-base leading-5 font-semibold text-white">Devices</TableHead>
                        <TableHead className="px-6 py-3 text-center text-base leading-5 font-semibold text-white">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {runsData.map((run, index) => (
                        <TableRow key={index} className="bg-[#2A3134] cursor-pointer my-1" onClick={() => handleRowClick(run)}>
                            <TableCell className="px-6 py-4 border border-[#2A3134] font-medium whitespace-nowrap">{run.modal}</TableCell>
                            <TableCell className="px-6 py-4 border border-[#2A3134]">{run.runTime}</TableCell>
                            <TableCell className="px-6 py-4 border border-[#2A3134]">{run.type}</TableCell>
                            <TableCell className="px-6 py-4 border border-[#2A3134] font-medium whitespace-nowrap">{run.devices}</TableCell>
                            <TableCell className="px-6 py-4 border border-[#2A3134]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                    />
                                </svg>
                            </TableCell>
                        </TableRow>
                    ))}
                    {/* <TableRow className="bg-[#1C2124]">
                        <TableCell colSpan={5} className="px-6 py-4 border-none font-medium whitespace-nowrap">Total: {runsData.length}</TableCell>
                    </TableRow> */}
                </TableBody>
            </Table>
            <CustomDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} runData={selectedRun} />
        </div>
    );
};

export default ActiveRuns;
