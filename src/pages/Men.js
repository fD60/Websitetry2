import React from "react";
import { MenList } from "../helpers/MenList";
import MenItem from "../components/MenItem";
import "../styles/Men.css";

function Men() {
  return (
    <div className="men">
      <h1 className="menTitle">Men Shirts</h1>
      <div className="menList">
        {MenList.map((menItem, key) => {
          return (
            <MenItem
              key={key}
              image={menItem.image}
              name={menItem.name}
              price={menItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Men;
