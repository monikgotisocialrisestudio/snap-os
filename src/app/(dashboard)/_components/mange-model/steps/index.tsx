import React from "react";
import { STEPS } from "..";
import { cn } from "@/lib/utils";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { DASHBOARD_TABS } from "@/lib/enums";
import { CAPTION_SMALL_TEXT } from "@/lib/classNames";

type propType = {
  activeStep: STEPS;
  setActiveStep: React.Dispatch<React.SetStateAction<STEPS>>;
};

const completed = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    className="mt-4"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_5_157)">
      <path
        d="M1 16C1 7.71573 7.71573 1 16 1C24.2843 1 31 7.71573 31 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16Z"
        fill="#1957CD"
      />
      <path
        d="M1 16C1 7.71573 7.71573 1 16 1C24.2843 1 31 7.71573 31 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16Z"
        stroke="#1957CD"
        stroke-width="2"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22.7951 9.85334L13.2484 19.0667L10.7151 16.36C10.2484 15.92 9.51509 15.8933 8.98176 16.2667C8.46176 16.6533 8.31509 17.3333 8.63509 17.88L11.6351 22.76C11.9284 23.2133 12.4351 23.4933 13.0084 23.4933C13.5551 23.4933 14.0751 23.2133 14.3684 22.76C14.8484 22.1333 24.0084 11.2133 24.0084 11.2133C25.2084 9.98668 23.7551 8.90668 22.7951 9.84001V9.85334Z"
        fill="white"
      />
    </g>

    <defs>
      <clipPath id="clip0_5_157">
        <path
          d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);

