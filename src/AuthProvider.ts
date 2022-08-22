import { User } from "screens/ProjectList/ProjectBar";

const localStorageKey = "__auth_provider_token__";
const apiUrl = process.env.REACT_APP_API_URL;

export const getToken = () => localStorage.getItem(localStorageKey);

export const handleUserResponse = ({ user }: { user: User }) => {
  localStorage.setItem(localStorageKey, user.token || "");
  return user;
};

export const login = (data: { username: string; password: string }) => {
  // 这段我是抄的，有些不理解什么意思   fetch的返回值是promise这里就相当于返回了个promise
  return fetch(`${apiUrl}/login`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => handleUserResponse(res));
};

export const register = (data: { username: string; password: string }) => {
  return fetch(`${apiUrl}/register`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => handleUserResponse(res));
};

export const logout = () => localStorage.removeItem(localStorageKey);
