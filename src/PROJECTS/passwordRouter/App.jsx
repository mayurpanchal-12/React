import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PasswordProvider } from "./context/PasswordContext";
import Navbar from "./Components/Navbar";
import PassGen from "./Components/PasswordGenerator";
import History from "./Components/History";
import Settings from "./Components/Settings";
export default function App() {
  return (
    <PasswordProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<PassGen />} />
          <Route path="/history" element={<History />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </PasswordProvider>
  );
}
