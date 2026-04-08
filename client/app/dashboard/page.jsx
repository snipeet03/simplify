"use client";

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2>Total Projects</h2>
          <p className="text-xl font-bold">5</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2>Total Tasks</h2>
          <p className="text-xl font-bold">20</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2>Completed</h2>
          <p className="text-xl font-bold">12</p>
        </div>
      </div>
    </div>
  );
}