import { InputAdornment, TextField, useTheme } from "@mui/material";
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ReactNode } from "react";
import { BoxContainer, StyledBox, StyledContainer } from "./styles";
import { ISeachBar } from "../../interfaces/ISearchBar";

interface IToolbarContainer {
  buttons?: ReactNode;
  searchBar?: ISeachBar;
}

export const ToolbarContainer: React.FC<IToolbarContainer> = ({
  buttons,
  searchBar,
}) => {
  const theme = useTheme();

  return (
    <StyledContainer>
      <BoxContainer>
        <StyledBox>{buttons}</StyledBox>
        <Box />
        {searchBar && (
          <Box sx={{ display: "flex" }}>
            <TextField
              fullWidth
              id="outlined-search"
              variant="outlined"
              color="primary"
              placeholder={searchBar.placeholder}
              value={searchBar.value}
              onChange={searchBar.onChange}
              sx={{ alignItems: "flex-end", paddingRight: theme.spacing(2) }}
              InputProps={{
                style: {
                  paddingLeft: theme.spacing(1),
                  paddingRight: theme.spacing(1),
                  height: theme.spacing(4.5),
                  width: "90%",
                  backgroundColor: theme.palette.primary.contrastText,
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="info" />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        )}
      </BoxContainer>
    </StyledContainer>
  );
};
