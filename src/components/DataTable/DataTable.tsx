import {
  Box,
  Checkbox,
  Pagination,
  Paper,
  TableBody,
  TableContainer,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import Table from "@mui/material/Table";
import {
  Icon,
  StyledBox,
  StyledTableCellBody,
  StyledTableCellHead,
  StyledTableHead,
} from "./styles";
import useDataTable from "./hooks/useDataTable";
import { useState } from "react";
import { IDataTableColumns } from "../../interfaces";

type SelectionMode = "single" | "multiple";

interface IDataTable {
  columns: IDataTableColumns[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  textForEmptyData: string;
  selectionMode?: SelectionMode;
  rowKey?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectedItems?: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSelectionChange?: (selected: any[]) => void;
}

export const DataTable: React.FC<IDataTable> = ({
  columns,
  data,
  textForEmptyData,
  selectionMode,
  rowKey = "id",
  selectedItems,
  onSelectionChange,
}) => {
  const { paginatedData, totalPages, page, setPage } = useDataTable({ data });
  const theme = useTheme();

  const isSelectable =
    selectionMode === "single" || selectionMode === "multiple";
  const isSingleSelect = selectionMode === "single";
  const isMultipleSelect = selectionMode === "multiple";

  const isControlled =
    selectedItems !== undefined && onSelectionChange !== undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [internalSelected, setInternalSelected] = useState<any[]>([]);
  const selected = isControlled ? selectedItems! : internalSelected;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isRowSelected = (row: any) =>
    selected.some((item) => item[rowKey] === row[rowKey]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSelectionChange = (newSelected: any[]) => {
    if (isControlled) {
      onSelectionChange?.(newSelected);
    } else {
      setInternalSelected(newSelected);
    }
  };

  const toggleSelectAll = () => {
    if (!isMultipleSelect) return;
    const allSelected = paginatedData.every((row) => isRowSelected(row));
    const newSelected = allSelected
      ? selected.filter(
          (item) => !paginatedData.some((row) => row[rowKey] === item[rowKey])
        )
      : [...selected, ...paginatedData.filter((row) => !isRowSelected(row))];

    handleSelectionChange(newSelected);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toggleRowSelection = (row: any) => {
    if (isSingleSelect) {
      handleSelectionChange([row]);
    } else {
      const alreadySelected = isRowSelected(row);
      const newSelected = alreadySelected
        ? selected.filter((item) => item[rowKey] !== row[rowKey])
        : [...selected, row];

      handleSelectionChange(newSelected);
    }
  };

  const isAllSelected =
    paginatedData.length > 0 &&
    paginatedData.every((row) => isRowSelected(row));

  return (
    <>
      <Paper
        elevation={3}
        sx={{
          borderRadius: 2,
          overflow: "hidden",
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <TableContainer sx={{ maxHeight: 400 }}>
          <Table size="small" stickyHeader aria-label="sticky table">
            <StyledTableHead>
              <TableRow>
                {isSelectable && (
                  <StyledTableCellHead padding="checkbox">
                    <Checkbox
                      checked={isAllSelected}
                      onChange={toggleSelectAll}
                      inputProps={{ "aria-label": "select all rows" }}
                      disabled={isSingleSelect}
                    />
                  </StyledTableCellHead>
                )}
                {columns.map((column) => (
                  <StyledTableCellHead size="small" key={column.key}>
                    {column.label}
                  </StyledTableCellHead>
                ))}
              </TableRow>
            </StyledTableHead>

            {data.length ? (
              <TableBody>
                {paginatedData.map((row, index) => (
                  <TableRow
                    key={row[rowKey] ?? index}
                    sx={{
                      backgroundColor: theme.palette.primary.contrastText,
                      "&:hover": {
                        backgroundColor: theme.palette.action.hover,
                      },
                    }}
                  >
                    {isSelectable && (
                      <StyledTableCellBody padding="checkbox">
                        <Checkbox
                          checked={isRowSelected(row)}
                          onChange={() => toggleRowSelection(row)}
                        />
                      </StyledTableCellBody>
                    )}
                    {columns.map((column) => (
                      <StyledTableCellBody
                        size="small"
                        key={column.key}
                        sx={{ ...column?.style }}
                      >
                        {row[column.key]}
                      </StyledTableCellBody>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            ) : (
              <TableBody>
                <TableRow>
                  <StyledTableCellBody
                    colSpan={columns.length + (isSelectable ? 1 : 0)}
                  >
                    <StyledBox>
                      <Icon color="warning" />
                      <Typography variant="body2">
                        {textForEmptyData}
                      </Typography>
                    </StyledBox>
                  </StyledTableCellBody>
                </TableRow>
              </TableBody>
            )}
          </Table>
        </TableContainer>

        {paginatedData.length > 0 && (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            px={2}
            py={1}
            sx={{
              borderTop: "1px solid",
              borderColor: "divider",
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Total de resultados: {data.length}
            </Typography>

            <Pagination
              color="primary"
              count={totalPages}
              page={page}
              onChange={(_, value) => setPage(value)}
              shape="rounded"
            />
          </Box>
        )}
      </Paper>
    </>
  );
};
