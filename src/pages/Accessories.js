import React from "react";
import { AccessoriesList } from "../helpers/AccessoriesList";
import accessoriesItem from "../components/AccessoriesItem";
import "../styles/Kids.css";

function Accessories() {
  return (
    <div className="accessories">
      <h1 className="accessoriesTitle">Jewllery</h1>
      <div className="accessoriesList">
        {AccessoriesList.map((accessoriesitem, key) => {
          return (
            <accessoriesItem
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