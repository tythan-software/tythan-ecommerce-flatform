import { BsSuitHeartFill } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import Image from "@/components/common/Image";
import { Badge } from "@/components/layout/Product";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Product.scss";

export const Product = (props: any) => {
  const dispatch = useDispatch();
  const _id = props.productName;
  const idString = (_id: string) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(_id);

  const navigate = useNavigate();
  const productItem = props;
  const handleProductDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: productItem,
      },
    });
  };
  return (
    <div className="product">
      <div className="product-container">
        <div>
          <Image className="product-image" imgSrc={props.img} />
        </div>
        <div className="product-badge">
          {props.badge && <Badge text="New" />}
        </div>
        <div className="product-actions">
          <ul>
            <li>
              Compare
              <span>
                <GiReturnArrow />
              </span>
            </li>
            <li
              // onClick={() =>
              //   dispatch(
              //     addToCart({
              //       _id: props._id,
              //       name: props.productName,
              //       quantity: 1,
              //       image: props.img,
              //       badge: props.badge,
              //       price: props.price,
              //       colors: props.color,
              //     })
              //   )
              // }
            >
              Add to Cart
              <span>
                <FaShoppingCart />
              </span>
            </li>
            <li
              onClick={handleProductDetails}
            >
              View Details
              <span className="product-action-icon">
                <MdOutlineLabelImportant />
              </span>
            </li>
            <li>
              Add to Wish List
              <span>
                <BsSuitHeartFill />
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="product-info">
        <div className="product-title-row">
          <h2>{props.productName}</h2>
          <p className="product-info-detail">${props.price}</p>
        </div>
        <div>
          <p className="product-info-detail">{props.color}</p>
        </div>
      </div>
    </div>
  );
};