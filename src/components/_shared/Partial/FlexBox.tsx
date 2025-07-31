import { ReactNode } from "react";

interface FlexBoxProps {
  children: ReactNode,
  className: string,
}

export const FlexBox = (
  { 
    children, 
    className 
  }
  : FlexBoxProps) => {
  return <div className={className}>{children}</div>;
};