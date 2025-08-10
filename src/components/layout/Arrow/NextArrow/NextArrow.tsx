import { FaLongArrowAltRight } from "react-icons/fa";
import "./NextArrow.scss";

export const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="next-arrow-container"
      onClick={onClick}
    >
      <span className="next-arrow-icon">
        <FaLongArrowAltRight />
      </span>
    </div>
  );
};