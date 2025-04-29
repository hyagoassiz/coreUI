import { Badge, IconButton, Tooltip } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

interface IFilterIcon {
  onClick: () => void;
  filterCount: number;
}
export const FilterIcon: React.FC<IFilterIcon> = ({ onClick, filterCount }) => {
  return (
    <Tooltip title={"Filtrar"} placement="top">
      <IconButton onClick={onClick} color="info">
        <Badge badgeContent={filterCount} color="secondary">
          <FilterListIcon />
        </Badge>
      </IconButton>
    </Tooltip>
  );
};
