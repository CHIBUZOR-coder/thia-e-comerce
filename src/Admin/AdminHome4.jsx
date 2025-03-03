import { useContext } from "react";
import { DataContext } from "../Components/DataContext";

const AdminHome4= () => {
  const { lightMode, Allproducts } = useContext(DataContext);
  console.log(Allproducts);
  const selected = Allproducts.filter(
    (prod) => prod.id >= 68 
  );

  const links = [
    { id: 1, path: "/Admin" },
    { id: 2, path: "/Admin/AdminHome2" },
    { id: 3, path: "/Admin/AdminHome3" },
    { id: 4, path: "/Admin/AdminHome4" },
  ];
  return (
    <div
      className={`${
        lightMode
          ? "bg-[url('/images/admin.jpg')]"
          : "bg-[url('/images/adark.jpg')]"
      } w-full flex justify-center items-center p-3 bg-center bg-cover`}
    >
      {/* Scrollable container for the table */}
      <div className="w-full overflow-x-auto flex justify-start md:justify-center   ">
        <table
          className={`min-w-[800px]  ${
            lightMode ? " bg-pink1" : "bg-AnavDark2"
          } text-gray-500 mt-2 `}
        >
          <thead>
            <tr
              className={`${lightMode ? "lightModeTh_tr " : "darkModeTh_tr"}`}
            >
              <th>id</th>
              <th>Brand</th>
              <th>Style</th>
              <th>Price</th>
              <th>Size</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Image</th>
            </tr>
          </thead>

          <tbody>
            {selected.map((item) => (
              <tr
                key={item.id}
                className={`${
                  lightMode ? "lightMode" : "darkMode"
                } font-semibold`}
              >
                <td>{item.id}</td>
                <td>{item.brand}</td>
                <td>{item.style}</td>
                <td>{item.price}</td>
                <td>{item.size}</td>
                <td>2</td>
                <td>{item.status}</td>
                <td className="flex justify-center items-center">
                  <img
                    src={`${item.image}`}
                    alt={item.image}
                    className="h-[50px] w-[40px] object-cover"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminHome4;
