import ProjectMain from "screens/ProjectList/Index";
import { useAuth } from "context/AuthContext/CreateAuthContext";
const AuthenticatedApp = () => {
  const { logout } = useAuth();

  const handleLogOut = () => {
    logout();
  };

  return (
    <>
      <ProjectMain />
      <button onClick={handleLogOut}>登出</button>
    </>
  );
};

export default AuthenticatedApp;
