import { CoreProps } from "@/types/types";
import React from "react";

const Container = ({ children, className }: CoreProps) => {
  return (
    <div
      className={`w-full max-w-360 mx-auto px-4 sm:px-6 lg:px-8 ${className || ""}`}
    >
      {children}
    </div>
  );
};

export default Container;
