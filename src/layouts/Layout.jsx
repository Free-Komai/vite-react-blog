import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default function Layout() {
  return (
    <div className="font-sans text-gray-900">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
