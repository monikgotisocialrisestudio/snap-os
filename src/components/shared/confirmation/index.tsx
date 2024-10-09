import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

type propType = React.ComponentProps<typeof Dialog> & {
  content: React.ReactNode;
};

const Confirmation = (props: propType) => {
  const { content, open, onOpenChange } = props;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 sm:max-w-[600px]">
        <ScrollArea className="max-h-[90vh]">
          <DialogHeader>
            <DialogTitle>
              <div className="scroll-m-20 p-4 text-xl font-semibold tracking-tight">
                Are you sure?
              </div>
            </DialogTitle>
          </DialogHeader>
          <div className="px-4 pb-4">{content}</div>
          <div className="flex justify-end gap-4 px-4 pb-4">
            <Button
              variant="outline"
              type="button"
              onClick={() => {
                onOpenChange && onOpenChange(false);
              }}
            >
              Cancel
            </Button>
            <Button>Confirm</Button>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default Confirmation;
