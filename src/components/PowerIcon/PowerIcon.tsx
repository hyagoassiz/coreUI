import { IconButton, Tooltip } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

interface IPowerIcon {
  onClick: () => void;
}

export const PowerIcon: React.FC<IPowerIcon> = ({ onClick }) => {
  return (
    <Tooltip title="Ativar" placement="top">
      <IconButton onClick={onClick} color="info">
        <PowerSettingsNewIcon />
      </IconButton>
    </Tooltip>
  );
};
