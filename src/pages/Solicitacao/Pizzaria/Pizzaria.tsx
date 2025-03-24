import { Button } from "../../../components/Button/Button";
import { CircularProgress } from "../../../components/CircularProgress";
import PersistentDrawerLeft from "../../../components/Drawer/Drawer";

export const Pizzaria: React.FC = () => {
  return (
    <>
      <PersistentDrawerLeft />
      <CircularProgress />
      <Button loading={false} onClick={() => console.log("teste")}>
        Botão
      </Button>
    </>
  );
};
