import { Button, Chip } from "@mui/material";
import { productColumns } from "./constants/constants";
import { mountData } from "./utils/mountData";
import { Add } from "@mui/icons-material";
import { PageTitle } from "../../../components/PageTitle";
import { ToolbarContainer } from "../../../components/ToolbarContainer";
import { DataTable } from "../../../components/DataTable/DataTable";
import { useList } from "./hooks/useList";
import { ProductModal } from "./components/ProductModal";
import { DeactivateModal } from "./components/DeactivateModal";
import { FilterIcon } from "../../../components/FilterIcon";
import { Filter } from "./components/Filter";

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
      <PageTitle
        title="Produtos"
        subTitle="Gerencie o cadastro dos seus produtos"
      />

      <ToolbarContainer
        buttons={
          <>
            <Button
              startIcon={<Add />}
              color="primary"
              variant="contained"
              onClick={toggleCreateProductModal}
            >
              Novo
            </Button>
            <FilterIcon filterCount={filterCount} onClick={toggleFilter} />
          </>
        }
        searchBar={searchBar}
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
