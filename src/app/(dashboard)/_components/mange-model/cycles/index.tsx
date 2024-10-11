import React from "react";
import CEInput from "@/components/shared/ce-input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { createModelSchemaType } from "..";
import { Label } from "@/components/ui/label";

type propType = {
  form: UseFormReturn<createModelSchemaType>;
};

const Cycle = (props: propType) => {
  const { form } = props;

  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <Label>Model</Label>
        <div>
          <FormField
            control={form.control}
            name={`username`}
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormControl>
                  <CEInput
                    className="w-72"
                    autoComplete="off"
                    placeholder="Brianna"
                    {...field}
                    type="text"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
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
      </div>

      <div>
        <FormField
          control={form.control}
          name={`numberOfCycle`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number of Cycles</FormLabel>
              <FormControl>
                <CEInput
                  autoComplete="off"
                  placeholder="enter"
                  suffix="Cycles"
                  {...field}
                  type="number"
                  min="0"
                  className="w-full pr-12"
                  onChange={e => {
                    const value = e.target.value;
                    field.onChange(value ? Math.max(0, Number(value)) : "");
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default Cycle;
