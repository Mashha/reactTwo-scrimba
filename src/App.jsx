import Header from "./components/Header";
import Hero from "./components/Hero";
import { Card } from "./components/Card";
import data from "./components/data";

import "./App.css";

function App() {
  const cardElement = data.map(function (obj) {
    return (
      <Card
        key={obj.id}
        img={obj.coverImg}
        rating={obj.stats.rating}
        reviewCount={obj.stats.reviewCount}
        country={obj.location}
        title={obj.title}
        price={obj.price}
        openSpots={obj.openSpots}
      />
    );
  });
  return (
    <>
      <Header />
      <Hero />
      <div className="card-list">
      {cardElement}
      </div>
    </>
  );
}

export default App;
