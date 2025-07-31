
interface ImageProps {
  imgSrc: string,
  className: string,
}

export const Image = (
  { 
    imgSrc, 
    className 
  }
  : ImageProps) => {
  return <img className={className} src={imgSrc} alt={imgSrc} />;
};