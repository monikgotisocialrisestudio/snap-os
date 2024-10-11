import React, { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import CEInput from "@/components/shared/ce-input";
import { getUniqueID } from "@/lib/utils";
type Usernames = {
  id: string;
  value: string;
}[];
// eslint-disable-next-line @typescript-eslint/ban-types
type AddUsernamesInputProps = {};
function AddUsernamesInput(props: AddUsernamesInputProps) {
  const { control, handleSubmit, watch, reset } = useForm<{
    usernames: Usernames;
  }>({
    defaultValues: {
      usernames: [{ id: getUniqueID(), value: "" }],
    },
  });
  const usernames = watch("usernames");
  const [newUsername, setNewUsername] = useState<string>("");
  const addInputField = () => {
    const newUsernames = [
      ...usernames,
      { id: getUniqueID(), value: newUsername },
    ];
    reset({ usernames: newUsernames });
    setNewUsername("");
  };
  const removeInputField = (id: string) => {
    const updatedUsernames = usernames.filter((username) => username.id !== id);
    reset({ usernames: updatedUsernames });
  };
  const handleInputChange = (index: number, value: string) => {
    const updatedUsernames = [...usernames];
    updatedUsernames[index].value = value;
    reset({ usernames: updatedUsernames });
  };
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onSubmit: SubmitHandler<{ usernames: Usernames }> = (data) => {};
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="text-xl font-normal">Usernames</div>
      <div className="mt-4">
        {usernames.map((username, index) => (
          <div key={username.id} className="relative mb-2 w-full items-center">
            <Controller
              control={control}
              name={`usernames.${index}.value`}
              render={({ field }) => (
                <CEInput
                  {...field}
                  autoComplete="off"
                  placeholder="AustinFields"
                  suffix={
                    <Button
                      onClick={() => removeInputField(username.id)}
                      className="absolute right-1 top-1/2 -translate-y-1/2 transform border-none bg-transparent text-2xl text-white hover:bg-inherit focus:outline-none"
                    >
                      &times;
                    </Button>
                  }
                  type="text"
                  className="w-full border-b pr-10 text-base font-normal"
                  onChange={(e) => handleInputChange(index, e.target.value)}
                />
              )}
            />
          </div>
        ))}
      </div>
      <div className="flex w-full justify-end">
        <Button
          type="button"
          onClick={addInputField}
          className="mt-4 border-none bg-transparent text-sm font-normal text-white hover:bg-inherit focus:outline-none"
        >
          Add Username
          <span className="ml-1 text-xs">
            <Plus size={16} />
          </span>
        </Button>
      </div>
    </form>
  );
}
export default AddUsernamesInput;
