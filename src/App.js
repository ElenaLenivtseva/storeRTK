import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/Pages/loginPage/LoginPage";
import ShopPageCollections from "./components/Pages/PageCollections/ShopPageCollections";
import SingleProduct from "./components/Pages/PageSingleProduct/SingleProduct";
import PageAccount from "./components/Pages/AccountPage/PageAccount";
import PageFirst from "./components/Pages/homePage/TheFirstPage";
import PageCategories from "./components/Pages/PageCategories/PageCategories";
import PageWishlist from "./components/Pages/PageWishlist/PageWishlist";
import CartPage from "./components/Pages/CartPage/CartPage";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<PageFirst />} />
          <Route path="/categories" element={<PageCategories />} />
          <Route path="/wishlist" element={<PageWishlist/>} />
          <Route path="/singleProduct" element={<SingleProduct />} />
          <Route path="/collections/" element={<ShopPageCollections />} />
          <Route path="/account" element={<PageAccount/>} />
          <Route path="/cart" element={<CartPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
