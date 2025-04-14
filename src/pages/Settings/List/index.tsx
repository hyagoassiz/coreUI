import { JSX } from "react";
import { SettingsProvider } from "./context";
import { Settings } from "./Settings";

export function SettingsRoute(): JSX.Element {
  return (
    <SettingsProvider>
      <Settings />
    </SettingsProvider>
  );
}
