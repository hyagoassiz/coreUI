import { AppRoutes } from "./routes";
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "./themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CssBaseline } from "@mui/material";
import { SnackBar } from "./components/SnackBar";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={Theme}>
        <QueryClientProvider client={queryClient}>
          <AppRoutes />
        </QueryClientProvider>
      </ThemeProvider>
      <SnackBar />
    </>
  );
}

export default App;
