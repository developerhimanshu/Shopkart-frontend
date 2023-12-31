import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DeskNav from "./components/Navbar/DeskNav";
import MobNav from "./components/Navbar/MobNav";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <div className="box-border">
      <Router>
        <DeskNav />
        <MobNav />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
