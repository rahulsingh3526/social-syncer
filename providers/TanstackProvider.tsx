"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import { AuthContext } from "../context/authContext";
import React, { createContext } from "react";
import { useContext, useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import {
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  UserCredential,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { addUserData, getUserData } from "../firebase/methods";
import { publicPaths } from "../constants/publicPaths";
import AppRouter from "next/app";

const googleProvider = new GoogleAuthProvider();

const TanstackProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  const [currentUser, setCurrentUser] = useState<User | null>();
  const userInfo = useRef();
  const router = useRouter();
  const pathname = usePathname();
  const user = auth.currentUser;

  const [authorized, setAuthorized] = useState(false);

  const signUp = async (
    email: string,
    password: string
  ): Promise<UserCredential | void> => {
    return await createUserWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        console.log(res);
        return res;
      })
      .catch((err) => alert(err.message));
  };

  const LogIn = async (
    loginEmail: string,
    loginPassword: string
  ): Promise<UserCredential | void> => {
    return await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then(async (res) => {
        console.log(res);
        return res;
      })
      .catch((err) => alert(err.message));
  };

  const LoginWithGoogle = async (): Promise<UserCredential | void> => {
    return await signInWithPopup(auth, googleProvider)
      .then(async (res) => {
        console.log(res);
        router.push("/inputform");
        return res;
      })
      .catch((err) => alert(err.message));
  };

  const SignOut = () => {
    signOut(auth)
      .then(() => router.push("/"))
      .catch((err) => alert(err.message));
  };

  useEffect(() => {
    const unscubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
    });
    return unscubscribe;
  }, []);

  useEffect(() => {
    const user = auth.currentUser;
    setCurrentUser(user);
  }, []);

  useEffect(() => {
    const authCheck = () => {
      if (!user && pathname && !publicPaths.includes(pathname)) {
        setAuthorized(false);
        void router.push("/signIn");
      } else {
        setAuthorized(true);
      }
    };

    authCheck();

    const preventAccess = () => setAuthorized(false);

    // router.Router.events.on("routeChangeStart", preventAccess);
    // router.events.on("routeChangeComplete", authCheck);

    // return () => {
    //   router.events.off("routeChangeStart", preventAccess);
    //   router.events.off("routeChangeComplete", authCheck);
    // };
  }, [router, pathname, currentUser, user]);

  const value = {
    currentUser,
    LogIn,
    LoginWithGoogle,
    SignOut,
    signUp,
    userInfo,
  };
  return (
    <AuthContext.Provider value={value}>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AuthContext.Provider>
  );
};

export default TanstackProvider;
