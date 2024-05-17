import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbarr";

function App() {


  return (
    <>
      <div>
  
        <Outlet />
      </div>
    </>
  );
}

export default App;