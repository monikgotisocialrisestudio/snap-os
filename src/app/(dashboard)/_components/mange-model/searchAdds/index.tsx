import React from "react";
import { UseFormReturn } from "react-hook-form";
import { createModelSchemaType } from "..";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import CEInput from "@/components/shared/ce-input";
import { Range } from "react-range";
import { cn } from "@/lib/utils";
import { CAPTION_SMALL_TEXT } from "@/lib/classNames";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

type propType = {
  form: UseFormReturn<createModelSchemaType>;
  isActive: boolean;
  onSwitchChange: (checked: boolean) => void;
};

function SearchAdds(props: propType) {
  const { form, isActive, onSwitchChange } = props;

  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name={`searchAdds1`}
        render={({ field }) => (
          <FormItem>
            <div className="flex items-center space-x-2">
              <FormLabel>Number of Users Search Adds</FormLabel>
              <Switch
                id="search-adds-mode"
                checked={isActive}
                onCheckedChange={onSwitchChange}
              />
            </div>
            <FormControl>
              <div className="flex gap-4">
                <div className="flex-1">
                  <CEInput
                    autoComplete="off"
                    placeholder="enter"
                    suffix="Adds"
                    {...field}
                    type="number"
                    min="0"
                    onChange={e => {
                      const value = e.target.value;
                      field.onChange(value ? Math.max(0, Number(value)) : "");
                    }}
                    className="w-full pr-10"
                  />
                  <FormMessage className="mt-2" />
                </div>
                <FormField
                  control={form.control}
                  name={`searchAdds2`}
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <CEInput
                          autoComplete="off"
                          placeholder="enter"
                          suffix="Adds"
                          {...field}
                          type="number"
                          onChange={e => {
                            const value = e.target.value;
                            field.onChange(
                              value ? Math.max(0, Number(value)) : ""
                            );
                          }}
                          min="0"
                          className="w-full pr-10"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </FormControl>
          </FormItem>
        )}
      />

      <div className="flex flex-col gap-4">
        <Label className={cn(CAPTION_SMALL_TEXT, "text-muted-foreground")}>
          Delay between each action
        </Label>
        <div className="flex items-center gap-4">
          <div className="w-[40%]">
            <Range
              values={[form.watch("searchAddsDelay") || 0]}
              step={1}
              min={0}
              max={60}
              onChange={newValues => {
                form.setValue("searchAddsDelay", newValues[0]);
              }}
              renderTrack={({ props, children }) => (
                <div {...props} className="flex h-2 w-full rounded bg-gray-700">
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  className="h-4 w-4 rounded-full border-none bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
            />
          </div>
          <div className="text-xs text-white">
            {form.watch("searchAddsDelay") || 0} seconds
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchAdds;
