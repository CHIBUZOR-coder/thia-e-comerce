import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbarr";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
