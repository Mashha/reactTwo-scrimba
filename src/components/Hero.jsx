import heroImage from "../assets/main_image.png";

export default function Hero() {
  return (
    <>
      <div className="image">
        <img src={heroImage} alt="hero-image" />
      </div>
      <div className="text">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </>
  );
}
