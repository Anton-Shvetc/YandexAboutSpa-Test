import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Navigation from "./components/Navigation";
import NotFoundPage404 from "./pages/NotFoundPage404";
import HomePage from "./pages/HomePage";
import OptionalInfoPage from "./pages/OptionalInfoPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <header>
          <Navigation />
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/optional" element={<OptionalInfoPage />} />
          <Route path="*" element={<NotFoundPage404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
