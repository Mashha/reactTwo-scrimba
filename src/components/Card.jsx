import star from "../assets/Star.png";

export function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt="image of a person" />
      <div className="stars">
        <img src={star} alt="star" />
        <span>{props.rating}</span>
        <span>{props.reviewCount} •</span>
        <span>{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span>From {props.price} </span>/ person
      </p>
    </div>
  );
}
