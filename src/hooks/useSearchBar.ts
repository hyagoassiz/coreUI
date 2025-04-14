import { ChangeEvent, useState, useRef } from "react";
import { ISeachBar } from "../interfaces/ISearchBar";

interface IUseSearchBarProps {
  placeHolder: string;
  debounceTime?: number;
}

interface IUseSearchBar {
  searchBar: ISeachBar;
  textoBusca: string;
}

const useSearchBar = ({
  placeHolder,
  debounceTime = 500,
}: IUseSearchBarProps): IUseSearchBar => {
  const [value, setValue] = useState<string>("");
  const [textoBusca, setTextoBusca] = useState<string>("");
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);

    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(() => {
      setTextoBusca(event.target.value);
    }, debounceTime);
  };

  return {
    searchBar: { onChange, placeholder: placeHolder, value },
    textoBusca,
  };
};

export default useSearchBar;
