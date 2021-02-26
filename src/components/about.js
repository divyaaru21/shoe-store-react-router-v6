import { Typography, Button, makeStyles } from '@material-ui/core';
import React from 'react';
import '../App.css'
const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    color: 'white',
    backgroundColor: '#91612f',
    padding: '10px',
    borderRadius: '2px',
  },
  hrefLink: {
    textDecoration: 'none',
    color: 'white',
  }
}));

function About() {
  const classes = useStyles();
  return (
    <div>
      <Typography className='heading'>
        <br />
        <br />
      About <br /></Typography>
      <Typography className='para'>
      This a project made by Saad Farhan and this app is not used as a real shopping app. <br />So if you like this app star my repository. :-) Link is below:-</Typography><br /><br />
      <Button color="inherit" className={classes.link}><a href="https://github.com/SaadFarhanIdress/project-3-shoe-store" className={classes.hrefLink}>Go to star this repository!</a></Button>
      
    </div>
  );
}

export default About;
