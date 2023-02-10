import Header from "./components/Header";
import { Route, Routes, useNavigate } from "react-router-dom";
import Products from './pages/Products'
import MyCart from './pages/MyCart'
import MyOrders from './pages/MyOrders'
import { useState } from "react";
import ProductDetails from "./pages/ProductDetails";
import Button from "./UI/Button";
import { Card } from "./components/Card";

function App() {
  const [state, setState] = useState(false)
  const navigatee = useNavigate()

  const submitHandler = () => {
    setState((prev) => !prev)
  }

  return (
    <div>
      <Header/>

    <Routes>
      <Route path="/" element={<Card><h1 style={{textAlign:"center"}}>welcome</h1></Card>}/>

      <Route path="/products" element={<Products onSubmitHandler={submitHandler}/>} />        

      <Route path="/products/:id/details" element={<ProductDetails/>} />

      <Route path="/myCart" element={<MyCart/>}/>
      <Route path="/myOrders" element={<MyOrders/>}/>

      <Route path="*" element={<Card><h1 style={{textAlign:"center"}}>page not found</h1></Card>}/>
    </Routes>

    <Button navigatee={navigatee}>Go back</Button>
    </div>
  );
}

export default App;
