import { useState } from "react";
import "../../styles/SignupPage.css";


export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    skills: "",
    bio: "",
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Create Your Account
        </h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="input-style"
              value={formData.name}
            />
            <input
              type="email"
              placeholder="Email"
              className="input-style"
              value={formData.email}
            />
            <input
              type="password"
              placeholder="Password"
              className="input-style"
              value={formData.password}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="input-style"
              value={formData.confirmPassword}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select className="input-style" value={formData.role}>
              <option value="">Select Role</option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="Product Manager">Product Manager</option>
            </select>
            <input
              type="text"
              placeholder="Skillset (e.g. React, Node, UI/UX)"
              className="input-style"
              value={formData.skills}
            />
          </div>

          <textarea
            placeholder="Short Bio"
            className="input-style h-24"
            value={formData.bio}
          />

          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition"
          >
            Create Account
          </button>
        </form>

        <p className="text-sm text-gray-500 text-center mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-black font-semibold">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
