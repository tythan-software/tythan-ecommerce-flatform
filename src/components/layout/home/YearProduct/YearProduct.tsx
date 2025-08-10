
import { Link } from "react-router-dom";
import { productOfTheYear } from "@/assets/images";
import { Image } from "@/components/common";
import { ShopNow } from "@/components/layout";
import "./YearProduct.scss";

export const YearProduct = () => {
  return (
    <Link to="/shop">
      <div className="year-product-container">
        <Image
          className="year-product-img"
          imgSrc={productOfTheYear}
        />
        <div className="year-product-content">
          <h1 className="year-product-title">
            Product of the Year
          </h1>
          <p className="year-product-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            cupiditate modi amet! Facilis, aperiam quaerat.
          </p>
          <ShopNow />
        </div>
      </div>
    </Link>
  );
};