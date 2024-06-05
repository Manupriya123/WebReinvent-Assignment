import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppThunk } from '../store';
import { toast } from 'react-toastify';

const API_URL = 'https://reqres.in/api';

interface AuthState {
  token: string | null;
  error: string | null;
  loading: boolean;
}

const initialState: AuthState = {
  token: null,
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading(state) {
      state.loading = true;
    },
    setUser(state, action: PayloadAction<{ token: string }>) {
      state.token = action.payload.token;
      state.loading = false;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
    signOut(state) {
      state.token = null;
      state.error = null;
    },
  },
});

export const { setLoading, setUser, setError, signOut } = authSlice.actions;

export const loginUser = (email: string, password: string): AppThunk => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    dispatch(setUser({ token: response.data.token }));
  } catch (error) {
    const errorMessage = (error as Error).message;
    dispatch(setError(errorMessage));
    toast.error(errorMessage);
  }
};

export const registerUser = (email: string, password: string): AppThunk => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await axios.post(`${API_URL}/register`, { email, password });
    dispatch(setUser({ token: response.data.token }));
  } catch (error) {
    const errorMessage = (error as Error).message;
    dispatch(setError(errorMessage));
    toast.error(errorMessage);
  }
};

export default authSlice.reducer;
