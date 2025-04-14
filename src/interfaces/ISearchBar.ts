import { ChangeEventHandler } from "react";

export interface ISeachBar {
  placeholder: string;
  value: string | number;
  onChange:
    | ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
    | undefined;
}
