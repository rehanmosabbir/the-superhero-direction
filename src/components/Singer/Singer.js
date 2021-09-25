import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Singer = (props) => {
  console.log(props.singerInfo);
  const { name, occupation, age, country, earnings, photo } = props.singerInfo;
  return (
    <div className="col-md-4 my-5">
      <div className="card" style={{ width: "18rem" }}>
        <img src={photo} className="card-img-top img-thumbnail" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <hr />
          <p className="card-text">
            <span className="fw-bold">Occupation :</span> {occupation}
          </p>
          <p className="card-text">
            <span className="fw-bold">Age :</span> {age}
          </p>
          <p className="card-text">
            <span className="fw-bold">Country :</span> {country}
          </p>
          <p className="card-text">
            <span className="fw-bold">Earnings :</span> $ {earnings}
          </p>
          <button className="btn btn-secondary">
            <FontAwesomeIcon className="me-2" icon={faShoppingCart} />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Singer;
