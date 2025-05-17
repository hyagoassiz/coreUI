import {
  Box,
  Checkbox,
  Pagination,
  Paper,
  Stack,
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
import { ReactNode, useState } from "react";
import { IDataTableColumns } from "../../interfaces";

type SelectionMode = "single" | "multiple";

interface IDataTable {
  columns: IDataTableColumns[];
  chips?: ReactNode | null;
  data: any[];
  textForEmptyData: string;
  selectionMode?: SelectionMode;
  rowKey?: string;
  selectedItems?: any[];
  onSelectionChange?: (selected: any[]) => void;
  disablePagination?: boolean;
  disableShadow?: boolean;
  tableHeight?: number | string; // nova prop
}

export const DataTable: React.FC<IDataTable> = ({
  columns,
  chips,
  data,
  textForEmptyData,
  selectionMode,
  rowKey = "id",
  selectedItems,
  onSelectionChange,
  disablePagination = false,
  disableShadow = false,
  tableHeight,
}) => {
  const { paginatedData, totalPages, page, setPage } = useDataTable({ data });
  const theme = useTheme();

  const displayData = disablePagination ? data : paginatedData;

  const isSelectable =
    selectionMode === "single" || selectionMode === "multiple";
  const isSingleSelect = selectionMode === "single";
  const isMultipleSelect = selectionMode === "multiple";

  const isControlled =
    selectedItems !== undefined && onSelectionChange !== undefined;
  const [internalSelected, setInternalSelected] = useState<any[]>([]);
  const selected = isControlled ? selectedItems! : internalSelected;

  const isRowSelected = (row: any) =>
    selected.some((item) => item[rowKey] === row[rowKey]);

  const handleSelectionChange = (newSelected: any[]) => {
    if (isControlled) {
      onSelectionChange?.(newSelected);
    } else {
      setInternalSelected(newSelected);
    }
  };

  const toggleSelectAll = () => {
    if (!isMultipleSelect) return;
    const allSelected = displayData.every((row) => isRowSelected(row));
    const newSelected = allSelected
      ? selected.filter(
          (item) => !displayData.some((row) => row[rowKey] === item[rowKey])
        )
      : [...selected, ...displayData.filter((row) => !isRowSelected(row))];

    handleSelectionChange(newSelected);
  };

  const toggleRowSelection = (row: any) => {
    if (isSingleSelect) {
      const alreadySelected = isRowSelected(row);
      handleSelectionChange(alreadySelected ? [] : [row]);
    } else {
      const alreadySelected = isRowSelected(row);
      const newSelected = alreadySelected
        ? selected.filter((item) => item[rowKey] !== row[rowKey])
        : [...selected, row];

      handleSelectionChange(newSelected);
    }
  };

  const isAllSelected =
    displayData.length > 0 && displayData.every((row) => isRowSelected(row));

  return (
    <Paper
      elevation={disableShadow ? 0 : 3}
      sx={{
        borderRadius: 2,
        overflow: "hidden",
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      {chips && (
        <Stack direction="row" spacing={1} p="8px 8px 0px 8px">
          {chips}
        </Stack>
      )}

      <TableContainer sx={{ maxHeight: tableHeight ?? 400 }}>
        <Table size="small" stickyHeader aria-label="sticky table">
          <StyledTableHead>
            <TableRow>
              {isSelectable && (
                <StyledTableCellHead padding="checkbox">
                  {isMultipleSelect && (
                    <Checkbox
                      checked={isAllSelected}
                      onChange={toggleSelectAll}
                      inputProps={{ "aria-label": "select all rows" }}
                    />
                  )}
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
              {displayData.map((row, index) => (
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
                    <Typography variant="body2">{textForEmptyData}</Typography>
                  </StyledBox>
                </StyledTableCellBody>
              </TableRow>
            </TableBody>
          )}
        </Table>
      </TableContainer>

      {!disablePagination && displayData.length > 0 && (
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
  );
};
