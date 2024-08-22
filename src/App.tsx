import { QueryClientProvider } from "@tanstack/react-query";
import Layout from "./Layout";
import { queryClient } from "./services/api";
import WordGenerator from "./WordGenerator";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Lato"].join(","),
  },
});

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Layout>
            <WordGenerator />
          </Layout>
        </ThemeProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
