import React from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { DinnerDiningOutlined } from "@mui/icons-material";
import foodBg from "../../assets/food-background.jpg";

const Login = () => {
  return (
    <Stack
      style={{
        width: "100%",
        height: "100%",
        backgroundImage: `url(${foodBg})`,
        backgroundSize: "cover", // Optional: adjust as needed
        backgroundPosition: "center", // Optional: adjust as needed
      }}
    >
      <Stack
        style={{
          width: 400,
          margin: "auto",
          background: "#f5f6fa",
          padding: 16,
          alignItems: "center",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          borderRadius: 4,
        }}
        spacing={2}
      >
        {/* <DinnerDiningOutlined sx={{ fontSize: 50 }} /> */}
        <Typography variant="h4">Hanbiro Foodcourt</Typography>
        <TextField fullWidth label="Tên đăng nhập" />
        <TextField fullWidth label="Mật khẩu" />
        <Button fullWidth variant="contained">
          Đăng nhập
        </Button>
      </Stack>
    </Stack>
  );
};

export default Login;
