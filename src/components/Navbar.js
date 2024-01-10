import airbnbLogo from "../assets/images/airbnb-logo.png";
export default function Navbar() {
  return (
    <nav>
      <img src={airbnbLogo} alt="nav-logo" className="nav--logo" />
    </nav>
  );
}
