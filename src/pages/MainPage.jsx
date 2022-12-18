import NavBarTop from "../components/NavBarTop/NavBarTop";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
function MainPage() {
  return (
    <>
      <NavBarTop />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainPage;
