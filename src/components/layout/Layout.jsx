import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <div className="page-container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Layout;