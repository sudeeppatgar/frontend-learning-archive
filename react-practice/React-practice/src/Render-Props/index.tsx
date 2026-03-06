import { BrowserRouter, Routes, Route } from "react-router-dom";
import PropHomePage from "./pages/PropHomePage";
import PropwithAboutPage from "./pages/PropAboutPage";
import PropProfilePage from "./pages/PropProfilePage";

function PropRender() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PropHomePage />} />
        <Route path="/about" element={<PropwithAboutPage />} />
        <Route path="/profile" element={<PropProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PropRender;
