import { Badge, IconButton, Tooltip } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

interface IFilterIcon {
  onClick: () => void;
  contrastTextColor?: string;
  filterCount: number;
}
export const FilterIcon: React.FC<IFilterIcon> = ({
  onClick,
  filterCount,
  contrastTextColor = "white",
}) => {
  return (
    <Tooltip title={"Filtrar"} placement="top">
      <IconButton onClick={onClick} color="info">
        <Badge badgeContent={filterCount} color="secondary">
          <FilterListIcon sx={{ color: contrastTextColor }} />
        </Badge>
      </IconButton>
    </Tooltip>
  );
};
