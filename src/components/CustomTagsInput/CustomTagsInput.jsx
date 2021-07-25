import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Chip from '@material-ui/core/Chip';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
// @material-ui/icons
import Clear from "@material-ui/icons/Clear";
import Check from "@material-ui/icons/Check";
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
// core components
// import GridItem from 'components/Grid/GridItem'
// import GridContainer from 'components/Grid/GridContainer'
import GridItem from "../Grid/GridItem";
import GridContainer from "../Grid/GridContainer";
import styles, { useStylesReddit } from "./CustomInputStyle";

const useStyles = makeStyles(styles);

export default function CustomTagsInput(props) {
  const classes = useStyles();
  const inputClasses = useStylesReddit();
  const {
    labelHeading,
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    error,
    success,
    tags,
    handleDelete,
    handleAddition,
    handleEdit,
    isInputList,
  } = props;

  const labelClasses = classNames({
    [" " + classes.labelRootError]: error,
    [" " + classes.labelRootSuccess]: success && !error
  });
  const underlineClasses = classNames({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true
  });
  const marginTop = classNames({
    [classes.marginTop]: labelText === undefined
  });
  const _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddition(e.target.value)
      e.target.value = ""
    }
  }

  return (
    <>
      <InputLabel style={{ marginTop: "5px" }}>{labelHeading}</InputLabel>
      <div style={{ marginTop: "10px" }}>
        {
          isInputList ?
            <GridContainer spacing={1}>
              {
                tags.map((tag, index) => (
                  <GridItem
                    key={index}
                    xs={6}
                    sm={3}
                    md={2}
                  >
                    <TextField
                      label={`Size ${tag.size}`}
                      variant="filled"
                      value={tag.quantity}
                      onChange={(e) => handleEdit(e, index)}
                      type="number"
                      InputProps={{
                        classes: inputClasses,
                        disableUnderline: true,
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="delete"
                              size="small"
                              onClick={() => handleDelete(index)}
                            ><ClearRoundedIcon fontSize="small" /></IconButton>
                          </InputAdornment>
                        )
                      }}
                    />
                  </GridItem>
                ))
              }
            </GridContainer>
            :
            tags.map((tag, index) => <Chip style={{ margin: "3px" }} key={index} label={tag} onDelete={() => handleDelete(index)} />)
        }
      </div>
      <FormControl
        {...formControlProps}
      // className={formControlProps.className + " " + classes.formControl}
      >
        {labelText !== undefined ? (
          <InputLabel
            className={classes.labelRoot + labelClasses}
            htmlFor={id}
            {...labelProps}
          >
            {labelText}
          </InputLabel>
        ) : null}
        <Input
          classes={{
            root: marginTop,
            disabled: classes.disabled,
            underline: underlineClasses
          }}
          id={id}
          onKeyDown={_handleKeyDown}
          {...inputProps}
        />
        {error ? (
          <Clear className={classes.feedback + " " + classes.labelRootError} />
        ) : success ? (
          <Check className={classes.feedback + " " + classes.labelRootSuccess} />
        ) : null}
      </FormControl>
    </>
  );
}

CustomTagsInput.propTypes = {
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  error: PropTypes.bool,
  success: PropTypes.bool,
  tags: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.object)
  ]),
};
