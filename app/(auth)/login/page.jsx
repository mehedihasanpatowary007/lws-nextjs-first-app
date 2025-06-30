"use client"

import { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in:", formData);
    // Add API call or validation logic here
  };

  return (
   <div className="w-full h-screen place-items-center place-content-center">
     <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

      <label className="block mb-3">
        Email:
        <input
          type="email"
          name="email"
          className="w-full mt-1 p-2 border rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label className="block mb-4">
        Password:
        <input
          type="password"
          name="password"
          className="w-full mt-1 p-2 border rounded"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Login
      </button>
    </form>
   </div>
  );
};

export default LoginForm;
