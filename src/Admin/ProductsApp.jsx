import { Outlet } from "react-router-dom";
import AdminNav from "./AdminNav";
import ANavbar from "./ANavbar";

const ProductsApp = () => {
  return (
    <div className="flex ">
      <div className="md:w-[20%] w-[30%] hidden md:block">
        <AdminNav />
      </div>
      <div className="md:w-[80%] w-[100%]  overflow-x-auto">
        <ANavbar />
        <Outlet />
      </div>
    </div>
  );
};

export default ProductsApp;
