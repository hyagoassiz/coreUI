import { PageTitle } from "../../../components/PageTitle";
import { Tabs } from "./components/Tabs";

export const Settings: React.FC = () => {
  return (
    <>
      <PageTitle title="Configurações" subTitle="Personalize" />

      <Tabs />
    </>
  );
};
