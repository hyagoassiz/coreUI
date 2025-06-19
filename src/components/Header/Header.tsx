import { Box, Paper, Typography, useTheme } from "@mui/material";
import { ISeachBar } from "../../interfaces/ISearchBar";
import { ReactNode } from "react";
import { ToolbarContainer } from "../ToolbarContainer";

interface IHeaderProps {
  title: string;
  buttons?: ReactNode;
  searchBar?: ISeachBar;
  backButton?(): void;
}

export const Header: React.FC<IHeaderProps> = ({
  title,
  buttons,
  searchBar,
  backButton,
}) => {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        height: 62,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <ToolbarContainer
          contrastTextColor={theme.palette.primary.contrastText}
          alignRight={true}
          title={
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "1.25rem",
                color: theme.palette.primary.contrastText,
              }}
            >
              {title}
            </Typography>
          }
          buttons={buttons}
          backButton={backButton}
          searchBar={searchBar}
          marginBottom={"0px"}
        />
      </Box>
    </Paper>
  );
};
