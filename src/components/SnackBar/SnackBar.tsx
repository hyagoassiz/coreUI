import { Alert, Snackbar as MuiSnackBar } from "@mui/material";
import useSnackBar from "./hooks/useSnackBar";

export const SnackBar: React.FC = () => {
  const { snackBar, handleCloseSnackBar } = useSnackBar();

  return (
    <>
      <MuiSnackBar
        open={snackBar.open}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        sx={{ marginTop: "55px" }}
      >
        <Alert
          severity={`${snackBar.type}`}
          variant="filled"
          sx={{ width: "100%" }}
          onClose={handleCloseSnackBar}
        >
          {snackBar.message}
        </Alert>
      </MuiSnackBar>
    </>
  );
};