const Steps = (props: propType) => {
  const { activeStep, setActiveStep } = props;
  const router = useRouter();

  return (
    <div className="sticky top-5 col-span-4 h-fit">
      <div className="flex items-center gap-2">
        <button
          className="pb-2"
          onClick={() => {
            router.push(`/${DASHBOARD_TABS.PRESETS}`);
          }}
        >
          <MoveLeft />
        </button>
        <h2 className="scroll-m-20 pb-2 text-2xl font-normal tracking-tight first:mt-0">
          Create Model
        </h2>
      </div>

      <ol className="overflow-hidden">
        <li
          className={cn(
            "relative flex-1 after:absolute after:left-[15px] after:top-5 after:-z-10 after:inline-block after:h-full after:w-0.5 after:bg-gray-200 after:content-[''] dark:after:bg-zinc-600",
            activeStep === STEPS.CYCLES ? "after:!bg-blue-700" : ""
          )}
        >
          <a
            className="grid w-full grid-cols-[32px_1fr] gap-3 font-medium"
            href={`#${STEPS.CYCLES}`}
            onClick={() => setActiveStep(STEPS.CYCLES)}
          >
            <span
              className={cn(
                "mt-4 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-200 bg-background dark:border-zinc-600",
                activeStep === STEPS.CYCLES
                  ? "!border-violet-950 bg-blue-700"
                  : ""
              )}
            >
              <div className="h-2.5 w-2.5 rounded-full bg-foreground"></div>
            </span>
            <div className="mt-4 flex flex-col">
              <p className="text-sm [&:not(:first-child)]:mt-6">Cycles</p>
              <span className={cn("mb-4", CAPTION_SMALL_TEXT)}>
                How many times should program execute
              </span>
            </div>
          </a>
        </li>

        <li
          className={cn(
            "relative flex-1 after:absolute after:left-[15px] after:top-5 after:-z-10 after:inline-block after:h-full after:w-0.5 after:bg-gray-200 after:content-[''] dark:after:bg-zinc-600",
            activeStep === STEPS.SEARCH_ADDS ? "after:!bg-blue-700" : ""
          )}
        >
          <a
            className="grid w-full grid-cols-[32px_1fr] gap-3 font-medium"
            href={`#${STEPS.SEARCH_ADDS}`}
            onClick={() => setActiveStep(STEPS.SEARCH_ADDS)}
          >
            <span
              className={cn(
                "mt-4 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-200 bg-background dark:border-zinc-600",
                activeStep === STEPS.SEARCH_ADDS
                  ? "!border-violet-950 bg-blue-700"
                  : ""
              )}
            >
              <div className="h-2.5 w-2.5 rounded-full bg-foreground"></div>
            </span>
            <div className="mt-4 flex flex-col">
              <p className="text-sm [&:not(:first-child)]:mt-6">Search Adds</p>
              <span className={cn("mb-4", CAPTION_SMALL_TEXT)}>
                How many search adds do you want to do
              </span>
            </div>
          </a>
        </li>

        <li
          className={cn(
            "relative flex-1 after:absolute after:left-[15px] after:top-5 after:-z-10 after:inline-block after:h-full after:w-0.5 after:bg-gray-200 after:content-[''] dark:after:bg-zinc-600",
            activeStep === STEPS.UPLOAD_NAME ? "after:!bg-blue-700" : ""
          )}
        >
          <a
            className="grid w-full grid-cols-[32px_1fr] gap-3 font-medium"
            href={`#${STEPS.UPLOAD_NAME}`}
            onClick={() => setActiveStep(STEPS.UPLOAD_NAME)}
          >
            <span
              className={cn(
                "mt-4 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-200 bg-background dark:border-zinc-600",
                activeStep === STEPS.UPLOAD_NAME
                  ? "!border-violet-950 bg-blue-700"
                  : ""
              )}
            >
              <div className="h-2.5 w-2.5 rounded-full bg-foreground"></div>
            </span>
            <div className="mt-4 flex flex-col">
              <p className="text-sm [&:not(:first-child)]:mt-6">Upload Names</p>
              <span className={cn("mb-4", CAPTION_SMALL_TEXT)}>
                Upload the list of names you want to use for search adds
              </span>
            </div>
          </a>
        </li>

        <li
          className={cn(
            "relative flex-1 after:absolute after:left-[15px] after:top-5 after:-z-10 after:inline-block after:h-full after:w-0.5 after:bg-gray-200 after:content-[''] dark:after:bg-zinc-600",
            activeStep === STEPS.QUICK_ADDS ? "after:!bg-blue-700" : ""
          )}
        >
          <a
            className="grid w-full grid-cols-[32px_1fr] gap-3 font-medium"
            href={`#${STEPS.QUICK_ADDS}`}
            onClick={() => setActiveStep(STEPS.QUICK_ADDS)}
          >
            <span
              className={cn(
                "mt-4 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-200 bg-background dark:border-zinc-600",
                activeStep === STEPS.QUICK_ADDS
                  ? "!border-violet-950 bg-blue-700"
                  : ""
              )}
            >
              <div className="h-2.5 w-2.5 rounded-full bg-foreground"></div>
            </span>
            <div className="mt-4 flex flex-col">
              <p className="text-sm [&:not(:first-child)]:mt-6">Quick Adds</p>
              <span className={cn("mb-4", CAPTION_SMALL_TEXT)}>
                How many quick adds do you want to do
              </span>
            </div>
          </a>
        </li>

        <li className="relative flex-1">
          <a
            className="grid w-full grid-cols-[32px_1fr] gap-3 font-medium"
            href={`#${STEPS.CREATE}`}
            onClick={() => setActiveStep(STEPS.CREATE)}
          >
            <span
              className={cn(
                "mt-4 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-200 bg-background dark:border-zinc-600",
                activeStep === STEPS.CREATE
                  ? "!border-violet-950 bg-blue-700"
                  : ""
              )}
            >
              <div className="h-2.5 w-2.5 rounded-full bg-foreground"></div>
            </span>
            <div className="mt-4 flex flex-col">
              <p className="text-sm [&:not(:first-child)]:mt-6">Create</p>
              <span className={cn("mb-4", CAPTION_SMALL_TEXT)}>Create</span>
            </div>
          </a>
        </li>
      </ol>
    </div>
  );
};

export default Steps;
