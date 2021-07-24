import { makeStyles } from "@material-ui/core/styles";

const providerStyle = makeStyles(() => ({
  headerContainer: {
    height: "fit-content",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundImage:
      'url("https://images.unsplash.com/photo-1553527922-767df645c5f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60")',
  },
  headerWrap: {
    margin: "0 auto",
    backgroundColor: "rgb(8, 160, 92, 0.4)",
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
}));

export default providerStyle;
