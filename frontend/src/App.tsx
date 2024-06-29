import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import WelcomePage from "./pages/Welcome.page";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
