import { cn } from "../cn";

interface Props {
    children: React.ReactNode;
    className?: string;
}

const Container = (props: Props) => {
  return (
    <div className={cn("max-w-screen-xl mx-auto px-4 py-10", props.className)}>
      {props.children}
    </div>
  );
};

export default Container;