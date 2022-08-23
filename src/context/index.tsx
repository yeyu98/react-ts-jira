import { ReactNode } from "react";
import AuthProvider from "./AuthContext/AuthContext";

const AppProviders = ({ children }: { children: ReactNode }) => (
  <>
    <AuthProvider>{children}</AuthProvider>
  </>
);
export default AppProviders;
