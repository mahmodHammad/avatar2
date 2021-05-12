import React ,{useState}from "react";

import { makeStyles } from '@material-ui/core/styles';
import UI from "./UI"


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Render({imageSources,bg,stageRef,controllers}) {
  
    const classes = useStyles();


      return (
        <div className={classes.root}>
            <UI imageSources={imageSources} bg={bg}   controllers={controllers} stageRef={stageRef}/> 
        </div>
      );

}

export default Render;
