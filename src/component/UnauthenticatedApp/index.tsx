import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const UnauthenticatedApp = () => {
  const [isRegistered, setIsRegistered] = useState(true);

  const handleClick = () => setIsRegistered(!isRegistered);

  return (
    <>
      {isRegistered ? <Login /> : <Register />}
      <button onClick={handleClick}>
        切换到{isRegistered ? "注册" : "登录"}
      </button>
    </>
  );
};

export default UnauthenticatedApp;
