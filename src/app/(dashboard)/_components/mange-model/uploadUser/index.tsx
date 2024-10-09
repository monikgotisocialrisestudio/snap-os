import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
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

type propType = {
  form: UseFormReturn<createModelSchemaType>;
  photos: TextType[];
  setPhotos: React.Dispatch<React.SetStateAction<TextType[]>>;
};

function UploadUser(props: propType) {
  const { form, photos, setPhotos } = props;
  const options = [
    { label: "User 1", value: "user1" },
    { label: "User 2", value: "user2" },
  ];

  const removePhoto = (id: string) => {
    setPhotos(prev => prev.filter(i => i.id !== id));
  };
  return (
    <div  className="mt-12">
      <div className="text-base font-normal">Upload Usernames</div>
      <div className="mt-3">
        <FormField
          control={form.control}
          name="selectuser"
          render={({ field }) => (
            <FormItem className="w-64 text-white">
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
      </div>

      <div className="flex flex-col my-4">
        <UploadFile
          multiple
          onProcessText={texts => {
            setPhotos(prev => [...prev, ...texts]); // Update to handle TextType
          }}
        >
          <div className="relative flex w-full cursor-pointer flex-col items-center justify-center rounded border border-slate-800 p-4 dark:border-gray-800">
            <CloudUpload />
            <p className="mt-3 text-sm">
              Click to upload{" "}
              <span className="text-muted-foreground">or drag and drop</span>
            </p>
            <p className="text-xs text-muted-foreground">
              TXT Only
            </p>
          </div>
        </UploadFile>

        {photos?.length > 0 ? (
          <ScrollArea>
            <div className="flex gap-4 w-full my-4">
              {photos.map(text => (
                <div
                  className="flex flex-col rounded border border-gray-800 w-full"
                  key={text.id}
                >
                  <div className="flex items-center p-4 justify-between">
                    <div className="flex gap-4 items">
                      <BiSolidFileTxt size={48} className="font-bold text-2xl bg-transparent" />
                      <div className="flex flex-col">
                        <span className="text-sm text-white font-medium">{text.file?.name}</span>
                        <span className="text-[#B0B0B0] text-sm font-normal">
                          {(text.file?.size || 0) / 1024 >= 1
                            ? `${((text.file?.size || 0) / 1024).toFixed(2)} KB`
                            : `${(text.file?.size || 0).toFixed(2)} B`} - 100% uploaded
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center">
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
