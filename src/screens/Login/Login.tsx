import React, { FormEvent } from "react";

const apiUrl = process.env.REACT_APP_API_URL;

function Login(props: any) {
  interface loginParam {
    userName: string;
    password: string;
  }
  const login = (param: loginParam) => {
    fetch(`${apiUrl}/login`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(param),
    }).then((res) => {
      console.log(res);
    });
  };

  const handleClick = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    console.log(ev.currentTarget.elements);
    const userName = (ev.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (ev.currentTarget.elements[1] as HTMLInputElement).value;
    login({ userName, password });
  };

  return (
    <div>
      <form onSubmit={handleClick}>
        <div>
          <label htmlFor="userName">用户名：</label>
          <input type="text" id="userName" />
        </div>
        <div>
          <label htmlFor="password">密码：</label>
          <input type="password" id="password" />
        </div>
        <button>登录</button>
      </form>
    </div>
  );
}

export default Login;
