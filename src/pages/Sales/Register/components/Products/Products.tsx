import { Button, Divider, Typography } from "@mui/material";
import { DataTable } from "../../../../../components/DataTable/DataTable";
import { productColumns } from "./constants/constants";
import { mountData } from "./utils/mountData";
import { ToolbarContainer } from "../../../../../components/ToolbarContainer";
import { Add, Delete } from "@mui/icons-material";
import { ProductModal } from "./components/ProductModal";
import { useProducts } from "./hooks/useProducts";

export const Products: React.FC = () => {
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
        buttons={
          <>
            <Typography fontWeight={600} fontSize="16px">
              {`Produtos (${saleForm.getValues("produtos")?.length ?? 0})`}
            </Typography>
            <Divider orientation="vertical" flexItem sx={{ ml: 0.5, mr: 2 }} />

            <Button
              startIcon={<Add />}
              color="primary"
              variant="text"
              onClick={handleAddProduct}
            >
              Adicionar
            </Button>

            <Button
              startIcon={<Delete />}
              color="primary"
              variant="text"
              disabled={selectedProducts.length === 0}
              onClick={deleteSelectedProducts}
            >
              Excluir
            </Button>
          </>
        }
      />
      <DataTable
        disablePagination
        selectionMode="multiple"
        disableShadow
        columns={productColumns}
        data={mountData({
          products: saleForm.getValues("produtos"),
          handleEditProduct,
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
