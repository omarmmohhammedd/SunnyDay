import React from "react";
import "./Second.css";
import img1 from "./image-emily.jpg";
import img2 from "./image-thomas.jpg";
import img3 from "./image-jennie.jpg";

const Second = () => {
  return (
    <div>
      <div className='row' id='sec2'>
        <h3> Client testimonials</h3>

        <div className='col-sm-3 col-12 person'>
          <img src={img1} id='img1' />
          <p id='description'>
            {" "}
            We put our trust in Sunnyside and they
            <br /> delivered, making sure our needs were met <br />
            and deadlines were always hit.
          </p>
          <span id='name'>
            {" "}
            Emily R. <br /> <span id='jop'> Marketing Director</span>
          </span>
        </div>
        <div className='col-sm-3 col-12 person'>
          <img src={img2} id='img1' />
          <p id='description'>
            {" "}
            Sunnyside’s enthusiasm coupled with their
            <br /> keen interest in our brand’s success made it
            <br /> a satisfying and enjoyable experience.
          </p>
          <span id='name'>
            {" "}
            Thomas S.
            <br />
            <span id='jop'> Chief Operating Officer</span>
          </span>
        </div>
        <div className='col-sm-3 col-12 person'>
          <img src={img3} id='img1' />
          <p id='description'>
            {" "}
            Incredible end result! Our sales increased
            <br /> over 400% when we worked with Sunnyside.
            <br /> Highly recommended!
          </p>
          <span id='name'>
            {" "}
            Jennie F.
            <br />
            <span id='jop'> Business Owner</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Second;
