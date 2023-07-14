import React from "react";
import { AccessoriesList } from "../helpers/AccessoriesList";
import AccessoriesItem from "../components/AccessoriesItem";
import "../styles/Accessories.css";

function Accessories() {
  return (
    <div className="accessories">
      <h1 className="accessoriesTitle">Jewllery</h1>
      <div className="accessoriesList">
        {AccessoriesList.map((accessoriesItem, key) => {
          return (
            <AccessoriesItem
              key={key}
              image={accessoriesItem.image}
              name={accessoriesItem.name}
              price={accessoriesItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Accessories;