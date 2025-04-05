import { AppRoutes } from "./routes";
import { ThemeProvider } from "@mui/material/styles";
import { LightTheme } from "./themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CssBaseline } from "@mui/material";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={LightTheme}>
        <QueryClientProvider client={queryClient}>
          <AppRoutes />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
