import reportWebVitals from './reportWebVitals';
import "./index.css"
import React, {useState } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Image } from 'react-konva';
import useImage from 'use-image';
import UI from "./UI"

const items ={
  skin1:{
    body:require("./Avatar/BODY/Skin_01.png").default,
    eye:require( "./Avatar/EYES/EYES_01 (Regular oval)/EYES_01_Skin_01.png").default,
    eyeBrow:require( "./Avatar/EYEBROWS/EYEBROWS_01 (Slanted outward)/EYEBROWS_01_Skin_01.png").default,
    ears:require( "./Avatar/EARS/EARS_01 (Regular)/Ears01_Skin01.png").default,
    mouth:require( "./Avatar/MOUTH/MOUTH_02 (Open smile)/Mouth02_Skin01.png").default,
    nose:require( "./Avatar/NOSE/NOSE_01 (Circular big)/NOSE_01_Skin_01.png").default,
    glasses:{
      Regular:require("./Avatar/GLASSES/GLASSES_01 (Regular glasses)/GLASSES_01_Skin_01.png").default,
      Hippie:require("./Avatar/GLASSES/GLASSES_03 (Hippie)/GLASSES_03_Skin_01.png").default,
      Sunglasses:require("./Avatar/GLASSES/GLASSES_04 (Sunglasses)/GLASSES_04_Skin_01.png").default,
      JOY:require("./Avatar/GLASSES/GLASSES_02 (JOY glasses)/GLASSES_02_Skin_01.png").default,
      Round: require("./Avatar/GLASSES/GLASSES_05 (Round metal frame glasses)/GLASSES_05_Skin_01.png").default,
      patch:require("./Avatar/GLASSES/GLASSES_06 (Eye patch)/GLASSES_06_Skin_01.png").default,
      threeD:require("./Avatar/GLASSES/GLASSES_07 (3D glasses)/GLASSES_07_Skin_01.png").default
    }
  },
  skin2:{
    body:require("./Avatar/BODY/Skin_02.png").default,
    eye:require( "./Avatar/EYES/EYES_01 (Regular oval)/EYES_01_Skin_02.png").default,
    eyeBrow:require( "./Avatar/EYEBROWS/EYEBROWS_01 (Slanted outward)/EYEBROWS_01_Skin_02.png").default,
    ears:require( "./Avatar/EARS/EARS_01 (Regular)/Ears01_Skin02.png").default,
    mouth:require( "./Avatar/MOUTH/MOUTH_02 (Open smile)/Mouth02_Skin02.png").default,
    nose:require( "./Avatar/NOSE/NOSE_01 (Circular big)/NOSE_01_Skin_02.png").default,
    glasses:{
      Regular:require("./Avatar/GLASSES/GLASSES_01 (Regular glasses)/GLASSES_01_Skin_02.png").default,
      Hippie:require("./Avatar/GLASSES/GLASSES_03 (Hippie)/GLASSES_03_Skin_02.png").default,
      Sunglasses:require("./Avatar/GLASSES/GLASSES_04 (Sunglasses)/GLASSES_04_Skin_02.png").default,
      JOY:require("./Avatar/GLASSES/GLASSES_02 (JOY glasses)/GLASSES_02_Skin_02.png").default,
      Round: require("./Avatar/GLASSES/GLASSES_05 (Round metal frame glasses)/GLASSES_05_Skin_02.png").default,
      patch:require("./Avatar/GLASSES/GLASSES_06 (Eye patch)/GLASSES_06_Skin_02.png").default,
      threeD:require("./Avatar/GLASSES/GLASSES_07 (3D glasses)/GLASSES_07_Skin_02.png").default
    }
  },
  skin3:{
    body:require("./Avatar/BODY/Skin_03.png").default,
    eye:require( "./Avatar/EYES/EYES_01 (Regular oval)/EYES_01_Skin_03.png").default,
    eyeBrow:require( "./Avatar/EYEBROWS/EYEBROWS_01 (Slanted outward)/EYEBROWS_01_Skin_03.png").default,
    ears:require( "./Avatar/EARS/EARS_01 (Regular)/Ears01_Skin03.png").default,
    mouth:require( "./Avatar/MOUTH/MOUTH_02 (Open smile)/Mouth02_Skin03.png").default,
    nose:require( "./Avatar/NOSE/NOSE_01 (Circular big)/NOSE_01_Skin_03.png").default,
    glasses:{
      Regular:require("./Avatar/GLASSES/GLASSES_01 (Regular glasses)/GLASSES_01_Skin_03.png").default,
      Hippie:require("./Avatar/GLASSES/GLASSES_03 (Hippie)/GLASSES_03_Skin_03.png").default,
      Sunglasses:require("./Avatar/GLASSES/GLASSES_04 (Sunglasses)/GLASSES_04_Skin_03.png").default,
      JOY:require("./Avatar/GLASSES/GLASSES_02 (JOY glasses)/GLASSES_02_Skin_03.png").default,
      Round: require("./Avatar/GLASSES/GLASSES_05 (Round metal frame glasses)/GLASSES_05_Skin_03.png").default,
      patch:require("./Avatar/GLASSES/GLASSES_06 (Eye patch)/GLASSES_06_Skin_03.png").default,
      threeD:require("./Avatar/GLASSES/GLASSES_07 (3D glasses)/GLASSES_07_Skin_03.png").default
    }
  },
}

/*

the name of each item is the same in all skin colors
TODO:
  make a state with the each item (eye, galsses...)
  the state will hole name, uri
  to change the item:
    1.get array of the keys
    2.look for the index of the current key
    3.get the next/previous index
    4.get the corrosponding item
    5.setState that item

*/

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
const [skin,setSkin] = useState(items.skin1)
const [_glasses,setGlasses] = useState(skin.glasses.Regular)
const {ears,body,eye,eyeBrow,mouth,nose,glasses} =skin

console.log("hey ",items.skin1)

   const handleExport = () => {
    const uri = stageRef.current.toDataURL();
    console.log(uri);
    // we also can save uri as file
    // but in the demo on Konva website it will not work
    // because of iframe restrictions
    // but feel free to use it in your apps:
    downloadURI(uri, 'stage.png');
  };
  
  function changeSkin(skintone){
    setSkin(skintone)
  }
  function changeGlasses(glass){
    setGlasses(glass)
  }

    return (
      <div>
        <UI handleExport={handleExport} changeGlasses={changeGlasses} 
        glasses={glasses} changeSkin={changeSkin} skins={items}/>
    <button onClick={changeSkin}>Change skin </button>
      <Stage width={4000} height={4000} ref={stageRef}>
        <Layer>
          <LionImage imageSource ={ears} x={20} y={40} />
          <LionImage imageSource ={body} x={10} y={20} />
          <LionImage imageSource ={eye} x={20} y={40} />
          <LionImage imageSource ={eyeBrow} x={20} y={40} />
          <LionImage imageSource ={mouth} x={20} y={40} />
          <LionImage imageSource ={_glasses} x={20} y={40} />
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
