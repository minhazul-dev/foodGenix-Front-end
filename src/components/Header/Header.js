import React from 'react';
import './nav.css'
import fb from '../assests/icons/facebook.png'
import ins from '../assests/icons/instagram.png'
import yt from '../assests/icons/youtube.png'
import ln from '../assests/icons/linkedin.png'
import gm from '../assests/icons/gmail.png'
import hm from '../assests/home right side/img-1.png'
import DataFilter from '../NgoData/DataFilter';
import DonationCategories from '../DonationCategories/DonationCategories';
import Missions from '../Missions/Missions';
import ConnectWithUsForm from '../ConnectWithUsForm/ConnectWithUsForm';
import Footer from '../Footer/Footer';
import FaQ from '../FaQ/FaQ';
import HowItWorks from '../HowItWorks/HowItWorks';
import Organizations_slider from '../organizations_slider/Organizations_slider';
const nav = () => {
  return (
    <div>
      <div className="fixed-top">
        <header>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <a className="navbar-brand" href="#home">FoodGenix</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="/payment"> Donate Now <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="/registration"> Register <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="/mapwithmarkersgit"> Live Donate <span className="sr-only">(current)</span></a>
                  </li>
                  {/* <li className="nav-item">
                    <a className="nav-link" href="/mapwithmarkers">Live donate</a>
                  </li> */}
                  <li className="nav-item">
                    <a className="nav-link" href="#about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
        <div className="cont-sec">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <p>Contact No : <a href="tel: +9198659****59">+880- 130311311</a></p>
              </div>
              <div className="col-lg-6">
                <div className="social">
                  <a href="#"><img src={fb} alt="facebook" /></a>
                  <a href="#"><img src={ins} alt="inatagram" /></a>
                  <a href="#"><img src={yt} alt="youtube" /></a>
                  <a href="#"><img src={ln} alt="linkedin" /></a>
                  <a href="#"><img src={gm} alt="gmail" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="home-sec" id="home">
        <div className="container">
          <div className="home-content">
            <div className="row">
              <div className="col-lg-6 align-item-center">
                <div className="home-info">
                  <h1>Alone we can do little, together we can do so much</h1>
                  {/* <h2>We <span>FoodGenix </span> manage wastage for needy peoples</h2> */}
                  <h2>We are a non-profit enabling the exchange of excess food from the food industry to those who need it most</h2>

                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nobis voluptates modi.</p>
                  <div className="buttons">
                    <a href="#contact" className="btn1">Donate now</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-first order-lg-last">
                <div className="img-sec">
                  <img src={hm} alt="home-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DataFilter />
      <HowItWorks />
      <DonationCategories />
      <Missions />
      {/* <Organizations_slider /> */}
      <FaQ />
      <ConnectWithUsForm />
      <Footer />
    </div>

  );
};

export default nav;