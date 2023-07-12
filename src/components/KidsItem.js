import React from "react";

function KidsItem({ image, name, price }) {
  return (
    <div className="kidsItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ${price} </p>
    </div>
  );
}

export default KidsItem;