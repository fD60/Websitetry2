import React from "react";
import {WomenList} from "../helpers/Womenlist"
import WomenItem from "../components/WomenItem";
import "../styles/Women.css";

function Women() {
  return (
    <div className="women">
      <h1 className="womenTitle">Women's Shirt</h1>
      <div className="womenList">
        {WomenList.map((womenItem, key) => {
          return (
            <WomenItem
              key={key}
              image={womenItem.image}
              name={womenItem.name}
              price={womenItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Women;