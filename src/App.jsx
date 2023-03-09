import Header from "./components/Header";
import Hero from "./components/Hero";
import { Card } from "./components/Card";
import image1 from "./assets/image12.png";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Card
        img={image1}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </>
  );
}

export default App;
