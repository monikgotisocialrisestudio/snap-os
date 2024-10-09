import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { SECTION_TITLE } from "@/lib/classNames";
import AccountAnalytics from "./account-analytics";
import Logs from "./logs";

// eslint-disable-next-line @typescript-eslint/ban-types
type propType = React.ComponentProps<typeof Sheet> & {};

function AccountDetails(props: propType) {
  const { open, onOpenChange } = props;
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[600px] overflow-auto">
        <SheetHeader>
          <SheetTitle>Account Details</SheetTitle>
        </SheetHeader>

        <div className="mt-6 flex min-h-[calc(100dvh-100px)] flex-col gap-10">
          <div>
            <div className="flex items-center gap-4">
              <h3 className={SECTION_TITLE}>Brianna / Main</h3>

              <Badge className="rounded-full">
                <div className="mr-1 h-2 w-2 rounded-full bg-green-600"></div>{" "}
                Active
              </Badge>
            </div>
            <div className="text-xs text-muted-foreground">
              Created 20 - June - 2024
            </div>
          </div>

          <AccountAnalytics />
          <Logs />

          <Button className="ml-auto w-fit" variant="secondary">
            Edit Preset
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default AccountDetails;
