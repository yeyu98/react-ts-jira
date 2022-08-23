import axios from "axios";

let axionInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
  },
});
const localStorageKey = "__auth_provider_token__";
// 登出
const logout = () => {
  localStorage.removeItem(localStorageKey);
};

axionInstance.interceptors.request.use(
  (config) => {
    if (config && config.headers) {
      const token = localStorage.getItem(localStorageKey) || "";
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axionInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response = {} } = error;
    const { status } = response;
    // 处理网络错误
    switch (status) {
      case 400:
      case 401:
        logout();
        window.location.reload();
        break;
      default:
        break;
    }
    return Promise.reject(error);
  }
);

let request = (url: string, data: any = "") => {
  if (data) {
    return axionInstance.post(url, data).then((response) => {
      return response.data;
    });
  } else {
    return axionInstance.get(url).then((response) => {
      return response.data;
    });
  }
};

export default request;
