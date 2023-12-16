import { useRouter } from "next/router";
import { useContext, useState, useEffect, useRef, createContext } from "react";

interface AuthContextProps {
  currentUser: any;
  LogIn: (loginEmail: string, loginPassword: string) => void;
  LoginWithGoogle: () => void;
  SignOut: () => void;
  signUp: (email: string, password: string, confirmPassword: string) => void;
  userInfo: any;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export const useAuth = () => {
  return useContext(AuthContext);
};
