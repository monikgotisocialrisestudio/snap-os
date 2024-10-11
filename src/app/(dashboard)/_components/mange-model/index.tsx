"use client";
import React, { useState } from "react";
import Steps from "./steps";
import Cycle from "./cycles";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import SearchAdds from "./searchAdds";
import UploadUser from "./uploadUser";
import { TextType } from "@/lib/types/fileTypes";
import QuickAdds from "./QuickAdds";
import { Button } from "@/components/ui/button";

export enum STEPS {
  CYCLES = "cycles",
  SEARCH_ADDS = "searchAdds",
  UPLOAD_NAME = "uploadName",
  QUICK_ADDS = "quickAdds",
  CREATE = "create",
}

const createModelSchema = z.object({
  username: z.string().min(1, { message: "Enter valid username" }),
  type: z.string().min(1, { message: "Enter valid type" }),
  numberOfCycle: z.number().min(1, { message: "Enter valid number of cycle" }),
  searchAdds1: z.number().min(1, { message: "Enter valid search adds" }),
  searchAdds2: z.number().min(1, { message: "Enter valid search adds" }),
  selectuser: z.string().min(1, { message: "Select user" }),
  searchAddsDelay: z
    .number()
    .min(0, { message: "Delay must be at least 0 seconds" }),
  quickAdds1: z.number().min(1, { message: "Enter valid quick adds" }),
  quickAdds2: z.number().min(1, { message: "Enter valid quick adds" }),
  quickAddsdelay: z
    .number()
    .min(0, { message: "Delay must be at least 0 seconds" }),
});

export type createModelSchemaType = z.infer<typeof createModelSchema>;

const MangeModel = () => {
  const [activeStep, setActiveStep] = useState<STEPS>(STEPS.CYCLES);
  const [files, setFiles] = useState<TextType[]>([]);
  const [isSearchAddsActive, setSearchAddsActive] = useState(true);

  const form = useForm<createModelSchemaType>({
    resolver: zodResolver(createModelSchema),
    defaultValues: {
      username: "",
      type: "",
      numberOfCycle: 0,
      searchAdds1: 0,
      searchAdds2: 0,
      selectuser: "",
      searchAddsDelay: 0,
      quickAdds1: 0,
      quickAdds2: 0,
      quickAddsdelay: 0,
    },
  });

  const handleSearchSwitchChange = (checked: boolean) => {
    setSearchAddsActive(checked);
  };
  const handleQuickSwitchChange = (checked: boolean) => {
    setSearchAddsActive(checked);
  };

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  function hadleSubmitForm(data: createModelSchemaType) {}

  return (
    <div className="container mx-auto grid grid-cols-12 justify-between gap-4 scroll-smooth py-4">
      <Steps activeStep={activeStep} setActiveStep={setActiveStep} />

      <div className="col-span-8 mt-9">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(hadleSubmitForm)}
            className="space-y-10"
          >
            <Cycle form={form} />
            <SearchAdds
              form={form}
              isActive={isSearchAddsActive}
              onSwitchChange={handleSearchSwitchChange}
            />
            <UploadUser form={form} files={files} setFiles={setFiles} />
            <QuickAdds
              form={form}
              isActive={isSearchAddsActive}
              onSwitchChange={handleQuickSwitchChange}
            />
            <div className="flex justify-end">
              <Button
                type="submit"
                variant="secondary"
                size="lg"
                className="ml-auto font-semibold"
              >
                Create
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default MangeModel;
