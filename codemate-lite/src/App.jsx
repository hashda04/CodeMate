import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignupPage";
import CreateAccountPage from "./components/pages/CreateAccountPage";
import GoogleCallback from "./components/pages/GoogleCallback";

// ✅ Add this import
import DashboardLayout from "./components/dashboard/DashboardLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/create-account" element={<CreateAccountPage />} />
      <Route path="/auth/google/callback" element={<GoogleCallback />} />
      
      {/* ✅ Fixes your issue */}
      <Route path="/dashboard" element={<DashboardLayout />} />
    </Routes>
  );
}

export default App;
