import "./App.css";
import MainPage from "./pages/MainPage";
import { Routes, Route, Link } from "react-router-dom";
import LoginContainer from "./pages/LoginContainer";
import RegisterContainer from "./pages/RegisterContainer";
import HomepageWrapper from "./pages/ComponentsMainPage/HomepageWrapper";
import AllItemsPage from "./pages/ComponentsMainPage/AllItemsPage";
function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginContainer />}></Route>
        <Route path='/register' element={<RegisterContainer />}></Route>
        <Route path='/' element={<MainPage />}>
          <Route path='/' element={<HomepageWrapper />}></Route>
          <Route path='/all_item' element={<AllItemsPage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
