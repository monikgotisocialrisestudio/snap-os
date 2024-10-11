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
import { FancyMultiSelect } from "@/components/shared/multi-select";

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
  const [selectedFrameworks, setSelectedFrameworks] = useState([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      schedule: "",
      model: "model1",
      device: [],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // console.log(values,"values")
  }

  return (
    <div className="container mx-auto grid grid-cols-12 justify-between gap-4 scroll-smooth py-4">
      <Steps activeStep={activeStep} setActiveStep={setActiveStep} />
      <div className="col-span-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-9 space-y-10"
          >
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
                      <SelectTrigger className="w-full md:w-[200px]">
                        <SelectValue placeholder="Select a model" />
                      </SelectTrigger>
                      <SelectContent>
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
                    <Input
                      placeholder="00:00 pm"
                      {...field}
                      className="w-full md:w-[200px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="device"
              render={({ field }) => (
                <FormItem className="lg:w-[450px]">
                  <FormLabel>Select Devices</FormLabel>
                  <FormControl>
                    <FancyMultiSelect
                      selectedValues={selectedFrameworks}
                      options={devices}
                      onChange={(selected: any) => {
                        setSelectedFrameworks(selected);
                        form.setValue(
                          "device",
                          selected.map((s: any) => s.value)
                        );
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
            <div className="flex justify-end">
              <Button variant="secondary" size="lg" className="font-semibold">
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
