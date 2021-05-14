import React from 'react';
import {
    Drawer,
    List,
    ListItem,
    ListItemText,
    createStyles,
    makeStyles,
    AppBar,
    Button,
    IconButton,
    Toolbar,
    Typography,
    Theme
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { Link } from "react-router-dom";

import logo from '../../logo.svg';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appbar: {

        },
        drawer:{
            width: 240,
            zIndex: theme.zIndex.drawer+1,
        },
        drawerPaper: {
          width: 240,
        },
        drawerHeader:{
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            justifyContent: 'flex-end',
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            color: theme.palette.primary.contrastText,
            marginRight: theme.spacing(2),
        },
        logo: {
            maxWidth: 40,
        },
        leftsection: {
            flexGrow: 1,
            alignContent: 'center',
        },
        rightsection: {
            flexGrow: 1,
            alignContent: 'center',
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'flex-end',
        }
    }),
);

function Header() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        menu:false
    })

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent,) => {
        if ( event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift') ) {
            return;
        }

        setState({ ...state, menu: open });
    };
  
    return(
        <div>
            <AppBar className={classes.appbar} position="sticky">
                <Toolbar>
                    <div className={classes.leftsection}>
                        <IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)} >
                            <MenuIcon />
                        </IconButton>
                        <Link to="/">
                            <img src={logo} alt="" className={classes.logo} />
                        </Link>
                    </div>

                    <div className={classes.rightsection}>
                        <Link to="/login" className={classes.title}>
                            <Typography variant="body1">Login</Typography>
                        </Link>
                        <Link to="/register" className={classes.title}>
                            <Typography variant="body1">Register</Typography>
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>

            <Drawer
            className={classes.drawer}
            classes={{
              paper: classes.drawerPaper,
            }}
            anchor="left"
            open={state.menu}
            onClose={toggleDrawer(false)}>
                <div className={classes.drawerHeader}>
                    <IconButton onClick={toggleDrawer(false)}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    )
}

export default Header;