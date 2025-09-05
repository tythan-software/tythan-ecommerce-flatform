interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

export const Image: React.FC<ImageProps> = ({ src, ...props }) => {
  return <img src={src} {...props} />;
};

export default Image;