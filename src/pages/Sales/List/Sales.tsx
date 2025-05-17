import { Button } from "@mui/material";
import { PageTitle } from "../../../components/PageTitle";
import { ToolbarContainer } from "../../../components/ToolbarContainer";
import { useList } from "./hooks/useList";
import { Add } from "@mui/icons-material";

export const Sales: React.FC = () => {
  const { handleAddSale } = useList();

  return (
    <>
      <PageTitle title="Vendas" subTitle="Realize as vendas de seus produtos" />

      <ToolbarContainer
        buttons={
          <>
            <Button
              startIcon={<Add />}
              color="primary"
              variant="contained"
              onClick={handleAddSale}
            >
              Novo
            </Button>
          </>
        }
      />
    </>
  );
};
