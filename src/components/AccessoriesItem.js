import React from "react";

function AccessoriesItem({ image, name, price }) {
  return (
    <div className="accessoriesItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> £{price} </p>
    </div>
  );
}

export default AccessoriesItem;