import { makeStyles } from '@material-ui/core/styles';

const cardStyle = makeStyles({
  root: {
    border: '#fafafa 2px solid',
    borderRadius: '3px',
    width: '100%',
    minWidth: (props) => (props.minWidth ? props.minWidth : "none"),
    marginRight: 20,
    position: 'relative',
    overflow: 'visible',
    "&:hover": {
      position: 'relative',
      top: '-1px',
      left: '1px',
    },
  },
  media: {
    paddingTop: '56.5%',
    backgroundSize: 'cover',
  },
  cardContent: {
    backgroundColor: '#fafafa',
    padding: '0.5rem',
    position: 'relative',
    width: '100%',
  },
  smallImg: {
    width: "50px",
    height: "50px",
    objectFit: "contain",
    position: "absolute",
    left: "80%",
    top: "0px",
  },
  'main-info': {
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.5rem',
    justifyContent: 'space-between',
  },
});

export default cardStyle;
