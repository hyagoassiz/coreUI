interface IProductPayloadApi {
  id?: string;
  nome: string;
  codigo: string;
  valor: string;
  quantidade: number;
  ativo?: boolean;
  createdAt?: string;
  updatedAt?: string;
}
