import './App.css';
import { useState } from 'react';
import { useTransition, animated } from 'react-spring';

function MultiBox() {

  const [items, setItems] = useState([])
  //REACT SPRING
  const transition = useTransition(items, {
    from: {x: -200, y: 150, opacity: 0, width: 10, height: 10},
    enter: item => async (next) => {
       await next({y:item.y, opacity: 1, delay: item.delay});
       await next({x:0, width: 100, height: 100});
    },
    leave: {x: 100, y: 150, opacity: 0}
  });

  return (
    <div className="app">
      <button onClick={() => {
        setItems(items => items.length ? [] : [
            { y: -50, delay: 200 },
            { y: 0, delay: 400 },
            { y: 50, delay: 600 }
        ] )
      }}>
        {items.length? 'un-mount' : 'mount'}
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

export default MultiBox;
