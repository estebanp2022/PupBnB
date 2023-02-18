import React, { useState, useEffect } from "react";
import Card from "./Card";
import PupBtn from "./PupBtn";

function Main() {
  const [pics, setPics] = useState([]);

  let dogCard = pics.map((card) => (
    <Card key={card.id} img={card.urls.small} />
  ));

  useEffect(() => {
    fetch(
      "https://apis.scrimba.com/unsplash/photos/random?orientation=portrait&query=puppy&count=9"
    )
      .then((res) => res.json())
      .then((data) => {
        setPics(data);
      });
  }, []);

  function newPic() {
    console.log("works");
  }

  return (
    <div className="main-container">
      <PupBtn handleClick={newPic} />
      <div className="card-container">{dogCard}</div>
    </div>
  );
}

export default Main;
