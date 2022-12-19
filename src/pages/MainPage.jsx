import NavBarTop from "../components/NavBarTop/NavBarTop";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Cookies from "js-cookie";
function MainPage() {
  console.log(Cookies.get("userId"));
  return (
    <>
      <NavBarTop />
      <div className='background'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default MainPage;
