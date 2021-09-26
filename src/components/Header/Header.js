import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="text-center  bg-light py-3">
      <h1 className="fw-bolder">
        Singing Superstars
        <sup>
          <span className="badge bg-warning text-white ms-2">Pro</span>
        </sup>
      </h1>
      <p>
        <small className="text-warning fw-bolder">
          Singing That Comes From The Soul
        </small>
      </p>
      <h5>
        <FontAwesomeIcon className="me-2 text-warning" icon={faDollarSign} />
        Total Budget: <span className="fw-bold">2000 million dollar</span>
      </h5>
    </div>
  );
};

export default Header;
