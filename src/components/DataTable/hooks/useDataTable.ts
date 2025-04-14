import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";

interface IUseDataTableProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
}

interface IUseDataTable {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  paginatedData: any[];
  totalPages: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

const useDataTable = ({ data }: IUseDataTableProps): IUseDataTable => {
  const [page, setPage] = useState<number>(1);

  const rowsPerPage: number = 10;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const paginatedData: any[] = useMemo(() => {
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return data.slice(startIndex, endIndex);
  }, [data, page]);

  const totalPages: number = Math.ceil(data.length / rowsPerPage);

  useEffect(() => {
    setPage(1);
  }, [data.length]);

  return { paginatedData, totalPages, page, setPage };
};

export default useDataTable;
