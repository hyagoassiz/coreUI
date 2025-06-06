import { Button } from "@mui/material";
import { DataTable } from "../../../../../components/DataTable/DataTable";
import { productColumns } from "./constants/constants";
import { mountData } from "./utils/mountData";
import { ToolbarContainer } from "../../../../../components/ToolbarContainer";
import { Add, Delete } from "@mui/icons-material";
import { ProductModal } from "./components/ProductModal";
import { useProducts } from "./hooks/useProducts";

interface IProductsProps {
  idEditMode: boolean;
}

export const Products: React.FC<IProductsProps> = ({ idEditMode }) => {
  const {
    productModalState,
    saleForm,
    selectedProducts,
    handleAddProduct,
    handleCloseProductModal,
    handleEditProduct,
    deleteSelectedProducts,
    setSelectedProducts,
  } = useProducts();

  return (
    <>
      <ToolbarContainer
        showTitleDivider
        title={`Produtos (${saleForm.getValues("produtos")?.length ?? 0})`}
        buttons={
          <>
            <Button
              startIcon={<Add />}
              color="primary"
              variant="outlined"
              onClick={handleAddProduct}
              disabled={!idEditMode}
            >
              Adicionar
            </Button>

            <Button
              startIcon={<Delete />}
              color="primary"
              variant="outlined"
              disabled={selectedProducts.length === 0 || !idEditMode}
              onClick={deleteSelectedProducts}
            >
              Excluir
            </Button>
          </>
        }
      />
      <DataTable
        disablePagination
        selectionMode={idEditMode ? "multiple" : undefined}
        columns={productColumns}
        data={mountData({
          products: saleForm.getValues("produtos"),
          handleEditProduct,
          idEditMode,
        })}
        textForEmptyData="Nenhum produto selecionado."
        selectedItems={selectedProducts}
        onSelectionChange={setSelectedProducts}
        tableHeight={190}
      />

      {productModalState.open && (
        <ProductModal
          open={productModalState.open}
          product={productModalState.product}
          onClose={handleCloseProductModal}
        />
      )}
    </>
  );
};
