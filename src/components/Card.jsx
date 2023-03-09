import image from "../assets/image12.png";
import star from "../assets/Star.png";

export function Card() {
  return (
    <div className="card">
      <img src={image} alt="image of a person" />
      <div className="stars">
        <img src={star} alt="star" />
        <p>
          5.0 <span>(6) • USA</span>
        </p>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p>
        <span>From $136 </span>/ person
      </p>
    </div>
  );
}
