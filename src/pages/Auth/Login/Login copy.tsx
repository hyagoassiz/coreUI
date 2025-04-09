import { Button, Checkbox, Grid, Typography } from "@mui/material";
import { Controller } from "react-hook-form";
import { useLogin } from "./hooks/useLogin";
import {
  StyledDivider,
  StyledFormControlLabel,
  StyledLink,
  StyledTextField,
} from "../styles";
import { AuthLayout } from "../../../layouts/AuthLayout";

export const Login: React.FC = () => {
  const {
    isLoading,
    loginForm,
    handleKeyDown,
    onCreateAccount,
    submitLoginForm,
  } = useLogin();

  return (
    <>
      <Typography>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium,
        maxime nemo porro fugit quas autem possimus itaque asperiores veritatis.
        Minus laboriosam a totam sapiente porro sequi autem facilis ducimus
        repudiandae.
      </Typography>
    </>
  );
};
