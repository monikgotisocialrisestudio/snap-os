export const ALLOWED_TEXT_TYPE = ["text/plain"]; // Allow only .txt files

export const readAsTextAsync = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onabort = () => reject(new Error("File reading was aborted"));
    reader.onerror = () => reject(new Error("File reading has failed"));
    reader.onload = () => {
      if (typeof reader.result === "string") {
        resolve(reader.result);
      } else {
        reject(new Error("Failed to read file as text"));
      }
    };

    reader.readAsText(file);
  });
