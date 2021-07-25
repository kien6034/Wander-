import { makeStyles } from '@material-ui/core/styles';

const ProviderThumbStyle = makeStyles(() => ({
  root: {
    height: (props) => (props.height && props.height),
    display: 'flex',
    justifyContent: 'space-between',
    margin: '5px 10px',
    marginBottom: '15px',
    width: 'calc(100% - 20px)',
  },
  left: {
    display: 'flex',
    width: '70%',
    height: '100%',
  },
  image: {
    borderRadius: '50%',
  },
  info: {
    margin: '0 10px',
  },
  providerName: {
    color: '#555',
    width: "90%",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  rate: {
    color: 'black',
    display: 'flex',
    alignItems: 'center',
    fontSize: '90%',
    fontWeight: '300',
  },
  starImg: {
    marginLeft: '3px',
    width: '0.8rem',
  },
  right: {
    height: '100%',
    width: '2rem',
    position: 'relative',
  },
  dots: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 0.5rem',
    backgroundColor: '#dedede',
    borderRadius: '20%',
    zIndex: '10',
    "&:hover": {
      position: 'relative',
      top: '1px',
      left: '1px',
    },
  },

  dot: {
    margin: '0.1rem 0',
    width: '0.25rem',
    height: '0.25rem',
    backgroundColor: '#666',
    borderRadius: '50%',
  },

  paper: {
    display: 'none',
    position: 'absolute',
    top: '50px',
    left: '50px',
    zIndex: '10',
    minWidth: '150px',
    backgroundColor: '#fffeee',
  },

  ppelement: {
    padding: '5px 10px',
    "&:hover": {
      backgroundColor: '#eee',
    }
  },

}));





export default ProviderThumbStyle;
