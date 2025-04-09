import { Auth, sendEmailVerification } from "firebase/auth";

export async function sendEmailVerificationToUser({
  currentUser,
}: Auth): Promise<void> {
  try {
    const userCredential = await sendEmailVerification(currentUser!);
    return userCredential;
  } catch (error) {
    console.error("Erro ao enviar email de verificação:", error);
    throw error;
  }
}
