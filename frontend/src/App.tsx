import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import WelcomePage from "./pages/Welcome.page";
import HomePage from "./pages/Home.page";
import CategoryPage from "./pages/Category.page";
import AddNewPage from "./pages/AddNew.page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/:category" element={<CategoryPage />}></Route>
          <Route path="/:category/add" element={<AddNewPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
