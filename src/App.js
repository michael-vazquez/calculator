import "./App.css";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import AppTheme from "./utils/AppTheme";
import Calculator from "./components/Calculator";

const theme = createMuiTheme(AppTheme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Calculator />
    </ThemeProvider>
  );
}

export default App;
