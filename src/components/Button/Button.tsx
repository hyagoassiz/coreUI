import { ReactNode } from "react";
import {
  Button as MuiButton,
  ButtonProps,
  CircularProgress,
} from "@mui/material";

interface IButton extends Omit<ButtonProps, "onClick"> {
  children: ReactNode;
  loading?: boolean;
  onClick: () => void;
}

export const Button: React.FC<IButton> = ({
  children,
  loading = false,
  onClick,
  ...props
}) => {
  return (
    <MuiButton
      color="primary"
      onClick={loading ? undefined : onClick}
      variant="contained"
      sx={{
        ...(loading && { cursor: "not-allowed" }),
      }}
      {...props}
    >
      {loading ? <CircularProgress size={24} color="inherit" /> : children}
    </MuiButton>
  );
};
