import { makeStyles } from "@material-ui/core/styles";

const createProductStyle = makeStyles((theme) => ({
  headerContainer: {
    height: "fit-content",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundImage:
      'url("https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80")',
  },
  headerWrap: {
    margin: "0 auto",
    backgroundColor: "rgb(239, 111, 108, 0.7)",
    width: "fit-content",
    textAlign: "center",
    padding: "0 10px",
  },
  headerTitle: {
    color: "white",
    fontSize: "2rem",
    display: "inline-block",
  },
  headerNumber: {
    color: "#08A05C",
    fontSize: "2rem",
    marginBottom: "8px",
  },
  headerText: { fontSize: "16px", color: "white" },
  formRoot: {
      '& .MuiFormControl-root': {
          width: "80%",
          margin: theme.spacing(1)
      }
  }
}));

export default createProductStyle;
