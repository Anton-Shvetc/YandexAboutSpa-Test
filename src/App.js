import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./pages/AboutPage";

// import useToken from "./components/useToken";
import Navigation from "./components/Navigation";
import NotFoundPage404 from "./pages/NotFoundPage404";
import HomePage from "./pages/HomePage";
import OptionalInfo from "./pages/OptionalInfo";
import LoginPage from "./pages/LoginPage";

function App() {
  // const { token, setToken } = useToken();
  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }

  return (
    <div className="wrapper">
      <BrowserRouter>
        <header>
          <h1>ЯП Тест</h1>
          <Navigation />
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/optional" element={<OptionalInfo />} />
          <Route path="*" element={<NotFoundPage404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
