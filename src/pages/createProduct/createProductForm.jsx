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
import { CircularProgress } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import createProductStyle from "./createProduct.style";
import CustomTypography from "../../components/Typography/typography";
import ImageForm from "./imageForm";
import CustomTagsInput from "../../components/CustomTagsInput/CustomTagsInput";
import CustomButton from "../../components/Buttons/button";
import { isLengthEqualZero } from '../../utils/supportFunction';
import { useSelector } from 'react-redux';
import { createProduct } from "../../actions/productAction";

const initValue = {
  id: 0,
  productName: "",
  quantity: "",
  productDescription: "",
  condition: "new",
  manufaturedDate: new Date(),
  expiredDate: new Date(),
  city: "",
  district: "",
  rating: 5,
  tags: [],
  approveTerm: false,
};

export default function createProductForm() {
  const classes = createProductStyle();
  const [values, setValues] = useState(initValue);
  const [base64EncodedImage, setBase64EncodedImage] = useState(0)
  const [error, seterror] = useState({ status: false, done: false })
  const [loading, setloading] = useState(false)

  const userState = useSelector((state) => state.userState.userData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });
  const handleClickTerm = () => {
    setValues({
      ...values,
      approveTerm: !values.approveTerm,
    });
  };

  const getImage = (base64EncodedImage) => {
    setBase64EncodedImage(base64EncodedImage)
  }

  const handleDeleteTag = (i) => {
    setValues({
      ...values,
      tags: values.tags.filter((tag, index) => index !== i)
    })
  }

  const handleAddTag = (tag) => {
    setValues({
      ...values,
      tags: [...values.tags, tag]
    })
  }

  const handleSubmit = async () => {
    const productData = {
      productName: values.productName,
      productCategory: values.tags[0],
      description: values.productDescription,
      condition: values.condition,
      donator: {
        name: userState.name.firstName,
        _id: userState._id
      },
      detail: [
        {
          name: "manufactured date",
          value: values.manufaturedDate
        },
        {
          name: "expired date",
          value: values.expiredDate
        }
      ],
      quantity: {
        init: values.quantity,
        remain: values.quantity,
      },
      location: {
        city: values.city,
        district: values.district
      },
      rating: values.rating,
      tags: values.tags,
      base64EncodedImage
    }
    console.log(productData)
    setloading(true)
    const res = await createProduct(productData)
    if (res.success) {
      seterror({
        ...error,
        done: true
      })
      setValues(initValue);
    } else {
      seterror({
        ...error,
        status: true,
        done: true
      })
    }
    setloading(false)
  }

  console.log(loading)
  return (
    <form>
      {
        (error.done && !error.status) && (
          <Alert
            variant="filled"
            severity="success"
            className={classes.successStyle}
          >
            Create product successfully
          </Alert>
        )
      }
      {
        (error.done && error.status) && (
          <Alert
            variant="filled"
            severity="error"
            className={classes.alertStyle}
          >
            Can`t create product
          </Alert>

        )
      }

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
            variant='outlined'
            label='City'
            name='city'
            value={values.city}
            onChange={handleInputChange}
          />
          <TextField
            variant='outlined'
            label='District'
            name='district'
            value={values.district}
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
          <br />
          <ImageForm
            getImage={getImage}
          />
        </Grid>
        <Grid item xs={12} sm={6} style={{ paddingLeft: "20px" }} >
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
          <CustomTagsInput
            labelHeading="Tags"
            tags={values.tags}
            formControlProps={{}}
            handleDelete={handleDeleteTag}
            handleAddition={handleAddTag}
            inputProps={{
              placeholder: "press enter to add tag"
            }}
          />
          <br />
          <CustomTypography
            style={{
              display: 'inline',
              letterSpacing: '0px',
              fontSize: 15,
              color: "rgba(0, 0, 0, 0.54)"
            }}
            txtType="text--medium"
          >
            {"*Some tags: "}
            &nbsp;
          </CustomTypography>
          <CustomTypography
            style={{
              display: 'inline',
              fontSize: 15,
              color: "rgba(0, 0, 0, 0.54)"
            }}
            txtType="text--light"
          >
            {"vegetables, meat, diary, fresh, raw"}
          </CustomTypography>
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
          <CustomButton
            disabled={isLengthEqualZero(values) || !values.approveTerm || isLengthEqualZero(userState) || loading}
            style={{
              width: '100%',
              marginTop: "5px",
              height: 51,
            }}
            type="button"
            onClick={handleSubmit}
          >
            {(!loading) ? (
              'Create Product'
            ) : (
              <CircularProgress color="secondary" size="20px" />
            )}
          </CustomButton>
        </Grid>
      </Grid>
    </form>
  );
}
