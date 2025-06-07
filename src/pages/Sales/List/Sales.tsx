import { Button } from "@mui/material";
import { useList } from "./hooks/useList";
import { Add } from "@mui/icons-material";
import { DataTable } from "../../../components/DataTable/DataTable";
import { salesColumns } from "./constants/constants";
import { mountData } from "./utils/mountData";
import { CancelSaleModal } from "./components/CancelSaleModal";
import { Frame } from "../../../components/Frame";
import { ToolbarContainer } from "../../../components/ToolbarContainer";
import { Header } from "../../../components/Header";

export const Sales: React.FC = () => {
  const {
    sales,
    cancelSaleStateModal,
    handleAddSale,
    handleCancelSale,
    closeCancelSaleModal,
    handleEditSale,
  } = useList();

  return (
    <>
      <Header title={`Vendas`} />

      <Frame>
        <ToolbarContainer
          showDividers
          showTitleDivider
          title={`Total de Vendas (${sales?.length ?? 0})`}
          buttons={
            <>
              <Button
                startIcon={<Add />}
                color="primary"
                variant="outlined"
                onClick={handleAddSale}
              >
                Novo
              </Button>
            </>
          }
        />
        <DataTable
          columns={salesColumns}
          data={mountData({
            sales,
            handleCancelSale,
            handleEditSale,
          })}
          textForEmptyData="Nenhum produto encontrado."
        />
      </Frame>

      {cancelSaleStateModal.open && (
        <CancelSaleModal
          open={cancelSaleStateModal.open}
          sale={cancelSaleStateModal.sale}
          onClose={closeCancelSaleModal}
        />
      )}
    </>
  );
};
