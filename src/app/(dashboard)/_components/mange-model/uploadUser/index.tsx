import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import CESelect from "@/components/shared/ce-select";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { createModelSchemaType } from "..";
import UploadFile from "@/components/shared/upload-file";
import { CloudUpload, Edit, Trash2 } from "lucide-react";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Button } from "@/components/ui/button";
import { ScrollBar } from "@/components/ui/scroll-area";
import { TextType } from "@/lib/types/fileTypes";
import { BiSolidFileTxt } from "react-icons/bi";
import { Label } from "@/components/ui/label";

type propType = {
  form: UseFormReturn<createModelSchemaType>;
  files: TextType[];
  setFiles: React.Dispatch<React.SetStateAction<TextType[]>>;
};

function UploadUser(props: propType) {
  const { form, files, setFiles } = props;
  const options = [
    { label: "User 1", value: "user1" },
    { label: "User 2", value: "user2" },
  ];

  const removePhoto = (id: string) => {
    setFiles(prev => prev.filter(i => i.id !== id));
  };

  return (
    <div>
      <FormField
        control={form.control}
        name="selectuser"
        render={({ field }) => (
          <FormItem className="w-64 text-white">
            <Label>Upload Usernames</Label>
            <FormControl>
              <CESelect
                options={options}
                placeholder="a Username Present"
                onValueChange={field.onChange}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="my-4 flex flex-col">
        <UploadFile
          multiple
          onProcessText={texts => {
            setFiles(prev => [...prev, ...texts]); // Update to handle TextType
          }}
        >
          <div className="relative flex w-full cursor-pointer flex-col items-center justify-center rounded border border-border bg-secondary p-4">
            <CloudUpload />
            <p className="mt-3 text-sm">
              Click to upload{" "}
              <span className="text-muted-foreground">or drag and drop</span>
            </p>
            <p className="text-xs text-muted-foreground">TXT Only</p>
          </div>
        </UploadFile>

        {files?.length > 0 ? (
          <ScrollArea>
            <div className="my-4 flex w-full gap-4">
              {files.map(text => (
                <div
                  className="flex w-full flex-col rounded border border-border"
                  key={text.id}
                >
                  <div className="flex items-center justify-between p-4">
                    <div className="items flex gap-4">
                      <BiSolidFileTxt
                        size={48}
                        className="bg-transparent text-2xl font-bold"
                      />
                      <div className="flex flex-col justify-center">
                        <span className="text-sm font-medium text-white">
                          {text.file?.name}
                        </span>
                        <span className="text-sm font-normal text-muted-foreground">
                          {(text.file?.size || 0) / 1024 >= 1
                            ? `${((text.file?.size || 0) / 1024).toFixed(2)} KB`
                            : `${(text.file?.size || 0).toFixed(2)} B`}{" "}
                          - 100% uploaded
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Button
                        variant="outline"
                        className="flex h-fit items-center p-1"
                        onClick={() => removePhoto(text.id)}
                      >
                        <Edit size={20} />
                      </Button>
                      <Button
                        variant="outline"
                        className="flex h-fit items-center p-1"
                        onClick={() => removePhoto(text.id)}
                      >
                        <Trash2 size={20} />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        ) : null}
      </div>
    </div>
  );
}

export default UploadUser;
