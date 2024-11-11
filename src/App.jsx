import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoteBook from "./pages/NoteBook";
import Planners from "./pages/Planners";
import Notepads from "./pages/Notepads";
import StickyNotes from "./pages/StickyNotes";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import { useState } from "react";
import LogIn from "./pages/LogIn";
import { Toaster } from "react-hot-toast";
function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/shop/Notebooks"
            element={<NoteBook cart={cart} setCart={setCart} />}
          />
          <Route
            path="/shop/Planners"
            element={<Planners cart={cart} setCart={setCart} />}
          />
          <Route
            path="/shop/Notepads"
            element={<Notepads cart={cart} setCart={setCart} />}
          />
          <Route
            path="/shop/Sticky Notes"
            element={<StickyNotes cart={cart} setCart={setCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
          <Route path="/login" element={<LogIn />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
