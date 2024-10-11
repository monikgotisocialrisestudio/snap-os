import { Input } from "@/components/ui/input";
import { getUniqueID } from "@/lib/utils";
import { ALLOWED_TEXT_TYPE, readAsTextAsync } from "@/lib/fileManagement";
import { TextType } from "@/lib/types/fileTypes";
import React, { useRef } from "react";

type propType = {
  children: React.ReactNode;
  onProcessText: (texts: TextType[]) => void;
} & React.ComponentProps<typeof Input>;

const UploadFile = (props: propType) => {
  const ref = useRef<HTMLInputElement>(null!);
  const { children, onProcessText, ...rest } = props;

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const texts: TextType[] = [];
    const files = e.target.files as FileList;
    if (files?.length > 0) {
      for (const file of files) {
        try {
          const textContent = await readAsTextAsync(file);
          texts.push({
            content: textContent,
            file,
            id: getUniqueID(),
          });
        } catch (err) {
          const error = err as Error;
          alert(error.message);
        }
      }
    } else {
      alert("No file selected");
    }
    onProcessText(texts);
    ref.current.value = "";
  };

  return (
    <div className="relative">
      {children}
      <Input
        type="file"
        accept={ALLOWED_TEXT_TYPE?.toString()}
        className="absolute inset-0 z-50 h-full opacity-0"
        onChange={onChange}
        multiple
        {...rest}
        ref={ref}
      />
    </div>
  );
};

export default UploadFile;
