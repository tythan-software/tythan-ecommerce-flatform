import { MdLocalShipping } from "react-icons/md";
import { CgRedo } from "react-icons/cg";
import "./Policy.scss";

export const Policy = () => {
  return (
    <div className="policy">
      <div className="policy-container">
        <div className="policy-item">
          <span className="policy-number">2</span>
          <p className="policy-text">Two years warranty</p>
        </div>
        <div className="policy-item">
          <span className="policy-icon"><MdLocalShipping /></span>
          <p className="policy-text">Free shipping</p>
        </div>
        <div className="policy-item">
          <span className="policy-icon"><CgRedo /></span>
          <p className="policy-text">Return policy in 30 days</p>
        </div>
      </div>
    </div>
  );
};