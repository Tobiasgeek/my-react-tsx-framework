import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const theme = responsiveFontSizes(
    createMuiTheme({
        palette: {
            type: "light",
            primary: {
                light: "#7986cb",
                main: "#3f51b5",
                dark: "#303f9f",
                contrastText: "#fff"
            },
            secondary: {
                light: "#ff4081",
                main: "#f50057",
                dark: "#c51162",
                contrastText: "#fff"
            }
        },
        typography:{
            fontSize:12,
            h1:{},
            h2:{},
            h3:{},
            h4:{},
            h5:{},
            h6:{},
            body1:{},
            body2:{},
            subtitle1:{},
            subtitle2:{},
            caption:{},
            overline:{}
        }
    })
);

export default theme;
