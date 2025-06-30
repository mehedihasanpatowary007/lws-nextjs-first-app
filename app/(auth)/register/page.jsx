"use client";

import { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
  };

  return (
   <div className="w-full h-screen place-items-center place-content-center">
     <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Register</h2>

      <input type="text" name="name" placeholder="Name" required className="w-full mb-3 p-2 border rounded"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })} />

      <input type="email" name="email" placeholder="Email" required className="w-full mb-3 p-2 border rounded"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })} />

      <input type="password" name="password" placeholder="Password" required className="w-full mb-4 p-2 border rounded"
        onChange={(e) => setFormData({ ...formData, password: e.target.value })} />

      <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
        Register
      </button>
    </form>
   </div>
  );
};

export default RegisterForm;
