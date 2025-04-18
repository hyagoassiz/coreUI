import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  FormControlLabel,
  Switch,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Grid,
} from "@mui/material";

export const PreferencesTab: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState("pt");

  return (
    <Box display="flex" justifyContent="center" mt={4}>
      <Paper elevation={1} sx={{ p: 4, width: "100%", maxWidth: 600 }}>
        <Grid container spacing={3}>
          {/* Tema Escuro */}
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Switch
                  checked={darkMode}
                  onChange={(e) => setDarkMode(e.target.checked)}
                />
              }
              label="Ativar modo escuro"
            />
          </Grid>

          {/* Notificações */}
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Switch
                  checked={notifications}
                  onChange={(e) => setNotifications(e.target.checked)}
                />
              }
              label="Receber notificações por e-mail"
            />
          </Grid>

          {/* Idioma */}
          <Grid item xs={12}>
            <FormControl fullWidth size="small">
              <InputLabel>Idioma</InputLabel>
              <Select
                value={language}
                label="Idioma"
                onChange={(e) => setLanguage(e.target.value)}
              >
                <MenuItem value="pt">Português</MenuItem>
                <MenuItem value="en">Inglês</MenuItem>
                <MenuItem value="es">Espanhol</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};
