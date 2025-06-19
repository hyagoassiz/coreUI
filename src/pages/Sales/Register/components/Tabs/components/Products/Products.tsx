import { Button } from "@mui/material";
import { productColumns } from "./constants/constants";
import { mountData } from "./utils/mountData";
import { Add, Delete } from "@mui/icons-material";
import { ProductModal } from "./components/ProductModal";
import { useProducts } from "./hooks/useProducts";
import { ToolbarContainer } from "../../../../../../../components/ToolbarContainer";
import { DataTable } from "../../../../../../../components/DataTable/DataTable";

interface IProductsProps {
  isEditMode: boolean;
}

export const Products: React.FC<IProductsProps> = ({ isEditMode }) => {
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
              disabled={!isEditMode}
            >
              Adicionar
            </Button>

            <Button
              startIcon={<Delete />}
              color="primary"
              variant="outlined"
              disabled={selectedProducts.length === 0 || !isEditMode}
              onClick={deleteSelectedProducts}
            >
              Excluir
            </Button>
          </>
        }
      />
      <DataTable
        disablePagination
        selectionMode={isEditMode ? "multiple" : undefined}
        columns={productColumns}
        data={mountData({
          products: saleForm.getValues("produtos"),
          handleEditProduct,
          isEditMode,
        })}
        textForEmptyData="Nenhum produto selecionado."
        selectedItems={selectedProducts}
        onSelectionChange={setSelectedProducts}
        withBorder
        tableHeight={220}
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
