import { ReactNode, useState } from "react";
import { AuthContext } from "./CreateAuthContext";
import { User } from "screens/ProjectList/ProjectBar";
import { AuthForm } from "./CreateAuthContext";
import * as auth from "../../utils/services/loginService";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const login = (form: AuthForm) => auth.login(form).then(setUser);
  const register = (form: AuthForm) => auth.register(form).then(setUser);
  const logout = () => auth.logout().then(() => setUser(null));

  return (
    <AuthContext.Provider value={{ login, register, user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
