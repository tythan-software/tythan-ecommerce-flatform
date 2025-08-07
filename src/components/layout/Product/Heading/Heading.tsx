import "./Heading.scss";

interface HeadingProps {
  heading: string;
}

export const Heading = ({ heading }: HeadingProps) => {
  return <div className="heading">{heading}</div>;
};

export default Heading;