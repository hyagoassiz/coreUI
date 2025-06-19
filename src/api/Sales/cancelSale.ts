import { getAuth } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

export async function cancelSale(idSale: string): Promise<void> {
  const auth = getAuth();
  const currentUser = auth.currentUser;

  if (!currentUser) {
    throw new Error("Usuário não está autenticado.");
  }

  const newStatus: IStatusSaleApi = { id: "CANCELADO", nome: "Cancelado" };

  try {
    const saleRef = doc(db, "venda", idSale);
    await updateDoc(saleRef, { status: newStatus });
  } catch (error) {
    console.error("Erro ao cancelar venda:", error);
    throw error;
  }
}
