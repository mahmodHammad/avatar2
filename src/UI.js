import React ,{useState,useLayoutEffect}from "react";
import AvatarChange from "./AvatarChange"
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import DisplayAvatar from "./DisplayAvatar"
import Navbar from "./UI/Navbar"
import Typography from '@material-ui/core/Typography';

function downloadURI(uri, name) {
  var link = document.createElement('a');
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function UI({controllers,stageRef, imageSources ,bg}) {
const divRef = React.useRef(null);

  const [dimensions, setDimensions] = useState({ width:0, height: 0 });

  const ctrLenght = controllers.length
  const leftPanel = controllers.slice(0,1+ctrLenght/2)
  const rightPanel = controllers.slice(1+ctrLenght/2)
  const handleExport = () => {
    const uri = stageRef.current.toDataURL();
    downloadURI(uri, 'stage.png');
  };

  useLayoutEffect(() => {
    if (divRef.current) {
      console.log(divRef.current.offsetWidth)
      setDimensions({
        width: divRef.current.offsetWidth,
        height: divRef.current.offsetHeight
      });
    }
  }, []);
  window.onresize=e=>{
    if (divRef.current) {
      console.log(divRef.current.offsetWidth)
      setDimensions({
        width: divRef.current.offsetWidth,
        height: divRef.current.offsetHeight
      });
    }
  }

  return (
    <div>
      <Navbar/>
      <Container>
           
      <Typography align="center" className="SolganTitle" variant="h5" >
            Create Your Normie
          </Typography>
        <Grid container className="appContainer">
        <Grid item alignContent="center" alignItems="center" justify="center" xs={12} sm={4} lg={4} >
            {leftPanel.map(ctrl=>
            <Grid item xs={12} ><AvatarChange title={ctrl[0]} items={ctrl[1]} changeItem={ctrl[2]}/></Grid>)}
        </Grid>

        <Grid justify="center" container item xs={12} sm={3} lg={4}>
          <Grid item xs={10} >
            <DisplayAvatar divRef={divRef} height={dimensions.width} imageSources={imageSources} bg={bg} stageRef={stageRef} />
          </Grid>
        </Grid>

        <Grid item xs={12} sm={4} lg={4}>
        {rightPanel.map(ctrl=> <Grid item xs={12} lg={12}>
          <AvatarChange title={ctrl[0]} items={ctrl[1]} changeItem={ctrl[2]}/>
          </Grid>
          )}
          <div className="box">
           1000/1000 Minted <button onClick={handleExport} className="radbtn submit">Submit</button>
        </div> 
        </Grid>
        </Grid>

          
        <Typography  align="center"  className="txt1" variant="body2" noWrap>
        The following items can be claimed if you own the original NFT in your connected wallet:
          </Typography>

        </Container>
      </div>
  );
}

export default UI;
