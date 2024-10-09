import React from "react";
import CEInput from "@/components/shared/ce-input";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { createModelSchemaType } from "..";

type propType = {
  form: UseFormReturn<createModelSchemaType>;
};

const Cycle = (props: propType) => {
  const { form } = props;
  
  return (
    <div>
      <div className="text-base font-normal">Model</div>
      <div className="mt-6">
        <FormField
          control={form.control}
          name={`username`}
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormControl>
                <CEInput
                  className="w-72"
                  autoComplete="off"
                  placeholder="Briana"
                  {...field}
                  type="text"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="mt-3">
        <FormField
          control={form.control}
          name={`type`}
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormControl>
              <CEInput
                className="w-72"
                autoComplete="off"
                placeholder="Default"
                {...field}
                type="text"
              />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="mt-6">
        <div className="text-base font-normal">Number of Cycles</div>
        <div className="mt-3">
          <FormField
            control={form.control}
            name={`numberOfCycle`}
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormControl>
                <CEInput
                  autoComplete="off"
                  placeholder="enter"
                  suffix="Cycles"
                  {...field}
                  type="number"
                  min="0"
                  className="w-full pr-12"
                />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Cycle;
