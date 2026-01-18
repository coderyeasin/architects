import { CoreProps } from "@/types/types";
import React from "react";

const Container = ({ children, className }: CoreProps) => {
  return (
    <div className={`w-full max-w-360 mx-auto ${className}`}>{children}</div>
  );
};

export default Container;
