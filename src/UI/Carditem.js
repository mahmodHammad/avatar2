import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    margin:"15px 10px",
    padding:10,
    border: "3px solid #333",
    borderRadius: 20,
    boxShadow: "none",
  },
  media: {
      paddingTop:80,
      marginBottom:-40,
    height: 60,
  },
  actions:{
    justifyContent: "center"
  },
  btn:{
    width: 180,
    background: "#000000",
    borderRadius: 17.5,
    color: "#fff"
  },
  title:{
    marginBottom:-5,
    fontFamily:"'AnonymousPro','Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif "
  },
  body:{
    marginBottom:-5,
    fontFamily:"'AnonymousPro','Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif "
  },

});

export default function MediaCard({img,title,body}) {
  const classes = useStyles();

  return (
    <Card raised={true} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title={title}
        />
        <CardContent>
          <Typography className={classes.title}  gutterBottom variant="h6" component="h2" align="center">
           {title}
          </Typography>
          <Typography className={classes.body} variant="body2" color="textSecondary" component="p" align="center">
           {body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <Button className={classes.btn} size="small" color="inherit" variant="contained" fullWidth>
         Claim
        </Button>
      </CardActions>
    </Card>
  );
}
