import reportWebVitals from './reportWebVitals';
import "./index.css"
import React, {useState } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Image } from 'react-konva';
import useImage from 'use-image';
import UI from "./UI"
import items from "./loaders"
const undependentItems={
  clothes:{
    cloth1:require("./low/CLOTHES/Clothes_01.png").default,
    cloth2:require("./low/CLOTHES/Clothes_02.png").default,
    cloth3:require("./low/CLOTHES/Clothes_03.png").default,
    cloth4:require("./low/CLOTHES/Clothes_04.png").default,
    cloth5:require("./low/CLOTHES/Clothes_05a.png").default,
    cloth6:require("./low/CLOTHES/Clothes_05b.png").default,
    cloth7:require("./low/CLOTHES/Clothes_05c.png").default,
    cloth8:require("./low/CLOTHES/Clothes_05d.png").default,
    cloth9:require("./low/CLOTHES/Clothes_06a.png").default,
    cloth10:require("./low/CLOTHES/Clothes_06b.png").default,
    cloth11:require("./low/CLOTHES/Clothes_07.png").default,
    cloth12:require("./low/CLOTHES/Clothes_08.png").default,
    cloth13:require("./low/CLOTHES/Clothes_08a.png").default,
    cloth14:require("./low/CLOTHES/Clothes_08b.png").default,
    cloth15:require("./low/CLOTHES/Clothes_08c.png").default,
  },
  harHat:{
    black:require("./low/HAIR (men)/HAIR_00 (Hair for Hat)/HairHat_Black.png").default
  }
}

const LionImage = ({x,y,imageSource}) => {
  const [image] = useImage(imageSource);
  return <Image  image={image} y={y}  />;
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
const [_eyebrow,seteyebrow] = useState(skin.eyebrow.slanted)

const [_hat,sethat] = useState(skin.hat.propeller)
const [_beard,setbeard] = useState(skin.beard.fullBeard.brown)
const [_clothes,setclothes] = useState(undependentItems.clothes.cloth1)
// const [_,set] = useState(skin.glasses.Regular)
const {ears,body,eye,mouth,nose,glasses,hat,beard,eyebrow} =skin
const {clothes,harHat}=undependentItems

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
  function changeCloth(cloth){
    setclothes(cloth)
  }
  function changeHat(hat){
    sethat(hat)
  }
  function changeBeard(breard,isColor){
    setbeard(breard.black)
  }
function changeeyebrow(eyebrow){
  seteyebrow(eyebrow)
}
 
const controllers=[
  [glasses,changeGlasses],
  [clothes,changeCloth],
  [hat,changeHat],
  [beard,changeBeard],
  [eyebrow,changeeyebrow],
]

    return (
      <div>
        <UI handleExport={handleExport} controllers={controllers} /> 
       
      <Stage width={1000} height={1000} ref={stageRef}>
        <Layer>
        <LionImage imageSource ={_clothes}  />
        {/* <LionImage imageSource ={harHat.black} x={20} y={40} /> */}

          <LionImage imageSource ={ears}  />
        <LionImage imageSource ={harHat.black} y={-20} />
          <LionImage imageSource ={body}  />
          <LionImage imageSource ={eye}  />
          <LionImage imageSource ={_eyebrow}  />
          <LionImage imageSource ={mouth}  />
          <LionImage imageSource ={_glasses}  />
          <LionImage imageSource ={_hat}  />
          <LionImage imageSource ={_clothes}  />
          <LionImage imageSource ={_beard}  />
          <LionImage imageSource ={nose}  />

          
          
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
