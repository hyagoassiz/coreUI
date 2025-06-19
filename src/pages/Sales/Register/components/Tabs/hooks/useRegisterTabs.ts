import { useState } from "react";
import { useFormContext, UseFormReturn } from "react-hook-form";
import { ISaleForm } from "../../../interfaces";

interface IUseRegisterTabsReturn {
  saleForm: UseFormReturn<ISaleForm>;
  tab: string;
  handleChangeTab(_event: React.SyntheticEvent, newValue: string): void;
}

export const useRegisterTabs = (): IUseRegisterTabsReturn => {
  const saleForm = useFormContext<ISaleForm>();

  const [tab, setTab] = useState<string>("1");

  function handleChangeTab(
    _event: React.SyntheticEvent,
    newValue: string
  ): void {
    setTab(newValue);
  }

  return {
    saleForm,
    tab,
    handleChangeTab,
  };
};
