import "./App.css";
import MainPage from "./pages/MainPage";
import { Routes, Route, Link } from "react-router-dom";
import LoginContainer from "./pages/LoginContainer";
import RegisterContainer from "./pages/RegisterContainer";
import HomepageWrapper from "./pages/ComponentsMainPage/HomepageWrapper";
import ResetpassContainer from "./pages/ResetpassContainer";
import AllItemsPage from "./pages/ComponentsMainPage/AllItemsPage";
import CartWrapper from "./pages/CartWrapper";
import AllFavoriteProduct from "./pages/ComponentsMainPage/AllFavoriteProduct";
function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginContainer />}></Route>
        <Route path='/register' element={<RegisterContainer />}></Route>
        <Route path='/resetpass' element={<ResetpassContainer />}></Route>
        <Route path='/' element={<MainPage />}>
          <Route path='/' element={<HomepageWrapper />}></Route>
          <Route path='/all_item' element={<AllItemsPage />}></Route>
          <Route path='/cart' element={<CartWrapper />} />
          <Route path='/favorite' element={<AllFavoriteProduct />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
