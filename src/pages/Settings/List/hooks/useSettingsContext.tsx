import { createContext, useContext } from "react";
import { ISettingsContext } from "../interfaces";

export const SettingsContext = createContext<ISettingsContext | undefined>(
  undefined
);

export const useSettingsContext = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error(
      "useSettingsContext deve ser usado dentro de um SettingsProvider"
    );
  }
  return context;
};
