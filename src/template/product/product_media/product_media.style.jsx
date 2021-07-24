import { makeStyles } from '@material-ui/core/styles';

const productMediaStyle = makeStyles(() => ({
  root: {
    marginTop: '25px',
    marginBottom: '40px',
    minHeight: '400px',
    textAlign: 'center',
  },

  img: {
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
    height: '100%',
    width: '100%',
    borderRadius: "8px",
    objectFit: "cover",
    cursor: "pointer",
  },
}));

export default productMediaStyle;
