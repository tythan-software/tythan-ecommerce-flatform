interface ImageProps {
  src: string;
  className?: string;
}

export const Image = (props: ImageProps) => {
  return <img className={props.className} src={props.src} alt={props.src} />;
};

export default Image;