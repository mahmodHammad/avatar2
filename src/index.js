import reportWebVitals from './reportWebVitals';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Image } from 'react-konva';
import useImage from 'use-image';

// the first very simple and recommended way:
const LionImage = ({x,y}) => {
  const [image] = useImage('https://konvajs.org/assets/lion.png');
  return <Image  x={x} y={y} image={image} />;
};

// custom component that will handle loading image from url
// you may add more logic here to handle "loading" state
// or if loading is failed
// VERY IMPORTANT NOTES:
// at first we will set image state to null
// and then we will set it to native image instance when it is loaded


class App extends Component {
  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {/* <URLImage src="https://konvajs.org/assets/yoda.jpg" x={150} /> */}
          <LionImage  x={10} y={20} />
          <LionImage x={20} y={40} />
        </Layer>
      </Stage>
    );
  }
}
render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
