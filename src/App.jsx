import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Join from "./pages/Join.jsx";
import OTP from "./pages/OTP.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/join" element={<Join />} />
        <Route exact path="/otp" element={<OTP />} />
      </Routes>
    </Router>
  );
}

export default App;