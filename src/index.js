import reportWebVitals from './reportWebVitals';
import "./index.css"
import React, {useState } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Image } from 'react-konva';
import useImage from 'use-image';
import UI from "./UI"

const items ={
  skin1:{
    body:require("./low/BODY/Skin_01.png").default,
    eye:require( "./low/EYES/EYES_01 (Regular oval)/EYES_01_Skin_01.png").default,
    eyeBrow:require( "./low/EYEBROWS/EYEBROWS_01 (Slanted outward)/EYEBROWS_01_Skin_01.png").default,
    ears:require( "./low/EARS/EARS_01 (Regular)/Ears01_Skin01.png").default,
    mouth:require( "./low/MOUTH/MOUTH_02 (Open smile)/Mouth02_Skin01.png").default,
    nose:require( "./low/NOSE/NOSE_01 (Circular big)/NOSE_01_Skin_01.png").default,
    glasses:{
      Regular:require("./low/GLASSES/GLASSES_01 (Regular glasses)/GLASSES_01_Skin_01.png").default,
      Hippie:require("./low/GLASSES/GLASSES_03 (Hippie)/GLASSES_03_Skin_01.png").default,
      Sunglasses:require("./low/GLASSES/GLASSES_04 (Sunglasses)/GLASSES_04_Skin_01.png").default,
      JOY:require("./low/GLASSES/GLASSES_02 (JOY glasses)/GLASSES_02_Skin_01.png").default,
      Round: require("./low/GLASSES/GLASSES_05 (Round metal frame glasses)/GLASSES_05_Skin_01.png").default,
      patch:require("./low/GLASSES/GLASSES_06 (Eye patch)/GLASSES_06_Skin_01.png").default,
      threeD:require("./low/GLASSES/GLASSES_07 (3D glasses)/GLASSES_07_Skin_01.png").default,
      none:""
    },
    hat:{
      propeller:require("./low/HAT/HAT_01 (Propeller hat)/HAT_01_Skin_01.png").default,
      Trucker:require("./low/HAT/HAT_02 (Trucker hat)/HAT_02_Skin_01.png").default,
      baseball:require("./low/HAT/HAT_03 (Baseball cap)/HAT_03_Skin_01.png").default,
      Beanie:require("./low/HAT/HAT_04 (Beanie)/HAT_04_Skin_01.png").default,
      Bandana:require("./low/HAT/HAT_05 (Bandana)/HAT_05_Skin_01.png").default,
      Turban:require("./low/HAT/HAT_06 (Turban)/HAT_06_Skin_01.png").default,
      none:""
      
    },
    beard:{
      regularMustache:{
        black:require("./low/beard/FC01_Black_Skin01.png").default,
        blonde:require("./low/beard/FC01_Blonde_Skin01.png").default,
        brown:require("./low/beard/FC01_Brown_Skin01.png").default,
      },
      curlyMustache:{
        black:require("./low/beard/FC02_Black_Skin01.png").default,
        blonde:require("./low/beard/FC02_Blonde_Skin01.png").default,
        brown:require("./low/beard/FC02_Brown_Skin01.png").default,
      },
      fullBeard:{
        black:require("./low/beard/FC03_Black_Skin01.png").default,
        blonde:require("./low/beard/FC03_Blonde_Skin01.png").default,
        brown:require("./low/beard/FC03_Brown_Skin01.png").default,
      },     
      shortBeard:{
        black:require("./low/beard/FC04_Black_Skin01.png").default,
        blonde:require("./low/beard/FC04_Blonde_Skin01.png").default,
        brown:require("./low/beard/FC04_Brown_Skin01.png").default,
      },    
      Goatee:{
        black:require("./low/beard/FC05_Black_Skin01.png").default,
        blonde:require("./low/beard/FC05_Blonde_Skin01.png").default,
        brown:require("./low/beard/FC05_Brown_Skin01.png").default,
      }
    }

    // beard:{
    //   ReqularMustache:{
    //     black:require("./low/FACIAL HAIR/FC_01 (Regular Mustache)/FC_01_Black/FC01_Black_Skin01.png").default,
    //     blonde:require("./low/FACIAL HAIR/FC_01 (Regular Mustache)/FC_01_Blonde/FC01_Blonde_Skin01.png").default,
    //     brown:require("./low/FACIAL HAIR/FC_01 (Regular Mustache)/FC_01_Brown/FC01_Brown_Skin01.png").default,
    //   },
    //   Fullbeard:{
    //     black:require("./low/FACIAL HAIR/FC_01 (Full beard)/FC_01_Black/FC01_Black_Skin01.png").default,
    //     blonde:require("./low/FACIAL HAIR/FC_01 (Full beard)/FC_01_Blonde/FC01_Blonde_Skin01.png").default,
    //     brown:require("./low/FACIAL HAIR/FC_01 (Full beard)/FC_01_Brown/FC01_Brown_Skin01.png").default,
    //   },
    // }
  },
  skin2:{
    body:require("./low/BODY/Skin_02.png").default,
    eye:require( "./low/EYES/EYES_01 (Regular oval)/EYES_01_Skin_02.png").default,
    eyeBrow:require( "./low/EYEBROWS/EYEBROWS_01 (Slanted outward)/EYEBROWS_01_Skin_02.png").default,
    ears:require( "./low/EARS/EARS_01 (Regular)/Ears01_Skin02.png").default,
    mouth:require( "./low/MOUTH/MOUTH_02 (Open smile)/Mouth02_Skin02.png").default,
    nose:require( "./low/NOSE/NOSE_01 (Circular big)/NOSE_01_Skin_02.png").default,
    glasses:{
      Regular:require("./low/GLASSES/GLASSES_01 (Regular glasses)/GLASSES_01_Skin_02.png").default,
      Hippie:require("./low/GLASSES/GLASSES_03 (Hippie)/GLASSES_03_Skin_02.png").default,
      Sunglasses:require("./low/GLASSES/GLASSES_04 (Sunglasses)/GLASSES_04_Skin_02.png").default,
      JOY:require("./low/GLASSES/GLASSES_02 (JOY glasses)/GLASSES_02_Skin_02.png").default,
      Round: require("./low/GLASSES/GLASSES_05 (Round metal frame glasses)/GLASSES_05_Skin_02.png").default,
      patch:require("./low/GLASSES/GLASSES_06 (Eye patch)/GLASSES_06_Skin_02.png").default,
      threeD:require("./low/GLASSES/GLASSES_07 (3D glasses)/GLASSES_07_Skin_02.png").default
    }, hat:{
      propeller:require("./low/HAT/HAT_01 (Propeller hat)/HAT_01_Skin_02.png").default,
      Trucker:require("./low/HAT/HAT_02 (Trucker hat)/HAT_02_Skin_02.png").default,
      baseball:require("./low/HAT/HAT_03 (Baseball cap)/HAT_03_Skin_02.png").default,
      Beanie:require("./low/HAT/HAT_04 (Beanie)/HAT_04_Skin_02.png").default,
      Bandana:require("./low/HAT/HAT_05 (Bandana)/HAT_05_Skin_02.png").default,
      Turban:require("./low/HAT/HAT_06 (Turban)/HAT_06_Skin_02.png").default,
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
      threeD:require("./Avatar/GLASSES/GLASSES_07 (3D glasses)/GLASSES_07_Skin_03.png").default,
      none:""
    },hat:{
      propeller:require("./low/HAT/HAT_01 (Propeller hat)/HAT_01_Skin_03.png").default,
      Trucker:require("./low/HAT/HAT_02 (Trucker hat)/HAT_02_Skin_03.png").default,
      baseball:require("./low/HAT/HAT_03 (Baseball cap)/HAT_03_Skin_03.png").default,
      Beanie:require("./low/HAT/HAT_04 (Beanie)/HAT_04_Skin_03.png").default,
      Bandana:require("./low/HAT/HAT_05 (Bandana)/HAT_05_Skin_03.png").default,
      Turban:require("./low/HAT/HAT_06 (Turban)/HAT_06_Skin_03.png").default,
    }

  },
}
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
const [_hat,sethat] = useState(skin.hat.propeller)
const [_beard,setbeard] = useState(skin.beard.fullBeard.brown)
const [_clothes,setclothes] = useState(undependentItems.clothes.cloth1)
// const [_,set] = useState(skin.glasses.Regular)
const {ears,body,eye,eyeBrow,mouth,nose,glasses,hat,beard} =skin
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

  console.log("gogogogo",_clothes)

    return (
      <div>
        <UI handleExport={handleExport} changeGlasses={changeGlasses} 
        glasses={glasses} changeSkin={changeSkin} skins={items} 
        clothes={clothes} changeCloth={changeCloth}
      hats={hat} changeHat={changeHat}
      beard={beard} changeBeard={changeBeard}
        /> 
       
      <Stage width={1000} height={1000} ref={stageRef}>
        <Layer>
        <LionImage imageSource ={_clothes}  />
        {/* <LionImage imageSource ={harHat.black} x={20} y={40} /> */}

          <LionImage imageSource ={ears}  />
        <LionImage imageSource ={harHat.black} y={-20} />
          <LionImage imageSource ={body}  />
          <LionImage imageSource ={eye}  />
          <LionImage imageSource ={eyeBrow}  />
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
