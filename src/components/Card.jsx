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

  return (
      {props.openSpots === 0 && <div className="card--badge">UNAVAILABLE</div>}
      <img src={props.img} className="card--image" />
      <div className="card--stats">
        <span>{props.rating}</span>
        <span className="grey">({props.reviewCount}) • </span>
        <span className="grey">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}

export default Card;
