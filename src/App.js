/** @format */
import "./App.css";
import {
  Route, Routes,
} from "react-router-dom";
import  Layout  from "./pages/Layout.js";
import  ProductsPage  from "./pages/ProductsPage.js";
import  WishListPage  from "./pages/WishListPage.js";
import  BasketPage  from "./pages/BasketPage.js";
import  HistoryPage  from "./pages/HistoryPage.js";
import SingleProductPage from "./pages/SingleProductPage.js";


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<ProductsPage />}></Route>
          <Route path=':id' element={<SingleProductPage />} />
          <Route path='wishlist' element={<WishListPage />} />
          <Route path='basket' element={<BasketPage />} />
          <Route path='history' element={<HistoryPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
