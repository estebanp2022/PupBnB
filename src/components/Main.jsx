import React, { useState, useEffect } from "react";
import Card from "./Card";
import PupBtn from "./PupBtn";

function Main() {
  const [pics, setPics] = useState([]);

  let dogCard = pics.map((card) => (
    <Card key={card.id} img={card.urls.small} />
  ));

  function fetchData() {
    fetch(
      "https://apis.scrimba.com/unsplash/photos/random?orientation=portrait&query=puppy&count=20"
    )
      .then((res) => res.json())
      .then((data) => {
        setPics(data);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="main-container">
      <PupBtn handleClick={fetchData} />
      <div className="card-container">{dogCard}</div>
    </div>
  );
}

export default Main;
