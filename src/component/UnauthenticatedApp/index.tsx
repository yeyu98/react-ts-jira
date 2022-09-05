import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import { Button, Card } from "antd";

const UnauthenticatedApp = () => {
  const [isRegistered, setIsRegistered] = useState(true);

  const handleClick = () => setIsRegistered(!isRegistered);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}
    >
      <Card>
        <h3>欢迎使用jira</h3>
        {isRegistered ? <Login /> : <Register />}
        <Button onClick={handleClick}>
          切换到{isRegistered ? "注册" : "登录"}
        </Button>
      </Card>
    </div>
  );
};

export default UnauthenticatedApp;
