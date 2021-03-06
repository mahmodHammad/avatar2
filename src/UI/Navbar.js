import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:0,
    padding:0
  },
  title: {
    fontWeight:"bold",
    fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ",
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },  
  btnGroup:{
      display:"flex",
    flex:"auto",
    margin:"0 100px"
  }
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="inherit" position="static">
      <Container>
        <Toolbar variant="regular">
          
          <Typography className={classes.title} variant="h5" noWrap>
            Normies
          </Typography>
          <div className={classes.btnGroup}>
          <button className="radbtn navBtns">
               About
           </button>
           <button className="radbtn navBtns">
               FAQ
           </button> <button className="radbtn navBtns">
               Contact
           </button>
          </div>
          <div className={classes.search}>
           <button className="radbtn wallet">
               Connect wallet
           </button>
          </div>
        </Toolbar>
        </Container>

      </AppBar>
    </div>
  );
}
