import { cn } from "../cn";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

const Container = (props: ContainerProps) => {
  return (
    <div className={cn("max-w-screen-xl mx-auto px-4 py-10", props.className)}>
      {props.children}
    </div>
  );
};

export default Container;