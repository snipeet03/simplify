"use client";

import { useState } from "react";
import axios from "@/lib/axios";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleLogin = async () => {
    await axios.post("/auth/login", form);
    window.location.href = "/dashboard";
  };

  return (
    <div className="p-10">
      <input
        placeholder="Email"
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}