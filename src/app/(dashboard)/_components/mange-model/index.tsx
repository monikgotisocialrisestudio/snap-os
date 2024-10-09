"use client";
import React, { useState } from "react";
import Steps from "./steps";
import Cycle from "./cycles";

export enum STEPS {
  CYCLES = "cycles",
  SEARCH_ADDS = "searchAdds",
  UPLOAD_NAME = "uploadName",
  QUICK_ADDS = "quickAdds",
  CREATE = "create",
}

const MangeModel = () => {
  const [activeStep, setActiveStep] = useState<STEPS>(STEPS.CYCLES);
  return (
    <div className="container mx-auto grid grid-cols-12 justify-between gap-4 scroll-smooth py-4">
      <Steps activeStep={activeStep} setActiveStep={setActiveStep} />
      <div className="col-span-8 flex flex-col gap-6">
        <Cycle />
      </div>
    </div>
  );
};

export default MangeModel;
