import { Box } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import Tab from "@mui/material/Tab";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Products } from "./components/Products";
import { Observation } from "./components/Observation";
import { useRegisterTabs } from "./hooks/useRegisterTabs";
import { Frame } from "../../../../../components/Frame";

interface RegisterTabsProps {
  isEditMode: boolean;
}

export const RegisterTabs: React.FC<RegisterTabsProps> = ({ isEditMode }) => {
  const { saleForm, tab, handleChangeTab } = useRegisterTabs();

  return (
    <Frame margin="16px 0px" padding="0px 16px 32px 16px">
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={tab}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChangeTab}
              aria-label="lab API tabs example"
            >
              <Tab label="Produtos" value="1" />
              <Tab label="Observação" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1" sx={{ p: "16px 0px" }}>
            <Products isEditMode />
          </TabPanel>
          <TabPanel value="2" sx={{ p: "16px 0px" }}>
            <Observation isEditMode={isEditMode} saleForm={saleForm} />
          </TabPanel>
        </TabContext>
      </Box>
    </Frame>
  );
};
