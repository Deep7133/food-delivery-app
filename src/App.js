import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {AppLayout} from './Components/AppLayout';
import Home from './Pages/Home';
import Restaurants from './Components/Restaurants';
import Dishes from './Components/Dishes';
import Tiffins from './Pages/Tiffins.jsx';
import TiffinsMenu from './Components/TiffinsMenu.jsx';
import Cart from './Pages/Cart';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Signup from "./Pages/Signup";
import Login from "./Pages/Login"; 
import {AuthProvider} from "./context/AuthContext.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/restaurants", element: <Restaurants /> },
      { path: "/dishes", element: <Dishes /> },
      {path : "/tiffins", element: <Tiffins />},
      {path : "/menu", element: <TiffinsMenu />},
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/cart", element: <Cart /> },
      { path: "/signup", element: <Signup /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

const App = () => {
  return (
    <AuthProvider> {/* Wrap the entire app with AuthProvider */}
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
