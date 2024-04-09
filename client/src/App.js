
import { Routes , Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import Pagenotfound from './pages/Pagenotfound';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './user/Dashboard';
import Privateroutes from './components/routes/Privateroutes';
import Forgotpass from './pages/Forgotpass';
import PotectedRoutes from './components/routes/ProtectedRoutes';
import AdminRoutes from './admin/AdminRoutes';
import Createcetagory from './admin/Createcetagory';
import CreateProduct from './admin/CreateProduct';
import Users from './admin/Users';
import Orders from './user/Orders';
import Profile from './user/Profile';
import Products from './admin/Products';
import Updateproduct from './admin/Updateproduct';
import Search from './pages/Search';
import Porductdetails from './pages/Porductdetails';
import Categories from './pages/Categories';
import Categoryproduct from './pages/Categoryproduct';
import Cartpage from './pages/Cartpage';


function App() {
  return (
     <>
 
 <Routes>
  <Route path='/' element={<Homepage/>} />
   <Route path='/search' element={<Search/>} />
  <Route path='/categories' element={<Categories/>} />
  <Route path='/cart' element={<Cartpage/>} />
  <Route path='/category/:slug' element={<Categoryproduct/>} />
  <Route path='/product/:slug' element={<Porductdetails/>} />
  
  <Route path='/dashboard' element={<Privateroutes />}>
    <Route path='user' element={<Dashboard/>} />
    <Route path='user/orders' element={<Orders/>} />
    <Route path='user/profile' element={<Profile/>} />
  </Route>

  <Route path='/dashboard' element={<PotectedRoutes/>}>
   <Route path='admin' element={<AdminRoutes/>} />
   <Route path='admin/create-category' element={<Createcetagory/>} />
   <Route path='admin/create-product' element={<CreateProduct/>} />
   <Route path='admin/product/:slug' element={<Updateproduct/>} />
   <Route path='admin/products' element={<Products/>} />
   <Route path='admin/users' element={<Users/>} />

</Route>
  <Route path='/about' element={<About/>} />
  <Route path='/register' element={<Register/>} />
  <Route path='/forgot-password' element={<Forgotpass/>} />
  <Route path='/login' element={<Login/>} />
  <Route path='/contact' element={<Contact/>} />
  <Route path='/policy' element={<Policy/>} />
  <Route path='*' element={<Pagenotfound/>} />
  </Routes>         
     </>
     
  );
}
export default App;



