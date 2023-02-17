import Card from "./Card";
import pupData from "../pupData";

function Main() {
  const cards = pupData.map((item) => {
    return (
      <Card
        key={item.id}
        name={item.name}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
      />
    );
  });

  return (
    <div>
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default Main;
