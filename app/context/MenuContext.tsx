"use client";
import { createContext, useState, ReactNode, useContext } from "react";
import { Dish } from "../admin/page";

interface MenuContextProps {
  dishes: Dish[];
  setDishes: (dishes: Dish[]) => void;
}

const MenuContext = createContext<MenuContextProps | undefined>(undefined);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [dishes, setDishes] = useState<Dish[]>([]);
  return <MenuContext.Provider value={{ dishes, setDishes }}>{children}</MenuContext.Provider>;
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) throw new Error("useMenu must be used within MenuProvider");
  return context;
};
