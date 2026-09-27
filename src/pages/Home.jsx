import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-page">
      <div className="hero-content">
        <p className="welcome-text">WELCOME TO</p>

        <h1>Velvet Brew ☕</h1>

        <p className="hero-description">
          Coffee, conversations & cozy moments.
        </p>

        <p className="hero-subtext">
          Your perfect corner for freshly brewed coffee,
          delicious food and memorable moments.
        </p>

        <Link to="/reservation" className="home-button">
          Reserve a Table
        </Link>
      </div>
    </main>
  );
}

export default Home;