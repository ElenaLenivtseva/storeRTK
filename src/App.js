import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/Pages/loginPage/LoginPage";
import ShopPageCollections from "./components/Pages/PageCollections/ShopPageCollections";
import SingleProduct from "./components/Pages/PageSingleProduct/SingleProduct";
import PageFirst from "./components/Pages/homePage/TheFirstPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<LoginPage />} /> */}
          <Route path="/" element={<PageFirst />} />
          <Route path="/singleProduct" element={<SingleProduct />} />
          <Route path="/collections/" element={<ShopPageCollections />} />
        </Routes>
      </BrowserRouter>
      {/* <PageFirst/> */}
      {/* <ShopPageCollections/> */}
    </div>
  );
}

export default App;
