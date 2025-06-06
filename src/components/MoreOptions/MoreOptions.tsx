import { MoreVert } from "@mui/icons-material";
import { IconButton, Menu, Tooltip } from "@mui/material";
import { ReactNode } from "react";
import useMoreOptions from "./hooks/useMoreOptions";

interface MoreOptionsProps {
  children: ReactNode;
  disabled?: boolean;
}

export const MoreOptions = ({
  children,
  disabled = false,
}: MoreOptionsProps) => {
  const { handleClick, anchorEl, handleClose } = useMoreOptions();

  return (
    <>
      <Tooltip placement="top" title="Opções">
        <IconButton
          color="info"
          aria-controls="options-menu"
          aria-haspopup="true"
          onClick={handleClick}
          disabled={disabled}
        >
          <MoreVert />
        </IconButton>
      </Tooltip>
      <Menu
        id="options-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {/* Aqui você pode acessar handleClose via contexto se quiser */}
        {children}
      </Menu>
    </>
  );
};
