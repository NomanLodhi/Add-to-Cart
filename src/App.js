import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import { Provider } from 'react-redux';
import store from './Store/store'
import ProductsModal from './Components/ProductsModal';
function App() {
  return (
    <div >
  <Provider store={store}>
  <BrowserRouter>
  <ProductsModal/>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
  </Provider>
    </div>
  );
}

export default App;
