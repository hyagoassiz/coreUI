import { MoreVert } from "@mui/icons-material";
import { IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import useMoreOptions from "./hooks/useMoreOptions";

interface IMoreOptions {
  options: {
    label: string;
    action: () => void;
  }[];
  disabled?: boolean;
}

export const MoreOptions = ({ options, disabled = false }: IMoreOptions) => {
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
        {options.map((option, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              option.action();
              handleClose();
            }}
            sx={{ fontSize: "14px" }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
