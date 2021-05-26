import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

const theme = responsiveFontSizes(
    createMuiTheme({
        palette: {
            type: "light",
            primary: {
              main: "rgba(49%, 63.5%, 66.3%, 1)",
            },
            secondary:{
              main: "#5E75A0",
            },
            background:{
              paper: "rgba(96.9%, 96.9%, 96.9%, 1)",
              default: "rgba(100%, 100%, 100%, 1)"
            }
        },
        typography:{
            fontSize:12,
            h1:{},
            h2:{},
            h3:{},
            h4:{},
            h5:{
              display:'inline'
            },
            h6:{
              display:'inline'
            },
            body1:{},
            body2:{},
            subtitle1:{},
            subtitle2:{},
            caption:{},
            overline:{}
        },
        overrides: {
          MuiButton: {
            root: {
              background:'linear-gradient(45deg, rgba(49%, 63.5%, 66.3%, 1) 30%, #5E75A0 90%)',
            },
            label:{
              fontSize:'1.2em',
              color:'#fff',
              padding:'0.1em 0.5em'
            }
          }
        }
    })
);

export default theme;
