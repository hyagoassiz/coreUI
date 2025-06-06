import { Paper } from "@mui/material";
import { ReactNode } from "react";

interface IFrameProps {
  borderRadius?: string;
  margin?: string;
  padding?: string;
  children: ReactNode;
}

export const Frame: React.FC<IFrameProps> = ({
  borderRadius = "0px",
  margin = "0px",
  padding = "0px",
  children,
}) => {
  return (
    <Paper
      sx={{
        padding,
        margin,
        borderRadius,
      }}
    >
      {children}
    </Paper>
  );
};
