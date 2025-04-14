import { Box, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";

interface IFullScreenLoader {
  text?: string;
}

export const FullScreenLoader: React.FC<IFullScreenLoader> = ({
  text = "Carregando",
}) => {
  const theme = useTheme();
  const [dots, setDots] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: theme.palette.background.default,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          color: theme.palette.text.primary,
          display: "flex",
          alignItems: "center",
        }}
      >
        {text}
        <Box
          component="span"
          sx={{
            display: "inline-block",
            minWidth: "1.5em",
            transition: "opacity 0.3s ease",
          }}
        >
          {dots}
        </Box>
      </Typography>
    </Box>
  );
};
