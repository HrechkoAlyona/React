import React, { useState } from "react";
import { ThemeProvider, createTheme, CssBaseline, Typography } from "@mui/material";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";

const ToggleButton = styled(Button)(({ theme }) => ({
  marginTop: "20px",
  padding: "8px 16px",
  borderRadius: "8px",
  textTransform: "none",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#1976d2",
      },
      background: {
        default: "#fff",
        paper: "#fff",
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#90caf9",
      },
      background: {
        default: "#121212",
        paper: "#121212",
      },
    },
  });

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: isDarkMode
            ? darkTheme.palette.background.default
            : lightTheme.palette.background.default,
          transition: "background-color 0.3s ease",
        }}
      >
        <Typography variant="h4" gutterBottom>
          {isDarkMode ? "Dark Mode" : "Light Mode"}
        </Typography>
        <ToggleButton variant="contained" onClick={toggleTheme}>
          Toggle Theme
        </ToggleButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
