import {
  addDoc,
  collection,
  doc,
  DocumentReference,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { getAuth } from "firebase/auth";

export async function postProduct(
  payload: IProductPayloadApi
): Promise<DocumentReference> {
  const auth = getAuth();
  const currentUser = auth.currentUser;

  if (!currentUser) {
    throw new Error("Usuário não está autenticado.");
  }

  const usuario = currentUser.uid;
  const { id, ...updateData } = payload;

  try {
    if (id) {
      const contaRef = doc(db, "produto", id);
      await updateDoc(contaRef, updateData);
      return contaRef;
    } else {
      const newDocRef = await addDoc(collection(db, "produto"), {
        ...updateData,
        usuario,
      });
      return newDocRef;
    }
  } catch (error) {
    console.error("Erro ao persistir produto:", error);
    throw error;
  }
}
