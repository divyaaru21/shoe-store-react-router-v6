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

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      <p className='typo' style={{ textAlign: 'center' }}>
        Made with
      <img className="creditImage" width="20" height="20" alt="Heart" src="https://cdn.iconscout.com/icon/free/png-256/heart-1767836-1502416.png" />
      by &nbsp;
      <a href="http://www.github.com/SaadFarhanIdress">
          Saad Farhan
      </a>
        <br />
      Don't forget to star my repository :)
      <br />
      Link:
      <a href="https://github.com/SaadFarhanIdress/project-3-shoe-store">
          https://github.com/SaadFarhanIdress/project-3-shoe-store
        </a>
      </p>
    </>
  );
}

export default Home;
