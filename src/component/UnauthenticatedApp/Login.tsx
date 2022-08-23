import { FormEvent } from "react";
import { useAuth } from "context/AuthContext/CreateAuthContext";

function Login(props: any) {
  const { login, user } = useAuth();

  const handleClick = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const username = (ev.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (ev.currentTarget.elements[1] as HTMLInputElement).value;
    login({ username, password });
  };

  return (
    <div>
      <form onSubmit={handleClick}>
        {`当前用户是${user?.name}`}
        <div>
          <label htmlFor="username">用户名：</label>
          <input type="text" id="username" />
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
