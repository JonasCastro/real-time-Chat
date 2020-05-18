export const USER_KEY = '@RealTimeChat-User';
interface User {
  id: number;
  name: string;
  avatar_url: string;
}

export const getUser = (): User => {
  const user = localStorage.getItem(USER_KEY);
  return user ? JSON.parse(user) : null;
};
export const isAuthenticated = () => localStorage.getItem(USER_KEY) !== null;
export const login = (user: User) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};
export const logout = () => {
  localStorage.removeItem(USER_KEY);
};
