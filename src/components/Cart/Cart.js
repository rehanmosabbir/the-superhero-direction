import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faCoins } from "@fortawesome/free-solid-svg-icons";
import SingerBriefInfo from "../SingerBriefInfo/SingerBriefInfo";

const Cart = (props) => {
  const { cart } = props;
  const total = cart.reduce(
    (previous, currentEarnings) => previous + currentEarnings.earnings,
    0
  );
  return (
    <div className="border p-2">
      <div className="text-center">
        <h4>
          <FontAwesomeIcon className="me-2 text-warning" icon={faUsers} />
          Singers Added: {cart.length}
        </h4>
        <h5>
          <FontAwesomeIcon className="me-2 text-warning" icon={faCoins} />
          Total Earnings: $ {total}
        </h5>
      </div>

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
