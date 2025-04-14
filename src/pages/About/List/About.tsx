import { Typography } from "@mui/material";
import { PageTitle } from "../../../components/PageTitle";

export const About: React.FC = () => (
  <>
    <PageTitle title="Sobre" subTitle="O que é o CoreUI?" />

    <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
      O <strong>CoreUI</strong> é um projeto base desenvolvido em React com o
      objetivo de acelerar a criação de aplicações web, oferecendo uma estrutura
      inicial sólida, responsiva e reutilizável.
    </Typography>

    <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
      Ele reúne exemplos práticos de componentes comuns como tabelas,
      formulários, páginas de autenticação, layout com menu lateral, título de
      página e muito mais.
    </Typography>

    <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
      Além da estrutura visual, o projeto também demonstra como lidar com
      persistência de dados, utilizando o <strong>cadastro de produtos</strong>{" "}
      como caso de uso principal — permitindo adicionar, editar e remover
      produtos com informações como nome, categoria, preço e status.
    </Typography>

    <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
      Este projeto pode ser usado como um ponto de partida para novos sistemas,
      especialmente aqueles que exigem um painel administrativo ou dashboard
      funcional, com foco em <strong>produtividade</strong>,{" "}
      <strong>padronização</strong> e <strong>boas práticas</strong> com React e
      Material UI.
    </Typography>
  </>
);
