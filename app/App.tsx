import React from "react";
import Login from "./routes/Login";
import { CssBaseline, useTheme } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router";

const queryClient = new QueryClient();

const App = () => {
  const theme = useTheme();
  return (
    <QueryClientProvider client={queryClient}>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: "#fff",
          display: "flex",
          color: theme.palette.text.primary,
        }}
      >
        <Outlet />
      </div>

      <CssBaseline />
    </QueryClientProvider>
  );
};

export default App;
