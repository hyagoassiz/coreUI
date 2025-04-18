import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  Box,
  Avatar,
  Typography,
  Grid,
  Paper,
} from "@mui/material";
import { useState } from "react";

export const ProfileTab: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nome: "",
      email: "",
    },
  });

  const [profileImage, setProfileImage] = useState<string | null>(null);

  const onSubmit = (data: any) => {
    console.log(data);
    console.log("Imagem:", profileImage);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box display="flex" justifyContent="center" mt={4}>
      <Paper elevation={1} sx={{ p: 4, width: "100%", maxWidth: 800 }}>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ width: "100%" }}
        >
          <Grid container spacing={4}>
            {/* Avatar */}
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Box
                component="label"
                sx={{
                  position: "relative",
                  cursor: "pointer",
                  "&:hover .overlay": {
                    opacity: 1,
                  },
                }}
              >
                <Avatar
                  src={profileImage || ""}
                  sx={{
                    width: 120,
                    height: 120,
                    border: "2px solid",
                    borderColor: "primary.main",
                    transition: "0.3s",
                  }}
                />
                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    backgroundColor: "rgba(0,0,0,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: 14,
                    fontWeight: 500,
                    opacity: 0,
                    transition: "opacity 0.3s",
                  }}
                >
                  Alterar
                </Box>
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleImageChange}
                />
              </Box>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="center"
              >
                Clique na foto para alterar
              </Typography>
            </Grid>

            {/* Formulário */}
            <Grid item xs={12} md={8}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    size="small"
                    label="Nome"
                    fullWidth
                    {...register("nome", { required: "Nome é obrigatório" })}
                    error={!!errors.nome}
                    helperText={errors.nome?.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    size="small"
                    label="Email"
                    type="email"
                    fullWidth
                    {...register("email", { required: "Email é obrigatório" })}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                </Grid>
                <Grid item xs={12} sx={{ textAlign: "right", mt: 1 }}>
                  <Button type="submit" variant="contained">
                    Salvar alterações
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};
