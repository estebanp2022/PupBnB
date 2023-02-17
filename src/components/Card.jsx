import React, { useState } from "react";

function Card(props) {
  //   const apiKey = "xIcPpApLgKuXz30i-fsKIZcR6OaYzQ9J5ZDgttG8ZO4";
  //   fetch(`https://api.unsplash.com/photos/random?client_id=${apiKey}`)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  ////////////////////////////////////////////////////////////
  //   const [pics, setPics] = useState([]);
  //   useEffect(() => {
  //     fetch(
  //       "https://apis.scrimba.com/unsplash/photos/random?orientation=portrait&query=puppy&count=1"
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setPics(data);
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //       });
  //   }, []);
  const [isActive, setActive] = useState("false");
  const FillColor = () => {
    setActive(!isActive);
  };

  return (
    <div className="card">
      {props.openSpots === 0 && <div className="card--badge">UNAVAILABLE</div>}

      <i
        id="heart"
        onClick={FillColor}
        className={isActive ? "fa-regular fa-heart" : "fa-solid fa-heart"}
      ></i>

      <img src={props.img} className="card--image" />
      <div className="card--stats">
        <div className="name-rating">
          <p>{props.name}</p>
          <div>
            <i className="fa-solid fa-star"></i>
            <span>{props.rating}</span>
          </div>
        </div>
        <p className="card--title">{props.title}</p>
        <p>
          <span className="bold">From ${props.price}</span> / person
        </p>
      </div>
    </div>
  );
}

export default Card;
