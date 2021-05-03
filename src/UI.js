import React ,{useState}from "react";
import AvatarChange from "./AvatarChange"

function downloadURI(uri, name) {
  var link = document.createElement('a');
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function UI({controllers,stageRef}) {
  const ctrLenght = controllers.length
  const leftPanel = controllers.slice(0,1+ctrLenght/2)
  const rightPanel = controllers.slice(1+ctrLenght/2)
  const handleExport = () => {
    const uri = stageRef.current.toDataURL();
    downloadURI(uri, 'stage.png');
  };
  return (
      <React.Fragment>
        <div className="l-panel panel">
          {leftPanel.map(ctrl=><AvatarChange title={ctrl[0]} items={ctrl[1]} changeItem={ctrl[2]}/>)}
        </div>
        <div className="r-panel panel">
        {rightPanel.map(ctrl=><AvatarChange title={ctrl[0]} items={ctrl[1]} changeItem={ctrl[2]}/>)}
          <div className="box">
            <button onClick={handleExport} className="center submit">Submit</button>
          </div>
        </div> 
        </React.Fragment>
  );
}

export default UI;