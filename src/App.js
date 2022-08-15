import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import ProductComponent from "./Components/ProductComponent";
import ProductDetails from "./Components/ProductDetails";
import ProductPage from "./Components/ProductListing";

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route element={<ProductPage/>} path="/" exact/>
        <Route element = {<ProductDetails/>} path="/product/:productId"/>
        <Route>404 Not Found</Route>
      </Routes>
    </>
  );
}

export default App;
