import React from 'react';
import fb from '../assests/icons/facebook.png'
import ins from '../assests/icons/instagram.png'
import yt from '../assests/icons/youtube.png'
import ln from '../assests/icons/linkedin.png'
import gm from '../assests/icons/gmail.png'
import hm from '../assests/home right side/img-1.png'
import '../Header/nav.css';
const Footer = () => {
    return (
        <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="col-one">
                <h4>FoodGenix</h4>
                <p>Address : 3, Dhaka, Bangladesh </p>
                <p>Contact No : <a href="tel: +91 98659****59">+880-13031311</a></p>
                <p>Email : <a href="mailto:foundation@code.com">foodgenix@gmail.com</a></p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="col-two">
                <h4>Important Links</h4>
                <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#donation">Donations</a></li>
                  <li><a href="#mission-id">Missions</a></li>
                  <li><a href="#about">About us</a></li>
                  <li><a href="#contact">Contact us</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="col-one">
                <h4>Social Media</h4>
                <div className="social">
                <a href="#"><img src={fb} alt="facebook" /></a>
                    <a href="#"><img src={ins} alt="inatagram" /></a>
                    <a href="#"><img src={yt} alt="youtube" /></a>
                    <a href="#"><img src={ln} alt="linkedin" /></a>
                    <a href="#"><img src={gm} alt="gmail" /></a>
                </div>
                <p>Copyright © 2022 | All Right Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;