import React from "react";
import { UseFormReturn } from "react-hook-form";
import { createModelSchemaType } from "..";
import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import CEInput from "@/components/shared/ce-input";
import { Range } from "react-range";

type propType = {
  form: UseFormReturn<createModelSchemaType>;
};

function SearchAdds(props: propType) {
  const { form } = props;

  return (
    <div className="mt-12">
      <div>
        <div className="text-base font-normal">Number of Search Adds</div>
        <div className="mt-6 w-full flex gap-4">
          <FormField
            control={form.control}
            name={`searchAdds1`}
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormControl>
                  <CEInput
                    autoComplete="off"
                    placeholder="enter"
                    suffix="Adds"
                    {...field}
                    type="number"
                    min="0"
                    className="w-full pr-10"
                  />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`searchAdds2`}
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormControl>
                  <CEInput
                    autoComplete="off"
                    placeholder="enter"
                    suffix="Adds"
                    {...field}
                    type="number"
                    min="0"
                    className="w-full pr-10"
                  />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
        </div>

        <div className="mt-3 font-normal text-xs text-[#B0B0B0]">
          Delay between each action
        </div>
        <div className="mt-4 flex items-center gap-4">
          <div className="w-[40%]">
            <Range
              values={[form.watch('searchAddsDelay') || 0]}
              step={1}
              min={0}
              max={60}
              onChange={(newValues) => {
                form.setValue('searchAddsDelay', newValues[0]);
              }}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  className="flex w-full h-2 bg-gray-700 rounded"
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  className="h-4 w-4 bg-blue-500 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
            />
          </div>
          <div className="text-white text-xs">
            {form.watch('searchAddsDelay') || 0} seconds
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchAdds;
