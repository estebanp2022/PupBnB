import React, { useState } from "react";

function Card(props) {
  const [isActive, setActive] = useState("false");
  const fillColor = () => {
    setActive(!isActive);
  };

  return (
    <div className="card">
      <i
        onClick={fillColor}
        className={isActive ? "fa-regular fa-heart" : "fa-solid fa-heart"}
      ></i>
      <img id="picture" src={props.img} className="card--image" />
    </div>
  );
}

export default Card;
