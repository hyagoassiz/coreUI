import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { getAuth } from "firebase/auth";

export async function getProducts(
  payload?: IProductListPayloadApi
): Promise<IProductResponseApi[]> {
  try {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      throw new Error("Usuário não autenticado.");
    }

    const conditions = [where("usuario", "==", user.uid)];

    if (typeof payload?.ativo === "boolean") {
      conditions.push(where("ativo", "==", payload.ativo));
    }

    const produtosQuery = query(collection(db, "produto"), ...conditions);
    const querySnapshot = await getDocs(produtosQuery);

    const produtos: IProductResponseApi[] = [];

    querySnapshot.forEach((doc) => {
      const produtoData = doc.data() as IProductResponseApi;

      produtos.push({
        id: doc.id,
        nome: produtoData.nome,
        codigo: produtoData.codigo,
        valor: produtoData.valor,
        ativo: produtoData.ativo,
        usuario: produtoData.usuario,
        createdAt: produtoData.createdAt,
        updatedAt: produtoData.updatedAt,
      });
    });

    produtos.sort((a, b) => a.nome.localeCompare(b.nome));

    return produtos;
  } catch (error) {
    console.error("Erro ao obter produtos do usuário:", error);
    throw error;
  }
}
