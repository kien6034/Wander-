/* eslint-disable arrow-body-style */
/* eslint-disable func-names */
import axios from 'axios';
import { deleteFromStorage, writeStorage } from '@rehooks/local-storage';
import { backEndLink, IBMUserAPI } from '../../config';
import {
  USER_REQUEST_FAILURE,
  USER_REQUEST_LOGIN,
  USER_REQUEST_SUCCESS,
  USER_REQUEST_UPDATE,
} from '../types/userType';

const UserRequestLogin = (isOnLoginTab) => ({
  type: USER_REQUEST_LOGIN,
  payload: isOnLoginTab,
});

const UserRequestUpdate = (updateSuccessfully) => ({
  type: USER_REQUEST_UPDATE,
  payload: updateSuccessfully,
});

const UserRequestSuccess = (data) => ({
  type: USER_REQUEST_SUCCESS,
  payload: data,
});

const UserRequestFailure = (error) => ({
  type: USER_REQUEST_FAILURE,
  payload: error,
});

export const SignIn = (loginData) =>
{
  return async function (dispatch)
  {
    const {
      email,
      password,
    } = loginData;
    dispatch(UserRequestLogin(true));
    try
    {
      const res = await axios.post(`${IBMUserAPI}/login`, {
        email,
        password,
      });
      if (res.data.success)
      {
        // Exclude token from response data using ES9 Object Rest Operator
        const {
          _id,
          ...dataWithout_id
        } = res.data;

        const user = {
          ...dataWithout_id,
          id: _id,
          name: {
            firstName: dataWithout_id.firstname,
            lastName: dataWithout_id. lastname,
          }
        };

        // axios.defaults.headers.common.Authorization = `Bearer ${_id}`;

        const data = {
          userData: { ...user },
          isLogin: true,
        };

        dispatch(UserRequestSuccess(data));

        writeStorage('token', res.data._id);
        writeStorage('user_rev'. res.data._rev)
      }
      else
      {
        //   throw new Error("Cannot Sign In", res.data.error);
        dispatch(UserRequestFailure(res.data.error));
      }
    }
    catch (error)
    {
      dispatch(UserRequestFailure(error));
    }
  };
};

export const Register = (registerData) =>
{
  return async function (dispatch)
  {
    const {
      name,
      email,
      password,
    } = registerData;
    dispatch(UserRequestLogin(false));
    try
    {
      const res = await axios.put(`${IBMUserAPI}/entries`, {
        firstname: name.firstName,
        lastname: name.lastName,
        email,
        password,
        role: "user"
      });
      if (res.data.success)
      {
        dispatch(UserRequestSuccess(res.data));
      }
      else
      {
        // throw new Error("Cannot Sign up", res);
        dispatch(UserRequestFailure(res.data.error));
      }
    }
    catch (error)
    {
      dispatch(UserRequestFailure(error));
    }
  };
};

export const UpdateData = (passedData) =>
{
  return async function (dispatch)
  {
    const {
      name,
      email,
      id,
    } = passedData;

    dispatch(UserRequestUpdate(false));

    try
    {
      const res = await axios.patch(`${IBMUserAPI}/entries`,
        {
          doc: {
            _id: id,
            _rev: window.localStorage.getItem("user_rev"),
            firstname: name.firstName,
            lastname: name.lastName,
            email,
          }
        });

      if (res.status === 200)
      {
        const data = {
          userData: { ...passedData },
          updateSuccessfully: true,
        };

        dispatch(UserRequestSuccess(data));
      }
      else
      {
        dispatch(UserRequestFailure(res.data.error));
      }
    }
    catch (error)
    {
      dispatch(UserRequestFailure(error));
    }
  };
};

export const ResetUpdateStatus = () =>
{
  return async (dispatch) =>
  {
    dispatch(UserRequestSuccess({ updateSuccessfully: false }));
  };
};

export const UserLogOut = () =>
{
  return async (dispatch) =>
  {
    const data = {
      userData: {
        name: {
          firstName: '',
          lastName: '',
        },
        email: '',
        id: '',
      },
      isLogin: false,
    };

    dispatch(UserRequestSuccess(data));

    deleteFromStorage('token');
    deleteFromStorage('user_rev');
  };
};

export const GetIdentity = (token) =>
{
  return async function (dispatch)
  {
    dispatch(UserRequestUpdate());
    try
    {
      const res = await axios.post(`${IBMUserAPI}/auth`, {
        _id: token
      });
      if (res.data.success)
      {
        dispatch(UserRequestSuccess({
          userData: { 
            ...res.data,
            id: res.data._id,
            name: {
              firstName: res.data.firstname,
              lastName: res.data.lastname
            }
          },
          isLogin: true,
        }));
        writeStorage('user_rev', res.data._rev)
        // axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      }
      else
      {
        dispatch(UserRequestFailure(res.data.error));
        dispatch(UserLogOut());
      }
    }
    catch (error)
    {
      dispatch(UserRequestFailure(error));
    }
  };
};
