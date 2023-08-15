import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Cards from './components/Cards';
import RouteLayout from './components/RouteLayout';
import Wallet from './components/Wallet';
import Contact from './components/Contact';
import Profile from './components/Profile';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RouteLayout />}>
    <Route index element={<Dashboard />}></Route>
    <Route path="/cart" element={<Cards />}></Route>
    <Route path='/contact' element={<Contact />}></Route>
    <Route path='/profile' element={<Profile />}></Route>
<Route path="/wallet" element={<Wallet />} /></Route>
  ))
  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
