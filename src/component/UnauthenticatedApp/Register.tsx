import React, { FormEvent } from "react";
import { useAuth } from "context/AuthContext/CreateAuthContext";

function Register(props: any) {
  const { register } = useAuth();

  const handleClick = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    console.log(ev.currentTarget.elements);
    const username = (ev.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (ev.currentTarget.elements[1] as HTMLInputElement).value;
    register({ username, password });
  };

  return (
    <div>
      <form onSubmit={handleClick}>
        <div>
          <label htmlFor="username">用户名：</label>
          <input type="text" id="username" />
        </div>
        <div>
          <label htmlFor="password">密码：</label>
          <input type="password" id="password" />
        </div>
        <button>注册</button>
      </form>
    </div>
  );
}

export default Register;
