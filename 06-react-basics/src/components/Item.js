import React from "react";

function Item({ item, deleteItem }) {
  return (
    <li className="item">
      <p> {item}</p>
      <button onClick={deleteItem}>Del</button>
    </li>
  );
}

export default Item;
