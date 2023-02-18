import React, { useState, useEffect } from "react";
import Card from "./Card";
import PupBtn from "./PupBtn";

function Main() {
  const [pic, setPic] = useState([]);
  const [pic2, setPic2] = useState([]);
  const [pic3, setPic3] = useState([]);
  const [pic4, setPic4] = useState([]);
  const [pic5, setPic5] = useState([]);
  const [pic6, setPic6] = useState([]);

  useEffect(() => {
    fetch(
      "https://apis.scrimba.com/unsplash/photos/random?orientation=portrait&query=puppy&count=6"
    )
      .then((res) => res.json())
      .then((data) => {
        setPic(data[0].urls.small);
        setPic2(data[1].urls.small);
        setPic3(data[2].urls.small);
        setPic4(data[3].urls.small);
        setPic5(data[4].urls.small);
        setPic6(data[5].urls.small);
      });
  }, []);

  function newPic() {
    console.log("works");
  }

  return (
    <div className="main-container">
      <PupBtn handleClick={newPic} />
      <div className="card-container">
        <Card picture={pic} />
        <Card picture={pic2} />
        <Card picture={pic3} />
        <Card picture={pic4} />
        <Card picture={pic5} />
        <Card picture={pic6} />
      </div>
    </div>
  );
}

export default Main;
