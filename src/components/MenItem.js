import React from "react";

function MenItem({ image, name, price }) {
  return (
    <div className="menItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ${price} </p>
    </div>
  );
}

export default MenItem;
