import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landing/LandingPage";
import MatchingPage from "../pages/matching/MatchingPage";
import SignUp from "../pages/signup";
import Login from '../pages/login';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/matching" element={<MatchingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
