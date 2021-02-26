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
  const classes = useStyles();
