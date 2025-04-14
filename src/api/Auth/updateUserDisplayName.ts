import { getAuth, updateProfile } from "firebase/auth";

export async function updateUserDisplayName(
  displayName: string
): Promise<void> {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    throw new Error("Usuário não autenticado!");
  }

  if (displayName) {
    await updateProfile(user, { displayName });
  }
}
