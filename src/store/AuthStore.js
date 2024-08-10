import { create } from "zustand";

const useAuthStore = create((set) => ({
  isAuth: false,
  userEmail: "",
  userName: "",

  setUserEmail: (value) => {
    set((state) => {
      return {
        ...state,
        userEmail: value,
      };
    });
  },

  setUserName: (value) => {
    set((state) => {
      return {
        ...state,
        userName: value,
      };
    });
  },


  addAuth: () => {
    set((state) => {
      return { ...state, isAuth: true };
    });
  },

  removeAuth: () => {
    set((state) => {
      return { ...state, isAuth: false };
    });
  },
}));

export default useAuthStore;
