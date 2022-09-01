import './App.css';
import { useState } from 'react';
import { useTransition, animated } from 'react-spring';

function OneBox() {

  const [toggle, setToggle] = useState(false)
  //REACT SPRING
  const transition = useTransition(toggle, {
    from: {x: -100, y: 150, opacity: 0},
    enter: {x: 0, y: 0, opacity: 1},
    leave: {x: 100, y: 150, opacity: 0}
  });

  return (
    <div className="app">
      <button onClick={() => {
        setToggle(!toggle)
      }}>
        {toggle? 'un-mount' : 'mount'}
      </button>
      <div className="container">
        {/* {toggle? <div className="item" /> : ''} */}
        {transition((style, item) => 
          item ? <animated.div style={style} className="item" /> : ''
        )}
      </div>
    </div>
  );
}

export default OneBox;
