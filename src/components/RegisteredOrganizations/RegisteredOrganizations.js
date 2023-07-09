import React, { useEffect, useState } from 'react';
import fb from '../assests/icons/facebook.png'
import ins from '../assests/icons/instagram.png'
import yt from '../assests/icons/youtube.png'
import ln from '../assests/icons/linkedin.png'
import gm from '../assests/icons/gmail.png'
import './RegisteredOrganizations.css'
// import hm from '../assests/home right side/img-1.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const RegisteredOrganizations = () => {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/users")
      .then(res => res.json())
      .then(data => setUsers(data))
    // .then(data => console.log(data))

  }, [])

  return (

    < div >
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
                    <a className="nav-link" href="/donateNow"> Donate Now <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="/registration"> Register <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="/registeredOrganizations"> Organizations <span className="sr-only">(current)</span></a>
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

      {/* ///cards */}

      <div className="container">
        {
          users.map((user) => (
            <div className="row">
              <div className="col-sm-4">
                <div className="card">
                  <img src={user.image} className="card-img-top" alt="Organization 1" />
                  <div className="card-body">
                    <h5 className="card-title">{user.OrganizationName}</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                      malesuada ligula non tellus pulvinar, non sagittis felis cursus. Donec sed pharetra
                      ligula.</p>
                    <a href="#" className="btn btn-primary">Learn More</a>
                  </div>
                </div>
              </div>


            </div>

          ))
        }

      </div>
    </div >

  );
};

export default RegisteredOrganizations;



