import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Singer from "../Singer/Singer";

const SingerDetails = () => {
  const [singerInfos, setSingerInfos] = useState([]);
  useEffect(() => {
    fetch("/singerData.JSON")
      .then((res) => res.json())
      .then((data) => setSingerInfos(data));
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-9">
          <div className="row">
            {singerInfos.map((singerInfo) => (
              <Singer singerInfo={singerInfo} key={singerInfo.id}></Singer>
            ))}
          </div>
        </div>
        <div className="col-md-3">
          <Cart></Cart>
        </div>
      </div>
    </div>
  );
};

export default SingerDetails;
