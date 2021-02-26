import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import '../App.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        textAlign: 'left',
    },
    link: {
        textDecoration: 'none',
        color: 'white',
    }
}));

export const NavBar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" className="navBar">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} >
             
          </Typography>
                    <Button color="inherit"><Link to='/' className={classes.link}>Home</Link></Button>
                    <Button color="inherit"><Link to='/product' className={classes.link}>Products</Link></Button>
                    <Button color="inherit"><Link to='/about' className={classes.link}>About</Link></Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
