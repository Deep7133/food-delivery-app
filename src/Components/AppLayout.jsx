import { CartProvider } from "../Components/Cartcontext";
import { AuthProvider } from "../context/AuthContext"; 
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <AuthProvider> {/* Wrap inside AuthProvider */}
      <CartProvider> 
        <Header />
        <Outlet />
        <Footer />
      </CartProvider>
    </AuthProvider>
  );
};
