import { Box } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import Tab from "@mui/material/Tab";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useSettingsContext } from "../../hooks/useSettingsContext";

export const Tabs: React.FC = () => {
  const { setValue, value } = useSettingsContext();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Perfil" value="1" />
            <Tab label="Preferências" value="2" />
            <Tab label="Mudar senha" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">Perfil</TabPanel>
        <TabPanel value="2">Preferências</TabPanel>
        <TabPanel value="3">Mudar senha</TabPanel>
      </TabContext>
    </Box>
  );
};
