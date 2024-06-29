import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import WelcomePage from "./pages/Welcome.page";
import HomePage from "./pages/Home.page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
