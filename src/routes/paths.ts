const PROJETO = {
  LIST: "/core-ui",
};

export const AUTH = {
  LOGIN: `${PROJETO.LIST}/login`,
  CREATE: `${PROJETO.LIST}/criar-conta`,
  INFO: `${PROJETO.LIST}/info`,
  VERIFICATION: `${PROJETO.LIST}/verificacao`,
};

export const DASHBOARD = {
  LIST: `${PROJETO.LIST}/dashboard`,
};

export const SALES = {
  LIST: `${PROJETO.LIST}/vendas`,
  REGISTER: `${PROJETO.LIST}/vendas/nova`,
  EDIT: `${PROJETO.LIST}/vendas/venda/:id`,
};

export const PRODUCTS = {
  LIST: `${PROJETO.LIST}/produtos`,
};

export const ABOUT = {
  LIST: `${PROJETO.LIST}/sobre`,
};

export const SETTINGS = {
  LIST: `${PROJETO.LIST}/configuracoes`,
};
