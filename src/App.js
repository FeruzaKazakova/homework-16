import Header from "./components/Header";
import { Route, Routes, useNavigate } from "react-router-dom";
import Products from './pages/Products'
import MyCart from './pages/MyCart'
import MyOrders from './pages/MyOrders'
import ProductDetails from "./pages/ProductDetails";
import Button from "./UI/Button";

function App() {
  const navigatee = useNavigate()

  return (
    <div>
      <Header/>

    <Routes>
    <Route path="/" element={<Products/>}/>
      <Route path="/homework-16" element={<Products/>}/>

      <Route path="/products" element={<Products/>} />        

      <Route path="/products/:id/details" element={<ProductDetails/>} />

      <Route path="/myCart" element={<MyCart/>}/>
      <Route path="/myOrders" element={<MyOrders/>}/>

    </Routes>

    <Button navigatee={navigatee}>Go back</Button>
    </div>
  );
}

export default App;
