import star from "/assets/Star.png";

export function Card(props) {
  console.log(props.obj);
  let badgeText;
  if (props.obj.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.obj.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={`../assets/${props.obj.coverImg}`} alt="image of a person" />
      <div className="stars">
        <img src={star} alt="star" />
        <span>{props.obj.stats.rating}</span>
        <span className="gray">({props.obj.stats.reviewCount}) •</span>
        <span className="gray">{props.obj.location}</span>
      </div>
      <p>{props.obj.title}</p>
      <p>
        <span>From {props.obj.price} </span>/ person
      </p>
    </div>
  );
}
