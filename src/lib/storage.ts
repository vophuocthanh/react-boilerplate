export const getToken = () => {
  return localStorage.getItem('access_token');
};
export const removeToken = () => {
  return localStorage.removeItem('token');
};

export const setToken = (token: string) => {
  return localStorage.setItem('token', token);
};
