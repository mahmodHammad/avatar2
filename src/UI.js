import React ,{useState}from "react";
import AvatarChange from "./AvatarChange"

const hairColors={
  lol:0x3D5AFE,
  red:0xff5050,
  Purple:0x651FFF,
  gray:0x282828,
  lol:0xdc95dc,
  "light blue":0xb4cdff,
  pink:0xfe5caa,
  cyan:0x3264c8
}

function UI({handleExport,glasses,changeGlasses,
  changeSkin ,skins,clothes, changeCloth,hats,changeHat,
  beard , changeBeard
}) {

  return (
      <React.Fragment>
        <div className="l-panel panel">
             <AvatarChange title="Skintone" items={skins} changeItem={changeSkin}/>
             <AvatarChange title="Glasses" items={glasses} changeItem={changeGlasses}/>
             <AvatarChange title="Clothes" items={clothes} changeItem={changeCloth}/>
             <AvatarChange title="Hats" items={hats} changeItem={changeHat}/>
             <AvatarChange title="Beard" items={beard} changeItem={changeBeard}/>
        </div>
         <div className="r-panel panel">
           {/* <AvatarChangeColor title="Face Color"   colors={faceColors}/> */}

         <div className="box">
        <button onClick={handleExport} className="center submit">Submit</button>
    </div>
         
        </div> 
        </React.Fragment>
  );
}

export default UI;