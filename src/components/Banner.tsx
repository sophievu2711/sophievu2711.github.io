/*
*
* A business systems analyst
* An UI/UX designer
* A creative frontend developer
* 
*/
import React from 'react';
import '../style/Banner.css';
import MyTitle from './MyTitleContainer/MyTitle';

const Banner: React.FC = (props) => {
  const a = 10;
  return (
    <React.Fragment>
      <div className="banner-container">
        <svg className="animate" width="100%" height="20vw">
          <text x="50%" y="70%"  text-anchor="middle"  >
            nga vu
          </text>
        </svg>
        <MyTitle/>
      </div>
    </React.Fragment>
  );
};

export default Banner;