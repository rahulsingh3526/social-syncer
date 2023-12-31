import { create } from "zustand";

interface AuthStore {
  isLoginButtonVisible: boolean;
  setLoginButtonVisibility: (visible: boolean) => void;
}

// Create the store
export const useAuthStore = create<AuthStore>((set) => ({
  isLoginButtonVisible: true,
  setLoginButtonVisibility: (visible) => set({ isLoginButtonVisible: visible }),
}));
