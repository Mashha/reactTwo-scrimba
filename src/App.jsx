import Header from "./components/Header";
import Hero from "./components/Hero";
import { Card } from "./components/Card";
import data from "./components/data";

import "./App.css";

function App() {
  const cardElement = data.map(function (obj) {
    return <Card key={obj.key} obj={obj} />;
  });
  return (
    <>
      <Header />
      <Hero />
      <div className="card-list">{cardElement}</div>
    </>
  );
}

export default App;
