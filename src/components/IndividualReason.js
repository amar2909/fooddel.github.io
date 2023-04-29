import Reasons from "./Reasons";
import React from "react";
import "./Reasons.css";

function IndividualReason(props) {
  const { name, price, imageUrl } = props;
  return (
    <div className="container">
      <div className="content">
        <img id="image" src={imageUrl} alt={name} />

        <h2 id="name">{name}</h2>

        <p id="price">Rs {price}</p>
      </div>
    </div>
  );
}

export default IndividualReason;
