import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
} from "@mui/material";

export const SecurityTab: React.FC = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenModal = () => {
    // Aqui você abriria o modal para trocar a senha
    console.log("Abrir modal para mudar senha");
  };

  const handleDeleteAccount = () => {
    // Lógica de exclusão de conta
    console.log("Conta excluída!");
    setOpenDialog(false);
  };

  return (
    <Box display="flex" justifyContent="center" mt={4}>
      <Paper elevation={1} sx={{ p: 4, width: "100%", maxWidth: 480 }}>
        <Typography variant="h6" fontWeight={500} gutterBottom>
          Segurança da conta
        </Typography>

        <Typography variant="body2" color="text.secondary" mb={3}>
          Por segurança, recomendamos que você altere sua senha periodicamente.
        </Typography>

        {/* Seção de Mudar Senha */}
        <Box display="flex" justifyContent="flex-end" mb={2}>
          <Button variant="contained" onClick={handleOpenModal}>
            Mudar senha
          </Button>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Seção de Exclusão de Conta */}
        <Box display="flex" justifyContent="flex-end">
          <Button
            variant="outlined"
            color="error"
            onClick={() => setOpenDialog(true)}
          >
            Excluir Conta
          </Button>
        </Box>
      </Paper>

      {/* Dialog de confirmação de exclusão de conta */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Tem certeza de que deseja excluir sua conta?</DialogTitle>
        <DialogContent>
          <Typography variant="body2" color="text.secondary">
            Esta ação não pode ser desfeita. Todos os seus dados serão excluídos
            permanentemente.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleDeleteAccount} color="error">
            Excluir
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
