import { useState } from "react";
import ProjectMain from "screens/ProjectList/Index";
import { useAuth } from "context/AuthContext/CreateAuthContext";
import ImgList from "../../screens/ProjectList/ImgList";
import { Button } from "antd";

const AuthenticatedApp = () => {
  const [isShow, setIsShow] = useState(false);
  const { logout } = useAuth();

  const handleLogOut = () => {
    logout();
  };

  const handleClick = () => {
    setIsShow(!isShow);
  };

  return (
    <>
      <ProjectMain />
      <Button onClick={handleLogOut} type="primary" danger>
        登出
      </Button>
      <Button onClick={handleClick}>切换</Button>
      {isShow ? <ImgList /> : null}
    </>
  );
};

export default AuthenticatedApp;
