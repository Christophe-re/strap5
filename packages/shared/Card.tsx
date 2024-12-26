import * as React from "react";
import "./tailwind.css";
export function Card(props: any) {
  return (
    <div className="p-1 w-32 h-32 flex">
      <button className="bg-red-300 text-red-900">Button</button>;
      <img src={props.image} alt={props.description} />
      <h3>{props.heading}</h3>
      <span>{props.price}</span>
      <button onClick={() => props.onClick()}>
        {props.children || "Add to cart"}
      </button>
    </div>
  );
}

export default Card;
