import React from "react";
import "./Singer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faVideo,
  faCameraRetro,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";

const Singer = (props) => {
  // console.log(props.singerInfo);
  const { name, occupation, age, country, earnings, photo, genres } =
    props.singerInfo;
  return (
    <div className="col-md-4 mb-5">
      <div className="card" style={{ width: "19rem" }}>
        <img src={photo} className="card-img-top img-thumbnail" alt="..." />
        <div className="card-body bg-light">
          <h5 className="card-title">{name}</h5>
          <FontAwesomeIcon className="me-3 text-info" icon={faCameraRetro} />
          <FontAwesomeIcon className="me-3 text-primary" icon={faMusic} />
          <FontAwesomeIcon className="me-3 text-danger" icon={faVideo} />
          <hr />
          <p className="card-text mb-2">
            <span className="fw-bold">Occupation :</span> {occupation}
          </p>
          <p className="card-text mb-2">
            <span className="fw-bold">Age :</span> {age}
          </p>
          <p className="card-text mb-2">
            <span className="fw-bold">Country :</span> {country}
          </p>
          <p className="card-text mb-2">
            <span className="fw-bold">Genres :</span> {genres}
          </p>
          <p className="card-text mb-3">
            <span className="fw-bold">Earnings :</span> $ {earnings}
          </p>
          <button
            onClick={() => props.handleAddToCart(props.singerInfo)}
            className="btn btn-warning btn-sm text-white"
          >
            <FontAwesomeIcon className="me-2" icon={faShoppingCart} />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Singer;
