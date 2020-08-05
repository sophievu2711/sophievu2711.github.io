/*
*
* A business systems analyst
* An UI/UX designer
* A creative frontend developer
* 
*/
import React from 'react';
import '../style/Banner.css';
import MyTitle from './MyTitle/MyTitle';

const Banner: React.FC = (props) => (
  <div className="banner-container">
    <svg className="animate" width="90vw" height="20vw">
      <text x="50%" y="70%"  text-anchor="middle"  >
        nga vu
      </text>
    </svg>
    <MyTitle/>
  </div>
);

export default Banner;