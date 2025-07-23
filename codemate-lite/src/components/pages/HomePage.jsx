import { Link } from "react-router-dom";
import "../../styles/HomePage.css";

export default function HomePage() {
  return (
    <div className="homepage-container relative">
      
      {/* Logo in Top-Left */}
      <img 
        src="/Logo.png" 
        alt="CodeMate Logo" 
        className="absolute top-6 left-6 w-28 h-auto"
      />

      <div className="homepage-wrapper">
        <div className="homepage-text">
          <h1 className="homepage-title">
            Welcome to <span className="highlight">CodeMate</span>
          </h1>
          <p className="homepage-subtext">
            Your ultimate collaborative coding workspace. Build faster, smarter, and together – all in one sleek, intuitive platform.
          </p>

          <div className="button-group">
            <Link to="/login" className="btn btn-violet">Login</Link>
            <Link to="/signup" className="btn btn-blue">Sign Up</Link>
            <Link to="/create-account" className="btn btn-outline">Create Account</Link>
          </div>
        </div>

        <div className="homepage-illustration">
          <img 
            src="/Image.png" 
            alt="Coding Team Illustration" 
            className="illustration-img" 
          />
        </div>
      </div>
    </div>
  );
}
