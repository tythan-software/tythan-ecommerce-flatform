import { ReactNode } from "react";

interface FlexBoxProps {
  children: ReactNode,
  className: string,
}

const FlexBox = (
  { 
    children, 
    className 
  }
  : FlexBoxProps) => {
  return <div className={className}>{children}</div>;
};

export default FlexBox;
