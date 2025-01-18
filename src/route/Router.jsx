import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landing/LandingPage";
import MatchingPage from "../pages/matching/MatchingPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/matching" element={<MatchingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
