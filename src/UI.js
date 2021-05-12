import React ,{useState,useLayoutEffect}from "react";
import AvatarChange from "./AvatarChange"
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import DisplayAvatar from "./DisplayAvatar"

function downloadURI(uri, name) {
  var link = document.createElement('a');
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function UI({controllers,stageRef, imageSources ,bg}) {
  const [dimensions, setDimensions] = useState({ width:0, height: 0 });

  const ctrLenght = controllers.length
  const leftPanel = controllers.slice(0,1+ctrLenght/2)
  const rightPanel = controllers.slice(1+ctrLenght/2)
  const handleExport = () => {
    const uri = stageRef.current.toDataURL();
    downloadURI(uri, 'stage.png');
  };

  useLayoutEffect(() => {
    if (stageRef.current) {
      console.log(stageRef.current.offsetWidth)
      setDimensions({
        width: stageRef.current.offsetWidth,
        height: stageRef.current.offsetHeight
      });
    }
  }, []);
  // window.onresize=e=>console.log("stageRef",stageRef.getBoundingClientRect().width)

  return (
      <Container>
        <Grid container className="appContainer">
        <Grid item  xs={12} sm={4}>
            {leftPanel.map(ctrl=>
            <Grid item xs={12} ><AvatarChange title={ctrl[0]} items={ctrl[1]} changeItem={ctrl[2]}/></Grid>)}
        </Grid>

        <Grid item xs={12} sm={4}>
          <DisplayAvatar height={dimensions.width} imageSources={imageSources} bg={bg} stageRef={stageRef} />
        </Grid>

        <Grid item xs={12} sm={4}>
        {rightPanel.map(ctrl=> <Grid item xs={12} lg={12}>
          <AvatarChange title={ctrl[0]} items={ctrl[1]} changeItem={ctrl[2]}/>
          </Grid>
          )}
          <div className="box">
            <button onClick={handleExport} className="center submit">Submit</button>
        </div> 
        </Grid>
        </Grid>

        </Container>
  );
}



export default UI;
