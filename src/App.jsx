import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { useSelector } from "react-redux";



import {
  BrowserRouter,
  Routes,
  Route,
  Redirect,
  Navigate
} from "react-router-dom";



const App = () => {

  const user = useSelector(state=>state.user.currentUser);
  


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/products/:category" element={<ProductList/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/login" element={ user? <Navigate to ="/" /> : <Login/>}/>
        <Route path="/register" element={user? <Navigate to ="/" /> :<Register/>}/>
        <Route path="/cart" element={<Cart/>}/>
        
      </Routes>
    </BrowserRouter>


  );
};

export default App;