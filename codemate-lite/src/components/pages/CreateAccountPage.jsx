import React from "react";
import { Link } from "react-router-dom";

export default function CreateAccountPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-violet-100 px-6 py-12 text-gray-800 font-playful">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-2xl p-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-violet-700">
          Create Your Account
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-10">
          This is a placeholder page for account creation.
        </p>

        <Link
          to="/"
          className="bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all inline-block"
        >
          ⬅ Back to Home
        </Link>
      </div>
    </div>
  );
}
