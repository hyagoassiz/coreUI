import { Controller } from "react-hook-form";
import {
  Box,
  TextField,
  FormControlLabel,
  Switch,
  Button,
} from "@mui/material";
import { Modal } from "../../../../../components/Modal";
import { NumericFormat } from "react-number-format";
import { useProductModal } from "./hooks/useProductModal";
import { IProductModalProps } from "./interfaces";

export const ProductModal: React.FC<IProductModalProps> = ({
  open,
  product,
  onClose,
}) => {
  const { productForm, submitProductForm } = useProductModal({
    onClose,
    product,
  });

  return (
    <Modal
      open={open}
      style={{ width: "auto", height: "auto", minWidth: 480 }}
      title={`${product?.id ? "Editar" : "Novo"} produto`}
      buttons={
        <>
          <Button variant="text" onClick={onClose}>
            Fechar
          </Button>
          <Button variant="contained" onClick={submitProductForm}>
            Salvar
          </Button>
        </>
      }
    >
      <Box display="flex" flexDirection="column" gap={2} mt={2}>
        <Controller
          name="nome"
          control={productForm.control}
          rules={{ required: true }}
          render={({ field, formState }) => (
            <TextField
              {...field}
              variant="standard"
              label="Nome do produto"
              fullWidth
              required
              error={!!formState.errors.nome}
            />
          )}
        />

        <Controller
          name="codigo"
          rules={{ required: true }}
          control={productForm.control}
          render={({ field, formState }) => (
            <TextField
              {...field}
              label="Código/SKU"
              variant="standard"
              fullWidth
              required
              error={!!formState.errors.codigo}
            />
          )}
        />

        <Controller
          name="quantidade"
          control={productForm.control}
          rules={{
            required: true,
          }}
          render={({ field, formState }) => (
            <NumericFormat
              value={field.value}
              onValueChange={(values) => {
                const { floatValue } = values;
                field.onChange(floatValue ?? "");
              }}
              customInput={TextField}
              label="Quantidade em estoque"
              fullWidth
              allowNegative={false}
              thousandSeparator="."
              decimalSeparator=","
              decimalScale={0}
              variant="standard"
              valueIsNumericString
              inputMode="numeric"
              required
              onFocus={(e) => e.target.select()}
              error={!!formState.errors.quantidade}
            />
          )}
        />

        <Controller
          name="ativo"
          control={productForm.control}
          render={({ field }) => (
            <FormControlLabel
              control={
                <Switch
                  size="medium"
                  checked={field.value ?? true}
                  onChange={(e) => field.onChange(e.target.checked)}
                />
              }
              label={field.value ? "Ativo" : "Inativo"}
            />
          )}
        />
      </Box>
    </Modal>
  );
};
