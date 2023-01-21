import AuthenticatedLayout from "../layouts/AuthenticatedLayout";

export default function Dashboard() {
  return (
    <AuthenticatedLayout>
      <p className="m-4 text-2xl font-extrabold">Dashboard</p>
    </AuthenticatedLayout>
  );
}
