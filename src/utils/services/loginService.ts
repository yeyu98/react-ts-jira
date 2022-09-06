import request from "../axios";
import { User } from "screens/ProjectList/ProjectBar";

const localStorageKey = "__auth_provider_token__";
export const getToken = () => localStorage.getItem(localStorageKey);

// 这里的User是进阶版的user
export const setToken = ({ user }: { user: User }) => {
  localStorage.setItem(localStorageKey, user.token || "");
  return user;
};

// 这里的login和register请求完之后都会返回token此时需要将token给存到localStorage中
export const login = (data: { username: string; password: string }) => {
  return request("/login", data).then((res) => setToken(res));
};

export const register = (data: { username: string; password: string }) => {
  return request("/register", data).then((res) => setToken(res));
};

// 请求个人信息
export const boostrapUser = () => {
  return request("/me").then((res) => res.user);
};

export const logout = async () => localStorage.removeItem(localStorageKey);
