import * as React from "react";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";

type propType = {
  htmlFor?: string;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
} & Omit<React.ComponentProps<typeof Input>, "prefix">;

const CEInput = React.forwardRef<HTMLInputElement, propType>(
  (props: propType, ref: React.ForwardedRef<HTMLInputElement>) => {
    const { htmlFor, suffix, prefix, type = "text", ...rest } = props;

    const extraInputProps: React.ComponentProps<typeof Input> = {};

    return (
      <div className="relative flex items-center">
        {prefix && (
          <div className="absolute left-2 flex items-center">{prefix}</div>
        )}
        <Input
          id={htmlFor}
          type={type}
          {...extraInputProps}
          {...rest}
          ref={ref}
        />
        {suffix && (
          <div className="absolute right-2 flex items-center text-xs text-muted-foreground">
            {suffix}
          </div>
        )}
      </div>
    );
  }
);

CEInput.displayName = "CEInput";

export default CEInput;
