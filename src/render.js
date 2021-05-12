import React ,{useState}from "react";

import { makeStyles } from '@material-ui/core/styles';
import UI from "./UI"
import DisplayAvatar from "./DisplayAvatar"
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


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
          <Grid container spacing={3}>
            <Grid item xs={12}>
            <UI  controllers={controllers} stageRef={stageRef}/> 

              <Paper className={classes.paper}>xs=12</Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>xs=12 sm=6</Paper>
            </Grid>
           
          </Grid>
        </div>
      );

}

export default Render;

{/* <DisplayAvatar imageSources={imageSources} bg={bg} stageRef={stageRef} /> */}