import React from "react";
import "./First.css";
import egg from "./image-transform.jpg";
import shoop from "./image-stand-out.jpg";

import { Container } from "react-bootstrap";
const First = () => {
  return (
    <div>
      <Container fluid>
        <div className='row' id='about'>
          <div className='  col-12 col-sm-6' id='sec1'>
            <div>
              <h2 id='h'>
                Transform your
                <br />
                brand
              </h2>
              <p id='p'>
                We are a full-service creative agency <br />
                specializing in helping brands grow fast.
                <br /> Engage your clients through compelling
                <br /> visuals that do most of the marketing for you.
              </p>
              <span id='learnmore'>Learn more</span>
            </div>
          </div>
          <div className='col-12 col-sm-6  ' id='photo'>
            <img src={egg} alt='Egg' />
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-sm-6  ' id='shoop'>
            <img src={shoop} alt='Shoop' id='img2' />
          </div>
          <div className='  col-12 col-sm-6' id='sec1'>
            <div>
              <h2 id='h'>
                Stand out to the right <br />
                audience
              </h2>
              <p id='p' className='my-4'>
                Using a collaborative formula of designers, researchers,
                <br /> photographers, videographers, and copywriters, we’ll{" "}
                <br />
                build and extend your brand in digital places.
              </p>
              <span id='learnmore'> Learn more</span>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-sm-6  bg-image' id='cheery'>
            <div className='con'>
              <h3 className='my-4' id='h3'>
                {" "}
                Graphic design
              </h3>
              <p id='p'>
                {" "}
                Great design makes you memorable. We deliver <br />
                artwork that underscores your brand message
                <br /> and captures potential clients’ attention.
              </p>
            </div>
          </div>
          <div className='col-12 col-sm-6' id='orange'>
            <div className='con'>
              <h3 className='my-4' id='h3'>
                Photography
              </h3>
              <p id='p'>
                {" "}
                Increase your credibility by getting the most
                <br /> stunning, high-quality photos that improve your
                <br /> business image.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default First;
