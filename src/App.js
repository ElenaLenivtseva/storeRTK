import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/Pages/loginPage/LoginPage";
import ShopPageCollections from "./components/Pages/PageCollections/ShopPageCollections";
import SingleProduct from "./components/Pages/PageSingleProduct/SingleProduct";
import PageFirst from "./components/Pages/homePage/TheFirstPage";
import PageWishlist from "./components/Pages/wishlistPage/PageWishlist";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<PageFirst />} />
          <Route path="/wishlist" element={<PageWishlist/>} />
          <Route path="/singleProduct" element={<SingleProduct />} />
          <Route path="/collections/" element={<ShopPageCollections />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
