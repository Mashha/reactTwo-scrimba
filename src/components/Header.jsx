import logo from "../assets/airbnb_logo.png";

export default function Header() {
  return (
    <>
      <nav className="nav">
        <img src={logo} alt="logo" />
      </nav>
    </>
  );
}
