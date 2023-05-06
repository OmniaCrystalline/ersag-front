/** @format */

import { Route, Routes, Navigate } from "react-router-dom";
import { Layout } from "./pages/Layout.js";
import { ProductsPage } from "./pages/ProductsPage.js";
import { WishListPage } from "./pages/WishListPage.js";
import { BasketPage } from "./pages/BasketPage.js";
import { HistoryPage } from "./pages/HistoryPage.js";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index path='/products' element={<ProductsPage />} />
          <Route path='/wishlist' element={<WishListPage />} />
          <Route path='/basket' element={<BasketPage />} />
          <Route path='/history' element={<HistoryPage />} />
          <Route path='/' element={<Navigate to='/products' replace />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
