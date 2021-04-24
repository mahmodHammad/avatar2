import reportWebVitals from './reportWebVitals';
import "./index.css"
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Image } from 'react-konva';
import useImage from 'use-image';
import skin1 from "./Avatar/BODY/Skin_01.png"
import eye from "./Avatar/EYES/EYES_01 (Regular oval)/EYES_01_Skin_01.png"
import eyeBrow from "./Avatar/EYEBROWS/EYEBROWS_01 (Slanted outward)/EYEBROWS_01_Skin_01.png"
import ears from "./Avatar/EARS/EARS_01 (Regular)/Ears01_Skin01.png"
import mouth from "./Avatar/MOUTH/MOUTH_02 (Open smile)/Mouth02_Skin01.png"
import nose from "./Avatar/NOSE/NOSE_01 (Circular big)/NOSE_01_Skin_01.png"
import UI from "./UI"
// the first very simple and recommended way:
const LionImage = ({x,y,imageSource}) => {
  const [image] = useImage(imageSource);
  return <Image  image={image}  />;
};

// custom component that will handle loading image from url
// you may add more logic here to handle "loading" state
// or if loading is failed
// VERY IMPORTANT NOTES:
// at first we will set image state to null
// and then we will set it to native image instance when it is loaded
function downloadURI(uri, name) {
  var link = document.createElement('a');
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


const App = () => {
  const stageRef = React.useRef(null);


   const handleExport = () => {
    const uri = stageRef.current.toDataURL();
    console.log(uri);
    // we also can save uri as file
    // but in the demo on Konva website it will not work
    // because of iframe restrictions
    // but feel free to use it in your apps:
    downloadURI(uri, 'stage.png');
  };
  

    return (
      <div>
        <UI/>
          <button onClick={handleExport}>Click here to log stage data URL</button>
    
      <Stage width={4000} height={4000} ref={stageRef}>
        <Layer>
          {/* <URLImage src="https://konvajs.org/assets/yoda.jpg" x={150} /> */}
          <LionImage imageSource ={ears} x={20} y={40} />
          <LionImage imageSource ={skin1} x={10} y={20} />
          <LionImage imageSource ={eye} x={20} y={40} />
          <LionImage imageSource ={eyeBrow} x={20} y={40} />
          <LionImage imageSource ={mouth} x={20} y={40} />
          <LionImage imageSource ={nose} x={20} y={40} />
          
        </Layer>
      </Stage>
      </div>

    );

}
render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
