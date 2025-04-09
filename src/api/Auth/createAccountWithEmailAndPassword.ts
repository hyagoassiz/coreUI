import { createUserWithEmailAndPassword, UserCredential } from "firebase/auth";

export async function createAccountWithEmailAndPassword({
  auth,
  email,
  password,
}: ILoginApi): Promise<UserCredential> {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential;
  } catch (error) {
    console.error("Erro ao criar conta:", error);
    throw error;
  }
}
