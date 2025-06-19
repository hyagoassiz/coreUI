import { Button, Chip } from "@mui/material";
import { productColumns } from "./constants/constants";
import { mountData } from "./utils/mountData";
import { Add } from "@mui/icons-material";
import { ToolbarContainer } from "../../../components/ToolbarContainer";
import { DataTable } from "../../../components/DataTable/DataTable";
import { useList } from "./hooks/useList";
import { ProductModal } from "./components/ProductModal";
import { DeactivateModal } from "./components/DeactivateModal";
import { FilterIcon } from "../../../components/FilterIcon";
import { Filter } from "./components/Filter";
import { Frame } from "../../../components/Frame";
import { Header } from "../../../components/Header";

export const Products: React.FC = () => {
  const {
    filterCount,
    isFilterOpen,
    modalDeactivateProductState,
    modalProductState,
    productListPayload,
    products,
    searchBar,
    handleActivateProduct,
    handleDeactivateProduct,
    handleEditProduct,
    setProductListPayload,
    toggleCreateProductModal,
    toggleDeactivateProductModal,
    toggleFilter,
  } = useList();

  return (
    <>
      <Header
        title="Produtos"
        searchBar={searchBar}
        buttons={
          <FilterIcon filterCount={filterCount} onClick={toggleFilter} />
        }
      />

      <Frame>
        <ToolbarContainer
          title={`Total de produtos (${products?.length ?? 0})`}
          showTitleDivider
          showDividers
          buttons={
            <>
              <Button
                startIcon={<Add />}
                color="primary"
                variant="outlined"
                onClick={toggleCreateProductModal}
              >
                Novo
              </Button>
            </>
          }
        />

        <DataTable
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
        />
      </Frame>

      {modalProductState.open && (
        <ProductModal
          open={modalProductState.open}
          product={modalProductState.product}
          onClose={toggleCreateProductModal}
        />
      )}

      {modalDeactivateProductState.open && (
        <DeactivateModal
          open={modalDeactivateProductState.open}
          product={modalDeactivateProductState.product as IProductResponseApi}
          onClose={toggleDeactivateProductModal}
        />
      )}

      {isFilterOpen && (
        <Filter
          open={isFilterOpen}
          onClose={toggleFilter}
          productListPayload={productListPayload}
          setProductListPayload={setProductListPayload}
        />
      )}
    </>
  );
};
