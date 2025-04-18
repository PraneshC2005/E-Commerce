import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_bannner from './Components/Assets/banner_mens.png';
import women_bannner from './Components/Assets/banner_women.png';
import kid_bannner from './Components/Assets/banner_kids.png';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/mens" element={<ShopCategory banner={men_bannner} category="men"/>}/>
        <Route path="/womens" element={<ShopCategory banner={women_bannner} category="women"/>}/>
        <Route path="/kids" element={<ShopCategory banner={kid_bannner} category="kid"/>}/>
        <Route path="/product/:productid" element={<Product />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
