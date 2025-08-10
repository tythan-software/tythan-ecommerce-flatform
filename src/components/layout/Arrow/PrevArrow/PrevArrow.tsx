import { FaLongArrowAltLeft } from "react-icons/fa";
import "./PrevArrow.scss";

export const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="prev-arrow-container"
      onClick={onClick}
    >
      <span className="prev-arrow-icon">
        <FaLongArrowAltLeft />
      </span>
    </div>
  );
};