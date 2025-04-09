import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";

export async function loginWithEmailAndPassword({
  auth,
  email,
  password,
}: ILoginApi): Promise<UserCredential> {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential;
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    throw error;
  }
}
