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

export function FancyMultiSelect({
  selectedValues,
  onChange,
  options,
}: FancyMultiSelectProps) {
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
    <Command onKeyDown={handleKeyDown} className="overflow-visible">
      <div className="group rounded-md border border-border bg-secondary py-2 text-sm ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-1">
        <div className="flex flex-wrap gap-1">
          <CommandPrimitive.Input
            ref={inputRef}
            value={inputValue}
            onValueChange={setInputValue}
            onBlur={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            placeholder="Devices"
            className="flex-1 bg-transparent px-3 outline-none placeholder:text-white"
          />
        </div>
      </div>
      <div className="relative mt-1">
        <CommandList>
          {open && options.length > 0 ? (
            <div className="absolute top-0 z-10 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
              <CommandGroup className="h-full overflow-auto">
                {options.map(framework => {
                  const isSelected = selectedValues.some(
                    s => s.value === framework.value
                  );
                  return (
                    <CommandItem
                      key={framework.value}
                      onMouseDown={e => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      onSelect={() => {
                        const newSelection = isSelected
                          ? selectedValues.filter(
                              s => s.value !== framework.value
                            )
                          : [...selectedValues, framework];

                        onChange(newSelection);
                        setInputValue("");
                      }}
                      className={"flex cursor-pointer items-center"}
                    >
                      <div className="flex items-center">
                        {isSelected ? (
                          <div className="mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-border border-white bg-transparent">
                            <Check className="text-white" />
                          </div>
                        ) : (
                          <div className="mr-2 h-4 w-4 rounded-sm border border-border bg-transparent" />
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
