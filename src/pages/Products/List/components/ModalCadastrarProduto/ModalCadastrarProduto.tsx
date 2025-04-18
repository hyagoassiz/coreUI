import { Modal } from "../../../../../components/Modal";
import {
  TextField,
  Button,
  Grid,
  Box,
  Typography,
  Avatar,
  useTheme,
} from "@mui/material";
import { NumericFormat } from "react-number-format";
import { useForm } from "react-hook-form";
import { useState } from "react";

export const ModalCadastrarProduto: React.FC = () => {
  const theme = useTheme();
  const [preview, setPreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nome: "",
      descricao: "",
      valor: "",
      imagem: null,
    },
  });

  const onSubmit = (data: any) => {
    console.log("Produto Cadastrado:", data);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <Modal
      open={true}
      style={{ width: "auto", height: "auto", minWidth: 480 }}
      title="Cadastrar Produto"
      buttons={<></>}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ width: "100%", mt: 1 }}
      >
        <Grid container spacing={3}>
          {/* Nome */}
          <Grid item xs={12}>
            <TextField
              label="Nome do Produto"
              fullWidth
              size="small"
              {...register("nome", { required: "Nome é obrigatório" })}
              error={!!errors.nome}
              helperText={errors.nome?.message}
            />
          </Grid>

          {/* Descrição */}
          <Grid item xs={12}>
            <TextField
              label="Descrição"
              fullWidth
              size="small"
              multiline
              rows={3}
              {...register("descricao", {
                required: "Descrição é obrigatória",
              })}
              error={!!errors.descricao}
              helperText={errors.descricao?.message}
            />
          </Grid>

          {/* Valor */}
          <Grid item xs={12}>
            <NumericFormat
              customInput={TextField}
              label="Valor"
              fullWidth
              size="small"
              thousandSeparator="."
              decimalSeparator=","
              prefix="R$ "
              decimalScale={2}
              allowNegative={false}
              {...register("valor", { required: "Valor é obrigatório" })}
              error={!!errors.valor}
              helperText={errors.valor?.message}
            />
          </Grid>

          {/* Imagem */}
          <Grid item xs={12}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={1.5}
            >
              {preview && (
                <Avatar
                  src={preview}
                  variant="rounded"
                  sx={{ width: 120, height: 120 }}
                />
              )}
              <Button variant="outlined" component="label">
                {preview ? "Trocar Foto" : "Inserir Foto"}
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleImageChange}
                />
              </Button>
              <Typography variant="caption" color="text.secondary">
                Apenas uma imagem é permitida
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
          <Button variant="contained" type="submit">
            Cadastrar Produto
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
