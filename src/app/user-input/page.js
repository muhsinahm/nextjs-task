"use client";
import ContentSelection from "@/components/ContentSelection";
import {
  Box,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#1E1E1E",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#B0B0B0",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});
const UserInput = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          minHeight: "100vh",
          bgcolor: "background.default",
          p: { xs: 3, sm: 4, md: 5 },
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: "bold",
            mb: 1,
          }}
        >
          Content type
        </Typography>

        <Typography variant="body1" color="text.secondary">
          Choose a content type that best fits your needs.
        </Typography>
        <ContentSelection />

        <Box sx={{ mt: 4 }}></Box>
      </Box>
    </ThemeProvider>
  );
};

export default UserInput;
