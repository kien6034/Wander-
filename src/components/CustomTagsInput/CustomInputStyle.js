// import {
//     primaryColor,
//     dangerColor,
//     successColor,
//     grayColor,
//     defaultFont
//   } from "assets/jss/material-dashboard-react.js";
  import {
    fade,
    makeStyles,
  } from '@material-ui/core/styles';
  
  const primaryColor = "#08A05C";
  const dangerColor = "#f44336";
  const successColor = "#4caf50";
  const grayColor = "#999";

  const customInputStyle = {
    disabled: {
      "&:before": {
        backgroundColor: "transparent !important"
      }
    },
    underline: {
      "&:hover:not($disabled):before,&:before": {
        borderColor: grayColor + " !important",
        borderWidth: "1px !important"
      },
      "&:after": {
        borderColor: primaryColor
      }
    },
    underlineError: {
      "&:after": {
        borderColor: dangerColor
      }
    },
    underlineSuccess: {
      "&:after": {
        borderColor: successColor
      }
    },
    labelRoot: {
    //   ...defaultFont,
      color: grayColor[3] + " !important",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "1.42857",
      letterSpacing: "unset"
    },
    labelRootError: {
      color: dangerColor
    },
    labelRootSuccess: {
      color: successColor
    },
    feedback: {
      position: "absolute",
      top: "18px",
      right: "0",
      zIndex: "2",
      display: "block",
      width: "24px",
      height: "24px",
      textAlign: "center",
      pointerEvents: "none"
    },
    marginTop: {
      marginTop: "16px"
    },
    formControl: {
      paddingBottom: "10px",
      margin: "27px 0 0 0",
      position: "relative",
      verticalAlign: "unset"
    },
  };
  
  export const useStylesReddit = makeStyles((theme) => ({
    root: {
      border: '2px solid #fcfcfb',
      overflow: 'hidden',
      borderRadius: 4,
      backgroundColor: '#fcfcfb',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:hover': {
        backgroundColor: '#fff',
      },
      '&$focused': {
        backgroundColor: '#fff',
        boxShadow: `${fade(primaryColor, 0.02)} 0 0 0 2px`,
        borderWidth: '2px',
        borderColor: primaryColor,
      },
    },
    focused: {},
  }));
  
  export default customInputStyle;
  