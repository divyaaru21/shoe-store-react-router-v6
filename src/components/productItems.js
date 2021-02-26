import { Grid, Paper, makeStyles } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import ShoesDetails from '../shoes.json';
import '../App.css';
import cx from 'classnames';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#91612f',
  },
}));

function ProductItems() {
  const classes = useStyles();
  const { id } = useParams();

  const shoe = ShoesDetails[id]

  if (!shoe) {
    return <h2>Product not found....</h2>
  }

  return (
    <div className='content'>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={cx(classes.paper, 'productBox')}><h2>{shoe.name}</h2><img src={shoe.img} height={500} alt={shoe.name} /></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={cx(classes.paper, 'productBox')}><p>{shoe.description}</p></Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProductItems;
