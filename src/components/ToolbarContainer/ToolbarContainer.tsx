import {
  IconButton,
  InputAdornment,
  TextField,
  useTheme,
  Divider,
  Box,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ReactNode } from "react";
import { BoxContainer, StyledBox, StyledContainer } from "./styles";
import { ISeachBar } from "../../interfaces/ISearchBar";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";

interface IToolbarContainerProps {
  title?: string | ReactNode;
  buttons?: ReactNode;
  searchBar?: ISeachBar;
  alignRight?: boolean;
  marginBottom?: string;
  backButton?(): void;
  showDividers?: boolean;
  showTitleDivider?: boolean;
  contrastTextColor?: string;
}

export const ToolbarContainer: React.FC<IToolbarContainerProps> = ({
  title,
  buttons,
  backButton,
  searchBar,
  marginBottom = "8px",
  alignRight = false,
  showDividers = false,
  showTitleDivider = false,
  contrastTextColor,
}) => {
  const theme = useTheme();

  return (
    <StyledContainer>
      {showDividers && <Divider sx={{ mb: 1 }} />}
      <BoxContainer
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          {backButton && (
            <IconButton onClick={backButton}>
              <ArrowBackIosTwoToneIcon
                fontSize="small"
                sx={{ color: contrastTextColor }}
              />
            </IconButton>
          )}
          {title && (
            <>
              <Typography fontWeight={600} fontSize="16px">
                {title}
              </Typography>
              {showTitleDivider && (
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ ml: 2, mr: 3 }}
                />
              )}
            </>
          )}
          {!alignRight && buttons && <StyledBox>{buttons}</StyledBox>}
        </Box>

        {(searchBar || (alignRight && buttons)) && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {searchBar && (
              <TextField
                fullWidth
                id="outlined-search"
                variant="outlined"
                color="primary"
                placeholder={searchBar.placeholder}
                value={searchBar.value}
                onChange={searchBar.onChange}
                sx={{ maxWidth: 300 }}
                InputProps={{
                  style: {
                    height: theme.spacing(4.5),
                    backgroundColor: theme.palette.primary.contrastText,
                  },
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon color="info" />
                    </InputAdornment>
                  ),
                }}
              />
            )}
            {alignRight && buttons && <StyledBox>{buttons}</StyledBox>}
          </Box>
        )}
      </BoxContainer>
      {showDividers && <Divider sx={{ mt: 1 }} />}
    </StyledContainer>
  );
};
