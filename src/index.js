import reportWebVitals from './reportWebVitals';
import "./index.css"

import React, {useState } from 'react';
import { render } from 'react-dom';
import Render from "./render"
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

const App = () => {
const stageRef = React.useRef(null);
const [skin,setSkin] = useState(items.skin1)

const {ears,body,eye,mouth,nose,glasses,hat,beard,eyebrow,hair} =skin
const beardColors = {
  black:"black",
  blonde:"blonde",
  brown:"brown",
}
const bgs={
  pinky:[0,"#F7BB97",1,"#DD5E89"],
  "cool bules":[1,"#2193b0",0,"#6dd5ed"],
  yoda:[0,"#FF0099",1,"#493240"],
  amin:[0,"#8E2DE2",1,"#4A00E0"],
  Harvey:[0,"#99f2c8",1,"#1f4037"],
  neuromancer:[0,"#f953c6",1,"#b91d73"],
  flare:[0,"#f5af19",1,"#f12711"],
  "kye meh":[0,"#8360c3",1,"#2ebf91"],
  "keyoo tah":[0,"#ffd452",1,"#544a7d"],
  "by Design":[0,"#009FFF",1,"#ec2F4B"],
  "UV":[0,"#eaafc8",1,"#654ea3"],
  "burning organe":[0,"#FF416C",1,"#FF4B2B"],
  "summer Dog":[0,"#a8ff78",1,"#78ffd6"],
  "Sin red":[0,"#ED213A",1,"#93291E"],
  mango:[0,"#ffe259",1,"#ffa751"],
  reaqua:[0,"#ACBB78",1,"#799F0C"],
  red:[0,"#f55",1,"#d00"],
  Lunada:[0,"#5433FF",0.5,"#20BDFF",1,"#A5FECB"],
  "sea weed":[0,"#3CD3AD",1,"#4CB8C4"],
  "bloody mary":[0,"#FF512F",1,"#DD2476"],
  "mango pulp":[0,"#EDDE5D",1,"#F09819"],
  "emerald water":[0,"#348F50",1,"#56B4D3"],
  "intuitive purple":[0,"#DA22FF",1,"#9733EE"],
  "Green beach":[0,"#00CDAC",1,"#02AAB0"],
  "sunny days":[0,"#E1F5C4",1,"#EDE574"],
  "harmonic energy":[0,"#F4D03F",1,"#16A085"],
  "cool brown":[0,"#b29f94",1,"#603813"],
  nimvelo:[0,"#26a0da",1,"#314755"],
  dimigo:[0,"#fc6767",1,"#ec008c"],
  skyline:[0,"#1488CC",1,"#2B32B2"],
  sky:[0,"#fff",1,"#076585"],
  copper:[0,"#B79891",1,"#94716B"],
  rea:[0,"#FFE000",1,"#799F0C"],
  "slight ocean view":[0,"#a8c0ff",1,"#3f2b96"],
}
const [_glasses,setGlasses] = useState(glasses.Regular)
const [_eyebrow,seteyebrow] = useState(eyebrow.slanted)
const [_hat,sethat] = useState(hat.propeller)
const [beardColor,setBeardColor]=useState(beardColors.black)
const [_beard,setbeard] = useState(beard.regularMustache)
const [_eye,seteye] = useState(eye.oval)
const [_clothes,setclothes] = useState(undependentItems.clothes.cloth1)
const [_hair,sethair]=useState(hair['Buzz cut'])
const [bg,setbg]=useState(bgs.pinky)
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
function changbg(bg){
  console.log("HHH",bg)
  setbg(bg)
}

const controllers=[
  ["Skintone",glasses,changeGlasses],
  ["glasses",glasses,changeGlasses],
  ["clothes",clothes,changeCloth],
  ["hat",hat,changeHat],
  ["beard",beard,changeBeard],
  ["beard Color",beardColors,changebeardColor],
  ["eyebrow",eyebrow,changeeyebrow],
  ["eye",eye,changeeye],
  ["hair",hair,sethair],
  ["Background",bgs,changbg],
  ["Special",bgs,changbg],
  // ["Special",bgs,changbg],
]
const imageSources = [ears,body,_clothes,mouth,_hair[beardColor],_beard[beardColor],_eye,_eyebrow,_glasses,nose]

    return (
     <Render imageSources={imageSources} bg={bg} stageRef={stageRef} controllers={controllers}/>
    );

}
render(<App />, document.getElementById('root'));
// ears, body, clothing, mouth, nose, facial hair, hat, eyes, eyebrows, glasses
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
