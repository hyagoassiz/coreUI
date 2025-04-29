import {
  Button,
  IconButton,
  Drawer as MuiDrawer,
  Tooltip,
} from "@mui/material";
import { ReactNode } from "react";
import {
  Icon,
  BoxApply,
  BoxButtons,
  BoxChildren,
  HeaderBox,
  StyledBox,
  StyledTypography,
} from "./styles";

interface IFilterDrawer {
  open: boolean;
  children: ReactNode;
  closeFilter: () => void;
  applyFilter: () => void;
}

export const FilterDrawer = ({
  open,
  children,
  closeFilter,
  applyFilter,
}: IFilterDrawer) => {
  return (
    <MuiDrawer open={open} anchor="right" onClose={closeFilter}>
      <StyledBox>
        <HeaderBox>
          <BoxButtons>
            <Tooltip title={"Fechar"} placement="bottom">
              <IconButton onClick={closeFilter}>
                <Icon />
              </IconButton>
            </Tooltip>
            <StyledTypography variant="h6">Fechar</StyledTypography>
            <BoxApply>
              <Button color="info" variant="contained" onClick={applyFilter}>
                Aplicar Filtros
              </Button>
            </BoxApply>
          </BoxButtons>
        </HeaderBox>
        <BoxChildren>{children}</BoxChildren>
      </StyledBox>
    </MuiDrawer>
  );
};
