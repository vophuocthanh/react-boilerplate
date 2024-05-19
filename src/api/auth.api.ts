import { Account } from '@/redux/authSaga';
import axiosClient, { LoginResponse } from './axiosClient';

export const authApi = {
  login(params: Account): Promise<LoginResponse> {
    const url = '/auth/login';
    return axiosClient.post(url, params);
  },
  register(params: Account): Promise<LoginResponse> {
    const url = '/auth/register';
    return axiosClient.post(url, params);
  },
};
