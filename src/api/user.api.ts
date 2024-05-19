import axiosClient from '@/api/axiosClient';

export interface IUser {
  id?: number;
  name: string;
  email: string;
  role: {
    id?: number;
    name: string;
  };
  created_at?: string;
  update_at?: string;
}

export const usersAPI = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getUsers(): Promise<any> {
    const url = `/users`;
    return axiosClient.get(url);
  },
  getUserDetails(id: number): Promise<IUser> {
    const url = `/users/${id}`;
    return axiosClient.get(url);
  },
  putUser(id: number, user: IUser): Promise<IUser> {
    const url = `/users/${id}`;
    return axiosClient.put(url, user);
  },
  deleteUser(id: number): Promise<IUser> {
    const url = `/users/${id}`;
    return axiosClient.delete(url);
  },
};
