import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./Components/Layout";
import Shop from "./pages/Shop";
import Error from "./pages/Error";
import ProductDetails from "./pages/ProductDetails";
import  Cart from "./pages/Cart";
let rout = createBrowserRouter(
  createRoutesFromChildren(
    <>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop/>}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Route>
      <Route path="*" element={<Error />}></Route>
    </>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={rout}></RouterProvider>
    </>
  );
}

export default App;
