module.exports = {
  // this will check Typescript files
  "**/*.(ts|tsx)": () => "bun tsc --noEmit",

  // This will lint and format TypeScript and                                             //JavaScript files
  "**/*.(ts|tsx|js)": filenames => [
    `bun eslint --fix ${filenames.join(" ")}`,
    `bun prettier --write ${filenames.join(" ")}`,
  ],

  // this will Format MarkDown and JSON
  "**/*.(md|json)": filenames => `bun prettier --write ${filenames.join(" ")}`,
};
