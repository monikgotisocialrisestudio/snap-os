import * as React from "react";
import { X, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Command as CommandPrimitive } from "cmdk";

type Framework = Record<"value" | "label", string>;

interface FancyMultiSelectProps {
  selectedValues: Framework[];
  onChange: (selected: Framework[]) => void;
  options: Framework[]; // New prop for options
}

export function FancyMultiSelect({ selectedValues, onChange, options }: FancyMultiSelectProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (input && e.key === "Escape") {
        input.blur();
      }
    },
    []
  );

  return (
    <Command onKeyDown={handleKeyDown} className="overflow-visible bg-transparent">
      <div className="group rounded-md border border-input px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 bg-[#1C2124]">
        <div className="flex flex-wrap gap-1">
          {/* {selectedValues.length > 0 && (
            <>
              <Badge key={selectedValues[0].value} variant="secondary">
                {selectedValues[0].label}
                <button
                  className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  onClick={() => onChange([])}
                >
                  <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                </button>
              </Badge>
              {selectedValues.length > 1 && (
                <Badge variant="secondary">
                  +{selectedValues.length - 1} more
                </Badge>
              )}
            </>
          )} */}
          <CommandPrimitive.Input
            ref={inputRef}
            value={inputValue}
            onValueChange={setInputValue}
            onBlur={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            placeholder="Devices"
            className="ml-2 flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
          />
        </div>
      </div>
      <div className="relative mt-2">
        <CommandList>
          {open && options.length > 0 ? (
            <div className="absolute top-0 z-10 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in ">
              <CommandGroup className="h-full overflow-auto bg-[#1C2124]">
                {options.map((framework) => {
                  const isSelected = selectedValues.some((s) => s.value === framework.value);
                  return (
                    <CommandItem
                      key={framework.value}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      onSelect={() => {
                        const newSelection = isSelected
                          ? selectedValues.filter((s) => s.value !== framework.value)
                          : [...selectedValues, framework];

                        onChange(newSelection);
                        setInputValue(""); // Clear input on selection
                      }}
                      className={"cursor-pointer flex items-center"}
                    >
                      <div className="flex items-center">
                        {isSelected ? (
                          <div className="flex items-center rounded-sm justify-center mr-2 h-4 w-4 border border-input bg-transparent border-white">
                            <Check className="text-white" />
                          </div>
                        ) : (
                          <div className="mr-2 h-4 w-4 border border-input bg-transparent rounded-sm" />
                        )}
                        {framework.label}
                      </div>
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </div>
          ) : null}
        </CommandList>
      </div>
    </Command>
  );
}
