import React from "react";
import { KidsList } from "../helpers/KidsList";
import KidsItem from "../components/KidsItem";
import "../styles/Kids.css";

function Kids() {
  return (
    <div className="kids">
      <h1 className="kidsTitle">Kid's Shirts</h1>
      <div className="kidsList">
        {KidsList.map((_Kidsitem, key) => {
          return (
            <KidsItem
              key={key}
              image={KidsItem.image}
              name={KidsItem.name}
              price={KidsItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Kids;