"use client";

import React, { useState } from "react";
import Steps from "./steps";
import { STEPS } from "@/lib/enums";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FancyMultiSelect, Framework } from "@/components/shared/multi-select";

const formSchema = z.object({
  schedule: z.string().min(2, {
    message: "Schedule required.",
  }),
  model: z.string().nonempty({
    message: "Please select a model.",
  }),
  device: z.array(z.string()).nonempty({
    message: "Please select at least one Device.",
  }),
});

const devices = [
    { value: "value1", label: "iphone 11 (GXYXR17KO)" },
    { value: "value2", label: "iphone 8 (GXYKOD17KO)" },
    { value: "value3", label: "iPhone 8 (FDASKL12101J)" },
    { value: "value4", label: "iPhone 8 (OQPADJKCLSP)" },
    { value: "value5", label: "iPhone 8 (J01LKDS8DSL)" },
    { value: "value6", label: "iPhone 8 (JDFS08XCL9P)" },
  ];

function Execute() {
  const [activeStep, setActiveStep] = useState<STEPS>(STEPS.MODEL);
  const [selectedFrameworks, setSelectedFrameworks] = useState<Framework[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      schedule: "",
      model: "model1",
      device: [], 
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values,"values")
  }

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-[40%] mb-8 md:mb-0">
        <Steps activeStep={activeStep} setActiveStep={setActiveStep} />
      </div>
      <div className=" mt-0 w-full md:w-[60%] md:mt-16">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 md:space-y-11">
            <FormField
              control={form.control}
              name="model"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Model</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value || "model1"}
                    >
                      <SelectTrigger className="w-full md:w-[200px] bg-[#1C2124]">
                        <SelectValue placeholder="Select a model" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1C2124]">
                        <SelectItem value="model1">Model</SelectItem>
                        <SelectItem value="model2">Present</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="schedule"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Run Schedule</FormLabel>
                  <FormControl>
                    <Input placeholder="00:00 pm" {...field} className="w-full md:w-[200px] bg-[#1C2124]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="device"
              render={() => (
                <FormItem className="lg:w-[450px]">
                  <FormLabel>Select Devices</FormLabel>
                  <FormControl>
                    <FancyMultiSelect
                      selectedValues={selectedFrameworks}
                      options={devices}
                      onChange={(selected: Framework[]) => {
                        setSelectedFrameworks(selected);
                        // form.setValue(
                        //   "device",
                        //   selected.map((s) => s.value)
                        // );
                        if (selected.length > 0) {
                            form.clearErrors("device");
                          }
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-start md:justify-end pt-4 lg:pt-32">
              <Button type="submit" className="text-base px-10 font-semibold py-7 rounded-xl bg-[#1C2124] border-[--border] text-foreground hover:bg-[#1C2124]">
                Execute
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default Execute;
