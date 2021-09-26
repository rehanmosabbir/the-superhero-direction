import React from "react";
import "./SingerBriefInfo.css";

const SingerBriefInfo = (props) => {
  const { name, photo } = props.singerInfo;
  return (
    <div>
      <hr />
      <div
        className="card mb-3 bg-dark text-warning "
        style={{ maxWidth: "540px" }}
      >
        <div className="row g-0">
          <div className="col-md-3">
            <img
              src={photo}
              className="img-fluid rounded-start img-thumbnail"
              alt="..."
            />
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <small className="card-title">{name}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingerBriefInfo;
