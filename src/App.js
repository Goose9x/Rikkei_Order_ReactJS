import "./App.css";
import MainPage from "./pages/MainPage";
import { Routes, Route, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomepageWrapper from "./pages/ComponentsMainPage/HomepageWrapper";
import AllItemsPage from "./pages/ComponentsMainPage/AllItemsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/' element={<MainPage />}>
          <Route path='/' element={<HomepageWrapper />}></Route>
          <Route path='/all_item' element={<AllItemsPage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
