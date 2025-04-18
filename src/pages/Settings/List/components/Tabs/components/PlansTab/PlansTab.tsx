import React from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  Chip,
  Divider,
} from "@mui/material";

const plans = [
  {
    id: "free",
    name: "Gratuito",
    price: "R$ 0/mês",
    features: ["1 usuário", "Suporte limitado", "Recursos básicos"],
  },
  {
    id: "pro",
    name: "Profissional",
    price: "R$ 39/mês",
    features: ["5 usuários", "Suporte prioritário", "Relatórios avançados"],
  },
  {
    id: "enterprise",
    name: "Empresarial",
    price: "R$ 99/mês",
    features: [
      "Usuários ilimitados",
      "Suporte premium",
      "Integrações personalizadas",
    ],
  },
];

const currentPlanId = "pro";

export const PlansTab: React.FC = () => {
  return (
    <Box mt={4}>
      <Typography variant="h6" fontWeight={500} mb={2}>
        Seu plano atual
      </Typography>

      <Paper
        variant="outlined"
        sx={{
          p: 3,
          mb: 4,
          borderColor: "primary.main",
          backgroundColor: "primary.light",
        }}
      >
        <Typography variant="subtitle1" fontWeight={600}>
          Plano Profissional
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Você está usando o plano Profissional com todos os recursos ativos.
        </Typography>
        <Chip label="Plano atual" color="primary" size="small" sx={{ mt: 1 }} />
      </Paper>

      <Typography variant="h6" fontWeight={500} mb={2}>
        Outros planos disponíveis
      </Typography>

      <Grid container spacing={3}>
        {plans
          .filter((plan) => plan.id !== currentPlanId)
          .map((plan) => (
            <Grid item xs={12} md={6} key={plan.id}>
              <Paper variant="outlined" sx={{ p: 3, height: "100%" }}>
                <Typography variant="subtitle1" fontWeight={600}>
                  {plan.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  {plan.price}
                </Typography>

                <Divider sx={{ my: 1 }} />

                <Box sx={{ mb: 2 }}>
                  {plan.features.map((feature, index) => (
                    <Typography
                      key={index}
                      variant="body2"
                      color="text.secondary"
                    >
                      • {feature}
                    </Typography>
                  ))}
                </Box>

                <Button variant="outlined" size="small" fullWidth>
                  Mudar para {plan.name}
                </Button>
              </Paper>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};
