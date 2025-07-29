import { MdLocalShipping } from "react-icons/md";
import { CgRedo } from "react-icons/cg";
import "./Policy.scss";

export const Policy = () => {
  return (
    <div className="policyWrapper">
      <div className="policyContainer">
        <div className="policyItem">
          <span className="policyNumber">2</span>
          <p className="policyText">Two years warranty</p>
        </div>
        <div className="policyItem">
          <span className="policyIcon"><MdLocalShipping /></span>
          <p className="policyText">Free shipping</p>
        </div>
        <div className="policyItem">
          <span className="policyIcon"><CgRedo /></span>
          <p className="policyText">Return policy in 30 days</p>
        </div>
      </div>
    </div>
  );
};