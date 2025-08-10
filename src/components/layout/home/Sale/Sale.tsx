import "./Sale.scss";
import { Link } from "react-router-dom";
import {
  saleImgOne,
  saleImgTwo,
  saleImgThree,
} from "@/assets/images/index";
import Image from "@/components/common/Image";

export const Sale = () => {
  return (
    <div className="sale-container">
      <div className="sale-col-left">
        <Link to="/shop">
          <Image className="sale-img" imgSrc={saleImgOne} />
        </Link>
      </div>
      <div className="sale-col-right">
        <div className="sale-col-right-inner">
          <Link to="/shop">
            <Image className="sale-img" imgSrc={saleImgTwo} />
          </Link>
        </div>
        <div className="sale-col-right-inner">
          <Link to="/shop">
            <Image className="sale-img" imgSrc={saleImgThree} />
          </Link>
        </div>
      </div>
    </div>
  );
};