import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">Welcome, {session.user?.email}</h1>
      <p className="mt-4 text-gray-600">You are now logged in.</p>
    </div>
  );
}
