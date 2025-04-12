import {
  Pagination,
  TableBody,
  TableContainer,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import Table from "@mui/material/Table";
import {
  Footer,
  Icon,
  StyledBox,
  StyledTableCellBody,
  StyledTableCellHead,
  StyledTableHead,
} from "./styles";
import useDataTable from "./hooks/useDataTable";
import { IDataTableColumns } from "../../interfaces";

interface IDataTable {
  columns: IDataTableColumns[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  textForEmptyData: string;
}

export const DataTable: React.FC<IDataTable> = ({
  columns,
  data,
  textForEmptyData,
}) => {
  const { paginatedData, totalPages, page, setPage } = useDataTable({ data });

  const theme = useTheme();

  return (
    <>
      <TableContainer sx={{ maxHeight: 400, borderRadius: "8px 8px 0px 0px" }}>
        <Table size="small" stickyHeader aria-label="sticky table">
          <StyledTableHead>
            <TableRow>
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
                  key={index}
                  sx={{
                    backgroundColor: theme.palette.primary.contrastText,
                    "&:hover": {
                      backgroundColor: theme.palette.primary.light,
                    },
                  }}
                >
                  {columns.map((column) => (
                    <StyledTableCellBody
                      size="small"
                      key={column.key}
                      sx={{
                        ...column?.style,
                      }}
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
                <StyledTableCellBody colSpan={columns.length}>
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
      {paginatedData.length > 0 && (
        <Footer spacing={2} sx={{ borderRadius: "0px 0px 8px 8px" }}>
          <Pagination
            color="secondary"
            count={totalPages}
            page={page}
            onChange={(_, value) => setPage(value)}
            shape="rounded"
          />
        </Footer>
      )}
    </>
  );
};
