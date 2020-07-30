import React from 'react';
import {useSpring, animated} from 'react-spring';

const Fadein: React.FC = (props) => {
  const animation = useSpring({
    opacity: 0.8,
    from: {opacity: 0},
  })

  return (
    <React.Fragment>
      <animated.div style={animation}>{props.children}</animated.div>
    </React.Fragment>
  );
};

export default Fadein;

