import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Carditem from "./Carditem"
import store from "../store"
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 450,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();
  return (
    <Grid container className="appContainer">
        {store.map(s=>
            <Grid item alignContent="center" alignItems="center" justify="center" xs={12} sm={3} >
                <Carditem img={s.img} title={s.title} body={s.body}/>
            </Grid>
        )}
    </Grid>
  );
}
