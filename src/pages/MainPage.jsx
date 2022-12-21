import NavBarTop from "../components/NavBarTop/NavBarTop";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import React, { useState } from "react";
function MainPage() {
  const [category, setCategory] = useState("");
  const handleSetDefaultCate = () => {
    setCategory("");
  };
  return (
    <>
      <NavBarTop handleSetDefaultCate={handleSetDefaultCate} />
      <div className='background'>
        <Outlet context={[category, setCategory]} />
      </div>
      <Footer />
    </>
  );
}
export default MainPage;
