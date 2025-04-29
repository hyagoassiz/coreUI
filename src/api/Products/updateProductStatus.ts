import { getAuth } from "firebase/auth";
import { db } from "../../firebaseConfig";
import { doc, DocumentReference, getDoc, updateDoc } from "firebase/firestore";

export async function updateProductStatus(
  payload: IUpdateCategoryStatusPayloadApi
): Promise<DocumentReference> {
  const { id, ativo } = payload;

  const auth = getAuth();
  const currentUser = auth.currentUser;

  if (!currentUser) {
    throw new Error("Usuário não autenticado.");
  }

  const produtoDocRef = doc(db, "produto", id);
  const produtoSnap = await getDoc(produtoDocRef);

  if (
    !produtoSnap.exists() ||
    produtoSnap.data()?.usuario !== currentUser.uid
  ) {
    throw new Error("Produto não encontrado.");
  }

  const updatedData = {
    ...produtoSnap.data(),
    ativo,
  };

  try {
    await updateDoc(produtoDocRef, updatedData);
    return produtoDocRef;
  } catch (error) {
    console.error("Erro ao alterar a situação do produto:", error);
    throw error;
  }
}
