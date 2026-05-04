export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      <aside className="w-72 bg-white border-r p-6">
        <h1 className="text-2xl font-bold tracking-tight">▲ Alizah</h1>
        <p className="text-sm text-slate-500 mb-8">Service Portal</p>

        <nav className="space-y-3 text-sm">
          <div className="font-medium">Dashboard</div>
          <div>Maintenance Reports</div>
          <div>Schedule</div>
          <div>Customers</div>
          <div>Equipment</div>
          <div>Spareparts</div>
          <div>Analytics</div>
          <div>Users</div>
          <div>Settings</div>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <h2 className="text-3xl font-semibold">
          Welcome to Alizah Service Portal
        </h2>
        <p className="text-slate-500 mt-2">
          ASP-2026-0001
        </p>
      </main>
    </div>
  );
}