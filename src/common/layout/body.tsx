import React from 'react';
import "../../style/Body.css";

const TheBody: React.FC = (props) => {
  return (
    <div className="background">
      {props.children}  
    </div>
  );
};

export default TheBody;