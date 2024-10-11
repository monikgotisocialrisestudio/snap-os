import React from "react";

const LoadClassName = () => {
  return (
    <div className="fixed bottom-0 right-0 h-0 w-0 overflow-hidden">
      {/* SECTION_HEADER */}
      <div className="scroll-m-20 text-3xl font-normal tracking-tight transition-colors first:mt-0"></div>
      {/* SECTION_TITLE */}
      <div className="scroll-m-20 text-2xl tracking-tight first:mt-0"></div>

      {/* SECTION_SUB_HEADER */}
      <div className="scroll-m-20 text-xl tracking-tight first:mt-0"></div>
      {/* TABLE_ROW_CELL */}
      <div className="truncate border border-border bg-secondary px-4 py-2 text-sm"></div>
      {/* CAPTION_SMALL_TEXT */}
      <div className="text-xs leading-tight"></div>
    </div>
  );
};

export default LoadClassName;
