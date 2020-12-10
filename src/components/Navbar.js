import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';

function HideOnScroll(props) {
  const { children } = props; 
  const trigger = useScrollTrigger({ });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const useStyles = makeStyles({
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})


export default function HideAppBar(props) {

  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar color="transparent">
          <Toolbar className={classes.toolbar} >
            <Button>
             <Typography variant="body2">Home</Typography> 
            </Button>            
            <Button>
              <Typography variant="body2">About Me</Typography>
            </Button>
              <Typography variant="h6">Diego Costa Portfolio</Typography>
            <Button>
              <Typography variant="body2">Portfolio</Typography>
            </Button>
            <Button>
              <Typography variant="body2">Contact</Typography>
            </Button> 
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}