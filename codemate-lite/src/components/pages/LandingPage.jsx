// src/components/pages/LandingPage.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/LandingPage.css";

export default function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home"); // Redirect after 4 seconds
    }, 4000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="landing-wrapper">
      <video
        className="logo-video"
        src="/logo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
}
