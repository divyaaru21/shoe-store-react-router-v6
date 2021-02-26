import React from 'react';
import { Typography, Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import '../App.css';

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    color: 'white',
    backgroundColor: '#91612f',
    padding: '10px',
    borderRadius: '2px',
  }
}));

function Home() {
  const classes = useStyles();
  return (
    <>
    <Typography className='heading'>
      <br />
      <br />
      Shoe Store By Saad Farhan <br />
      <Button color="inherit"><Link to='/product' className={classes.link}>Go to Products now!</Link></Button>
    </Typography>
  </>
  );
}

export default Home;
