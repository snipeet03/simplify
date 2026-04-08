"use client";

import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5">
      <h2 className="text-xl font-bold mb-6">Cooperatify</h2>

      <nav className="flex flex-col gap-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/teams">Teams</Link>
        <Link href="/projects">Projects</Link>
      </nav>
    </div>
  );
};

export default Sidebar;