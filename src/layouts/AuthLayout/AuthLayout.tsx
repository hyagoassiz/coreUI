import { Grid } from "@mui/material";
import { ReactNode } from "react";
import { BoxContainer, BoxMain, TitleStyled } from "./styles";

interface IAuthLayout {
  children: ReactNode;
  titleRoute: string;
  onKeyDown?(event: React.KeyboardEvent<HTMLDivElement>): void;
}

export const AuthLayout: React.FC<IAuthLayout> = ({
  children,
  titleRoute,
  onKeyDown,
}) => {
  return (
    <>
      <BoxMain onKeyDown={onKeyDown}>
        <BoxContainer>
          <TitleStyled component="h1" variant="h5">
            {titleRoute}
          </TitleStyled>

          <Grid container spacing={2} xs={12} sx={{ marginTop: "16px" }}>
            {children}
          </Grid>
        </BoxContainer>
      </BoxMain>
    </>
  );
};
