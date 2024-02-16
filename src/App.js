import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Dashboard from './components/Dashboard';
import RootLayout from './components/RootLayout';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Dashboard />}/>
      <Route path="/cart" element={<Cart />}/>
    </Route>
  ));
  return (
    <div className="App">
      <RouterProvider router={router}/>
     {/* <Product/> */}
    </div>
  );
}

export default App;
