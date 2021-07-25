import React, { useState, useEffect } from "react";
import {
  FormControlLabel,
  Grid,
  TextField,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Checkbox
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import createProductStyle from "./createProduct.style";
import CustomTypography from "../../components/Typography/typography";
import ImageForm from "./imageForm";

const initValue = {
  id: 0,
  productName: "",
  productQuantity: "",
  productDescription: "",
  condition: "new",
  manufaturedDate: new Date(),
  expiredDate: new Date(),
  approveTerm: false,
};

export default function createProductForm() {
  const classes = createProductStyle();
  const [values, setValues] = useState(initValue);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(e)
    setValues({ ...values, [name]: value });
  };

  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });
  const handleClickTerm = () =>
  {
    setValues({
      ...values,
      approveTerm: !values.approveTerm,
    });
  };

  return (
    <form>
      <Grid container>
        <Grid item sm={6} xs={12} className={classes.formRoot}>
          <TextField
            variant='outlined'
            label='Product Name'
            name='productName'
            value={values.productName}
            onChange={handleInputChange}
          />
          <TextField
            variant='outlined'
            label='Quantity'
            name='quantity'
            value={values.quantity}
            type='number'
            onChange={handleInputChange}
          />
          <TextField
            multiline
            minRows={3}
            maxRows={5}
            variant='outlined'
            label='Description'
            name='productDescription'
            value={values.productDescription}
            onChange={handleInputChange}
          />
          <br/>
        <ImageForm />
        </Grid>
        <Grid item xs={12} sm={6} style={{ paddingLeft: "20px" }}>
          <FormControl>
            <FormLabel>Condition</FormLabel>
            <RadioGroup
              row
              name='condition'
              value={values.condition}
              onChange={handleInputChange}
            >
              <FormControlLabel value='new' control={<Radio />} label='New' />
              <FormControlLabel value='used' control={<Radio />} label='Used' />
            </RadioGroup>
          </FormControl>
          <hr style={{ margin: "0 0 20px 0" }} />
          <FormControl>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant='inline'
                inputVariant='outlined'
                label={"Manufacture Date"}
                format='dd/MM/yyyy'
                name='manufaturedDate'
                value={values.manufaturedDate}
                onChange={(date) =>
                  handleInputChange(
                    convertToDefEventPara("manufaturedDate", date)
                  )
                }
              />
            </MuiPickersUtilsProvider>
          </FormControl>
          <hr style={{ margin: "20px 0" }} />
          <FormControl>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant='inline'
                inputVariant='outlined'
                label={"Expired Date"}
                format='dd/MM/yyyy'
                name='expiredDate'
                value={values.expiredDate}
                onChange={(date) =>
                  handleInputChange(convertToDefEventPara("expiredDate", date))
                }
              />
            </MuiPickersUtilsProvider>
          </FormControl>
          <hr style={{ margin: "20px 0" }} />
          <FormControlLabel
              control={
                <Checkbox
                  checked={values.approveTerm}
                  onChange={handleClickTerm}
                  name='approveTerm'
                />
              }
              style={{ cursor: "default" }}
              label={
                <CustomTypography
                  fontSize='12px'
                  color='rgba(0, 0, 0, 0.54)'
                  txtType='text--light'
                  txtComponent='p'
                >
                  {"By click create sharing, you agree to the "}
                  <a
                    style={{ color: "rgba(0, 0, 0)" }}
                    href='https://google.com'
                  >
                    Terms of Service
                  </a>
                  {" and "}
                  <a
                    style={{ color: "rgba(0, 0, 0)" }}
                    href='https://google.com'
                  >
                    Privacy Policy
                  </a>
                </CustomTypography>
              }
            />
        </Grid>
      </Grid>
    </form>
  );
}
