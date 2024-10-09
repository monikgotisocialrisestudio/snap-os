"use client";
import Icon from "@/components/shared/icon";
import { Separator } from "@/components/ui/separator";
import { SECTION_TITLE } from "@/lib/classNames";
import React, { useEffect, useState } from "react";

const Header = () => {
  return (
    <>
      <div className="container mx-auto flex justify-between py-6">
        <div className="flex items-center gap-2">
          <div className="h-[34px] w-[34px]">
            <Icon name="logo" />
          </div>
          {/**
           * shadcn typography
           * h3
           */}
          <h3 className={SECTION_TITLE}>
            Snap<span className="font-bold">OS</span>
          </h3>
        </div>
      </div>
      <Separator />
    </>
  );
};

export default Header;
