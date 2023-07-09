import React, { useEffect, useState } from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import fb from '../assests/icons/facebook.png'
import ins from '../assests/icons/instagram.png'
import yt from '../assests/icons/youtube.png'
import ln from '../assests/icons/linkedin.png'
import gm from '../assests/icons/gmail.png'
import hm from '../assests/home right side/img-1.png'
import CheckoutForm from '../CheckoutForm/CheckoutForm'

const DonationForm = () => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("http://localhost:9000/config").then(async (r) => {
      const { publishableKey } = await r.json();
      console.log(publishableKey);
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);
  return (
    <section>
      <div className="fixed-top">
        <header>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <a className="navbar-brand" href="/home">FoodGenix</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="/donateNow"> Donate Now <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#mission-id">Missions</a>
                  </li>
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
      <section>

        {/* <div style={{background: 'url(https://bootstrapious.com/i/snippets/sn-static-header/background.jpg)'}} className="jumbotron bg-cover text-white">
        <div className="mt-5 container py-5 text-center"> */}
        <div style={{ background: 'url(https://bootstrapious.com/i/snippets/sn-static-header/background.jpg)' }} className="jumbotron bg-cover text-white">
          <div className="mt-5 container py-5 text-center">
            {/* <h1 className="display-4 font-weight-bold">General Donation</h1> */}
            <h2 className="display-4 font-weight-bold mb-0 text-white">General Donation</h2>

          </div>
        </div>
      </section>
      {/* tooltips */}
      <section>
        {/* stripe start */}
        <>
          <h1>Donation</h1>
          <div>
            <form>
              <div className="input-group input-group-sm">
                <input type="text" className="form-control" placeholder="Enter Amount here..." />

              </div>
            </form>
          </div>
          {clientSecret && stripePromise && (
            <Elements stripe={stripePromise} options={{ clientSecret }}>
              <CheckoutForm />
            </Elements>
          )}
        </>

      </section>


    </section>
  );
};

export default DonationForm;