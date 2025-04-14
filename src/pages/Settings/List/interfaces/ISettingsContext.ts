import { Dispatch, SetStateAction } from "react";

export interface ISettingsContext {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}
