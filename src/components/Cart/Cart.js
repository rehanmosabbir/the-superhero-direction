import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import SingerBriefInfo from "../SingerBriefInfo/SingerBriefInfo";

const Cart = (props) => {
  const { cart } = props;
  const total = cart.reduce(
    (previous, currentEarnings) => previous + currentEarnings.earnings,
    0
  );
  return (
    <div className="border p-2">
      <h4>
        <FontAwesomeIcon className="me-2" icon={faUsers} />
        Singers Added: {cart.length}
      </h4>
      <p>Total Cost: $ {total}</p>

      {cart.map((singerInfo) => (
        <SingerBriefInfo
          key={singerInfo.id}
          singerInfo={singerInfo}
        ></SingerBriefInfo>
      ))}
    </div>
  );
};

export default Cart;
