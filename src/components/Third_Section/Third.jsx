import React from "react";
import "./Third.css";
import cone from "./image-gallery-cone.jpg";
import milkbottles from "./image-gallery-milkbottles.jpg";
import orange from "./image-gallery-orange.jpg";
import sugarcubes from "./image-gallery-sugarcubes.jpg";

const Third = () => {
  return (
    <div id='service'>
      <div className='row' id='row'>
        <div className=' col-sm-3 ' id='photo-con'>
          <img src={milkbottles} id='img4' />
        </div>
        <div className=' col-sm-3' id='photo-con'>
          <img src={orange} id='img4' />
        </div>
        <div className=' col-sm-3' id='photo-con'>
          <img src={cone} id='img4' />
        </div>
        <div className='col-sm-3' id='photo-con'>
          <img src={sugarcubes} id='img4' />
        </div>
      </div>
    </div>
  );
};

export default Third;
