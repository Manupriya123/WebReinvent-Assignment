// src/redux/authSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';
import { ThunkAction, Action } from '@reduxjs/toolkit'; // Import ThunkAction and Action from '@reduxjs/toolkit'
import { Dispatch } from 'redux';

interface User {
  email: string;
  token: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ email: string; token: string }>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
    },
    clearUser: state => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
    },
    setLoading: state => {
      state.loading = true;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setUser, clearUser, setLoading, setError } = authSlice.actions;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;


export const login = (email: string, password: string) => async (dispatch: Dispatch) => {
  dispatch(setLoading());
  try {
    const response = await axios.post('https://reqres.in/api/login', { email, password });
    console.log(response);
    // Dispatch setUser action if needed
  } catch (error) {
    dispatch(setError((error as Error).message));
    throw new Error((error as Error).message);
  }
};


// export const login = (email: string, password: string): AppThunk<void> => async dispatch => {
//   dispatch(setLoading());
//   try {
//     const response = await axios.post('https://reqres.in/api/login', { email, password });
//     if (response.status === 200) {
//       dispatch(setUser({ email, token: response.data.token }));
//     } else {
//       dispatch(setError('Login failed'));
//     }
//   } catch (error) {
//     dispatch(setError((error as Error).message));
//   }
// };

export const register = (email: string, password: string) => async (dispatch: Dispatch) => {
  dispatch(setLoading());
  try {
    const response = await axios.post('https://reqres.in/api/register', { email, password });
    console.log(response);
    // Dispatch setUser action if needed
  } catch (error) {
    dispatch(setError((error as Error).message));
    throw new Error((error as Error).message);
  }
};


export const logout = (): AppThunk => async dispatch => {
  dispatch(clearUser());
};

export default authSlice.reducer;
