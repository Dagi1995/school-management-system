import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Homepage() {
  const { userId, sessionClaims } = await auth();
  
  if (!userId) {
    redirect("/sign-in");
  }

  const role = (sessionClaims?.metadata as { role?: string })?.role;
  
  if (role) {
    redirect(`/${role}`);
  }

  // Fallback if role is not defined
  redirect("/sign-in");
}
