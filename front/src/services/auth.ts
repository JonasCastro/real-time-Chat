import { IUser } from '../interface/user';

export const USER_KEY = '@RealTimeChat-User';

export const getUser = (): IUser => {
  const user = localStorage.getItem(USER_KEY);
  return user ? JSON.parse(user) : null;
};
export const isAuthenticated = () => localStorage.getItem(USER_KEY) !== null;
export const login = (user: IUser) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};
export const logout = () => {
  localStorage.removeItem(USER_KEY);
};
