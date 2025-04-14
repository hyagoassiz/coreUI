import { JSX, ReactNode, useState } from "react";
import { SettingsContext } from "../hooks/useSettingsContext";

interface ISettingsProvider {
  children: ReactNode;
}

export function SettingsProvider({ children }: ISettingsProvider): JSX.Element {
  const [value, setValue] = useState<string>("1");

  return (
    <SettingsContext.Provider
      value={{
        value,
        setValue,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
