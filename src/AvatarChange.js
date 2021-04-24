import React, { useState, useEffect } from "react";


export default function AC({ title , items,changeItem }) {

  const ItemNames = Object.keys(items);

  const [activeItemIndex, setactiveItemIndex] = useState(0);
  useEffect(() => {
    // changeSceneBackground(bgs[ItemNames[activeItemIndex]]);
  }, []);

  function syencChangeBackground(index) {
    setactiveItemIndex(index);
    // console.log("items is ",items[activeItemIndex][index])
    console.log("ITEMS",items)
    console.log("active",items[ItemNames[index]])

    changeItem(items[ItemNames[index]])
    // changeSceneBackground(bgs[ItemNames[index]]);
  }

  function onBGChange(index) {
    //   index == 1 => left , index==0 => right

    if (index) {
      activeItemIndex < ItemNames.length - 1
        ? syencChangeBackground(activeItemIndex + 1)
        : syencChangeBackground(0);
    } else {
        activeItemIndex > 0
        ? syencChangeBackground(activeItemIndex - 1)
        : syencChangeBackground(ItemNames.length - 1);
    }
  }

  return (
      
    <div className="box">
        <div className="title">{title}</div>
        <div className="change">
            <button className="l-btn btn" onClick={()=>onBGChange(0)}>{`<`}</button>
            <span className="center">{ItemNames[activeItemIndex]}</span>
            <button className="r-btn btn" onClick={()=>onBGChange(1)}>{`>`}</button>
        </div>
    </div>
    // <div className="container">
    //   <button onClick={() => onBGChange(0)}>{`<`}</button>
    //   <span className="title">{ItemNames[activeItemIndex]}</span>
    //   <button onClick={() => onBGChange(1)}>{`>`}</button>
      // <button onClick={()=>takeScreenshot(2000 ,2000 )} className="SH">Take SH</button>
    // </div>
  );
}
