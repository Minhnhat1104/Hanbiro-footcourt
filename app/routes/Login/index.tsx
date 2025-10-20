import React, { useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { DinnerDiningOutlined } from "@mui/icons-material";
import foodBg from "../../assets/food-background.jpg";
import { useAuthMutation } from "~/hooks/useAuthMutation";
import type { Route } from "../../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const Login = () => {
  const { mLogin } = useAuthMutation();

  const [formData, setFormData] = useState<{
    username: string;
    password: string;
  }>({ username: "", password: "" });

  const getProps = (field: "username" | "password") => ({
    value: formData[field],
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [field]: e.target.value,
      });
    },
  });

  return (
    <form
      onSubmit={async (e) => {
        e?.preventDefault();
        const res = mLogin.mutateAsync(formData);
      }}
      style={{ width: "100%" }}
    >
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
          <TextField
            fullWidth
            label="Tên đăng nhập"
            {...getProps("username")}
          />
          <TextField fullWidth label="Mật khẩu" {...getProps("password")} />
          <Button fullWidth variant="contained" type="submit">
            Đăng nhập
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};

export default Login;
