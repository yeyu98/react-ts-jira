import { createContext, useContext } from "react";
import { User } from "screens/ProjectList/ProjectBar";
export interface AuthForm {
  username: string;
  password: string;
}
interface IAuthContext {
  login: (form: AuthForm) => Promise<void>;
  register: (form: AuthForm) => Promise<void>;
  logout: () => Promise<void>;
  user: User | null;
}
const AuthContext = createContext<IAuthContext | undefined>(undefined);

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth必须在AuthProvider中使用");
  }
  return context;
};
export { useAuth, AuthContext };
