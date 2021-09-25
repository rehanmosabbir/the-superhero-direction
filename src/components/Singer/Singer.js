import React from "react";

const Singer = (props) => {
  console.log(props.singerInfo);
  const { name, occupation, age, country, earnings, photo } = props.singerInfo;
  return (
    <div className="col-md-4 my-5">
      <div class="card" style={{ width: "18rem" }}>
        <img src={photo} class="card-img-top img-thumbnail" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <hr />
          <p class="card-text">Occupation : {occupation}</p>
          <p class="card-text">Age : {age}</p>
          <p class="card-text">Country : {country}</p>
          <p class="card-text">Earnings : $ {earnings}</p>
          <a href="/" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Singer;
