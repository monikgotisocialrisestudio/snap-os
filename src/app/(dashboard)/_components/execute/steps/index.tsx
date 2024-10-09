import React from "react";
import { STEPS } from "@/lib/enums";
import { cn } from "@/lib/utils";

type propType = {
  activeStep: STEPS;
  setActiveStep: React.Dispatch<React.SetStateAction<STEPS>>;
};

const Steps = (props: propType) => {
  const { activeStep, setActiveStep } = props;

  return (
    <div className="sticky top-5 col-span-4 h-fit text-white">
      <div className="flex items-center gap-2">
        <h2 className="text-white text-[32px] leading-[36.4px] font-normal">
          Execute Program
        </h2>
      </div>

      <ol className="overflow-hidden">
        <li
          className={cn(
            "relative flex-1 after:absolute after:left-[15px] after:top-5 after:-z-10 after:inline-block after:h-full after:w-0.5 after:bg-gray-200 after:content-[''] dark:after:bg-zinc-600",
            activeStep === STEPS.MODEL ? "after:!bg-blue-700" : ""
          )}
        >
          <a
            className="grid w-full grid-cols-[32px_1fr] gap-3 font-medium"
            href={`#${STEPS.MODEL}`}
            onClick={() => setActiveStep(STEPS.MODEL)}
          >
            <span
              className={cn(
                "mt-4 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-200 bg-background dark:border-zinc-600",
                activeStep === STEPS.MODEL
                  ? "!border-violet-950 bg-blue-700"
                  : ""
              )}
            >
              <div className="h-2.5 w-2.5 rounded-full bg-foreground"></div>
            </span>
            <div className="mt-4 flex flex-col">
              <p className="text-sm [&:not(:first-child)]:mt-6">Model</p>
              <span className="mb-4 text-xs leading-tight">
              Select your model
              </span>
            </div>
          </a>
        </li>

        <li
          className={cn(
            "relative flex-1 after:absolute after:left-[15px] after:top-5 after:-z-10 after:inline-block after:h-full after:w-0.5 after:bg-gray-200 after:content-[''] dark:after:bg-zinc-600",
            activeStep === STEPS.SCHEDULE ? "after:!bg-blue-700" : ""
          )}
        >
          <a
            className="grid w-full grid-cols-[32px_1fr] gap-3 font-medium"
            href={`#${STEPS.SCHEDULE}`}
            onClick={() => setActiveStep(STEPS.SCHEDULE)}
          >
            <span
              className={cn(
                "mt-4 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-200 bg-background dark:border-zinc-600",
                activeStep === STEPS.SCHEDULE
                  ? "!border-violet-950 bg-blue-700"
                  : ""
              )}
            >
              <div className="h-2.5 w-2.5 rounded-full bg-foreground"></div>
            </span>
            <div className="mt-4 flex flex-col">
              <p className="text-sm [&:not(:first-child)]:mt-6">Run Schedule</p>
              <span className="mb-4 text-xs leading-tight">
              When should the program execute
              </span>
            </div>
          </a>
        </li>

        <li
          className={cn(
            "relative flex-1 after:absolute after:left-[15px] after:top-5 after:-z-10 after:inline-block after:h-full after:w-0.5 after:bg-gray-200 after:content-[''] dark:after:bg-zinc-600",
            activeStep === STEPS.DEVICE ? "after:!bg-blue-700" : ""
          )}
        >
          <a
            className="grid w-full grid-cols-[32px_1fr] gap-3 font-medium"
            href={`#${STEPS.DEVICE}`}
            onClick={() => setActiveStep(STEPS.DEVICE)}
          >
            <span
              className={cn(
                "mt-4 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-200 bg-background dark:border-zinc-600",
                activeStep === STEPS.DEVICE
                  ? "!border-violet-950 bg-blue-700"
                  : ""
              )}
            >
              <div className="h-2.5 w-2.5 rounded-full bg-foreground"></div>
            </span>
            <div className="mt-4 flex flex-col">
              <p className="text-sm [&:not(:first-child)]:mt-6">Select Devices</p>
              <span className="mb-4 text-xs leading-tight">
              Which iphones do you want to execute the program on
              </span>
            </div>
          </a>
        </li>
      </ol>
    </div>
  );
};

export default Steps;
