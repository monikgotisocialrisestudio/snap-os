import React, { useState } from "react";
import Steps from "./steps";

export enum STEPS {
  MODEL = "model",
  SCHEDULE = "schedule",
  DEVICE = "device",
}

function Presents() {
  const [activeStep, setActiveStep] = useState<STEPS>(STEPS.MODEL);
  return (
    <div>
      <div className="w-1/5">
        <Steps activeStep={activeStep} setActiveStep={setActiveStep} />
      </div>
    </div>
  );
}

export default Presents;
