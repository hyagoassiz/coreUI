import { createTheme } from "@mui/material";

export const Theme = createTheme({
  palette: {
    primary: {
      main: "#424874", // azul escuro (destaques, botões principais)
      dark: "#2D324F", // versão mais escura para hover
      light: "#A6B1E1", // lavanda intermediária
      contrastText: "#F4EEFF", // ótimo contraste sobre o roxo escuro
    },

    secondary: {
      main: "#A6B1E1", // lavanda escura
      dark: "#8C99C7",
      light: "#DCD6F7", // lavanda clara
      contrastText: "#424874", // texto sobre o lilás claro
    },

    background: {
      default: "#F4EEFF", // fundo da página
      paper: "#DCD6F7", // cards, containers
    },

    text: {
      primary: "#424874", // texto principal escuro
      secondary: "#6C7296", // tom intermediário
      disabled: "#A6B1E1", // lilás claro para campos desabilitados
    },

    divider: "#C6C2E3", // linha divisória suave
  },

  components: {
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          color: "#424874",
        },
      },
    },
  },
});
