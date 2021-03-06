import { makeStyles } from '@material-ui/core/styles';

const tabStyle = makeStyles((theme) => ({
  root: {
    fontWeight: '600',
    color: (props) => (props.color && props.color),
    backgroundColor: (props) => (props.bgColor && props.bgColor),
    position: 'absolute',
    padding: '5px 10px',
    top: '0px',
    right: '0px',
    fontSize: '0.9rem',
    boxShadow: '1px 1px rgba(0, 0, 0, 0.5)',
  },

  'text--default': {
    fontSize: '16px',
  },

  'text--medium': {
    // fontWeight: 'normal',
    fontFamily: theme.typography.fontFamilies.main,
    letterSpacing: '-.5px',
  },

  'text--bold': {
    // fontWeight: 'bolder',
    fontFamily: theme.typography.fontFamilies.bold,
  },

  'text--light': {
    // fontWeight: 'lighter',
    fontFamily: theme.typography.fontFamilies.light,
  },

  'text--heading': {
    display: 'block',
    fontSize: '2.5rem',
  },

  'text--category': {
    fontSize: '18px',
    marginLeft: 'initial',
    marginRight: 'initial',
    boxShadow: 'inset 0 -5px 0 0 transparent',
    textTransform: 'capitalize',
    cursor: 'pointer',
  },

  'text--title': {
    fontSize: '18px',
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    margin: '16px 0',
    WebkitBoxPack: 'justify',
  },

  'text--link': {
    fontSize: '16px',
    letterSpacing: '0px',
    color: '#08A05C',
    textDecoration: 'none! important',
    cursor: 'pointer',
  },

  'text--primary': {
    fontSize: '22px',
    lineHeight: '1.3',
  },

  'text--secondary': {
    fontSize: '14px',
    lineHeight: '1.3',
    color: 'rgba(0, 0, 0, 0.5)',
    textTransform: 'capitalize',
  },
}));

export default tabStyle;
