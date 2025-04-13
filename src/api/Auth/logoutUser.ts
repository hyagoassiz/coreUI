import { getAuth, signOut } from "firebase/auth";

export async function logoutUsuario(): Promise<void> {
  const auth = getAuth();

  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
    throw error;
  }
}
