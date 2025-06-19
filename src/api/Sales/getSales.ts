import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { getAuth } from "firebase/auth";
import dayjs from "dayjs";

export async function getSales(
  payload?: IProductListPayloadApi
): Promise<ISaleResponseApi[]> {
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

    const vendasQuery = query(collection(db, "venda"), ...conditions);
    const querySnapshot = await getDocs(vendasQuery);

    const vendas: ISaleResponseApi[] = [];

    querySnapshot.forEach((doc) => {
      const vendaData = doc.data() as ISaleResponseApi;

      vendas.push({
        id: doc.id,
        data: vendaData.data,
        valorTotal: vendaData.valorTotal,
        status: vendaData.status,
        createdAt: vendaData.createdAt,
        updatedAt: vendaData.updatedAt,
      });
    });

    vendas.sort((a, b) => {
      const dataA = dayjs(a.data);
      const dataB = dayjs(b.data);

      if (dataA.isAfter(dataB)) return -1;
      if (dataA.isBefore(dataB)) return 1;

      const createdAtA = dayjs(a.createdAt);
      const createdAtB = dayjs(b.createdAt);

      if (createdAtA.isAfter(createdAtB)) return -1;
      if (createdAtA.isBefore(createdAtB)) return 1;

      return 0;
    });

    return vendas;
  } catch (error) {
    console.error("Erro ao obter vendas do usuário:", error);
    throw error;
  }
}
