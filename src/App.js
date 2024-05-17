import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import CartPage from "./components/Cart/CartPage";
import GalleryPage from "./components/GalleryPage";
import ProtectedRoute from "./components/ProtectedRoute";


export function App(){
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/menu" element={<Menu />}/>
      <Route path="/gallery" element={<GalleryPage />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact-us"/>
      <Route path='/cart' element={<CartPage />}/>
    </Routes>
    </>
    )
}

   
    




