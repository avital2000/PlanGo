import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    palette: {
        secondary: 'red'
    },
    root: {
        right: 0,
        textAlign: 'right',
        '&$focused $notchedOutline': {
            color: 'orange'
        }
    },
    focused: {
        color: 'orange'
    },
    notchedOutline: {
        color: 'orange'
    },
    focus:{
        color:'orange'
    },
    hover:{
        backgroundColor: 'orange'
    }
    // labelRoot: {
    //     right: 0,
    //     textAlign: 'right',
    //     color: '#ff2b6d'
    // },
    // shrink: {
    //     transformOrigin: "top right",
    //     color: '#ff2b6d'
    // },


}));

export default useStyles;