import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "./Sliders.scss";

interface SlidersProps {
  settings: Settings;
  slideElements?: React.ReactNode[];
}

export const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="arrow right"
      onClick={onClick}
    >
      <span className="arrow-icon">
        <FaLongArrowAltRight />
      </span>
    </div>
  );
};

export const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="arrow left"
      onClick={onClick}
    >
      <span className="arrow-icon">
        <FaLongArrowAltLeft />
      </span>
    </div>
  );
};

export const Sliders = ({ settings, slideElements }: SlidersProps) => {
  if (!slideElements || slideElements.length === 0) {
    return <div className="sliders">No items to display</div>;
  }

  return (
    <Slider {...settings}>
      {slideElements.map(item => item)}
    </Slider>
  );
};