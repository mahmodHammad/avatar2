import reportWebVitals from './reportWebVitals';
import "./index.css"
import React, {useState } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Image ,Rect} from 'react-konva';
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

const App = () => {
const stageRef = React.useRef(null);
const [skin,setSkin] = useState(items.skin1)

const {ears,body,eye,mouth,nose,glasses,hat,beard,eyebrow,hair} =skin
const beardColors = {
  black:"black",
  blonde:"blonde",
  brown:"brown",
}

const [_glasses,setGlasses] = useState(glasses.Regular)
const [_eyebrow,seteyebrow] = useState(eyebrow.slanted)
const [_hat,sethat] = useState(hat.propeller)
const [beardColor,setBeardColor]=useState(beardColors.black)
const [_beard,setbeard] = useState(beard.regularMustache)
const [_eye,seteye] = useState(eye.oval)
const [_clothes,setclothes] = useState(undependentItems.clothes.cloth1)
const [_hair,sethair]=useState(hair['Buzz cut'])
const {clothes,harHat}=undependentItems

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
  setbeard(breard)
}
function changeeyebrow(eyebrow){
  seteyebrow(eyebrow)
}
function changeeye(e){
  seteye(e)
}

function changebeardColor(col){
  setBeardColor(col)
}

const controllers=[
  ["glasses",glasses,changeGlasses],
  ["clothes",clothes,changeCloth],
  ["hat",hat,changeHat],
  ["beard",beard,changeBeard],
  ["beard Color",beardColors,changebeardColor],
  ["eyebrow",eyebrow,changeeyebrow],
  ["eye",eye,changeeye],
  ["hair",hair,sethair]
]

    return (
      <div>
        <UI  controllers={controllers} stageRef={stageRef}/> 
       
      <Stage width={1000} height={1000} ref={stageRef}>
        <Layer>
        <Rect
          x={0}
          y={0}
          width={1000}
          height={1000}
          fillLinearGradientEndPointX={1000}
          fillLinearGradientStartPointX={0}
          fillLinearGradientStartPointY={0}
          fillLinearGradientEndPointY={1000}
          fillLinearGradientColorStops={[0,"#f0f",1,"#ff0"]}
        />
          <LionImage imageSource ={ears}  />
          <LionImage imageSource ={body}  />
         <LionImage imageSource ={_clothes}  />
          <LionImage imageSource ={mouth}  />
          <LionImage imageSource ={_hair[beardColor]}  />

          <LionImage imageSource ={_beard[beardColor]}  />
          {/* <LionImage imageSource ={_hat}  /> */}
        {/* <LionImage imageSource ={harHat.black} y={-20} /> */}
          <LionImage imageSource ={_eye}  />
          <LionImage imageSource ={_eyebrow}  />
          <LionImage imageSource ={_glasses}  />
          <LionImage imageSource ={nose}  />

        {/* <LionImage imageSource ={harHat.black} x={20} y={40} /> */}

          {/* <LionImage imageSource ={_clothes}  /> */}
        
        </Layer>
      </Stage>
      </div>

    );

}
render(<App />, document.getElementById('root'));
// ears, body, clothing, mouth, nose, facial hair, hat, eyes, eyebrows, glasses
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
