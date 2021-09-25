import React from 'react'
import {AppBar, Toolbar,Typography,Button,IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


import useStyles from '../Header/Header.style';






export const Header = () => {
    const classes = useStyles()


    return (
        <div>
        <AppBar position="static">
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" component="div" >
                My App
            </Typography>
            <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
        </div>
    )
}

