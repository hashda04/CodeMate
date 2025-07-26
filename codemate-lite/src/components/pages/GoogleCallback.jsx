import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function GoogleCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      try {
        // Call your backend to get user info (based on Google OAuth cookie/session)
        const response = await axios.get("http://localhost:5000/api/auth/success", {
          withCredentials: true, // Important: sends cookies
        });

        console.log("User authenticated:", response.data);
        // You can store user info in context/localStorage here if needed

        navigate("/dashboard");
      } catch (err) {
        console.error("Auth failed", err);
        navigate("/login");
      }
    }

    fetchUser();
  }, [navigate]);

  return <div className="text-center p-10">Logging in via Google...</div>;
}
