import React from 'react';
import '../Header/nav.css';
import miss3 from '../assests/missions/3.jpg'
import miss1 from '../assests/missions/1.jpg'
import miss4 from '../assests/missions/4.jpg'
import miss5 from '../assests/missions/5.jpg'
import miss6 from '../assests/missions/6.jpg'
import miss7 from '../assests/missions/7.jpg'
import abtimg from '../assests/missions/img-2.jpeg'
const Missions = () => {
    return (
        <div>
             <section className="mission" id="mission-id">
          <div className="container">
            <div className="heading">
              <h2>Our Missions</h2>
              <p>We have delivered <span>Wastage</span> or <span>Donations</span> to needy Peoples</p>
            </div>
            <div className="gallery-sec">
              <div className="container">
                <div className="image-container">
                  <div className="image"><img src={miss3} alt="img" /></div>
                  <div className="image"><img src={miss1} alt="img" /></div>
                  <div className="image"><img src={miss4} alt="img" /></div>
                  <div className="image"><img src={miss5} alt="img" /></div>
                  <div className="image"><img src={miss6} alt="img" /></div>
                  <div className="image"><img src={miss7} alt="img" /></div>
                  {/* <div className="image"><img src={miss2} alt="img" /></div> */}
                </div>
              </div>
              <div className="pop-image">
                <span>×</span>
                <img src="img/gallery/1.jpg" alt="gallery-img" />
              </div>
            </div>
          </div></section>
        <section className="about-sec" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 about-img">
                <img src={abtimg} alt="about" />
              </div>
              <div className="col-lg-8 order-first order-lg-last">
                <div className="heading">
                  <h2>What We Do &amp; Why We Do</h2>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur voluptatibus voluptatem
                  neque, dicta architecto minima amet suscipit deserunt delectus cumque ea excepturi fuga alias,
                  labore eaque placeat facere impedit quia? </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aspernatur totam, perferendis
                  deleniti natus voluptatum. Distinctio consequuntur eum facilis et? Amet vero soluta distinctio
                  veniam eveniet? Corrupti laborum ex nobis.</p>
              </div>
            </div>
          </div>
        </section>
        </div>
    );
};

export default Missions;