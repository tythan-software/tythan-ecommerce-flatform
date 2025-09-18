interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

export const Image: React.FC<Props> = ({ src, ...props }) => {
  return <img src={src} {...props} />;
};

export default Image;