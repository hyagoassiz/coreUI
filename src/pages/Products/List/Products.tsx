import { Button } from "@mui/material";
import { columns } from "./constants/constants";
import { mountData } from "./utils/mountData";
import { Add } from "@mui/icons-material";
import { useMemo } from "react";
import useSearchBar from "../../../hooks/useSearchBar";
import { PageTitle } from "../../../components/PageTitle";
import { ToolbarContainer } from "../../../components/ToolbarContainer";
import { DataTable } from "../../../components/DataTable/DataTable";
import { ModalCadastrarProduto } from "./components/ModalCadastrarProduto/ModalCadastrarProduto";

export const Products: React.FC = () => {
  const { searchBar, textoBusca } = useSearchBar({
    placeHolder: "Pesquisar produto",
  });

  const productsData = [
    { id: 1, nome: "Produto 1" },
    { id: 2, nome: "Produto 2" },
    { id: 3, nome: "Produto 3" },
    { id: 4, nome: "Produto 4" },
    { id: 5, nome: "Produto 5" },
    { id: 6, nome: "Produto 6" },
    { id: 7, nome: "Produto 7" },
    { id: 8, nome: "Produto 8" },
    { id: 9, nome: "Produto 9" },
    { id: 10, nome: "Produto 10" },
    { id: 11, nome: "Produto 11" },
  ];

  const products = useMemo(() => {
    if (textoBusca !== "") {
      return productsData?.filter((categoria) =>
        categoria.nome.toLowerCase().includes(textoBusca.toLowerCase())
      );
    } else {
      return productsData;
    }
  }, [productsData, textoBusca]);

  return (
    <>
      <PageTitle title="Produtos" subTitle="Gerencie os seus produtos" />

      <ToolbarContainer
        buttons={
          <Button startIcon={<Add />} variant="contained" color="primary">
            Adicionar
          </Button>
        }
        searchBar={searchBar}
      />

      <DataTable
        columns={columns}
        data={mountData({ products })}
        textForEmptyData="Nenhum produto encontrado."
      />

      {/* <ModalCadastrarProduto /> */}
    </>
  );
};
