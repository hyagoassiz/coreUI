import { DataTable } from "../../components/DataTable/DataTable";
import { PageTitle } from "../../components/PageTitle";
import { columns } from "./constants/constants";
import { mountData } from "./utils/mountData";

export const Products: React.FC = () => {
  const products = [
    { id: 1, nome: "Produto 1" },
    { id: 2, nome: "Produto 2" },
    { id: 3, nome: "Produto 3" },
    { id: 4, nome: "Produto 4" },
  ];

  return (
    <>
      <PageTitle title="Produtos" subTitle="Gerencie os seus produtos" />

      <DataTable
        columns={columns}
        data={mountData({ products })}
        textForEmptyData="Nenhum produto encontrado."
      />
    </>
  );
};
