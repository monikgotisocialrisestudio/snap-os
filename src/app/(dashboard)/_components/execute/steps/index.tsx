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

      <ol className="overflow-hidden mt-5">
        {Object.values(STEPS).map((step, index) => (
          <li
            key={step}
            className={cn(
              "relative flex-1",
              index < Object.values(STEPS).length - 1 && 
              "after:absolute after:left-[15px] after:top-5 after:-z-10 after:inline-block after:h-full after:w-0.5 after:bg-gray-200 after:content-[''] dark:after:bg-zinc-600",
              activeStep === step ? "after:!bg-blue-700" : ""
            )}
          >
            <a
              className="grid w-full grid-cols-[32px_1fr] gap-3 font-medium pb-6"
              href={`#${step}`}
              onClick={() => setActiveStep(step)}
            >
              <span
                className={cn(
                  "mt-4 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#2A3134] relative",
                  activeStep === step ? "bg-blue-700" : "bg-transparent"
                )}
              >
                <div
                  className={cn(
                    "h-2.5 w-2.5 rounded-full",
                    "bg-white absolute"
                  )}
                ></div>
              </span>
              <div className="mt-4 flex flex-col">
                <p
                  className={cn(
                    "text-base [&:not(:first-child)]:mt-6 font-semibold",
                    activeStep === step ? "font-semibold" : ""
                  )}
                >
                  {step}
                </p>
                <span className={cn(
                    "mb-1 text-base leading-tight font-normal",
                    activeStep === step ? " text-[#FFFFFF]" : "text-[#B0B0B0]"
                  )}>
                  {step === STEPS.MODEL && "Select your model"}
                  {step === STEPS.SCHEDULE && "When should the program execute"}
                  {step === STEPS.DEVICE && "Which iPhones do you want to execute the program on"}
                </span>
              </div>
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Steps;
