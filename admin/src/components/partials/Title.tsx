interface TitleProps {
    className?: string;
    children: string | React.ReactNode;
}

const Title = (props: TitleProps) => {
  return (
    <h2 className={`text-2xl font-semibold tracking-wide ${props.className}`}>
      {props.children}
    </h2>
  );
};

export default Title;