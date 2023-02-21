import React from "react";
import { RiProductHuntLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Home.scss";
import heroImg from "../../assets/ecommerce.jpg";


const Home = () => {
  
  return (
    <div className="home">
      <nav className="container --flex-between ">
        <div className="logo">
          <RiProductHuntLine size={35} />
        </div>

        <ul className="home-links">
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <button className="--btn --btn-primary">
                  <Link to="/login">Login</Link>
                </button>
              </li>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/dashboard">Dashboard</Link>
              </button>
            </li>
        </ul>
      </nav>
      {/* HERO SECTION */}
      <section className="container hero">
        <div className="hero-text">
          <h2>Vender Store Inventory {"&"} Stock</h2>
          <p>
            Vender Store allows you manage products in the Store in to be listed and purchased by buyers.
          </p>
          <div className="hero-buttons">
            <button className="--btn --btn-secondary">
              <Link to="/dashboard">Browse Products</Link>
            </button>
          </div>
          <div className="--flex-start">
            <NumberText num="14K" text="Brand Owners" />
            <NumberText num="23K" text="Active Users" />
            <NumberText num="500+" text="Partners" />
          </div>
        </div>

        <div className="hero-image rounded-md">
          <img src={heroImg} alt="Inventory" className="rounded-md" style={{maxWidth: "100%"}}/>
        </div>
      </section>
    </div>
  );
};

const NumberText = ({ num, text }) => {
  return (
    <div className="--mr">
      <h3 className="--color-white">{num}</h3>
      <p className="--color-white">{text}</p>
    </div>
  );
};

export default Home;