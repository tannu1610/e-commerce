import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/e-commerce' element={<Shop />} />
          <Route path='/e-commerce/mens' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/e-commerce/womens' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/e-commerce/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path='/e-commerce/product' element={<Product />} >
            <Route path='/e-commerce/:productId' element={<Product />} />
          </Route>
          <Route path='/e-commerce/cart' element={<Cart />} />
          <Route path='/e-commerce/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
