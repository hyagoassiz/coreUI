import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const StyledBox = styled(Box)(() => ({
  width: "100vw",
  height: "100vh",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 9999,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
}));
