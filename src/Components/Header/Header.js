import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
// import { Link } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    menu_item: {
        color: '#fff',
        textDecoration: 'none'
    }
}));

function Header() {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Container fixed>
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">                    
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Random Blog
                        </Typography>
                        <Link style={{textDecoration: 'none'}} to='/'>
                            <Button style={{color: '#fff'}}>Home</Button>
                        </Link>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}

export default Header;
