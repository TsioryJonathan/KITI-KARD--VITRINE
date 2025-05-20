import React from "react";
import { Button } from "./ui/button";

function CustomButton({ className, children, onClick, ...props }) {
  return (
    <Button
      size="lg"
      className={`gap-2 bg-foreground hover:bg-foreground/80 cursor-pointer font-semibold ${className} `}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
}

export default CustomButton;
