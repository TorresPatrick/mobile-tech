import { create } from "zustand";

type MenuState = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export const useMenuHamburger = create<MenuState>();
