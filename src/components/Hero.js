import HIROHITO from "../assets/images/photo-grid.png";

export default function Hero() {
  return (
    <section className="hero">
      <img src={HIROHITO} alt="hero-grid" className="hero--photo" />
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">Join unique interactive activities</p>
    </section>
  );
}
