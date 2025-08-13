import { Link } from "react-router-dom";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { MdSwitchAccount } from "react-icons/md";
import { useSelector } from "react-redux";
import "./SpecialCase.scss";

export const SpecialCase = () => {
  //const products = useSelector((state: any) => state.productSlice.products);
  const products = [];
  return (
    <div className="special-case">
      <Link to="/">
        <div className="special-case-link profile">
          <div className="special-case-icons">
            <MdSwitchAccount className="special-case-icon left" />
            <MdSwitchAccount className="special-case-icon right" />
          </div>
          <p className="special-case-label">Profile</p>
        </div>
      </Link>
      <Link to="/">
        <div className="special-case-link">
          <div className="special-case-icons">
            <RiShoppingCart2Fill className="special-case-icon left" />
            <RiShoppingCart2Fill className="special-case-icon right" />
          </div>
          <p className="special-case-label">Buy Now</p>
          {products.length > 0 && (
            <p className="special-case-badge">
              {products.length}
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};