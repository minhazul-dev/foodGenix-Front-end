import React from 'react';
import '../Header/nav.css'
import cl from '../assests/don categories/clothing.png'
import ft from '../assests/don categories/sneakers.png'
import fn from '../assests/don categories/salary.png'
import gd from '../assests/don categories/gadgets.png'
import st from '../assests/don categories/book.png'
import fd from '../assests/don categories/shopping-bag.png'
const DonationCategories = () => {
  return (
    <section className="don-sec" id="donation">
      <div className="container">
        <div className="heading">
          <h2>We Manage Wastage or Donation like..</h2>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="don-box">
              <img src={cl} alt="img" />
              <h3>Clothes</h3>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <a href="/clothes" className="btn1">Donate Now</a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="don-box">
              <img src={ft} alt="img" />
              <h3>Footware</h3>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <a href="/Footwear" className="btn1">Donate Now</a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="don-box">
              <img src={fn} alt="img" />
              <h3>Fund</h3>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <a href="/payment" className="btn1">Donate Now</a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="don-box">
              <img src={gd} alt="img" />
              <h3>Gadgets</h3>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <a href="#contact" className="btn1">Donate Now</a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="don-box">
              <img src={st} alt="img" />
              <h3>Stationary</h3>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <a href="#contact" className="btn1">Donate Now</a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="don-box">
              <img src={fd} alt="img" />
              <h3>Food</h3>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <a href="/food" className="btn1">Donate Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationCategories;