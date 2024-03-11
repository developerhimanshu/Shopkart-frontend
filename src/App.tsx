import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DeskNav from "./components/Navbar/DeskNav";
import MobNav from "./components/Navbar/MobNav";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer/Footer";
import SignUp from "./pages/SignUp";
import Cart from "./components/Cart/Cart";
import SignIn from "./pages/SignIn";
import ShopMen from "./pages/ShopMen";
import ShopWomen from "./pages/ShopWomen";
import ShopKids from "./pages/ShopKids";
const App = () => {
  return (
    <div className="box-border">
      <Router>
        <DeskNav />
        <MobNav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path ="/signup" element={<SignUp/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/account" element={<SignUp/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/men" element={<ShopMen/>}/>
          <Route path="/women" element={<ShopWomen/>}/>
          <Route path="/kids" element={<ShopKids/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
