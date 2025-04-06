import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";

export async function loginWithEmailAndPassword({
  auth,
  email,
  password,
}: ILoginApi): Promise<UserCredential> {
  return await signInWithEmailAndPassword(auth, email, password);
}
