import React ,{useState}from "react";
import AvatarChange from "./AvatarChange"
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

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
        <Grid container>
        <Grid item  xs={12} sm={6}>
            {leftPanel.map(ctrl=>
            <Grid item xs={12} ><AvatarChange title={ctrl[0]} items={ctrl[1]} changeItem={ctrl[2]}/></Grid>)}
        </Grid>

        <Grid item xs={12} sm={6}>
        {rightPanel.map(ctrl=> <Grid item xs={12} lg={12}>
          <AvatarChange title={ctrl[0]} items={ctrl[1]} changeItem={ctrl[2]}/>
          </Grid>
          )}
          <div className="box">
            <button onClick={handleExport} className="center submit">Submit</button>
        </div> 
        </Grid>
        </Grid>

        </React.Fragment>
  );
}

export default UI;
