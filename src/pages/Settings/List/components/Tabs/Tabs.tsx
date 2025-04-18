import { Box } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import Tab from "@mui/material/Tab";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useSettingsContext } from "../../hooks/useSettingsContext";
import { ProfileTab } from "./components/ProfileTab";
import { SecurityTab } from "./components/SecurityTab";
import { PreferencesTab } from "./components/PreferencesTab";
import { PlansTab } from "./components/PlansTab";

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
            <Tab label="Meu plano" value="3" />
            <Tab label="Segurança" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <ProfileTab />
        </TabPanel>
        <TabPanel value="2">
          <PreferencesTab />
        </TabPanel>
        <TabPanel value="3">
          <PlansTab />
        </TabPanel>
        <TabPanel value="4">
          <SecurityTab />
        </TabPanel>
      </TabContext>
    </Box>
  );
};
