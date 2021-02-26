import React from 'react';
import ShoesDetails from '../shoes.json';
import '../App.css'
import { Link } from 'react-router-dom';
import { Grid, Button, makeStyles, Paper } from '@material-ui/core';
import cx from 'classnames';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    textDecoration: 'none',
    color: '#91612f',
  },
}));


function Product() {
  const classes = useStyles();
  return (
    <div><br />
      <h1 className='heading'>Our Products</h1><br />
      <div className="productContainer">
        <Grid container spacing={3}>
          {Object.keys(ShoesDetails).map(keyName => {
            const shoe = ShoesDetails[keyName]
            return (<>
              <Grid item xs={3}>
                <Paper elevation={3} className={cx(classes.paper, 'productBox')}>

                  <h2 className='para'>{shoe.name}</h2>
                  <img src={shoe.img} height={150} alt={shoe.name} /> <br /><br />
                  <Button variant="outlined" className='button' color="primary">
                    <Link className={classes.button} key={keyName} to={`/product/${keyName}`}>Show Details</Link>
                  </Button>
                  <br />
                  <br />
                </Paper>
              </Grid>
            </>
            )
          })}
        </Grid>
      </div>
    </div>
  );
}

export default Product;
