import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landing/LandingPage";
import MatchingPage from "../pages/matching/MatchingPage";
import SignUp from "../pages/signup";
import Login from "../pages/login";
import SchedulePage from "../pages/schedule/SchedulePage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/matching" element={<MatchingPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
