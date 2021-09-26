import React from "react";

const SingerBriefInfo = (props) => {
  const { name, photo } = props.singerInfo;
  return (
    <div>
      <hr />
      <div
        className="card mb-3 bg-dark text-white"
        style={{ maxWidth: "540px" }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={photo}
              className="img-fluid rounded-start img-thumbnail"
              alt="..."
            />
          </div>
          <div className="col-md-8">
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
