"use client";
import Icon from "@/components/shared/icon";
import { Separator } from "@/components/ui/separator";
import React, { useEffect, useState } from "react";

const Header = () => {
  return (
    <>
      <div className="container mx-auto flex justify-between py-6">
        <div className="flex items-center gap-2">
          <Icon name="logo" />
          {/*
          shadcn typography
          h3  
        */}
          <h3 className="scroll-m-20 text-2xl tracking-tight first:mt-0">
            Snap<span className="font-bold">OS</span>
          </h3>
        </div>
      </div>
      <Separator />
    </>
  );
};

export default Header;
