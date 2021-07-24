import { makeStyles } from '@material-ui/core/styles';

const ProviderThumbStyle = makeStyles(() => ({
  root: {
    height: (props) => (props.height && props.height),
    display: 'flex',
    justifyContent: 'space-between',
    margin: '2rem 0 0 0',
    width: '100%',
  },
  left: {
    display: 'flex',
    width: '70%',
  },
  image: {
    borderRadius: '50%',
  },
  info: {
    margin: '0 10px',
  },
  providerName: {
    color: '#555',
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 0.5rem',
    backgroundColor: '#dedede',
    borderRadius: '20%',
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
}));

export default ProviderThumbStyle;
