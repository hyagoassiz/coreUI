import { Button } from "@mui/material";
import { PageTitle } from "../../../components/PageTitle";
import { ToolbarContainer } from "../../../components/ToolbarContainer";
import { useList } from "./hooks/useList";
import { Add } from "@mui/icons-material";
import { SalesModal } from "./components/SalesModal";

export const Sales: React.FC = () => {
  const { salesModalState, searchBar, toggleSalesModal } = useList();

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
              onClick={toggleSalesModal}
            >
              Novo
            </Button>
            {/* <FilterIcon filterCount={filterCount} onClick={toggleFilter} /> */}
          </>
        }
        searchBar={searchBar}
      />

      {/* <DataTable
        chips={
          filterCount > 0 && (
            <Chip
              label="Inativos"
              onDelete={() => setProductListPayload({ ativo: true })}
            />
          )
        }
        columns={productColumns}
        data={mountData({
          products,
          handleActivateProduct,
          handleDeactivateProduct,
          handleEditProduct,
        })}
        textForEmptyData="Nenhum produto encontrado."
      /> */}

      {salesModalState.open && (
        <SalesModal
          open={salesModalState.open}
          product={salesModalState.product}
          onClose={toggleSalesModal}
        />
      )}
    </>
  );
};
