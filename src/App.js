import "./App.css";
import React, { useState, useEffect } from "react";
import MainPage from "./pages/MainPage";
import { Routes, Route } from "react-router-dom";
import LoginContainer from "./pages/LoginContainer";
import RegisterContainer from "./pages/RegisterContainer";
import HomepageWrapper from "./pages/ComponentsMainPage/HomepageWrapper";
import ResetpassContainer from "./pages/ResetpassContainer";
import AllItemsPage from "./pages/ComponentsMainPage/AllItemsPage";
import CartWrapper from "./pages/CartWrapper";
import AllFavoriteProduct from "./pages/ComponentsMainPage/AllFavoriteProduct";
import ItemDetail from "./pages/ComponentsMainPage/ItemDetail";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
function App() {
  const [cookies, setCookie, removeCookie] = useCookies(["loginCookie"]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://127.0.0.1:3000/cart/${cookies.userId}`);
      const data = await res.json();
      console.log(data.cartCounter);
    };
    fetchData().catch(console.error);
  }, []);
  const handleAddingCart = (e) => {
    if (Object.keys(cookies).length === 0) {
      window.location.href = "http://localhost:8000/login";
    } else {
      console.log(cookies.userId);
      console.log(e.target.id);
      const settingsPost = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: cookies.userId,
          productId: e.target.id,
          id: Math.floor(Math.random() * 999999),
        }),
      };
      const fetchData = async () => {
        const res = await fetch("http://127.0.0.1:3000/cart", settingsPost);
        const data = await res.json();
        console.log(data);
      };
      fetchData().catch(console.error);
      toast.success("Thêm vào giỏ hàng thành công", {
        autoClose: 1000,
        hideProgressBar: true,
      });
    }
  };
  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginContainer />}></Route>
        <Route path='/register' element={<RegisterContainer />}></Route>
        <Route path='/resetpass' element={<ResetpassContainer />}></Route>
        <Route path='/' element={<MainPage />}>
          <Route path='/' element={<HomepageWrapper />}></Route>
          <Route
            path='/all_item'
            element={<AllItemsPage handleAddingCart={handleAddingCart} />}
          ></Route>
          <Route path='/cart' element={<CartWrapper />} />
          <Route path='/favorite' element={<AllFavoriteProduct />}></Route>
          <Route path='/item' element={<ItemDetail />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
